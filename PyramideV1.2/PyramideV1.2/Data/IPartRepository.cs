using PyramideV1._2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PyramideV1._2.Data
{
     public interface IPartRepository
    {
       
        
        IEnumerable<Part> GetAppParts();

        Part GetPartById(int id);
    }
}
