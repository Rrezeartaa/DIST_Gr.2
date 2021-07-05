using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace asp.Models
{
    public class Event
    {
        [Key] 
        public string ngjarjaid {get; set;}
        public string title {get; set;}
        public string event_date {get; set;}
        public string theme {get; set;}

    }
}