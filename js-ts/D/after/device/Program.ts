// Adhering to the Dependency Inversion Principle (DIP)
// The high-level module (Program) depends on an abstraction (IDeviceRepository).

import { DapperDeviceRepo } from "./DapperDeviceRepo";
import { EfDeviceRepository } from "./EfDeviceRepository";
import { IDeviceRepository } from "./IDeviceRepository";

// The high-level module depends on the abstraction, not a concrete implementation.
// The specific repository is injected via the constructor (simulating DI).
class Program {
    private repo: IDeviceRepository;

    constructor(repo: IDeviceRepository) {
        this.repo = repo;
    }

    public run(): void {
        this.getDevices();
        this.getDeviceById(1);
    }

    private getDevices(): void {
        const allDevices = this.repo.getAll();
        console.log("All devices:", allDevices);
    }

    private getDeviceById(id: number): void {
        const device = this.repo.getById(id);
        if (device) {
            console.log("Found device:", device);
        } else {
            console.log("Device not found.");
        }
    }
}

// Example 1: Using the Entity Framework implementation
const efApp = new Program(new EfDeviceRepository());
console.log("--- Using EF Repository ---");
efApp.run();

// Example 2: Using the Dapper implementation
const dapperApp = new Program(new DapperDeviceRepo());
console.log("\n--- Using Dapper Repository ---");
dapperApp.run();
