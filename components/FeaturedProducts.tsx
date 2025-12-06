'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './FeaturedProducts.module.css'

interface Product {
  id: number
  name: string
  price: string
  priceValue: number
  description: string
}

interface CartItem extends Product {
  cartId: string
  quantity: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Duck Plush Toy',
    price: '25 JOD',
    priceValue: 25,
    description: 'Ultra soft, huggable G.Duck plushie. The perfect companion for adventures or naps.'
  },
  {
    id: 2,
    name: 'Duck Cap Collection',
    price: '15 JOD',
    priceValue: 15,
    description: 'Stylish caps featuring the iconic G.Duck logo. Available in Yellow and Black.'
  },
  {
    id: 3,
    name: 'Duck Backpack',
    price: '35 JOD',
    priceValue: 35,
    description: 'Durable and fun backpack for school or travel. Spacious compartments for all your treasures.'
  },
  {
    id: 4,
    name: 'Duck Water Bottle',
    price: '12 JOD',
    priceValue: 12,
    description: 'Keep hydrated with style! eco-friendly material and leak-proof design.'
  },
  {
    id: 5,
    name: 'Duck Stickers Pack',
    price: '8 JOD',
    priceValue: 8,
    description: '50+ unique waterproof stickers to customize your laptop, phone, or notebook.'
  },
  {
    id: 6,
    name: 'Duck Puzzle',
    price: '20 JOD',
    priceValue: 20,
    description: '500-piece puzzle featuring the G.Duck family. Fun for the whole family!'
  },
]

export default function FeaturedProducts() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)

  // Reset quantity when changing product
  useEffect(() => {
    setQuantity(1)
  }, [selectedProduct])

  const addToCart = (product: Product, qty: number, e?: React.MouseEvent) => {
    e?.stopPropagation()

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      }
      return [...prev, { ...product, quantity: qty, cartId: Math.random().toString() }]
    })

    // Animate logic or toast here?
    setIsCartOpen(true)
    setSelectedProduct(null)
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const total = cart.reduce((acc, item) => acc + (item.priceValue * item.quantity), 0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section id="products" ref={sectionRef} className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          🛍️ Featured Products
        </motion.h2>

        <div className={styles.carousel}>
          <motion.div
            className={styles.productsGrid}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className={styles.productCard}
                variants={itemVariants}
                onClick={() => setSelectedProduct(product)}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  zIndex: 10,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Brand Badge */}
                <div className={styles.brandBadge}>
                  <img src="/images/g-duck-logo.jpg" alt="Logo" />
                </div>

                <div className={styles.imageContainer}>
                  <img
                    src="/images/g-duck-logo.jpg"
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
                <div className={styles.addToCart}>
                  <span>View Details</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cart Trigger Button */}
      {cart.length > 0 && (
        <motion.button
          className={styles.cartTrigger}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCartOpen(true)}
        >
          🛒
          <div className={styles.cartCount}>{cart.reduce((a, b) => a + b.quantity, 0)}</div>
        </motion.button>
      )}

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setSelectedProduct(null)}>×</button>

              <div className={styles.modalGrid}>
                <div className={styles.modalImageContainer}>
                  <img
                    src="/images/g-duck-logo.jpg"
                    alt={selectedProduct.name}
                    className={styles.modalImage}
                  />
                </div>

                <div className={styles.modalDetails}>
                  <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                  <p className={styles.modalPrice}>{selectedProduct.price}</p>
                  <p className={styles.modalDescription}>{selectedProduct.description}</p>

                  <div className={styles.quantitySelector}>
                    <button
                      className={styles.qtyButton}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >-</button>
                    <span className={styles.qtyValue}>{quantity}</span>
                    <button
                      className={styles.qtyButton}
                      onClick={() => setQuantity(quantity + 1)}
                    >+</button>
                  </div>

                  <button
                    className={styles.addToCart}
                    onClick={() => addToCart(selectedProduct, quantity)}
                  >
                    <span>Add to Cart - {(selectedProduct.priceValue * quantity).toFixed(2)} JOD</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              style={{ zIndex: 9999 }}
            />
            <motion.div
              className={styles.cartSidebar}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className={styles.cartHeader}>
                <h2>Your Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}
                >
                  ×
                </button>
              </div>

              <div className={styles.cartItems}>
                {cart.length === 0 ? (
                  <p style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>Your cart is empty!</p>
                ) : (
                  cart.map(item => (
                    <div key={item.cartId} className={styles.cartItem}>
                      <div className={styles.cartItemInfo}>
                        <h4 className={styles.cartItemTitle}>{item.name}</h4>
                        <p>{item.quantity} x {item.priceValue} JOD</p>
                      </div>
                      <button
                        style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.cartTotal}>
                  <span>Total</span>
                  <span>{total.toFixed(2)} JOD</span>
                </div>
                <button
                  className={styles.checkoutButton}
                  onClick={() => {
                    alert('Thank you for your order! 🦆✨ This is a demo checkout.')
                    setCart([])
                    setIsCartOpen(false)
                  }}
                  disabled={cart.length === 0}
                  style={{ opacity: cart.length === 0 ? 0.5 : 1 }}
                >
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
