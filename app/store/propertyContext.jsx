import React, { createContext, useState, useEffect } from "react";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    async function getPropertyData() {
      try {
        let propertyId = 1; //hardcoded propertyId for now
        const res = await fetch(`/api/property/${propertyId}`);
        const data = await res.json();
        setProperty(data);
      } catch (error) {
        console.error(error);
      }
    }
    getPropertyData();
  }, []);

  return (
    <PropertyContext.Provider value={{ property }}>
      {children}
    </PropertyContext.Provider>
  );
};
