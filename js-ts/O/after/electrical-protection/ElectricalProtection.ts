// Adhering to the Open/Closed Principle (OCP)
// The ElectricalProtection class is now closed for modification,
// but open for extension through the IProtectionStrategy interface.
import { IProtectionStrategy } from "./Strategy/IProtectionStrategy";

// The ElectricalProtection class now has a dependency on an interface.
// This decouples it from the specific protection implementations.
export class ElectricalProtection {
  public name: string;
  public nbPoles: number;
  public Ith: number;
  public In: number;
  public strategy: IProtectionStrategy;

  constructor(name: string, strategy: IProtectionStrategy) {
    this.name = name;
    this.strategy = strategy;
    this.nbPoles = 0;
    this.Ith = 0;
    this.In = 0;
  }

  // Each method now delegates its logic to the strategy object.
  // We can add new protection types by creating new strategy classes
  // without changing this class.
  public calcIn(): number {
    return this.strategy.calcIn(this.In);
  }

  public calcBreakingCapacity(): number {
    return this.strategy.calcBreakingCapacity();
  }

  public checkProtection(): boolean {
    return this.strategy.checkProtection();
  }
}
