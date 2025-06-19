import react, { createContext, useEffect, useState } from "react";
export const Cartcontext = createContext();

export const Cartcontextprovider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addtocart = (product) => {
    setCart((prevcart) => {
      const productfound = prevcart.find((item) => item.id === product.id);
      if (productfound) {
        return prevcart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevcart, { ...product, quantity: 1 }];
    });
  };

  const removefromcart = (productid) => {
    setCart((prevcart) => prevcart.filter((item) => item.id !== productid));
  };

  const updatequantity = (productid, newquantity) => {
    if (newquantity < 1) return;

    setCart((prevcart) => {
      return prevcart.map((item) =>
        item.id === productid ? { ...item, newquantity } : item
      );
    });
  };

  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalprice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Cartcontext.Provider
      value={{
        cart,
        addtocart,
        removefromcart,
        updatequantity,
        totalitems,
        totalprice,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};
