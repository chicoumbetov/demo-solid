using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace After.Strategy;

internal class FuseStrategy : IProtectionStrategy
{
    public double CalcBreakingCapacity()
    {
        return 2;
    }

    public double CalcIn()
    {
        return 2;
    }

    public bool CheckProtection()
    {
        return true;
    }
}
