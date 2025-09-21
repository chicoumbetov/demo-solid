
import { ElectricalProtection } from "./ElectricalProtection.ts";
import { BreakerStrategy } from "./Strategy/BreakerStrategy.ts";
import { FuseStrategy } from "./Strategy/FuseStrategy.ts";

const p1 = new ElectricalProtection("Protection 1", new BreakerStrategy());
console.log(`Checking protection for: ${p1.name}`);
p1.checkProtection();

p1.strategy = new FuseStrategy();
console.log(`Checking protection for: ${p1.name}`);
p1.checkProtection();

// To add a new protection type, we just create a new strategy class
// and use it, without modifying the ElectricalProtection class.
// This demonstrates the "Open for Extension" part of OCP.
