import React, { useState } from 'react'
import "./index.scss";
import Task from '../Task'
import ModalAdd from '../ModalAdd'


const TaskList = ({data, addTask, editTask, removeTask}) => {

  const[isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
    <table className="table">
      <thead className="table__list">
        <th>Tarefa</th>
        <th>Status</th>
        <th>Opções</th>
      </thead>
    <hr/>
    <tbody>
      {data.map((task) => (
        <Task
        key={task.id}
        data={task}
        editTask={editTask}
        removeTask={removeTask}
        />
      ))}
      <tr>
        <td>Nova Tarefa</td>
        <td> </td>
        <td className='plus' onClick={openModal}>+</td>
      </tr>
    </tbody>
    </table>

    <ModalAdd
     addTask={addTask}
     isOpen={isOpenModal}
     onClose={closeModal}
    />
    </>
  )
}

export default TaskList