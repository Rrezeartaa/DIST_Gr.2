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

        //  public DbSet<Student> student { get; set; }

        public DbSet<Ankesa> ankesat { get; set; }  
  
        protected override void OnModelCreating(ModelBuilder builder)  
        {  
            base.OnModelCreating(builder);  
        //     builder.Conventions.Remove<PluralizingTableNameConvention>();

        //  builder.Entity<Event>()
        //      .HasMany(c => c.student).WithMany(i => i.events)
        //      .Map(t => t.MapLeftKey("ngjarjaid")
        //          .MapRightKey("prof_id")
        //          .ToTable("CourseInstructor"));
        }  
  
        public override int SaveChanges()  
        {  
            ChangeTracker.DetectChanges();  
            return base.SaveChanges();  
        }
        
    }
}