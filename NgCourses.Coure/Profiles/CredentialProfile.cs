using AutoMapper;
using NgCourses.Core.Dtos;
using NgCourses.Core.Models;

namespace NgCourses.Core.Profiles
{
    public class CredentialProfile : Profile
    {
        public CredentialProfile()
        {
            CreateMap<CredentialEditDto, Credential>();

        }
    }
}
