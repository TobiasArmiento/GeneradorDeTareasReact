import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFrom() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-zinc-900 p-4 mb-3 border-b-2 border-zinc-800 min-w-max" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-white mb-3 ">Escriba su tarea</h1>
      <input
      className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        // AÑADIMOS UNA ETIQUETA PARA QUE EL CURSOR EMPIECE EN EL INPUT DEL TITULO AL RECARGAR LA PAGINA
        autoFocus
      />
      <textarea
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escriba su descripcion"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button className="bg-orange-500 p-3 rounded-md text-white hover:bg-orange-400">Guardar</button>
    </form>
    </div>
  );
}

export default TaskFrom;
