import React, { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

// Custom hook to use the context
export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  console.log("useFavourites context value:", context); // Debugging log
  if (!context) {
    throw new Error("useFavourites must be used within a FavoritesProvider");
  }
  return context;
};

// Provider component
export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Function to toggle favorite cases
  const toggleFavourite = (caseItem) => {
    setFavourites((prevFavourites) => {
      const isAlreadyFavourite = prevFavourites.some(
        (fav) => fav.id === caseItem.id
      );
      if (isAlreadyFavourite) {
        // Remove from favourites
        return prevFavourites.filter((fav) => fav.id !== caseItem.id);
      } else {
        // Add to favourites
        return [...prevFavourites, caseItem];
      }
    });
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
