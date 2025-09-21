using Before;

ElectricalProtection p1 = new () { Name = "Protection 1", Type = ProtectionType.Breaker };

p1.CheckProtection();

p1.Type = ProtectionType.Fuse;

p1.CheckProtection();