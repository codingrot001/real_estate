import React from "react";

function WhatsappButton(){
    return (
      <a
        href="https://wa.me/+2349033747946"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width="30"
          height="30"
        />
      </a>
    );
}

export default WhatsappButton;