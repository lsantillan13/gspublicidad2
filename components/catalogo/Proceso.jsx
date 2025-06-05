import React from 'react';

const PROCESS_STEPS = [
  {
    id: 1,
    number: "1",
    title: "Consulta",
    description: "Analizamos tus necesidades",
    showArrow: true
  },
  {
    id: 2,
    number: "2",
    title: "Diseño",
    description: "Creamos propuestas personalizadas",
    showArrow: true
  },
  {
    id: 3,
    number: "3",
    title: "Entrega",
    description: "Recibís tu producto terminado",
    showArrow: false
  }
];

function Proceso() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          CÓMO TRABAJAMOS
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Un proceso simple para resultados extraordinarios
        </p>
      </div>
      
      {/* Process steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {PROCESS_STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step card */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
            
            {/* Arrow (except after last step) */}
            {step.showArrow && (
              <div className="flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-gray-400 hidden md:block" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Proceso);