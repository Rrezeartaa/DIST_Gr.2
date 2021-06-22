using System.ComponentModel.DataAnnotations;

namespace asp.Models
{
    public class Ankesa
    {
        [Key] 
        public string id {get; set;}
        public string name {get; set;}
        public string email {get; set;}
        public string content {get; set;}

    }
}