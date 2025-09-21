namespace After.Strategy;

public interface IProtectionStrategy
{
    double CalcIn();

    double CalcBreakingCapacity();

    bool CheckProtection();
}
