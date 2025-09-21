// Adhering to the Open/Closed Principle (OCP)
// We introduce an interface and use polymorphism to allow for new
// employee types without modifying existing code.

interface IEmployee {
  calculateBonus(): number;
}

class FullTimeEmployee implements IEmployee {
  constructor(public salary: number) {}
  calculateBonus(): number {
    return this.salary * 0.1;
  }
}

class PartTimeEmployee implements IEmployee {
  constructor(public salary: number) {}
  calculateBonus(): number {
    return this.salary * 0.05;
  }
}

class Contractor implements IEmployee {
  constructor(public salary: number) {}
  calculateBonus(): number {
    return this.salary * 0.02;
  }
}

// Now, to add a new employee type, you just add a new class that
// implements IEmployee. The bonus calculator is "closed for modification".
class NewIntern implements IEmployee {
  constructor(public salary: number) {}
  calculateBonus(): number {
    return this.salary * 0.01;
  }
}

// This class is now decoupled and adheres to OCP.
class Payroll {
  calculateBonus(employee: IEmployee): number {
    return employee.calculateBonus();
  }
}

// Example usage
const payroll = new Payroll();
const fullTime = new FullTimeEmployee(60000);
const partTime = new PartTimeEmployee(30000);
const intern = new NewIntern(20000); // New type added without changing Payroll class.

console.log(`Full-time bonus: ${payroll.calculateBonus(fullTime)}`);
console.log(`Part-time bonus: ${payroll.calculateBonus(partTime)}`);
console.log(`Intern bonus: ${payroll.calculateBonus(intern)}`);
