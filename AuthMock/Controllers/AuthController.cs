using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace AuthMock.Controllers
{
    public class AuthController : ApiController
    {
        public HttpResponseMessage Get(string token)
        {
            var authUser = new AuthUser()
            {
                UserName = "mark", 
                Token = token, 
                BearerToken = Guid.NewGuid().ToString(), 
                IsAuthenticated = true
            };
            return this.Request.CreateResponse(HttpStatusCode.OK, authUser);
        }
    }

    public class AuthUser   
    {
        public string UserName { get; set; }
        public string Token { get; set; }
        public string BearerToken { get; set; }
        public bool IsAuthenticated { get; set; }
    }
}
