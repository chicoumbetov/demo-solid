// Violation of the Dependency Inversion Principle (DIP)
// The high-level module (Program) is directly coupled to a low-level module (ApiDbContext).
import { ApiDbContext } from "./ApiDBContext";

// High-level module: The application logic.
// It directly depends on the concrete ApiDbContext.
class Program {
    // This is the tight coupling that violates DIP.
    private context = new ApiDbContext();

    public run(): void {
        this.getDevices();
        this.getDeviceById(1);
    }

    private getDevices(): void {
        const allDevices = this.context.getAll();
        console.log("All devices:", allDevices);
    }

    private getDeviceById(id: number): void {
        const device = this.context.findById(id);
        if (device) {
            console.log("Found device:", device);
        } else {
            console.log("Device not found.");
        }
    }
}

const app = new Program();
app.run();
