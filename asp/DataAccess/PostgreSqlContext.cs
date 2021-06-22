using Microsoft.EntityFrameworkCore;  
using asp.Models;
namespace asp.DataAccess
{
    public class PostgreSqlContext: DbContext
    {
         public PostgreSqlContext(DbContextOptions<PostgreSqlContext> options) : base(options)  
        {  
        }  
  
        public DbSet<Event> events { get; set; } 

        public DbSet<Ankesa> ankesat { get; set; }  
  
        protected override void OnModelCreating(ModelBuilder builder)  
        {  
            base.OnModelCreating(builder);  
        }  
  
        public override int SaveChanges()  
        {  
            ChangeTracker.DetectChanges();  
            return base.SaveChanges();  
        }
        
    }
}