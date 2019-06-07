using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class CourseTypeConfiguration : EntityTypeConfiguration<CourseType>
    {
        public CourseTypeConfiguration()
        {
            ToTable("CourseTypes", "Common");
            Property(s => s.Id).HasColumnName("CourseTypeId");
            Property(s => s.Name).HasColumnName("CourseTypeName");
            Property(s => s.Code).HasColumnName("CourseType");
        }
    }
}
