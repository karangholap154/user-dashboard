// src/context/UserContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload, filteredUsers: action.payload };
    case "ADD_USER":
      const newUsers = [...state.users, action.payload];
      return { ...state, users: newUsers, filteredUsers: newUsers };
    case "FILTER_USERS":
      return {
        ...state,
        filteredUsers: state.users.filter((user) =>
          user.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    filteredUsers: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "SET_USERS", payload: response.data });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = (user) => {
    // Generate a unique ID for the new user
    const newUser = {
      ...user,
      id:
        state.users.length > 0
          ? Math.max(...state.users.map((u) => u.id)) + 1
          : 1,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  const filterUsers = (searchTerm) => {
    dispatch({ type: "FILTER_USERS", payload: searchTerm });
  };

  return (
    <UserContext.Provider value={{ ...state, addUser, filterUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
