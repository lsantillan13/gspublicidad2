import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTags,
  faPlus,
  faArrowsAlt,
  faTrashAlt,
  faEdit,
  faExpand,
  faSave,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useSortable, arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Tipos de secciones disponibles
const SECTION_TYPES = [
  { value: 'Hero Slider', label: 'Hero Slider' },
  { value: 'Bloque promocional', label: 'Bloque promocional' },
  { value: 'Product Grid', label: 'Cuadrícula de Productos' },
  { value: 'Featured Brands', label: 'Marcas Destacadas' },
  { value: 'Newsletter', label: 'Formulario de Newsletter' }
];




// Componente para los ítems ordenables
const SortableItem = ({ 
  id, 
  name, 
  type, 
  getTypeBadgeClass, 
  handleRemoveSection, 
  handleRenameSectionClick 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 100 : 'auto'
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center justify-between cursor-grab hover:shadow-xl transition-all"
      aria-describedby={`section-${id}-description`}
    >
      <div className="flex items-center flex-grow min-w-0">
        <button
          {...attributes}
          {...listeners}
          className="mr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label={`Mover sección ${name}`}
        >
          <FontAwesomeIcon icon={faArrowsAlt} className="text-lg" />
        </button>
        <div className="min-w-0">
          <p className="font-semibold text-gray-800 truncate">{name}</p>
          {/* <p id={`section-${id}-description`} className="text-xs text-gray-500 truncate">
            ID: {id}
          </p> */}
        </div>
        <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeBadgeClass(type)}`}>
          {type}
        </span>
      </div>
      <div className="flex space-x-3 ml-4">
        <button
          onClick={() => handleRenameSectionClick(id, name)}
          className="text-blue-500 hover:text-blue-600 focus:outline-none transition-colors p-1"
          title="Renombrar"
          aria-label={`Renombrar sección ${name}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          onClick={() => handleRemoveSection(id)}
          className="text-red-500 hover:text-red-600 focus:outline-none transition-colors p-1"
          title="Eliminar"
          aria-label={`Eliminar sección ${name}`}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </li>
  );
};

// Componente Modal reutilizable
const Modal = ({ 
  title, 
  onClose, 
  onSubmit, 
  submitText = 'Guardar', 
  cancelText = 'Cancelar', 
  children 
}) => (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 id="modal-title" className="text-xl font-bold text-gray-800">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Cerrar modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {children}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          {cancelText}
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {submitText}
        </button>
      </div>
    </div>
  </div>
);

// Componente principal del Dashboard
const AdminDashboard = () => {
  const [currentSections, setCurrentSections] = useState([]);
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [isEditingSection, setIsEditingSection] = useState(false);
  const [editedSection, setEditedSection] = useState(null);
  const [newSectionType, setNewSectionType] = useState('');
  const [newSectionName, setNewSectionName] = useState('');
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configuración de sensores para DnD
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Cargar secciones desde localStorage
  const loadSections = useCallback(() => {
    try {
      setIsLoading(true);
      const savedSections = localStorage.getItem('sections');
      if (savedSections) {
        setCurrentSections(JSON.parse(savedSections));
      } else {
        // Valores predeterminados
        const defaultSections = [
          { id: 'section-1', name: 'Sección de Cabecera Hero', type: 'Hero Slider' },
          { id: 'section-2', name: 'Bloque de Promociones Destacadas', type: 'Bloque promocional' },
        ];
        setCurrentSections(defaultSections);
        localStorage.setItem('sections', JSON.stringify(defaultSections));
      }
    } catch (err) {
      setError('Error al cargar las secciones');
      console.error('Error loading sections:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSections();
  }, [loadSections]);

  // Guardar secciones en localStorage
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('sections', JSON.stringify(currentSections));
      } catch (err) {
        setError('Error al guardar las secciones');
        console.error('Error saving sections:', err);
      }
    }
  }, [currentSections, isLoading]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = currentSections.findIndex((section) => section.id === active.id);
      const newIndex = currentSections.findIndex((section) => section.id === over?.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        setCurrentSections(arrayMove(currentSections, oldIndex, newIndex));
        setIsModified(true);
      }
    }
  };

  const handleAddSection = () => {
    if (!newSectionType || !newSectionName) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const newId = `section-${Date.now()}`;
    setCurrentSections([
      ...currentSections,
      { id: newId, name: newSectionName.trim(), type: newSectionType }
    ]);
    resetForm();
    setIsModified(true);
  };

  const handleRemoveSection = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar esta sección?')) {
      setCurrentSections(currentSections.filter((section) => section.id !== id));
      setIsModified(true);
    }
  };

  const handleRenameSection = () => {
    if (!editedSection?.name.trim()) {
      alert('El nombre no puede estar vacío');
      return;
    }

    setCurrentSections(
      currentSections.map((section) =>
        section.id === editedSection.id
          ? { ...section, name: editedSection.name.trim() }
          : section
      )
    );
    setIsEditingSection(false);
    setEditedSection(null);
    setIsModified(true);
  };

  const handleSaveChanges = () => {
    // Aquí podrías añadir lógica para guardar en un backend
    setIsModified(false);
    alert('Cambios guardados exitosamente');
  };

  const resetForm = () => {
    setIsAddingSection(false);
    setNewSectionType('');
    setNewSectionName('');
  };

  const getTypeBadgeClass = (type) => {
    const typeClasses = {
      'Hero Slider': 'bg-indigo-100 text-indigo-600',
      'Bloque promocional': 'bg-green-100 text-green-600',
      'Product Grid': 'bg-purple-100 text-purple-600',
      'Featured Brands': 'bg-yellow-100 text-yellow-600',
      'Newsletter': 'bg-blue-100 text-blue-600'
    };
    return typeClasses[type] || 'bg-gray-100 text-gray-600';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando configuración...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={loadSections}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-64 py-6 px-4 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-6 tracking-wide">GS Admin</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button className="flex items-center w-full px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-800 transition">
                <FontAwesomeIcon icon={faHome} className="mr-3 text-lg" />
                <span className="font-medium">Home</span>
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-800 transition">
                <FontAwesomeIcon icon={faTags} className="mr-3 text-lg" />
                <span className="font-medium">Categorías</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="px-8 md:text-4xl font-bold text-gray-800">Administración de Home</h1>
              <p className="text-gray-600 text-sm">
                {currentSections.length} secciones configuradas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {isModified && (
                <button
                  onClick={handleSaveChanges}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                >
                  <FontAwesomeIcon icon={faSave} />
                  <span>Guardar Cambios</span>
                </button>
              )}
              <button
                onClick={() => setIsAddingSection(true)}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Nueva Sección</span>
              </button>
            </div>
          </header>

          {currentSections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No hay secciones configuradas</p>
              <button
                onClick={() => setIsAddingSection(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Crear primera sección
              </button>
            </div>
          ) : (
            <DndContext 
              sensors={sensors}
              collisionDetection={closestCenter} 
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={currentSections.map(section => section.id)}>
                <ul className="space-y-4">
                  {currentSections.map((section) => (
                    <SortableItem
                      key={section.id}
                      id={section.id}
                      name={section.name}
                      type={section.type}
                      getTypeBadgeClass={getTypeBadgeClass}
                      handleRemoveSection={handleRemoveSection}
                      handleRenameSectionClick={(id, name) => {
                        setEditedSection({ id, name });
                        setIsEditingSection(true);
                      }}
                    />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          )}
        </div>
      </main>

      {/* Modal para añadir sección */}
      {isAddingSection && (
        <Modal
          title="Nueva Sección"
          onClose={resetForm}
          onSubmit={handleAddSection}
          submitText="Añadir"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="section-name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de la sección
              </label>
              <input
                id="section-name"
                type="text"
                placeholder="Ej: Banner principal"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="section-type" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de sección
              </label>
              <select
                id="section-type"
                value={newSectionType}
                onChange={(e) => setNewSectionType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Selecciona un tipo</option>
                {SECTION_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal para renombrar sección */}
      {isEditingSection && (
        <Modal
          title="Renombrar Sección"
          onClose={() => setIsEditingSection(false)}
          onSubmit={handleRenameSection}
        >
          <div>
            <label htmlFor="edit-section-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nuevo nombre
            </label>
            <input
              id="edit-section-name"
              type="text"
              value={editedSection?.name || ''}
              onChange={(e) =>
                setEditedSection({ ...editedSection, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              autoFocus
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;