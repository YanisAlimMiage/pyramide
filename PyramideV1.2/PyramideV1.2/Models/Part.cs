using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PyramideV1._2.Models
{
    public class Part
    {

       public int idPart { get; set; }
       public List<string> propositions { get; set; }
        public string response { get; set; }
       


      
        public override string ToString()
        {
            return "idPart: " + idPart + ", proposition:{" + propositions +"} response: "+ response;
        }
    }
}
