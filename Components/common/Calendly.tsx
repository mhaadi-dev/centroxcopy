import { useState } from "react";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { CALENDLY_URL } from "@/config/secret";
 
export const CalendlyWidget = () => {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const openCalendlyPopup = () => {
      setIsOpen(true);
    };
  
    const closeCalendlyPopup = () => {
      setIsOpen(false);
    };
    return (
      <div>
        <Button
          onClick={openCalendlyPopup}
          content="Schedule a Session"
          iconClassName="-mt-1"
          isLefticon={false}
  
          className="!rounded-full"
          Icon={Arrow}
        />
        {isOpen && (
          <div
            className="calendly-popup"
            style={{
              backgroundColor: "#121212",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="calendly-popup-content"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "800px",
                border: "none",
                overflow: "hidden",
              }}
            >
              <span
                className="calendly-popup-close text-3xl"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                onClick={closeCalendlyPopup}
              >
                &times;
              </span>
              <iframe
                src={CALENDLY_URL}
                style={{ width: "100%", height: "100%", border: "none" }}
                scrolling="auto"
                title="Calendly Scheduling"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    );
  };