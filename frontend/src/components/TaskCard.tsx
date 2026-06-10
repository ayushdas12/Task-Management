import { useState } from "react";


interface Task {

    _id:string;

    title:string;

    description:string;

    status:string;

}



interface Props {

    task:Task;

    deleteTask:(id:string)=>void;

    toggleStatus:(id:string)=>void;

    updateTask:(id:string,data:any)=>void;

}





function TaskCard({
    task,
    deleteTask,
    toggleStatus,
    updateTask
}:Props){



const [edit,setEdit] = useState(false);


const [title,setTitle] = useState(task.title);

const [description,setDescription] = useState(task.description);




return (


<div className="task-card">



{

edit ? (

<>


<input

value={title}

onChange={
(e)=>setTitle(e.target.value)
}

/>



<textarea

value={description}

onChange={
(e)=>setDescription(e.target.value)
}

/>



<button

onClick={()=>{


updateTask(
    task._id,
    {
        title,
        description
    }
);


setEdit(false);


}}

>

Save

</button>



</>



)

:

(


<>


<h3>

{task.title}

</h3>





<p>

{task.description}

</p>





<p>

Status :

<b>

{task.status}

</b>


</p>







<button

onClick={
    ()=>toggleStatus(task._id)
}

>

Toggle

</button>







<button

onClick={
    ()=>deleteTask(task._id)
}

>

Delete

</button>






<button

onClick={
    ()=>setEdit(true)
}

>

Edit

</button>



</>


)


}



</div>


)

}



export default TaskCard;