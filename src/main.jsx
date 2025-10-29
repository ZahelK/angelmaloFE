import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="flex flex-col justify-center p-4 font-normal text-blue-100 w-100 m-auto">
      <div className="bg-white/20 p-1 rounded-lg m-4 bg-gradient-to-br from-yellow-400 to-amber-600">
        <div className="p-2 bg-blue-950 rounded-sm">
          <label className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600">
            PROMOCION
          </label>
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600">
            Registrate antes del 1 de noviembre para participar por una gif card
            de 50 luquitas
          </p>
        </div>
      </div>
      <div className="self-center m-5 text-2xl font-bold">Beneficios</div>
      <p className="bg-white/10 p-2 rounded-lg m-1">
        Inscribete totalmente <span className="font-bold">GRATIS!</span>
      </p>
      <p className="bg-white/10 p-2 rounded-lg m-1">
        Acumula puntos dictando tu rut en caja
      </p>
      <p className="bg-white/10 p-2 rounded-lg m-1">
        Canjea tus puntos en caja por cualquier producto! 1 punto = 1 peso
      </p>
      <p className="bg-white/10 p-2 rounded-lg m-1">
        Tambien puedes usar tus puntos para participar en concursos
      </p>
    </div>
  </StrictMode>
);
