using System.Data.Entity.ModelConfiguration;
using NgCourses.Core.Models;

namespace NgCourses.Infrastructure.Persistence.EntityConfigurations
{
    public class DeliveryTypeConfiguration : EntityTypeConfiguration<DeliveryType>
    {
        public DeliveryTypeConfiguration()
        {
            ToTable("ClassDeliveryType", "Common");
            Property(s => s.Id).HasColumnName("ClassDeliveryTypeId");
            Property(s => s.Name).HasColumnName("ClassDeliveryType");
            Property(s => s.IsActive).HasColumnName("IsActive");
        }
    }
}
