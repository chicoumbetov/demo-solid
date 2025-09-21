// Violation of the Open/Closed Principle (OCP)
// The ElectricalProtection class is not closed for modification.
// Adding a new ProtectionType requires modifying the existing switch statements.

// The ProtectionType enum
enum ProtectionType {
  None = 0,
  Breaker,
  BreakerDC,
  Fuse,
  FuseDC,
  BreakerHV,
}

// The ElectricalProtection class
class ElectricalProtectionBefore {
  public name: string;
  public type: ProtectionType;
  public nbPoles: number;
  public Ith: number;
  public In: number;

  constructor(name: string, type: ProtectionType) {
    this.name = name;
    this.type = type;
    this.nbPoles = 0;
    this.Ith = 0;
    this.In = 0;
  }

  // Common anti-pattern: A switch statement that must be modified
  // when a new type is added.
  public calcIn(): number {
    switch (this.type) {
      case ProtectionType.Breaker:
        return this.In + 1;
      case ProtectionType.BreakerDC:
        return this.In + 2;
      case ProtectionType.Fuse:
        return this.In + 3;
      case ProtectionType.FuseDC:
        return this.In + 4;
      case ProtectionType.BreakerHV:
        // A new case must be added here, violating OCP.
        return this.In + 5;
      default:
        throw new Error("Not Implemented");
    }
  }

  // Another method with the same violation
  public calcBreakingCapacity(): number {
    switch (this.type) {
      case ProtectionType.Breaker:
        return 1;
      case ProtectionType.BreakerDC:
        return 2;
      case ProtectionType.Fuse:
        return 3;
      case ProtectionType.FuseDC:
        return 4;
      case ProtectionType.BreakerHV:
        // Another modification required
        return 5;
      default:
        throw new Error("Not Implemented");
    }
  }

  // Another method with the same violation
  public checkProtection(): boolean {
    switch (this.type) {
      case ProtectionType.Breaker:
      case ProtectionType.BreakerDC:
      case ProtectionType.Fuse:
      case ProtectionType.FuseDC:
      case ProtectionType.BreakerHV:
        // Another modification required
        return true;
      default:
        throw new Error("Not Implemented");
    }
  }
}

// Example usage
const p1 = new ElectricalProtectionBefore("Protection 1", ProtectionType.Breaker);
console.log(`Checking protection for: ${p1.name}`);
p1.checkProtection();

p1.type = ProtectionType.Fuse;
console.log(`Checking protection for: ${p1.name}`);
p1.checkProtection();

/*
*The ElectricalProtection class has methods like CalcIn, CalcBreakingCapacity, and CheckProtection that all rely on a switch statement over the ProtectionType enum. This is a common anti-pattern because if a new protection type is introduced (e.g., ProtectionType.BreakerHV), you have to open and modify the existing ElectricalProtection class to add a new case to each of those methods. This makes the class fragile and violates the principle that software should be "open for extension, but closed for modification."
*/