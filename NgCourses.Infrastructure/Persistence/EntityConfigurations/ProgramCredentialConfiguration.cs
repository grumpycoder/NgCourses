using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class ProgramCredentialConfiguration : EntityTypeConfiguration<ProgramCredential>
    {
        public ProgramCredentialConfiguration()
        {
            ToTable("ProgramCredential", "CareerTech");
            Property(s => s.Id).HasColumnName("ProgramCredentialId");
            Property(s => s.CredentialId).HasColumnName("CredentialId");
        }
    }
}
