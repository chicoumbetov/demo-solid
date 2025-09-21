// Violation of the Single Responsibility Principle (SRP)
// This Cable class has multiple responsibilities:
// 1. Managing cable data (id, type, etc.).
// 2. Calculating the section (business logic).
// 3. Saving and deleting (persistence logic).
// 4. Generating a report (reporting logic).

enum CableType {
  Copper,
  Aluminum
}

class CableBefore {
  private saves: CableBefore[] = [];
  
  constructor(public id: number, public cableType: CableType, public current: number, public length: number) {}

  calculateSection(): number {
    switch (this.cableType) {
      case CableType.Copper:
        return this.current * this.length * 0.023;
      case CableType.Aluminum:
        return this.current * this.length * 0.037;
      default:
        throw new Error("Invalid cable type.");
    }
  }

  save(): void {
    // Persistence logic
    this.id = this.saves.length > 0 ? Math.max(...this.saves.map(x => x.id)) + 1 : 1;
    this.saves.push(this);
    console.log(`Cable with ID ${this.id} saved to mock database.`);
  }

  deleteSave(id: number): void {
    // Persistence logic
    this.saves = this.saves.filter(x => x.id !== id);
    console.log(`Cable with ID ${id} deleted from mock database.`);
  }

  generateReport(section: number): string {
    // Reporting logic
    return `Calculated section: ${section}mm2 for type ${CableType[this.cableType]}`;
  }
}

// Example usage
const cable = new CableBefore(0, CableType.Copper, 20, 10);
const section = cable.calculateSection();
console.log(cable.generateReport(section));
cable.save();
