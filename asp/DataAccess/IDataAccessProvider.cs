using asp.Models;  
using System.Collections.Generic;
namespace asp.DataAccess
{
    public interface IDataAccessProvider
    {
        void AddEventRecord(Event events);  
        void UpdateEventRecord(Event events);  
        void DeleteEventRecord(int id);  
        Event GetEventSingleRecord(int id);  
        List<Event> GetEventRecords();
    }
}