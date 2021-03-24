using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc;
using PyramideV1._2.Data;
using PyramideV1._2.Models;

namespace PyramideV1._2.Controllers
{
    [Route("api/players")]
    [ApiController]
    public class PlayerControllers : ControllerBase
    {

        private readonly MockPalyersRepository _repository = new MockPalyersRepository();

        [HttpGet]
        public ActionResult<IEnumerable<Player>> GetAllParts()
        {
            var playerItems = _repository.GetAppPlayers();

            return Ok(playerItems);

        }
        [HttpGet("{id}")]
        public ActionResult<Player> GetPlayerById(int id)
        {
            var playerItem = _repository.GetPlayerById(id);
            return Ok(playerItem);
        }
        [HttpPost]

        public ActionResult<Player> Create(int id,string nom,int score,int nbpart)
        {
            var player = _repository.create(id, nom, score, nbpart);
            return Ok(player);
        }





    }
}
