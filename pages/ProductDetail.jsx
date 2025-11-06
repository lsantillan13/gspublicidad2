import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useSearchParams} from 'react-router-dom';
import { 
  Star, 
  Shield, 
  Truck, 
  ArrowLeft, 
  Heart, 
  Share2, 
  Check, 
  Plus, 
  Minus,
  ShoppingCart,
  RotateCcw,
  Calendar,
  Zap,
  Palette,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [fetchedProducts, setFetchedProducts] = useState([]);

  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');

  // Mock product data - replace with your API call
  const productData = {
    1: {
      id: 1,
      name: 'Mameluco Industrial Premium',
      description: 'Resistente gabardina con refuerzos estratégicos, diseñado específicamente para el sector petrolero y industrial. Material ignífugo con costuras reforzadas para máxima durabilidad y seguridad.',
      longDescription: `El Mameluco Industrial Premium está diseñado para ofrecer la máxima protección y comodidad en entornos industriales exigentes. Fabricado con gabardina de alta densidad y refuerzos estratégicos en áreas de mayor desgaste.

Características principales:
• Material ignífugo certificado
• Costuras reforzadas triple puntada
• Bolsillos especializados para herramientas
• Refuerzos en rodillas y codos
• Cierre frontal con protección contra chispas
• Material transpirable y resistente a líquidos

Ideal para:
- Sector petrolero y gasífero
- Industria manufacturera
- Construcción pesada
- Mantenimiento industrial`,
      category: 'Indumentaria',
      images: [
        'https://i.postimg.cc/7ZpLzJ5h/image.png',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$89.99',
      originalPrice: '$109.99',
      featured: true,
      premium: true,
      colors: [
        { name: 'Azul Industrial', value: '#1E3A8A', inStock: true },
        { name: 'Gris Carbón', value: '#111827', inStock: true },
        { name: 'Verde Seguridad', value: '#065F46', inStock: false },
        { name: 'Naranja Alta Visibilidad', value: '#EA580C', inStock: true }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      features: [
        'Material ignífugo certificado',
        'Costuras reforzadas triple puntada',
        'Bolsillos especializados',
        'Refuerzos en rodillas y codos',
        'Material transpirable'
      ],
      specifications: {
        'Material': 'Gabardina industrial 320gsm',
        'Color': 'Multiple opciones',
        'Tallas': 'XS - 3XL',
        'Peso': '1.2kg',
        'Lavado': 'Industrial hasta 80°C',
        'Certificaciones': 'ISO 11612, EN 1149'
      },
      inStock: true,
      stockQuantity: 15,
      rating: 4.8,
      reviewCount: 127,
      tags: ['industrial', 'premium', 'seguridad', 'ignifugo'],
      sku: 'MAM-INDU-001',
      brand: 'IndustrialPro'
    },
    2: {
      id: 2,
      name: 'Campera Trucker Ejecutiva',
      description: 'Jean wash premium con cierre metálico de alta calidad y detalles en cuero genuino. Ideal para branding corporativo y eventos ejecutivos.',
      longDescription: `La Campera Trucker Ejecutiva combina estilo clásico con calidad premium. Confeccionada en denim de alta calidad y detalles en cuero genuino, perfecta para el uso corporativo y casual.

Características exclusivas:
• Denim premium de 12 oz
• Cierre metálico YKK de alta durabilidad
• Detalles en cuero genuino
• Forro interior de satén
• Bolsillos interiores especializados
• Cuello y puños reforzados

Perfecta para:
- Eventos corporativos
- Uso diario ejecutivo
- Regalos empresariales
- Branding de marca`,
      category: 'Indumentaria',
      images: [
        'https://i.postimg.cc/XqfRvGLH/70a49122-e1eb-4a13-bebc-597f893d9f35.jpg',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$129.99',
      originalPrice: '$159.99',
      featured: true,
      colors: [
        { name: 'Azul Denim', value: '#2563EB', inStock: true },
        { name: 'Negro Clásico', value: '#000000', inStock: true },
        { name: 'Gris Oscuro', value: '#374151', inStock: true }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Denim premium 12oz',
        'Cierre YKK metálico',
        'Detalles en cuero genuino',
        'Forro de satén',
        'Bolsillos especializados'
      ],
      inStock: true,
      stockQuantity: 8,
      rating: 4.6,
      reviewCount: 89,
      sku: 'CAM-TRK-002',
      brand: 'ExecutiveWear'
    }
  };

  const relatedProducts = [
    {
      id: 3,
      name: 'Pantalón Táctico Profesional',
      description: 'Ripstop de alta densidad con múltiples bolsillos especializados.',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '$67.50',
      category: 'Indumentaria',
      rating: 4.4
    },
    {
      id: 4,
      name: 'Chaleco de Seguridad',
      description: 'Chaleco reflectante para alta visibilidad en entornos industriales.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '$45.99',
      category: 'Indumentaria',
      rating: 4.2
    },
    {
      id: 5,
      name: 'Botas de Seguridad',
      description: 'Botas industriales con punta de acero y suela antideslizante.',
      image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '$89.99',
      category: 'Calzado',
      rating: 4.7
    },
    {
      id: 6,
      name: 'Guantes de Protección',
      description: 'Guantes resistentes a cortes y abrasiones para trabajo industrial.',
      image: 'https://images.unsplash.com/photo-1584670747293-808f34475a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      price: '$34.99',
      category: 'Seguridad',
      rating: 4.5
    }
  ];

  useEffect(() => {
    fetch('https://gsnode.onrender.com/api/products')
      .then(response => response.json())
      .then(data => setFetchedProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);



  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        const foundProduct = fetchedProducts._id === id;
        setProduct(foundProduct);
        if (foundProduct?.colors?.length) {
          setSelectedColor(foundProduct.colors[0].name);
        }
        if (foundProduct?.sizes?.length) {
          setSelectedSize(foundProduct.sizes[0]);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageHover = (e, imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const handleImageZoom = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, product.stockQuantity));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { product, color: selectedColor, size: selectedSize, quantity });
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log('Buy now:', { product, color: selectedColor, size: selectedSize, quantity });
  };

  if (loading) {
    return (
      <>
        <Geder />
        <div className="min-h-screen bg-gray-50 pt-44">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="h-96 bg-gray-300 rounded-xl"></div>
                  <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-20 bg-gray-300 rounded-lg flex-1"></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-12 bg-gray-300 rounded w-1/3"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <section className="h-screen bg-red-500">
        <Geder />
      <section className="py-60 bg-gray-200 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center h-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
            <Link to="/productos" className="text-blue-600 hover:text-blue-800">
              Volver a la tienda
            </Link>
        </div>
      </section>
        <Footer />
      </section>
    );
  }

  return (
    <>
      <Geder />
      
      <div className="min-h-screen bg-gray-50 pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 pt-1 text-sm text-black mb-8">
            <Link to="/" className="hover:text-blue-600">Inicio</Link>
            <span>›</span>
            <Link to="/productos" className="hover:text-blue-600">Productos</Link>
            <span>›</span>
            <Link to={`/productos?category=${product.category}`} className="hover:text-blue-600">
              {product.category}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div 
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleImageZoom}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                
                {/* Zoom Overlay */}
                <AnimatePresence>
                  {showZoom && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none overflow-hidden"
                    >
                      <div
                        className="absolute w-64 h-64 bg-cover border-2 border-white shadow-lg"
                        style={{
                          backgroundImage: `url(${product.images[selectedImage]})`,
                          backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          backgroundSize: '200%',
                          left: `calc(${zoomPosition.x}% - 128px)`,
                          top: `calc(${zoomPosition.y}% - 128px)`,
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {product.images.length}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.featured && (
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Destacado
                    </span>
                  )}
                  {product.premium && (
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      Premium
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      Agotado
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    onMouseEnter={() => handleImageHover(null, index)}
                    className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(product.rating) 
                          ? "text-amber-400 fill-amber-400" 
                          : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviewCount} reseñas)
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-green-600 font-medium">En stock</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-600">SKU: {product.sku}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                      {Math.round((1 - parseFloat(product.price.replace('$', '')) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Color: <span className="text-gray-600">{selectedColor}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      disabled={!color.inStock}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color.name 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      } ${!color.inStock ? 'opacity-40 cursor-not-allowed' : ''}`}
                      style={{ backgroundColor: color.value }}
                      title={`${color.name}${!color.inStock ? ' - Agotado' : ''}`}
                    >
                      {selectedColor === color.name && (
                        <Check size={16} className="text-white absolute inset-0 m-auto" />
                      )}
                      {!color.inStock && (
                        <div className="absolute inset-0 bg-gray-400 rotate-45 m-2"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Talla: <span className="text-gray-600">{selectedSize}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-900">Cantidad:</span>
                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-30"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stockQuantity}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-30"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.stockQuantity} disponibles
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={20} />
                    Agregar al Carrito
                  </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
                  >
                    <Zap size={20} />
                    Comprar Ahora
                  </button>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`flex-1 py-3 px-6 border rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      isWishlisted
                        ? 'border-red-300 bg-red-50 text-red-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Heart size={18} className={isWishlisted ? 'fill-red-500' : ''} />
                    {isWishlisted ? 'En Wishlist' : 'Agregar a Wishlist'}
                  </button>
                  <button className="flex-1 py-3 px-6 border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 transition-all flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Compartir
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-gray-900">Características principales:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                <div className="text-center">
                  <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Envío Gratis</p>
                  <p className="text-xs text-gray-500">En órdenes +$100</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Devoluciones</p>
                  <p className="text-xs text-gray-500">30 días garantía</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Garantía</p>
                  <p className="text-xs text-gray-500">2 años</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Descripción' },
                  { id: 'specifications', label: 'Especificaciones' },
                  { id: 'reviews', label: `Reseñas (${product.reviewCount})` },
                  { id: 'shipping', label: 'Envío' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'description' && (
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {product.longDescription}
                      </p>
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                          <span className="font-medium text-gray-900">{key}</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-6">
                      <div className="text-center py-8">
                        <Star className="w-12 h-12 text-amber-400 fill-amber-400 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">{product.rating}</div>
                        <div className="text-gray-600">Basado en {product.reviewCount} reseñas</div>
                      </div>
                      {/* Add review components here */}
                    </div>
                  )}

                  {activeTab === 'shipping' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                        <Truck className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">Envío estándar gratis</p>
                          <p className="text-sm text-gray-600">Recibe en 3-5 días hábiles</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <Zap className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Envío express</p>
                          <p className="text-sm text-gray-600">Recibe en 24 horas - $15.00</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Related Products */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/producto/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">{relatedProduct.price}</span>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;