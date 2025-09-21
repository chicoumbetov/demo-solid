
using After;
using After.Strategy;

ElectricalProtection p1 = new() { Name = "Protection 1", Strategy = new BreakerStrategy() };

p1.CheckProtection();

p1.Strategy = new FuseStrategy();

p1.CheckProtection();