import React, { useState } from 'react'
import checkbox from '../../assets/checkbox.svg'
import checked from '../../assets/checked.svg'
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'
import "./index.scss";
import ModalEdit from '../ModalEdit'
import ModalDelete from '../ModalDelete'


const Task = ({data, editTask ,removeTask}) => {

  const [isChecked, setChecked] = useState(data.completed)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isEditTaskModal, setIsEditModal] = useState(false);
  


  const openDeleteModal = () => {
    setIsModalDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const openEditModal = () => {
    setIsEditModal(true);
  };

  const closeEditModal = () => {
    setIsEditModal(false);
  };

  const handleCheck = () => {
        setChecked(!isChecked)
  };
    

  return (
          <>
            <tr className='line'>
              <td>{data.title}</td> 
              <td onClick={handleCheck}>
                {isChecked ? <img src={checked}></img> : <img src={checkbox}></img>}
                </td>
              <td className='options'>
                <img onClick={openEditModal} className='' src={edit}></img>
                <img onClick={openDeleteModal} src={trash}></img></td>
            </tr>
        <ModalEdit
        data={data}
        isOpen={isEditTaskModal}
        onClose={closeEditModal}
        editTask={editTask}
      />

      <ModalDelete
        data={data}
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        removeTask={removeTask}
      />
          </>
  )
}

export default Task