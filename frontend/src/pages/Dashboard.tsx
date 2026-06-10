import {
    useEffect,
    useState
} from "react";


import {
    useNavigate
} from "react-router-dom";


import API from "../services/api";


import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";




interface Task {

    _id:string;
    title:string;
    description:string;
    status:string;

}




interface NewTask {

    title:string;
    description:string;

}





interface DashboardProps {

    setToken:any;

}








function Dashboard({setToken}:DashboardProps){



const navigate = useNavigate();



const [tasks,setTasks] = useState<Task[]>([]);











const getTasks = async()=>{


    try{


        const res = await API.get<Task[]>(
            "/tasks"
        );


        setTasks(res.data);



    }
    catch(error:any){



        if(error.response?.status === 401){


            localStorage.removeItem("token");


            setToken(null);


            navigate("/login");


            return;

        }



        alert(
            error.response?.data?.message ||
            "Unable to load tasks"
        );


    }



};









useEffect(()=>{


    const token =
    localStorage.getItem("token");



    if(!token){


        navigate("/login");


        return;

    }



    getTasks();



},[]);











const addTask = async(
    data:NewTask
)=>{


    try{


        await API.post(
            "/tasks",
            data
        );


        getTasks();



    }
    catch(error:any){


        alert(
            error.response?.data?.message ||
            "Task creation failed"
        );


    }


};












const deleteTask = async(
    id:string
)=>{


    try{


        await API.delete(
            `/tasks/${id}`
        );


        getTasks();



    }
    catch(error:any){


        alert(
            "Delete failed"
        );


    }


};













const toggleStatus = async(
    id:string
)=>{


    try{


        await API.patch(
            `/tasks/${id}/status`
        );


        getTasks();



    }
    catch(error:any){


        alert(
            "Status update failed"
        );


    }


};














const updateTask = async(
    id:string,
    data:any
)=>{


    try{


        await API.put(
            `/tasks/${id}`,
            data
        );


        getTasks();



    }
    catch(error:any){


        alert(
            "Update failed"
        );


    }


};













return (

<>


<Navbar setToken={setToken}/>






<div className="container">



<h1>
Task Dashboard
</h1>







<TaskForm

addTask={addTask}

/>












{

tasks.length === 0 ?


(

<h3>
No Tasks Found
</h3>

)


:


(

tasks.map(
(task)=>(



<TaskCard



key={task._id}



task={task}



deleteTask={deleteTask}



toggleStatus={toggleStatus}



updateTask={updateTask}





/>


)

)


)

}






</div>







</>


)



}





export default Dashboard;