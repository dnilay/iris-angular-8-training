class Employee{
 
    firstName:string;
    lastName:string;
    email:string;
    salary:number;
    constructor(firstName:string,lastName:string,email:string,salary:number)
    {
         this.firstName=firstName;
         this.lastName=lastName;
         this.email=email;
         this.salary=salary;  
    }
    
}
let employee=new Employee("John","Doe","John@luv2code.com",10000);
console.log("First Name: "+employee.firstName);
console.log("Email: "+employee.email);