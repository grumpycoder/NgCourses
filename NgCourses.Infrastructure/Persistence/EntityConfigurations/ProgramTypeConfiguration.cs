using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class ProgramTypeConfiguration : EntityTypeConfiguration<ProgramType>
    {
        public ProgramTypeConfiguration()
        {
            ToTable("ProgramType", "CareerTech");
            Property(s => s.Id).HasColumnName("ProgramTypeId");
            Property(s => s.Name).HasColumnName("ProgramType");
            Property(s => s.Code).HasColumnName("ProgramTypeCode");
        }
    }
}
