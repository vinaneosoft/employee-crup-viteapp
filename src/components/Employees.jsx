import EmployeeCard from "./EmployeeCard";

function Employees(){
     // manage many employees
     // currently we create fake employees array
    let employees=[
        {
            empId:234, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://th.bing.com/th/id/OIP.yxFMf0fXHxmSFZv1rJ5ZFgHaLH?rs=1&pid=ImgDetMain' 
        },
        {
            empId:111, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://th.bing.com/th/id/OIP.yxFMf0fXHxmSFZv1rJ5ZFgHaLH?rs=1&pid=ImgDetMain' 
        },
        {
            empId:222, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://th.bing.com/th/id/OIP.yxFMf0fXHxmSFZv1rJ5ZFgHaLH?rs=1&pid=ImgDetMain' 
        },
        {
            empId:333, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://th.bing.com/th/id/OIP.yxFMf0fXHxmSFZv1rJ5ZFgHaLH?rs=1&pid=ImgDetMain' 
        }
    ]

    return (
        <EmployeeCard></EmployeeCard>
    );
}

export default Employees;