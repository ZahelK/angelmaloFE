import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    rut: "",
    correo: "",
    numero: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/form", formData);
      alert("Datos guardados correctamente ✅");
      console.log(res.data);
      setFormData({ nombre: "", rut: "", correo: "", numero: "" });
    } catch (err) {
      alert("Error al guardar ❌");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          name="rut"
          placeholder="rut"
          value={formData.rut}
          onChange={handleChange}
        />
        <input
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
        />
        <input
          name="numero"
          placeholder="numero"
          value={formData.numero}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default App;
