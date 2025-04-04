import React, { use, useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({ })

  const submitHandler = (e)=>{
    e.preventDefault()
   setNewTask({taskTitle, taskDescription, taskDate, category, active:false, NewTask:true, failed:false, completed:false})
   const data  = userData.employees
   console.log(data);
   

   data.forEach(function(elem){
    if(assignTo == elem.firstName){
      elem.tasks.push(newTask)
      elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
    }
   })

   setTaskTitle('')
   setTaskDescription('')
   setTaskDate('')
   setAssignTo('')
   setCategory('')
  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
             className='flex w-full flex-wrap items-start justify-between'>
                <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                <input value={taskTitle} onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Make a UI desine' />
                </div>
                <div>
               <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
               <input value={taskDate} onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="date" />
               </div>
               <div>
               <h3 className='text-sm text-grey-300 mb-0.5'>Assign to</h3>
               <input value={assignTo} onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Employee name' />
               </div>
               <div>
               <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
               <input value={category} onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='design, dev, etc' />
               </div>
                </div>
               <div className='w-1/2'>
               <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
               <textarea value={taskDescription} onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
               </div>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
  )
}

export default CreateTask