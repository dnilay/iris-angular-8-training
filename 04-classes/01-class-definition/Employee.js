var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, email, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;
    }
    return Employee;
}());
var employee = new Employee("John", "Doe", "John@luv2code.com", 10000);
console.log("First Name: " + employee.firstName);
