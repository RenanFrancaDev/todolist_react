import { useState } from "react";
import "./index.scss";

const ModalEdit = ({ data, isOpen, onClose, editTask }) => {
  const [newTitle, setNewTitle] = useState(data.title);
  const [newDescription, setNewDescription] = useState(data.description);

  if (!isOpen) return null;

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleEdit = () => {
    editTask(data.id, newTitle, newDescription);
    onClose();
  };

  return (
    <div className="modal__container">
      <div className="edit__modal">
        <h1>Deseja editar esse item?</h1>
        <form>
          <label>Tarefa</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={handleTitleChange}
          />
          <label>Descrição</label> 
          <textarea
            value={newDescription}
            onChange={handleDescriptionChange}
          />
        </form>

        <div className="edit__modal__div__btn">
          <button onClick={onClose} className="modal__btn__cancel">
            Não
          </button>
          <button onClick={handleEdit} className="modal__btn__add">
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;