using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class ClusterConfiguration : EntityTypeConfiguration<Cluster>
    {
        public ClusterConfiguration()
        {
            ToTable("Cluster", "CareerTech");
            Property(s => s.Id).HasColumnName("ClusterId");
            Property(s => s.Name).HasColumnName("Cluster");
            Property(s => s.ClusterTypeId).HasColumnName("ClusterTypeId");
        }
    }
}
