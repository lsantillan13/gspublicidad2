import { memo } from 'react'

const Preview = memo(({ sections }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border">
        <h2 className="text-2xl font-bold mb-6">Vista Previa</h2>
        <div className="space-y-8">
            {sections.map((section) => 
            <div
                key={section.id}
                className="p-6 bg-white rounded-lg shadow-sm"
                style={{ backgroundColor: section.bgColor}}
            >
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                
            {section.type === 'categories' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {section.content.map((cat) => (
                        <div key={cat.id} className="p-3 border rounded hover:bg-gray-50">
                            {cat.name}
                        </div>
                    ))}
                </div>
            )}

            {section.type === 'promo' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {section.content.map((item) => (
                        <div className="text-center p-4 border rounded-lg" key={item.id}>
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <button className="mt-3 text-sm text-blue-600">
                                {item.ctaText}
                            </button>
                        </div>
                    ))}
                </div>
            )}
            </div>
            )}
        </div>
    </div>
  )
})

export default Preview