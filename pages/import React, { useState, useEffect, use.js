import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Geder from '../components/Geder';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Banner slides para productos
  const bannerSlides = [
    {
      id: 1,
      title: "Envío Gratis",
      subtitle: "En compras mayores a $50.000",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=400&fit=crop",
      bgGradient: "from-green-500/20 to-emerald-600/20"
    },
    {
      id: 2,
      title: "Garantía de Calidad",
      subtitle: "30 días de garantía en todos nuestros productos",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop",
      bgGradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      id: 3,
      title: "Personalización",
      subtitle: "Agrega tu logo a cualquier producto",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop",
      bgGradient: "from-purple-500/20 to-indigo-600/20"
    }
  ];

  // Fetch de todos los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gsnode.onrender.com/api/products');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setAllProducts(data);
        
        // Encontrar el producto actual por ID
        const currentProduct = data.find(p => p._id === id || p.id === id);
        if (currentProduct) {
          setProduct(currentProduct);
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  // Productos relacionados (misma categoría, excluyendo el actual)
  const relatedProducts = useMemo(() => {
    if (!product || !allProducts.length) return [];
    
    return allProducts
      .filter(p => 
        (p._id !== product._id && p.id !== product.id) && 
        p.category === product.category
      )
      .slice(0, 4);
  }, [product, allProducts]);

const productImages = useMemo(() => {
  if (!product) return [];
  
  let imagesArray = [];
  
  // Si hay images array y no está vacío
  if (product.images && product.images.length > 0) {
    // Manejar el caso donde images es un string con URLs separadas por comas
    if (typeof product.images[0] === 'string' && product.images[0].includes(',')) {
      imagesArray = product.images[0].split(',').map(url => url.trim()).filter(url => url);
    } else {
      imagesArray = product.images.filter(img => img && typeof img === 'string');
    }
  }
  // Si hay imageUrl individual
  else if (product.imageUrl) {
    imagesArray = [product.imageUrl];
  }
  // Fallback
  else {
    imagesArray = ['https://via.placeholder.com/600x600?text=Imagen+No+Disponible'];
  }
  
  console.log('Imágenes procesadas:', imagesArray); // Para debug
  return imagesArray;
}, [product]);

// Resetear selectedImage cuando cambian las imágenes
useEffect(() => {
  setSelectedImage(0);
}, [productImages]);

// Manejar clic en miniatura
const handleThumbnailClick = (index) => {
  setSelectedImage(index);
};
  // Manejo de cantidad
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Precio formateado - CORREGIDO para manejar null/undefined
  const formattedPrice = useMemo(() => {
    if (!product?.price) return 'Consultar';
    return `$${product.price}`;
  }, [product]);

  // Stock status - CORREGIDO
  const stockStatus = useMemo(() => {
    const stock = product?.stock || 0;
    if (stock > 10) return { text: 'En Stock', class: 'bg-green-100 text-green-800' };
    if (stock > 0) return { text: 'Últimas unidades', class: 'bg-orange-100 text-orange-800' };
    return { text: 'Sin Stock', class: 'bg-red-100 text-red-800' };
  }, [product]);

  // Descripción formateada - CORREGIDO para manejar saltos de línea
  const formattedDescription = useMemo(() => {
    if (!product?.description) return 'Producto de alta calidad con diseño exclusivo.';
    
    return product.description.split('\n').map((line, index) => (
      line.trim() ? <span key={index}>{line.trim()}<br /></span> : null
    ));
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {error || 'Producto no encontrado'}
          </h2>
          <p className="text-gray-600 mb-6">
            El producto que buscas no está disponible o no existe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Volver Atrás
            </button>
            <Link
              to="/ofertas"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (

    <section>
      <Geder/>
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Banner Hero */}
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detalle del Producto */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Navegación */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/ofertas" className="hover:text-blue-600 transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{product.name || 'Producto'}</span>
        </nav>

        {/* Grid de Producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            {/* Imagen Principal */}
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200">
              <img
                src={
                  selectedImage === 0
                    ? product.imageUrl
                    : product.images[selectedImage - 1]
                }
                alt={product.name || 'Producto'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=Imagen+No+Disponible';
                }}
              />
            </div>

            {/* Miniaturas */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {/* Miniatura principal */}
                <button
                  onClick={() => setSelectedImage(0)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === 0
                      ? 'border-blue-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={`${product.name || 'Producto'} principal`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=Imagen';
                    }}
                  />
                </button>
                {/* Miniaturas del array de imágenes */}
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index + 1)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index + 1
                        ? 'border-blue-500 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name || 'Producto'} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150x150?text=Imagen';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            {/* Categoría y Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              {product.category && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              )}
              {product.fatherCategory && (
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.fatherCategory}
                </span>
              )}
              {product.brand && (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              )}
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${stockStatus.class}`}>
                {stockStatus.text}
              </span>
            </div>

            {/* Nombre del Producto */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              {product.name || 'Producto sin nombre'}
            </h1>

            {/* Descripción */}
            <div className="text-lg text-gray-600 leading-relaxed">
              {formattedDescription}
            </div>

            {/* Precio */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">
                {formattedPrice}
              </span>
            </div>

            {/* SKU y Stock */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {product.sku && (
                <div>
                  <span className="text-gray-600">SKU:</span>
                  <span className="ml-2 text-gray-900 font-medium">{product.sku}</span>
                </div>
              )}
              <div>
                <span className="text-gray-600">Stock:</span>
                <span className="ml-2 text-gray-900 font-medium">{product.stock || 0} unidades</span>
              </div>
            </div>

            {/* Selector de Cantidad y CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Cantidad:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                    >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity >= (product.stock || 0)}
                    >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.stock || product.stock <= 0}
                  >
                  {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
                </button>
                <button 
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.stock || product.stock <= 0}
                  >
                  {product.stock > 0 ? 'Comprar Ahora' : 'No Disponible'}
                </button>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Envío gratis desde $50.000
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                30 días de garantía
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalización disponible
              </div>
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                Productos Relacionados
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre más productos de la misma categoría
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                key={relatedProduct._id || relatedProduct.id}
                to={`/producto/${relatedProduct._id || relatedProduct.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.imageUrl || relatedProduct.images?.[0] || 'https://via.placeholder.com/300x300?text=Imagen'}
                      alt={relatedProduct.name || 'Producto relacionado'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Imagen';
                      }}
                      />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 mb-2">
                      {relatedProduct.name || 'Producto'}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {relatedProduct.price ? `$${relatedProduct.price}` : 'Consultar'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  </section>
  );
};

export default ProductDetail;

---

import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Geder from '../components/Geder';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Banner slides para productos
  const bannerSlides = [
    {
      id: 1,
      title: "Envío Gratis",
      subtitle: "En compras mayores a $50.000",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=400&fit=crop",
      bgGradient: "from-green-500/20 to-emerald-600/20"
    },
    {
      id: 2,
      title: "Garantía de Calidad",
      subtitle: "30 días de garantía en todos nuestros productos",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop",
      bgGradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      id: 3,
      title: "Personalización",
      subtitle: "Agrega tu logo a cualquier producto",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop",
      bgGradient: "from-purple-500/20 to-indigo-600/20"
    }
  ];

  // Fetch de todos los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gsnode.onrender.com/api/products');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setAllProducts(data);
        
        // Encontrar el producto actual por ID
        const currentProduct = data.find(p => p._id === id || p.id === id);
        if (currentProduct) {
          setProduct(currentProduct);
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  // Productos relacionados (misma categoría, excluyendo el actual)
  const relatedProducts = useMemo(() => {
    if (!product || !allProducts.length) return [];
    
    return allProducts
      .filter(p => 
        (p._id !== product._id && p.id !== product.id) && 
        p.category === product.category
      )
      .slice(0, 4);
  }, [product, allProducts]);

const productImages = useMemo(() => {
  if (!product) return [];
  
  let imagesArray = [];
  
  // Si hay images array y no está vacío
  if (product.images && product.images.length > 0) {
    // Manejar el caso donde images es un string con URLs separadas por comas
    if (typeof product.images[0] === 'string' && product.images[0].includes(',')) {
      imagesArray = product.images[0].split(',').map(url => url.trim()).filter(url => url);
    } else {
      imagesArray = product.images.filter(img => img && typeof img === 'string');
    }
  }
  // Si hay imageUrl individual
  else if (product.imageUrl) {
    imagesArray = [product.imageUrl];
  }
  // Fallback
  else {
    imagesArray = ['https://via.placeholder.com/600x600?text=Imagen+No+Disponible'];
  }
  
  console.log('Imágenes procesadas:', imagesArray); // Para debug
  return imagesArray;
}, [product]);

// Resetear selectedImage cuando cambian las imágenes
useEffect(() => {
  setSelectedImage(0);
}, [productImages]);

// Manejar clic en miniatura
const handleThumbnailClick = (index) => {
  setSelectedImage(index);
};
  // Manejo de cantidad
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Precio formateado - CORREGIDO para manejar null/undefined
  const formattedPrice = useMemo(() => {
    if (!product?.price) return 'Consultar';
    return `$${product.price}`;
  }, [product]);

  // Stock status - CORREGIDO
  const stockStatus = useMemo(() => {
    const stock = product?.stock || 0;
    if (stock > 10) return { text: 'En Stock', class: 'bg-green-100 text-green-800' };
    if (stock > 0) return { text: 'Últimas unidades', class: 'bg-orange-100 text-orange-800' };
    return { text: 'Sin Stock', class: 'bg-red-100 text-red-800' };
  }, [product]);

  // Descripción formateada - CORREGIDO para manejar saltos de línea
  const formattedDescription = useMemo(() => {
    if (!product?.description) return 'Producto de alta calidad con diseño exclusivo.';
    
    return product.description.split('\n').map((line, index) => (
      line.trim() ? <span key={index}>{line.trim()}<br /></span> : null
    ));
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {error || 'Producto no encontrado'}
          </h2>
          <p className="text-gray-600 mb-6">
            El producto que buscas no está disponible o no existe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Volver Atrás
            </button>
            <Link
              to="/ofertas"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (

    <section>
      <Geder/>
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Banner Hero */}
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detalle del Producto */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Navegación */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/ofertas" className="hover:text-blue-600 transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{product.name || 'Producto'}</span>
        </nav>

        {/* Grid de Producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            {/* Imagen Principal */}
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200">
              <img
                src={selectedImage === 0 ? product.imageUrl : product.images[selectedImage - 1]}
                alt={product.name || 'Producto'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=Imagen+No+Disponible';
                }}
              />
            </div>

            {/* Miniaturas */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {/* Miniatura principal */}
                <button
                  onClick={() => setSelectedImage(0)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === 0
                      ? 'border-blue-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={`${product.name || 'Producto'} principal`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=Imagen';
                    }}
                  />
                </button>
                {/* Miniaturas del array de imágenes */}
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index + 1)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index + 1
                        ? 'border-blue-500 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name || 'Producto'} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150x150?text=Imagen';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            {/* Categoría y Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              {product.category && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              )}
              {product.fatherCategory && (
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.fatherCategory}
                </span>
              )}
              {product.brand && (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              )}
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${stockStatus.class}`}>
                {stockStatus.text}
              </span>
            </div>

            {/* Nombre del Producto */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              {product.name || 'Producto sin nombre'}
            </h1>

            {/* Descripción */}
            <div className="text-lg text-gray-600 leading-relaxed">
              {formattedDescription}
            </div>

            {/* Precio */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">
                {formattedPrice}
              </span>
            </div>

            {/* SKU y Stock */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {product.sku && (
                <div>
                  <span className="text-gray-600">SKU:</span>
                  <span className="ml-2 text-gray-900 font-medium">{product.sku}</span>
                </div>
              )}
              <div>
                <span className="text-gray-600">Stock:</span>
                <span className="ml-2 text-gray-900 font-medium">{product.stock || 0} unidades</span>
              </div>
            </div>

            {/* Selector de Cantidad y CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Cantidad:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                    >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity >= (product.stock || 0)}
                    >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.stock || product.stock <= 0}
                  >
                  {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
                </button>
                <button 
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.stock || product.stock <= 0}
                  >
                  {product.stock > 0 ? 'Comprar Ahora' : 'No Disponible'}
                </button>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Envío gratis desde $50.000
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                30 días de garantía
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalización disponible
              </div>
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                Productos Relacionados
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre más productos de la misma categoría
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                key={relatedProduct._id || relatedProduct.id}
                to={`/producto/${relatedProduct._id || relatedProduct.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.imageUrl || relatedProduct.images?.[0] || 'https://via.placeholder.com/300x300?text=Imagen'}
                      alt={relatedProduct.name || 'Producto relacionado'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Imagen';
                      }}
                      />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 mb-2">
                      {relatedProduct.name || 'Producto'}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {relatedProduct.price ? `$${relatedProduct.price}` : 'Consultar'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  </section>
  );
};

export default ProductDetail;

--- 

import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Geder from '../components/Geder';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Banner slides para productos
  const bannerSlides = [
    {
      id: 1,
      title: "Envío Gratis",
      subtitle: "En compras mayores a $50.000",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=400&fit=crop",
      bgGradient: "from-green-500/20 to-emerald-600/20"
    },
    {
      id: 2,
      title: "Garantía de Calidad",
      subtitle: "30 días de garantía en todos nuestros productos",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop",
      bgGradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      id: 3,
      title: "Personalización",
      subtitle: "Agrega tu logo a cualquier producto",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop",
      bgGradient: "from-purple-500/20 to-indigo-600/20"
    }
  ];

  // Fetch de todos los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gsnode.onrender.com/api/products');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setAllProducts(data);
        
        // Encontrar el producto actual por ID
        const currentProduct = data.find(p => p._id === id || p.id === id);
        if (currentProduct) {
          setProduct(currentProduct);
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  // Productos relacionados (misma categoría, excluyendo el actual)
  const relatedProducts = useMemo(() => {
    if (!product || !allProducts.length) return [];
    
    return allProducts
      .filter(p => 
        (p._id !== product._id && p.id !== product.id) && 
        p.category === product.category
      )
      .slice(0, 4);
  }, [product, allProducts]);

const productImages = useMemo(() => {
  if (!product) return [];
  
  let imagesArray = [];
  
  // Si hay images array y no está vacío
  if (product.images && product.images.length > 0) {
    // Manejar el caso donde images es un string con URLs separadas por comas
    if (typeof product.images[0] === 'string' && product.images[0].includes(',')) {
      imagesArray = product.images[0].split(',').map(url => url.trim()).filter(url => url);
    } else {
      imagesArray = product.images.filter(img => img && typeof img === 'string');
    }
  }
  // Si hay imageUrl individual
  else if (product.imageUrl) {
    imagesArray = [product.imageUrl];
  }
  // Fallback
  else {
    imagesArray = ['https://via.placeholder.com/600x600?text=Imagen+No+Disponible'];
  }
  
  console.log('Imágenes procesadas:', imagesArray); // Para debug
  return imagesArray;
}, [product]);

// Resetear selectedImage cuando cambian las imágenes
useEffect(() => {
  setSelectedImage(0);
}, [productImages]);

// Manejar clic en miniatura
const handleThumbnailClick = (index) => {
  setSelectedImage(index);
};
  // Manejo de cantidad
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  // Precio formateado - CORREGIDO para manejar null/undefined
  const formattedPrice = useMemo(() => {
    if (!product?.price) return 'Consultar';
    return `$${product.price}`;
  }, [product]);

  // Stock status - CORREGIDO
  const stockStatus = useMemo(() => {
    const stock = product?.stock || 0;
    if (stock > 10) return { text: 'En Stock', class: 'bg-green-100 text-green-800' };
    if (stock > 0) return { text: 'Últimas unidades', class: 'bg-orange-100 text-orange-800' };
    return { text: 'Sin Stock', class: 'bg-red-100 text-red-800' };
  }, [product]);

  // Descripción formateada - CORREGIDO para manejar saltos de línea
  const formattedDescription = useMemo(() => {
    if (!product?.description) return 'Producto de alta calidad con diseño exclusivo.';
    
    return product.description.split('\n').map((line, index) => (
      line.trim() ? <span key={index}>{line.trim()}<br /></span> : null
    ));
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {error || 'Producto no encontrado'}
          </h2>
          <p className="text-gray-600 mb-6">
            El producto que buscas no está disponible o no existe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Volver Atrás
            </button>
            <Link
              to="/ofertas"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (

    <section>
      <Geder/>
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Banner Hero */}
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detalle del Producto */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Navegación */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/ofertas" className="hover:text-blue-600 transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{product.name || 'Producto'}</span>
        </nav>

        {/* Grid de Producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            {/* Imagen Principal */}
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200">
              <img
                src={product.imageUrl || productImages[selectedImage]}
                alt={product.name || 'Producto'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x600?text=Imagen+No+Disponible';
                }}
              />
            </div>

            {/* Miniaturas */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name || 'Producto'} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150x150?text=Imagen';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            {/* Categoría y Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              {product.category && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              )}
              {product.fatherCategory && (
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.fatherCategory}
                </span>
              )}
              {product.brand && (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              )}
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${stockStatus.class}`}>
                {stockStatus.text}
              </span>
            </div>

            {/* Nombre del Producto */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              {product.name || 'Producto sin nombre'}
            </h1>

            {/* Descripción */}
            <div className="text-lg text-gray-600 leading-relaxed">
              {formattedDescription}
            </div>

            {/* Precio */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">
                {formattedPrice}
              </span>
            </div>

            {/* SKU y Stock */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {product.sku && (
                <div>
                  <span className="text-gray-600">SKU:</span>
                  <span className="ml-2 text-gray-900 font-medium">{product.sku}</span>
                </div>
              )}
              <div>
                <span className="text-gray-600">Stock:</span>
                <span className="ml-2 text-gray-900 font-medium">{product.stock || 0} unidades</span>
              </div>
            </div>

            {/* Selector de Cantidad y CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Cantidad:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                    >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity >= (product.stock || 0)}
                    >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.stock || product.stock <= 0}
                  >
                  {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
                </button>
                <button 
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.stock || product.stock <= 0}
                  >
                  {product.stock > 0 ? 'Comprar Ahora' : 'No Disponible'}
                </button>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Envío gratis desde $50.000
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                30 días de garantía
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalización disponible
              </div>
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                Productos Relacionados
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre más productos de la misma categoría
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                key={relatedProduct._id || relatedProduct.id}
                to={`/producto/${relatedProduct._id || relatedProduct.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.imageUrl || relatedProduct.images?.[0] || 'https://via.placeholder.com/300x300?text=Imagen'}
                      alt={relatedProduct.name || 'Producto relacionado'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Imagen';
                      }}
                      />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 mb-2">
                      {relatedProduct.name || 'Producto'}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {relatedProduct.price ? `$${relatedProduct.price}` : 'Consultar'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  </section>
  );
};

export default ProductDetail;

---