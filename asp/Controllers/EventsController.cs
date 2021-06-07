using Microsoft.AspNetCore.Mvc;  
using asp.DataAccess;  
using asp.Models;  
using System;  
using System.Collections.Generic; 

namespace asp.Controllers
{
    [Route("api/[controller]")]
 
    [ApiController]
    public class EventsController : ControllerBase 
    {
        private readonly IDataAccessProvider _dataAccessProvider;  
  
        public EventsController(IDataAccessProvider dataAccessProvider)  
        {  
            _dataAccessProvider = dataAccessProvider;  
        }  
  
        [HttpGet]  
        public IEnumerable<Event> Get()  
        {  
            return _dataAccessProvider.GetEventRecords();  
        }  

        [HttpPost]  
        public IActionResult Create([FromBody]Event events)  
        {  
            if (ModelState.IsValid)  
            {  
                Guid obj = Guid.NewGuid();  
                events.ngjarja_id = obj.ToString();  
                _dataAccessProvider.AddEventRecord(events);  
                return Ok();  
            }  
            return BadRequest();  
        }  
  
        [HttpGet("{id}")]  
        public Event Details(string id)  
        {  
            return _dataAccessProvider.GetEventSingleRecord(id);  
        }  
  
        [HttpPut]  
        public IActionResult Edit([FromBody]Event events)  
        {  
            if (ModelState.IsValid)  
            {  
                _dataAccessProvider.UpdateEventRecord(events);  
                return Ok();  
            }  
            return BadRequest();  
        }  
  
        [HttpDelete("{id}")]  
        public IActionResult DeleteConfirmed(string id)  
        {  
            var data = _dataAccessProvider.GetEventSingleRecord(id);  
            if (data == null)  
            {  
                return NotFound();  
            }  
            _dataAccessProvider.DeleteEventRecord(id);  
            return Ok();  
        }  
    }
}