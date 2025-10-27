import { useState } from "react";
import axios from "axios";
import logo from "./assets/AngelLogo.png";
import '@fontsource/be-vietnam-pro';

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    rut: "",
    correo: "",
    numero: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://angelmalo-be.vercel.app/api/form",
        formData
      );
      alert("Datos guardados correctamente ✅");
      console.log(res.data);
      setFormData({ nombre: "", rut: "", correo: "", numero: "" });
    } catch (err) {
      alert("Error al guardar ❌");
      console.error(err);
    }
  };

  return (
    <>
    <div
      className="flex flex-col items-center w-screen justify-center bg-contain bg-center font-vietnam bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${logo})` }}
    >
      <label className="font-vietnam p-4 font-bold text-2xl">Registrate</label>
      <form
        className="flex flex-col justify-center w-100 p-4"
        onSubmit={handleSubmit}
      >
        <label className="font-vietnam font-bold">Nombre:</label>
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="bg-gray-200/50 rounded-md p-2 mb-2 border-2 border-gray-400/60"
        />
        <label className="font-vietnam font-bold">RUT:</label>
        <input
          name="rut"
          placeholder="12345678-9"
          value={formData.rut}
          onChange={handleChange}
          className="bg-gray-200/50 rounded-md p-2 mb-2 border-2 border-gray-400/60"
        />
        <label className="font-vietnam font-bold">Correo:</label>
        <input
          name="correo"
          placeholder="email@example.com"
          value={formData.correo}
          onChange={handleChange}
          className="bg-gray-200/50 rounded-md p-2 mb-2 border-2 border-gray-400/60"
        />
        <label className="font-vietnam font-bold">Número:</label>
        <input
          name="numero"
          placeholder="+56912345678"
          value={formData.numero}
          onChange={handleChange}
          className="bg-gray-200/50 rounded-md p-2 mb-2 border-2 border-gray-400/60 "
        />
        <button type="submit" className="bg-red-600 m-5 text-white rounded-4xl p-3 text-2xl">
          Guardar
        </button>
      </form>
    </div>
    </>
    
  );
}

export default App;
