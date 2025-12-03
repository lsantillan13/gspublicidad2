// ProductImage.jsx
import { useState, useRef, useEffect } from 'react';

const ProductImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  onLoad,
  onError,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer para lazy loading nativo
  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        rootMargin: '50px', // Carga 50px antes de entrar en viewport
        threshold: 0.1 
      }
    );

    observer.observe(imgRef.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  // Placeholder SVG optimizado
  const getPlaceholder = () => (
    <svg 
      width={width || "100%"} 
      height={height || "100%"} 
      viewBox="0 0 400 400" 
      className="absolute inset-0 text-gray-700/30"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100%" height="100%" fill="currentColor" />
      <path 
        d="M200 150L250 220H150L200 150Z" 
        fill="currentColor" 
        fillOpacity="0.3" 
      />
      <circle 
        cx="200" 
        cy="130" 
        r="20" 
        fill="currentColor" 
        fillOpacity="0.3" 
      />
    </svg>
  );

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width || '100%', 
        height: height || '100%',
        minWidth: width,
        minHeight: height
      }}
    >
      {/* Loading Spinner */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
            <span className="text-white/60 text-xs font-medium">Cargando...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 z-10">
          <div className="flex flex-col items-center gap-3 text-center p-4">
            <svg className="w-12 h-12 text-red-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="text-white/80 text-sm font-medium">Error al cargar la imagen</span>
            <button 
              onClick={() => {
                setError(false);
                setLoaded(false);
              }}
              className="text-blue-400 hover:text-blue-300 text-xs font-semibold mt-2"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}

      {/* Placeholder */}
      {!loaded && !error && getPlaceholder()}

      {/* Imagen Optimizada */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`
            w-full h-full object-cover transition-all duration-700
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${props.onClick ? 'cursor-pointer' : ''}
          `}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {/* Efecto de superposición para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  );
};

// Componente de caché para imágenes
export const CachedProductImage = ({ src, ...props }) => {
  const [cachedSrc, setCachedSrc] = useState(() => {
    // Intentar recuperar del sessionStorage
    try {
      return sessionStorage.getItem(`img_${src}`) || src;
    } catch {
      return src;
    }
  });

  const handleLoad = () => {
    // Guardar en caché después de cargar exitosamente
    try {
      sessionStorage.setItem(`img_${src}`, src);
    } catch (error) {
      console.warn('No se pudo guardar en caché la imagen:', error);
    }
  };

  return (
    <ProductImage
      src={cachedSrc}
      onLoad={handleLoad}
      {...props}
    />
  );
};

export default ProductImage;