using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class ClassTypeConfiguration : EntityTypeConfiguration<ClassType>
    {
        public ClassTypeConfiguration()
        {
            ToTable("ClassTypes", "Common");
            Property(s => s.Id).HasColumnName("Id");
            Property(s => s.Name).HasColumnName("Name");
            Property(s => s.Description).HasColumnName("Description");
        }
    }
}
