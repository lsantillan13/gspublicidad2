// pages/AdminPage.jsx
import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Preview from '../components/Preview';

const initialSections = [
  {
    id: 'sec1',
    type: 'categories',
    title: 'Principales Categorías',
    bgColor: '#ffffff',
    content: [
      { id: 'cat1', name: 'Vuelta al Cole' },
      { id: 'cat2', name: 'Aire Libre' }
    ]
  },
  {
    id: 'sec2',
    type: 'promo',
    title: 'Equipamiento Industrial',
    bgColor: '#f8fafc',
    content: [
      { id: 'p1', icon: '👞', title: 'CALZADOS', description: 'Calzados de seguridad', ctaText: 'Ver producto' }
    ]
  }
];

export default function AdminPage() {
  const [sections, setSections] = useState(initialSections);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
        <Dashboard sections={sections} setSections={setSections} />
      </div>
      <div>
        <Preview sections={sections} />
      </div>
    </div>
  );
}