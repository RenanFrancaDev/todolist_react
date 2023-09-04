import { useState } from "react";
import "./index.scss";

const ModalAdd = ({ addTask, isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    // console.log(description)
    addTask(title, description);
    setTitle("");
    setDescription("");

    onClose()
  };

  if(!isOpen) return null;

  return (
    <div className="container_modal">
      <div className="create__modal">
        <h2>Adicionar Nova Tarefa</h2>

        <form onSubmit={handleSubmit}>
          <label>Tarefa</label>
          <input
            type="text"
            placeholder="Insira o nome da tarefa"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label>Descrição</label>
          <textarea
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Insira a Descrição da tarefa"
            cols="30"
            rows="10"
          ></textarea>

          <div className="create__modal__div__btn">
            <button onClick={onClose} className="modal__btn__cancel">Cancelar</button>
            <button type="submit" className="modal__btn__add">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;