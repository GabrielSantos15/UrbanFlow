import { createContext, useContext, useState } from "react"

const CartUIContext = createContext()

export const CartUIProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen(prev => !prev)

  return (
    <CartUIContext.Provider value={{
      isOpen,
      openCart,
      closeCart,
      toggleCart
    }}>
      {children}
    </CartUIContext.Provider>
  )
}

export const useCartUI = () => useContext(CartUIContext)
