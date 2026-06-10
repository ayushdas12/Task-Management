import { useState } from "react";
import type { FormEvent } from "react";




interface Task {

    title:string;
    description:string;

}



interface Props {

    addTask:(task:Task)=>void;

}




function TaskForm({
    addTask
}:Props){



const [task,setTask] = useState<Task>({

    title:"",
    description:""

});






const submit = (
    e:FormEvent<HTMLFormElement>
)=>{


    e.preventDefault();


    addTask(task);



    setTask({

        title:"",
        description:""

    });


};







return (

<form onSubmit={submit}>


<input


placeholder="Title"


value={task.title}


onChange={
    (e)=>

    setTask({

        ...task,

        title:e.target.value

    })
}


/>





<textarea


placeholder="Description"


value={task.description}


onChange={
    (e)=>

    setTask({

        ...task,

        description:e.target.value

    })
}


/>





<button>

Add Task

</button>




</form>

)


}



export default TaskForm;