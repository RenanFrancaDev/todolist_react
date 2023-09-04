import "./index.scss";

const ModalDelete = ({ data, isOpen, onClose, removeTask }) => {

  if(!isOpen) return null;

  return (
    <div className="modal__container">
      <div className="delete__modal">
        <h1>Deseja excluir esse item?</h1>

        <p>Tarefa: {data.title}</p>
        <p>Descrição: {data.description}.</p>

        <div className="delete__modal__div__btn">
          <button onClick={onClose} className="modal__btn__cancel">Não</button>
          <button onClick={() => removeTask(data.id)} className="modal__btn__add">Sim</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;