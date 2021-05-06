import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function addCartProduct(product) {
  return ({
      type: ADD_CART_PRODUCT,
      payload: product
  })
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat ipsam quisquam esse hic libero, atque blanditiis eum dolore corrupti consequuntur, odit beatae eius, laborum eveniet explicabo delectus tenetur totam!",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl: 'http://via.placeholder.com/80x80'
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat ipsam quisquam esse hic libero, atque blanditiis eum dolore corrupti consequuntur, odit beatae eius, laborum eveniet explicabo delectus tenetur totam!",
          price: 1.99,
          belongsTo: [0, 6],
          imageUrl: 'http://via.placeholder.com/80x80'
        },
        quantity: 1,
      },
    ],
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A0004828282838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 1.3,
        orderNumber: "3e5463463452324",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Person Person",
          shippingAddress: "1337 West State Street",
        },
      },
      {
        _id: 2,
        total: 2.3,
        orderNumber: "856345fdsre",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Another Person",
          shippingAddress: "1400 West State Street",
        },
      },
      {
        _id: 3,
        total: 20.34,
        orderNumber: "YJ63452332",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Some one Hudgens",
          shippingAddress: "1000 West State Street",
        },
      },
      {
        _id: 4,
        total: 19.4,
        orderNumber: "NMJF677880643",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "New Person",
          shippingAddress: "34 West State Street",
        },
      },
      {
        _id: 5,
        total: 2.0,
        orderNumber: "FGHJGHK96R5T76457",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Some One Else",
          shippingAddress: "67 West State Street",
        },
      },
      {
        _id: 6,
        total: 16.34,
        orderNumber: "34643DFGHFDH",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Ashley Gridges",
          shippingAddress: "1200West State Street",
        },
      },
      {
        _id: 7,
        total: 12.3,
        orderNumber: "784566345SFBGCGVJCGVUH",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Imogene Greenlaw",
          shippingAddress: "89 West State Street",
        },
      },
    ],
  };
}
