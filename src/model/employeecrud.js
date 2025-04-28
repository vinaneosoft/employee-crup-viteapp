import axios  from "axios";

const url="http://localhost:3000/employees";

// post, get, put, delete

export  async function getAllEmployees(){
    try{
        const response=await axios.get(url); // get request
        //console.log(response);
        return response.data;
    }catch(error){
        console.log(error); 
        return error.response.data;
    }
  
}

export async function deleteEmployeeById(id){
    try{
        const response=await axios.delete(url+"/"+id) // delete request
        return response.data;
    }catch(error){
        console.log(error); 
        return error.response.data; //"NOT FOUND"
    }
  
}

export async function addEmployee(employee){
    try{
        const response=await axios.post(url,employee); //secure method
        return response.data; // object which added in json file
    }catch(error){
        console.log(error); 
        return error.response.data;
    }
}