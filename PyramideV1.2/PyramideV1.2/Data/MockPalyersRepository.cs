using PyramideV1._2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;

namespace PyramideV1._2.Data
{
    public class MockPalyersRepository : IPlayerRepository
    {
        public Player create(int id, string nom, int score, int nbpart) 
        { 
            Player player = new Player(id, nom, score, nbpart);
            Player player2 = new Player(1, "yanis",0, 1);
            string json;
            json = JsonConvert.SerializeObject( "{id:"+player2.id+"}");
            // json.Append<dynamic>(File.ReadAllText("./Data/Player.json"));
            File.WriteAllText("./Data/Player.json", json);
            return player;
        }

        public IEnumerable<Player> GetAppPlayers()
        {
            var players = new List<Player>();
            return players ;
        }

        public Player GetPlayerById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
