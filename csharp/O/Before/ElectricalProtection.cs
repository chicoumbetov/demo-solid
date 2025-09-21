namespace Before;

public class ElectricalProtection
{
    public required string Name { get; set; }
    public ProtectionType Type { get; set; }
    public int NbPoles { get; set; }
    public double Ith { get; set; }
    public double In { get; set; }

    // .......


    public double CalcIn()
    {
        return Type switch
        {
            ProtectionType.Breaker => In + 1,
            ProtectionType.BreakerDC => In + 2,
            ProtectionType.Fuse => In + 3,
            ProtectionType.FuseDC => In + 4,
            _ => throw new NotImplementedException()
        };
    }

    public double CalcBreakingCapacity()
    {
        return Type switch
        {
            ProtectionType.Breaker => 1,
            ProtectionType.BreakerDC => 2,
            ProtectionType.Fuse => 3,
            ProtectionType.FuseDC => 4,
            _ => throw new NotImplementedException()
        };
    }

    public bool CheckProtection()
    {
        return Type switch
        {
            ProtectionType.Breaker => true,
            ProtectionType.BreakerDC => true,
            ProtectionType.Fuse => true,
            ProtectionType.FuseDC => true,
            _ => throw new NotImplementedException()
        };
    }
}

public enum ProtectionType
{
    None = 0,
    Breaker,
    BreakerDC,
    Fuse,
    FuseDC,
    BreakerHV
}
