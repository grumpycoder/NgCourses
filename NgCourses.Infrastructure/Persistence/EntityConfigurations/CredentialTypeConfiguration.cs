using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class CredentialTypeConfiguration : EntityTypeConfiguration<CredentialType>
    {
        public CredentialTypeConfiguration()
        {
            ToTable("CredentialType", "CareerTech");
            Property(s => s.Id).HasColumnName("CredentialTypeId");
            Property(s => s.Name).HasColumnName("CredentialType");
        }
    }
}
