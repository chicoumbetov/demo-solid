using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace After.Strategy;

public class BreakerStrategy : IProtectionStrategy
{
    public double CalcBreakingCapacity()
    {
        return 1;
    }

    public double CalcIn()
    {
        return 1;
    }

    public bool CheckProtection()
    {
        return true;
    }
}

