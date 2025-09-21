// Adhering to the Single Responsibility Principle (SRP)
// We break down the responsibilities into separate, focused classes.

// 1. Employee class (Data container)
class EmployeeAfter {
  constructor(public name: string, public salary: number) {}
}

// 2. Payroll Calculator (Business logic)
class PayrollCalculator {
  calculatePay(employee: Employee): number {
    // Only responsibility is business logic.
    return employee.salary * 0.9;
  }
}

// 3. Report Generator (Reporting logic)
class EmployeeReport {
  generateReport(employee: Employee): string {
    // Only responsibility is reporting.
    const calculator = new PayrollCalculator();
    const pay = calculator.calculatePay(employee);
    return `Employee: ${employee.name}\nPay: ${pay}`;
  }
}

// 4. Persistence Manager (Persistence logic)
class EmployeeRepository {
  save(employee: Employee): void {
    // Only responsibility is persistence.
    console.log(`Saving ${employee.name} to the database.`);
  }
}

// Example usage
const employee = new EmployeeAfter("Alice", 50000);
const reportGenerator = new EmployeeReport();
const repository = new EmployeeRepository();

console.log(reportGenerator.generateReport(emp));
repository.save(emp);
