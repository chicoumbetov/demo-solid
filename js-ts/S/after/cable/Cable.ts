// Adhering to the Single Responsibility Principle (SRP)
// The responsibilities have been broken down into separate, focused classes.

// A simple enum for cable types, as used in the C# example.
enum eCableType {
    Copper,
    Aluminum
}

// 1. Cable class (Data container)
// This class is responsible only for holding the data related to a cable.
class Cable {
    public id: number = 0;
    public section: number = 0;

    constructor(
        public cableType: eCableType,
        public current: number,
        public length: number
    ) {}
}

// 2. CableCalculator (Business logic)
// This class is responsible for the business logic of calculating the section.
class CableCalculator {
    public calculateSection(cable: Cable): number {
        switch (cable.cableType) {
            case eCableType.Copper:
                return cable.current * cable.length * 0.023;
            case eCableType.Aluminum:
                return cable.current * cable.length * 0.037;
            default:
                return 0;
        }
    }
}

// 3. CableRepository (Persistence logic)
// This class is responsible for handling persistence (saving and deleting).
class CableRepository {
    private readonly _saves: Cable[] = [];

    public save(cable: Cable): void {
        cable.id = this._saves.length > 0 ? Math.max(...this._saves.map(x => x.id)) + 1 : 1;
        this._saves.push(cable);
        console.log(`Cable with ID ${cable.id} saved.`);
    }

    public deleteSave(id: number): void {
        const initialLength = this._saves.length;
        this._saves = this._saves.filter(x => x.id !== id);
        if (this._saves.length < initialLength) {
            console.log(`Cable with ID ${id} deleted.`);
        } else {
            console.log(`No cable found with ID ${id}.`);
        }
    }
}

// 4. ReportGenerator (Reporting logic)
// This class is responsible for formatting reports based on cable data.
class ReportGenerator {
    public generateReport(cable: Cable): string {
        return `Section calculée : ${cable.section}mm2 pour le type ${eCableType[cable.cableType]}`;
    }

    public generateDetailedReport(cable: Cable): string {
        return `Cable: ${eCableType[cable.cableType]}, Courant: ${cable.current}A, Longueur: ${cable.length}m, Section: ${cable.section}mm2`;
    }
}

// Example usage to demonstrate the refactored, modular approach
const cableData = new Cable(eCableType.Copper, 20, 10);
const calculator = new CableCalculator();
const repository = new CableRepository();
const reportGenerator = new ReportGenerator();

// Set the section on the data object after calculation
cableData.section = calculator.calculateSection(cableData);

// Use the separate classes to perform the operations
repository.save(cableData);
const simpleReport = reportGenerator.generateReport(cableData);
const detailedReport = reportGenerator.generateDetailedReport(cableData);

console.log(simpleReport);
console.log(detailedReport);

// Let's delete it
repository.deleteSave(cableData.id);
