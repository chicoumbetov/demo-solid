using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace After.Strategy;

public class BreakerDCStrategy : IProtectionStrategy
{
    public double CalcBreakingCapacity()
    {
        return 3;
    }

    public double CalcIn()
    {
        return 3;
    }

    public bool CheckProtection()
    {
        return true;
    }
}
