// import { useReducer } from "react";

// const defaultCartState = {
//   items: [],
//   subtotal: 0,
//   totalAmount: 0,
// };

// const CartReducer = (state, action) => {
//   return newState;
// };

// const newCart = {
//   items: [],
//   totalAmount: 0,
//   addItems: addToCart,
//   removeItems: removeFromCart,
// };
// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[existingCartItemIndex];
//     console.log(existingCartItem);

//     let updatedItems;

//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         amount: Number(existingCartItem.amount) + Number(action.item.amount),
//       };
//       console.log("updatedItem", updatedItem);
//       updatedItems = [...state.items];
//       console.log("Inital cart state", updatedItems);
//       updatedItems[existingCartItemIndex] = updatedItem;
//       console.log("updated cart state", updatedItems);
//     } else {
//       updatedItems = state.items.concat(action.item);
//     }

//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   if (action.type === "DEL") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingItem = state.items[existingCartItemIndex];

//     const updatedTotalAmount = state.totalAmount - existingItem.price;
//     let updatedItems;
//     if (existingItem.amount === 1) {
//       updatedItems = state.items.filter((item) => item.id !== action.id);
//     } else {
//       const updatedItem = {
//         ...existingItem,
//         amount: Number(existingItem.amount) - 1,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   return defaultCartState;
// };

// const [cartState, dispatchCartAction] = useReducer(
//   cartReducer,
//   defaultCartState
// );

// const addItemHandler = (item) => {
//   dispatchCartAction({
//     type: "ADD",
//     item: item,
//   });
// };

// const removeItemHandler = (id) => {
//   dispatchCartAction({
//     type: "DEL",
//     id: id,
//   });
// };

// const cart = {
//   item: cartState.items,
//   totalAmount: cartState.totalAmount,
//   addItem: addItemHandler,
//   removeItem: removeItemHandler,
// };

// const [data, setData] = useState([]);

// // const addItemToCart = (item) => {
// //   cart.addItem(item);
// // };

// let filterArr = [];

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios
//         .get("http://localhost/CI/register/getCart", {
//           withCredentials: true,
//         })
//         .then((response) => {
//           console.log("resdata", response.data);
//           const cartDB = [...response.data];
//           cartDB.map((item) => {
//             const id = item.product_id;
//             filterArr.push(products.find((product) => product.id == id));
//             console.log("filter", filterArr);
//           });

//           // let cartItems = [...response.data];
//           cartDB.forEach((cart) => {
//             const matchingItem = filterArr.find(
//               (fil) => fil.id === cart.product_id
//             );
//             if (matchingItem) {
//               cart.image = matchingItem.image;
//             }
//           });

//           console.log("cart", cartDB);
//           setData(cartDB);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();
// }, []);

// console.log("data", data);
