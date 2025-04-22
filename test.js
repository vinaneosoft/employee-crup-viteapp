


let student={
    sid:111,
    sname:123
}
console.log(student.sid);

let key=sid;
console.log(student[key]);

let newstudent={...student, [key]:123 }