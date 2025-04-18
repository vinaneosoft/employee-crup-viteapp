import EmployeeCard from "./EmployeeCard";

function Employees(){
     // manage many employees
     // currently we create fake employees array
    let employees=[
        {
            empId:234, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://freedesignfile.com/upload/2018/11/Corporate-group-employees-Stock-Photo-05.jpg' 
        },
        {
            empId:111, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://img.freepik.com/premium-photo/illustration-group-business-people-ai-generated_57312-8045.jpg' 
        },
        {
            empId:222, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://th.bing.com/th/id/OIP.yxFMf0fXHxmSFZv1rJ5ZFgHaLH?rs=1&pid=ImgDetMain' 
        },
        {
            empId:333, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' 
        },
        {
            empId:333, empName:"veena patil", empDescription:"xyz", 
            empDepartment:"LD", empExperience:20, joiningDate:"12-Dec-2019", 
            profilePic:'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' 
        }
    ]

    /* react props : parent has employee object to be shared to direct child */
    const employeeCards= employees.map(employee=><EmployeeCard  employee={employee} ></EmployeeCard>)
    return (
        <article>
            {employeeCards}
        </article>
    );
}

export default Employees;