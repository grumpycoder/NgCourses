using AutoMapper;
using NgCourses.Core.Dtos;
using NgCourses.Core.Models;

namespace NgCourses.Core.Profiles
{
    public class ClusterProfile : Profile
    {
        public ClusterProfile()
        {
            CreateMap<ClusterEditDto, Cluster>();

        }
    }
}
