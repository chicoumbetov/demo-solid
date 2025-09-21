// Violation of the Open/Closed Principle (OCP)
// The `calculateBonus` method has a switch statement, meaning it
// must be modified every time a new employee type is added.

enum EmployeeType {
  FullTime,
  PartTime,
  Contractor
}

class EmployeeO {
  constructor(public name: string, public type: EmployeeType, public salary: number) {}
}

class BonusCalculator {
  calculateBonus(employee: EmployeeO): number {
    let bonus = 0;
    switch (employee.type) {
      case EmployeeType.FullTime:
        bonus = employee.salary * 0.1;
        break;
      case EmployeeType.PartTime:
        bonus = employee.salary * 0.05;
        break;
      case EmployeeType.Contractor:
        // What if we add a new employee type?
        // We have to modify this class. It's not "closed for modification".
        bonus = employee.salary * 0.02;
        break;
    }
    return bonus;
  }
}

const emp1 = new EmployeeO("Bob", EmployeeType.FullTime, 60000);
const calc = new BonusCalculator();
console.log(`Bonus for ${emp1.name}: ${calc.calculateBonus(emp1)}`);
