import { useState, useEffect, useReducer, createContext } from "react";
import Axios from "axios";

export const CartContext = createContext(null);

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    console.log(existingCartItem);

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: Number(existingCartItem.amount) + Number(action.item.quantity),
      };
      console.log("updatedItem", updatedItem);
      updatedItems = [...state.items];
      console.log("Inital cart state", updatedItems);
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log("updated cart state", updatedItems);
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "DEL") {
    console.log("state", state);
    console.log("state.items", state.items);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    console.log(existingItem);

    let updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.quantity;
    let updatedItems = state.items.filter((item) => item.id !== action.id);
    console.log(existingItem.product_id);

    Axios.post(
      "http://localhost/CI/register/delete",
      Number(existingItem.product_id),
      {
        withCredentials: true,
      }
    ).then((response) => {
      console.log(response.data);
    });

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "SET_CART") {
    return {
      items: action.payload,
      totalAmount: calculateTotalAmount(action.payload),
    };
  }
  return defaultCartState;
};

const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + Number(item.quantity) * Number(item.price);
  }, 0);
};

export const CartContextProvider = (props) => {
  const [newCart, setNewCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkLoading, setCheckLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "DEL",
      id: id,
    });
  };

  const cart = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost/CI/register/getCart",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        const cartData = response.data || [];
        dispatchCartAction({ type: "SET_CART", payload: cartData });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  useEffect(() => {
    Axios.get("http://localhost/CI/Display/products").then((response) => {
      setProducts(response.data);
      setLoading(true);
      console.log(response);
    });
  }, []);
  //https://fakestoreapi.com/products

  let newProducts = [];

  ////////////filter//////////////

  if (brand && brand !== "All Brands") {
    newProducts = products.filter((product) => product.brand_type === brand);
    console.log("in context", brand);
    console.log("in context", newProducts);
  } else {
    newProducts = [...products];
  }

  const filterPrice = (event) => {
    setPrice(event.target.value);
  };

  if (price) {
    newProducts = newProducts.filter(
      (product) => Number(product.price) < price
    );
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  if (search !== "") {
    const searchToLower = search.toLowerCase();
    newProducts = newProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(searchToLower) ||
        product.brand_type?.toLowerCase().includes(searchToLower) ||
        product.brand_family?.toLowerCase().includes(searchToLower) ||
        product.company?.toLowerCase().includes(searchToLower)
    );
  }

  const data = {
    products,
    newCart,
    loading,
    checkLoading,
    setCheckLoading,
    brand,
    handleChange,
    newProducts,
    handleSearch,
    search,
    forgotPassword,
    setForgotPassword,
    login,
    setLogin,
    cart,
    accountName,
    setAccountName,
    address,
    setAddress,
    delivery,
    setDelivery,
    price,
    filterPrice,
    isAdmin,
    setIsAdmin,
  };

  return (
    <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
  );
};
