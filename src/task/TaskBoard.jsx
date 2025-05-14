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

    const handelAddTask= (newTask)=>{
        // console.log("adding a task",task);
        setTasks([...tasks, newTask])
        setShowAddModal(false)
    }
    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModal onSave={handelAddTask}></AddTaskModal>}
		
		<div className="container">
			
		<div className="p-2 flex justify-end">
			<SearchTask></SearchTask>
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions onAddClick={()=> setShowAddModal(true)}></TaskActions>
				<TaskList tasks={tasks}></TaskList>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;