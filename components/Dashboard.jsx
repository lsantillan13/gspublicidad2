import { useDroppable, useDraggable, DndContext, closestCenter } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

const DraggableSection = ({ section, index, onEdit }) => {
    if (!section?.id) return null;

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: section.id,
        data: { index }
    });

    const style = transform ? {
        transform: `translateY(${transform.y}px)`,
        zIndex: 10
    } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-lg shadow mb-4 p-4 border relative"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            {...attributes}
            {...listeners}
            className="mr-3 text-gray-400 hover:text-gray-600 cursor-grab"
          >
            ☰
          </button>
          <h3 className="font-medium">{section.title}</h3>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(section)} className="text-blue-500">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard({ sections, setSections }) {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    // Añade estas validaciones
    if (!over || !active || !active.id || !over.id) return;
    if (active.id === over.id) return;
  
    setSections(prev => {
      const oldIndex = prev.findIndex(s => s.id === active.id);
      const newIndex = prev.findIndex(s => s.id === over.id);
      
      // Validación adicional
      if (oldIndex === -1 || newIndex === -1) return prev;
      
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
      collisionDetection={closestCenter}
    >
      <div ref={setNodeRef} className="space-y-4 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold">Organizador de Secciones</h2>
        
        {sections.map((section, index) => (
          <DraggableSection 
            key={section.id} 
            section={section} 
            index={index}
            onEdit={(section) => console.log('Editar:', section)}
          />
        ))}
      </div>
    </DndContext>
  );
}