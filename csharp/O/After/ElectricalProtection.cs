using After.Strategy;

namespace After;

public class ElectricalProtection
{
    public required string Name { get; set; }
    public int NbPoles { get; set; }
    public double Ith { get; set; }
    public double In { get; set; }
    public required IProtectionStrategy Strategy { get; set; }

    // .......


    public double CalcIn()
    {
        return Strategy.CalcIn();
    }

    public double CalcBreakingCapacity()
    {
        return Strategy.CalcBreakingCapacity();
    }

    public bool CheckProtection()
    {
        return Strategy.CheckProtection();
    }
}
