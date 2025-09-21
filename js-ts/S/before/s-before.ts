// Violation of the Single Responsibility Principle (SRP)
// This class has multiple responsibilities:
// 1. Managing employee data (name, salary, etc.).
// 2. Calculating payroll (business logic).
// 3. Generating a report (reporting logic).
// 4. Saving to a database (persistence).

class Employee {
  constructor(public name: string, public salary: number) {}

  calculatePay(): number {
    // A complex calculation with business logic
    return this.salary * 0.9;
  }

  generateReport(): string {
    // Reporting logic
    return `Employee: ${this.name}\nPay: ${this.calculatePay()}`;
  }

  saveToDatabase(): void {
    // Persistence logic
    console.log(`Saving ${this.name} with salary ${this.salary} to database.`);
  }
}

// Example usage
const emp = new Employee("Alice", 50000);
console.log(emp.generateReport());
emp.saveToDatabase();
