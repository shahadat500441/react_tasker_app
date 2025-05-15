import React,{useState} from 'react';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';

const TaskBoard = () => {
    const defaultTask = {
        "id":crypto.randomUUID(),
        "title":"Learn React",
        "description": "I am learning react",
        "tags":["web","react","js"],
        "priority":"high",
        "isFavorite": true
    }

    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal]= useState(false)
    const [taskToUpdate, setTaskToUpdate] = useState(null)

    const handelAddEditTask= (newTask, isAdd)=>{
       if(isAdd){
        setTasks([...tasks, newTask])
       }else{
        setTasks(
            tasks.map((task)=>{
                if(task.id === newTask.id){
                    return newTask;
                }
                return task;
            })
        )
       }
       
        setShowAddModal(false)
    }

    const handelEditTask = (task)=>{
        setTaskToUpdate(task)
        setShowAddModal(true)
    }

    const handelCloseClick = ()=>{
        setShowAddModal(false)
        setTaskToUpdate(null)
    }


    const handelDeleteTask = (taskId)=>{
        const taskAfterDelete = tasks.filter((task)=> task.id !== taskId)
        setTasks(taskAfterDelete)
    }

    const handelDeleteAllClick = ()=> {
        tasks.length = 0;
        setTasks([...tasks])
    }


    return (
        <section className="mb-20" id="tasks">
            {showAddModal &&
             <AddTaskModal 
             onSave={handelAddEditTask}
             onCloseClick={handelCloseClick}
             taskToUpdate={taskToUpdate}
             ></AddTaskModal>}
		
		<div className="container">
			
		<div className="p-2 flex justify-end">
			<SearchTask></SearchTask>
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions 
                onAddClick={()=> setShowAddModal(true)}
                onDeleteAllClick={handelDeleteAllClick}
                ></TaskActions>
				<TaskList

                 tasks={tasks}
                 onDelete={handelDeleteTask}
                onEdit={handelEditTask}></TaskList>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;