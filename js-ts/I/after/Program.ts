import { IEnergySource, SolarPanel } from "./SolarPanel.ts";

// The SolarPanel is now correctly represented by a specific interface.
const mySolarPanel: IEnergySource = new SolarPanel();
mySolarPanel.broadcastNetwork();

// The following line would cause a compile-time error, which is the correct behavior.
// mySolarPanel.storeEnergy(); 
// The compiler prevents a user from making this mistake.
