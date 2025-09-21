using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace After.Strategy;

internal class FuseDCStrategy : IProtectionStrategy
{
    public double CalcBreakingCapacity()
    {
        return 4;
    }

    public double CalcIn()
    {
        return 4;
    }

    public bool CheckProtection()
    {
        return true;
    }
}
