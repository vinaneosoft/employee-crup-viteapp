import axios  from "axios";

const url="http://localhost:3000/employees";

// request interceptors


axios.interceptors.request.use(
    (request)=>{
        console.log("in request interectpor:", request);
        return request;
    },
    (error)=>{
        console.log("in request interectpor:", error);
        return Promise.reject(error);
    }
);
//response interceptors
axios.interceptors.response.use(
    (response)=>{
    // when response contains array then sort the array on the basis of employee names
    // and return the updated response
    if(Array.isArray(response.data)){
        response.data.sort((emp1, emp2)=>emp1.empName.localeCompare(emp2.empName))
    }
    console.log("in response interectpor after sorting array:", response);
        return response;
    },
    (error)=>{
        console.log("in response interectpor:", error);
        return Promise.reject(error);
    }
); 

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
export async function getEmployeeById(id){
    try{
        const response=await axios.get(url+"/"+id); 
        return response.data; // extisting object
    }catch(error){
        console.log(error); 
        return error.response.data;
    }
}

export async function updateEmployee(employee){
    try{
        const response=await axios.put(url+"/"+employee.id,employee); //secure method
        return response.data; // object which updated in json file
    }catch(error){
        console.log(error); 
        return error.response.data;
    }
}