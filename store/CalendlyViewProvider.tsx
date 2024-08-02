"use client";

import { createContext, useState } from "react";

const CalendlyViewContext = createContext({
  open: false as boolean,
  openCalendlyModal: () => {},
  closeCalendlyModal: () => {},
});

export const CalendlyViewProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  const openCalendly = () => {
    setOpen(true);
  };
  const closeCalendly = () => {
    setOpen(false);
  };
  return (
    <CalendlyViewContext.Provider
      value={{
        open: open,
        openCalendlyModal:openCalendly,
        closeCalendlyModal:closeCalendly
      }}
    ></CalendlyViewContext.Provider>
  );
};
