import { IElectricalDevice, SolarPanel } from "./SolarPanel.ts";

const mySolarPanel: IElectricalDevice = new SolarPanel();
mySolarPanel.broadcastNetwork();

// This call will fail at runtime, because a SolarPanel cannot store energy.
// This demonstrates the ISP violation.
mySolarPanel.storeEnergy();
