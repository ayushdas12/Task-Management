import {useState} from "react";
import type {FormEvent} from "react";

import {
useNavigate,
Link
} from "react-router-dom";


import API from "../services/api";



interface LoginForm{

email:string;
password:string;

}



function Login({setToken}:any){


const navigate = useNavigate();



const [form,setForm] = useState<LoginForm>({

email:"",
password:""

});




const submitHandler = async(
e:FormEvent<HTMLFormElement>
)=>{


e.preventDefault();



try{


const res = await API.post(
"/users/login",
form
);



localStorage.setItem(
"token",
res.data.token
);



setToken(res.data.token);



navigate("/dashboard");



}
catch(error:any){


alert(
error.response?.data?.message ||
"Login failed"
);


}


};




return (

<div className="auth-container">


<div className="auth-card">


<h1>
Login
</h1>


<form onSubmit={submitHandler}>


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
Login
</button>



</form>



<p>

Don't have account?

<Link to="/register">
Register
</Link>

</p>



</div>


</div>


)


}


export default Login;