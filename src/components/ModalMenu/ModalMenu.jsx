import React, { useEffect, useState } from "react";
import "./ModalMenu.css";

function ModalMenu({ isOpen }) {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className={`modal-menu ${isOpen ? "" : "hidden"}`}>
      <button>Login</button>
      <button>Minha Conta</button>
      <button>Minhas Compras</button>
      <button>Favoritos</button>
      <button>Tema Escuro</button>
    </div>
  );
}

export default ModalMenu;
