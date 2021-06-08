using asp.Models;  
using System.Collections.Generic;  
using System.Linq;  
  
namespace asp.DataAccess  
{  
    public class DataAccessProvider: IDataAccessProvider  
    {  
        private readonly PostgreSqlContext _context;  
  
        public DataAccessProvider(PostgreSqlContext context)  
        {  
            _context = context;  
        }  
  
        public void AddEventRecord(Event events)  
        {  
            _context.events.Add(events);  
            _context.SaveChanges();  
        }  
  
        public void UpdateEventRecord(Event events)  
        {  
            _context.events.Update(events);  
            _context.SaveChanges();  
        }  
  
        public void DeleteEventRecord(string id)  
        {  
            var entity = _context.events.FirstOrDefault(t => t.ngjarjaid == id);  
            _context.events.Remove(entity);  
            _context.SaveChanges();  
        }  
  
        public Event GetEventSingleRecord(string id)  
        {  
            return _context.events.FirstOrDefault(t => t.ngjarjaid == id);  
        }  
  
        public List<Event> GetEventRecords()  
        {  
            return _context.events.ToList();  
        }  
    }  
}