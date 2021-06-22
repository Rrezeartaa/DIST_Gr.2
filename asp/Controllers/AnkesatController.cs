using Microsoft.AspNetCore.Mvc;  
using asp.DataAccess;  
using asp.Models;  
using System;  
using System.Collections.Generic; 

namespace asp.Controllers
{
    [Route("api/[controller]")]
 
    [ApiController]
    public class AnkesatController : ControllerBase 
    {
        private readonly IDataAccessProvider _dataAccessProvider;  
  
        public AnkesatController(IDataAccessProvider dataAccessProvider)  
        {  
            _dataAccessProvider = dataAccessProvider;  
        }  

        [HttpGet]  
        public IEnumerable<Ankesa> Get()  
        {  
            return _dataAccessProvider.GetAnkesaRecords();  
        }  

        [HttpPost]  
        public IActionResult Create([FromBody]Ankesa ankesat)  
        {  
            if (ModelState.IsValid)  
            {  
                Guid obj = Guid.NewGuid();  
                ankesat.id = obj.ToString();  
                _dataAccessProvider.AddAnkesaRecord(ankesat);  
                return Ok();  
            }  
            return BadRequest();  
        }  
  
    }
}