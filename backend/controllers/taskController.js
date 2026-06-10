import Task from "../models/Task.js";



export const createTask = async(req,res)=>{

try{


const {title,description}=req.body;



const task = await Task.create({

title,

description,

userId:req.user.id

});



res.status(201).json(task);



}catch(error){

res.status(500).json({
message:error.message
});

}

};





export const getTasks = async(req,res)=>{


try{


const tasks =
await Task.find({
userId:req.user.id
});



res.json(tasks);



}catch(error){

res.status(500).json({
message:error.message
});

}

};





export const updateTask = async(req,res)=>{


try{


const task =
await Task.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);



res.json(task);



}catch(error){

res.status(500).json({
message:error.message
});

}

};






export const deleteTask = async(req,res)=>{


try{


await Task.findByIdAndDelete(
req.params.id
);



res.json({
message:"Task Deleted"
});



}catch(error){

res.status(500).json({
message:error.message
});

}

};







export const toggleTaskStatus = async(req,res)=>{


try{


const task =
await Task.findById(
req.params.id
);



task.status =
task.status==="pending"
?
"completed"
:
"pending";



await task.save();



res.json(task);



}catch(error){

res.status(500).json({
message:error.message
});

}

};