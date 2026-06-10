import {useState} from "react";
import type {FormEvent} from "react";

import {
useNavigate,
Link
} from "react-router-dom";


import API from "../services/api";



interface RegisterForm{

name:string;
email:string;
password:string;

}



function Register(){


const navigate = useNavigate();



const [form,setForm] = useState<RegisterForm>({

name:"",
email:"",
password:""

});




const submitHandler = async(
e:FormEvent<HTMLFormElement>
)=>{


e.preventDefault();



try{


await API.post(
"/users/register",
form
);



alert("Registered Successfully");


navigate("/login");



}
catch(error:any){


alert(
error.response?.data?.message ||
"Registration failed"
);


}


};





return (

<div className="auth-container">


<div className="auth-card">


<h1>
Create Account
</h1>



<form onSubmit={submitHandler}>


<input

placeholder="Name"

value={form.name}

onChange={
e=>

setForm({

...form,

name:e.target.value

})

}

/>



<input

placeholder="Email"

value={form.email}

onChange={
e=>

setForm({

...form,

email:e.target.value

})

}

/>



<input

type="password"

placeholder="Password"

value={form.password}

onChange={
e=>

setForm({

...form,

password:e.target.value

})

}

/>



<button>
Register
</button>


</form>



<p>

Already have account?

<Link to="/login">
Login
</Link>


</p>



</div>

</div>

)


}



export default Register;