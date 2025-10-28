import { useState } from "react";
import axios from "axios";
import "@fontsource/be-vietnam-pro";
import checkIcon from "./assets/check.svg";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccess2, setShowSuccess2] = useState(false);
  const [showSuccess3, setShowSuccess3] = useState(false);
  const [showFailded, setShowFailed] = useState(false);
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

      setShowSuccess(true);

      // Ocultar después de 1 segundo y limpiar campos
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ nombre: "", rut: "", correo: "", numero: "" });
        setShowSuccess2(true);

        setTimeout(() => {
        setShowSuccess2(false);
        setShowSuccess3(true);

        setTimeout(() => {
        setShowSuccess3(false);
      }, 200);
      }, 1000);
      }, 200);


      console.log(res.data);
    } catch (err) {
      showFailded(true);
      console.error(err);
    }
  };

  const handleFailure = () => {
    
      setShowFailed(false);
  };

  return (
    <>
      <div className="relative flex flex-col items-center w-screen justify-center font-vietnam">
        {showSuccess && (
          <div className="w-100 h-100 absolute flex items-center justify-center z-50 animate-zoom-in  animate-duration-200 bg-none">
            <img src={checkIcon} alt="Success" className="w-100 h-100" />
          </div>
        )}

        {showSuccess2 && (
          <div className="w-100 h-100 absolute flex items-center justify-center z-50 animate-tada  animate-duration-1000 bg-none">
            <img src={checkIcon} alt="Success" className="w-100 h-100" />
          </div>
        )}

        {showSuccess3 && (
          <div className="w-100 h-100 absolute flex items-center justify-center z-50 animate-zoom-out  animate-duration-200 bg-none">
            <img src={checkIcon} alt="Success" className="w-100 h-100" />
          </div>
        )}

        {showFailded && (
          <div className="absolute flex items-center justify-center">
            <label>Algo salió  mal!</label>

          </div>
        )}

        <label className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 mt-10">
          Alameda
        </label>
        <label className="font-vietnam  font-semibold text-lg">Botilleria</label>
        <form
          className="flex flex-col justify-center w-100 p-2"
          onSubmit={handleSubmit}
        >
          <label className="font-vietnam p-1">Nombre:</label>
          <input
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="bg-white/10 rounded-md p-2 mb-2 border-2 border-none"
          />
          <label className="font-vietnam p-1">RUT:</label>
          <input
            name="rut"
            placeholder="12345678-9"
            value={formData.rut}
            onChange={handleChange}
            className="bg-white/10 rounded-md p-2 mb-2 border-2 border-none"
          />
          <label className="font-vietnam p-1">
            Correo Electrónico:
          </label>
          <input
            name="correo"
            placeholder="email@ejemplo.com"
            value={formData.correo}
            onChange={handleChange}
            className="bg-white/10 rounded-md p-2 mb-2 border-2 border-none"
          />
          <label className="font-vietnam p-1">Número:</label>
          <input
            name="numero"
            placeholder="+56912345678"
            value={formData.numero}
            onChange={handleChange}
            className="bg-white/10 rounded-md p-2 mb-2 border-2 border-none"
          />
          <button
            type="submit"
            className="px-6 py-2 mt-5 rounded-lg text-blue-950 font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-md hover:scale-105 transition"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
