import axios  from "axios";

const url="http://localhost:3000/employee";

// post, get, put, delete

export  async function getAllEmployees(){
    try{
        const response=await axios.get(url);
        //console.log(response);
        return response.data;
    }catch(error){
        console.log(error); 
        return error.response.data;
    }
  
}

