import {
BrowserRouter,
Routes,
Route,
Navigate
} from "react-router-dom";

import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";



function App(){


const [token,setToken] = useState(
localStorage.getItem("token")
);



return (

<BrowserRouter>

<Routes>


<Route
path="/login"
element={
!token
?
<Login setToken={setToken}/>
:
<Navigate to="/dashboard"/>
}
/>



<Route
path="/register"
element={
!token
?
<Register/>
:
<Navigate to="/dashboard"/>
}
/>




<Route
path="/dashboard"
element={
token
?
<Dashboard setToken={setToken}/>
:
<Navigate to="/login"/>
}
/>



<Route
path="/"
element={
<Navigate to="/login"/>
}
/>



</Routes>


</BrowserRouter>

)

}


export default App;