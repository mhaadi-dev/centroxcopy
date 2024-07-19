"use client"
import { createContext, useState } from "react";

 const ServiceViewContext = createContext({
  view: "" as string,
  setView: (view: string) => {},
});

const ServiceViewProvider = ({ children }: any) => {
  const [serviceView, setServiceView] = useState("Solving Data");
  const setActiveView = (view: string) => {
    setServiceView(view);
  };
  return (
    <ServiceViewContext.Provider
      value={{ view: serviceView, setView: setActiveView }}
    >
      {children}
    </ServiceViewContext.Provider>
  );
};

export {ServiceViewContext,ServiceViewProvider}