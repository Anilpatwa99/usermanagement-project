// 📁 src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
      {
        id: 1,
        firstName: "Himanshu",
        lastName: "Saini",
        status: true,
        dob: "1990-05-15",
        email: "himanshu.saini@gmail.com",
        phone: "+91-9876543210",
        address: "Jaipur, Rajasthan, India",
      },
      {
        id: 2,
        firstName: "Mahek",
        lastName: "Chhipa",
        status: false,
        dob: "1985-08-22",
        email: "mahek.chhipa@gmail.com",
        phone: "+91-9988776655",
        address: "Ahmedabad, Gujarat, India",
      },
      {
        id: 3,
        firstName: "Anil",
        lastName: "Patwa",
        status: true,
        dob: "1992-12-03",
        email: "anil.patwa@gmail.com",
        phone: "+91-9123456789",
        address: "Indore, Madhya Pradesh, India",
      },
      {
        id: 4,
        firstName: "Kuldeep",
        lastName: "Yadav",
        status: true,
        dob: "1988-03-17",
        email: "kuldeep.yadav@gmail.com",
        phone: "+91-9876501234",
        address: "Kanpur, Uttar Pradesh, India",
      },
      {
        id: 5,
        firstName: "Sakshi",
        lastName: "Sharma",
        status: false,
        dob: "1995-07-28",
        email: "sakshi.sharma@gmail.com",
        phone: "+91-9456781230",
        address: "Chandigarh, India",
      },
      {
        id: 6,
        firstName: "Somya",
        lastName: "Runthala",
        status: true,
        dob: "1987-11-12",
        email: "somya.runthala@gmail.com",
        phone: "+91-9876543001",
        address: "Udaipur, Rajasthan, India",
      },
      {
        id: 7,
        firstName: "Prajjal",
        lastName: "Dhar",
        status: true,
        dob: "1990-06-20",
        email: "prajjal.dhar@gmail.com",
        phone: "+91-9823012345",
        address: "Kolkata, West Bengal, India",
      },
      {
        id: 8,
        firstName: "Rishika",
        lastName: "Jain",
        status: false,
        dob: "1993-09-18",
        email: "rishika.jain@gmail.com",
        phone: "+91-9988667744",
        address: "Bhopal, Madhya Pradesh, India",
      },
      {
        id: 9,
        firstName: "Vijay",
        lastName: "Kumar",
        status: true,
        dob: "1989-02-10",
        email: "vijay.kumar@gmail.com",
        phone: "+91-9012345678",
        address: "Patna, Bihar, India",
      },
      {
        id: 10,
        firstName: "Pinki",
        lastName: "Sharma",
        status: true,
        dob: "1994-04-25",
        email: "pinki.sharma@gmail.com",
        phone: "+91-9234567890",
        address: "Jodhpur, Rajasthan, India",
      },
      {
        id: 11,
        firstName: "Mayank",
        lastName: "Meena",
        status: false,
        dob: "1991-08-14",
        email: "mayank.meena@gmail.com",
        phone: "+91-9753108642",
        address: "Ajmer, Rajasthan, India",
      },
      {
        id: 12,
        firstName: "Komal",
        lastName: "Jangid",
        status: true,
        dob: "1990-10-05",
        email: "komal.jangid@gmail.com",
        phone: "+91-9345678910",
        address: "Alwar, Rajasthan, India",
      },
    ],
    
  
  editingUserId: null,
  currentPage: 1,
  itemsPerPage: 5,
  selectedUser: null,
  currentView: "table",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEditingUser: (state, action) => {
      state.editingUserId = action.payload;
    },
    updateUser: (state, action) => {
      const updated = action.payload;
      const index = state.users.findIndex((u) => u.id === updated.id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updated };
      }
      state.editingUserId = null;
    },
    setPagination: (state, action) => {
      state.currentPage = action.payload.currentPage || state.currentPage;
      state.itemsPerPage = action.payload.itemsPerPage || state.itemsPerPage;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const {
  setEditingUser,
  updateUser,
  setPagination,
  setSelectedUser,
  setView,
} = userSlice.actions;

export default userSlice.reducer;
