using System.ComponentModel.DataAnnotations;

namespace asp.Models
{
    public class Event
    {
        [Key] 
        public string ngjarja_id {get; set;}
        public string title {get; set;}
        public string event_date {get; set;}
        public string theme{get; set;}

    }
}