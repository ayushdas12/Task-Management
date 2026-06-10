import {
    useNavigate
} from "react-router-dom";


interface NavbarProps {

    setToken:any;

}



function Navbar({setToken}:NavbarProps){



const navigate = useNavigate();




const logout = ()=>{


    localStorage.removeItem("token");


    setToken(null);


    navigate("/login");


};





return (


<nav>


<h2>
Task Manager
</h2>




<button
onClick={logout}
>

Logout

</button>



</nav>


)

}



export default Navbar;