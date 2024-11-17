import React, { createContext, useContext, useState, useEffect } from "react";

const ProxyContext = createContext();

export const ProxyProvider = ({ children }) => {
  const [proxies, setProxies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProxies = async () => {
      try {
        const response = await fetch("/data/proxies.json");
        const data = await response.json();
        setProxies(data.proxies);
      } catch (err) {
        setError("Failed to fetch proxies");
        console.error("Error fetching proxies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProxies();
  }, []);

  return (
    <ProxyContext.Provider value={{ proxies, loading, error }}>
      {children}
    </ProxyContext.Provider>
  );
};

export const useProxies = () => {
  const context = useContext(ProxyContext);
  if (!context) {
    throw new Error("useProxies must be used within a ProxyProvider");
  }
  return context;
};
