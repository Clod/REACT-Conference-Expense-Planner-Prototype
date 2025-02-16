// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

// The venue functionality uses slices from the Redux toolkit by importing the createSlice() 
// function. A slice breaks down your application state into smaller features, helping 
// organize your code, making it easier to read and simpler to maintain.
export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "images/chairs-2181916_1280.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "images/event-venue-1597531_1280.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "images/convention-center-3908238_1280.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "images/chairs-2181916_1280.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "images/laptops-593296_1280.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],
  // The reducers property is used to define the actions that can be performed on the state.
  // They are not called directly, but are used by the dispatch() function to update the state.
  reducers: {
   
    // The incrementQuantity() function is used to increase the quantity of a venue
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      // Check if the index is valid
      if (state[index]) {
        // There are only 3 Auditorium Halls available for booking
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    // The decrementQuantity() function is used to decrease the quantity of a venue
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
