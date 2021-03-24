using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PyramideV1._2.Models;
namespace PyramideV1._2.Data
{
    interface IPlayerRepository
    {
        IEnumerable<Player> GetAppPlayers();

        Player GetPlayerById(int id);

        Player create(int id, string nom, int score, int nbpart);
    }
}
