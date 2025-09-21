namespace after;

public interface IEnergySource { void BroadcastNetwork(); }
public interface IEnergyConsumer { void ConsumeEnergy(); }
public interface IEnergyStorage { void StoreEnergy(); }

public class SolarPanel : IEnergySource
{
    public void BroadcastNetwork() { Console.WriteLine("Panneau diffuse sur réseau"); }
    // Plus de méthodes inutiles !
}

public class Battery : IEnergySource, IEnergyConsumer, IEnergyStorage
{
    public void BroadcastNetwork() { /* ... */ }
    public void ConsumeEnergy() { /* ... */ }
    public void StoreEnergy() { /* ... */ }
}