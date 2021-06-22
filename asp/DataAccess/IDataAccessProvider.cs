using asp.Models;  
using System.Collections.Generic;
namespace asp.DataAccess
{
    public interface IDataAccessProvider
    {
        void AddEventRecord(Event events);  
        void UpdateEventRecord(Event events);  
        void DeleteEventRecord(string id);  
        Event GetEventSingleRecord(string id);  
        List<Event> GetEventRecords();

        void AddAnkesaRecord(Ankesa ankesat); 
        List<Ankesa> GetAnkesaRecords(); 
    }
}