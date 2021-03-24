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

    [Route("api/parts")]
    [ApiController ]
    public class PartController :ControllerBase
    {
        private readonly IPartRepository _partRepository;

        // private readonly IPartRepository _repository;

        // private readonly MockPartRepository partRepository = new MockPartRepository();
        public PartController(IPartRepository repository)
        {
            _partRepository = repository;

        }
        

        [HttpGet]


        public ActionResult <IEnumerable<Part>> GetAllParts()
        {
            var partItems = _partRepository.GetAppParts();

            return Ok(partItems);
        }
        [HttpGet("{id}")]
        public ActionResult<Part> GetPartById(int id)
        {
            var partItem = _partRepository.GetPartById(id);
            return Ok(partItem);
        }
    }
}
