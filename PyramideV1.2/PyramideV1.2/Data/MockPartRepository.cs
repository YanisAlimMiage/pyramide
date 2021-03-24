using PyramideV1._2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;

namespace PyramideV1._2.Data
{
    public class MockPartRepository : IPartRepository
    {
        public List<Part>  _liste;
        public MockPartRepository()
        {
            var data = JsonConvert.DeserializeObject<dynamic>(File.ReadAllText("./Data/json.json"));
            
            _liste = new List<Part>();
            foreach (var part in data.v1)
            {
                List<string> proposision= new List<string>();
                foreach (var prop in part.propositions)
                {
                    string p = prop;
                    proposision.Add(p);

                }
                _liste.Add(new Part { idPart = part.idPart, propositions = proposision, response = part.response });
            }
           
            
            
        }
       
     
        public IEnumerable<Part> GetAppParts()
        {
            //var data = JsonConvert.DeserializeObject<dynamic>(File.ReadAllText("./Data/json.json"));
           
           
           
            return _liste;
            }

        public Part GetPartById(int id)
        {
            return _liste.Find(x => x.idPart==id);
        }
        
    }
}
