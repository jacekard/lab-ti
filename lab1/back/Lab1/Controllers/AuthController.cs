using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Lab1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private IDictionary<string, User> Users;

        public AuthController()
        {
            this.Users = ExampleUsers.Users;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Users.Values.ToArray());
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] UserCredentials credentials)
        {
            if (Users.TryGetValue(credentials.Login, out var loggedUser))
            {
                if (loggedUser.Password == credentials.Password)
                {
                    return this.Ok(loggedUser);
                }
            }
         
            return this.Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (Users.ContainsKey(user.Login))
            {
                return this.BadRequest();
            }

            if (Users.TryAdd(user.Login, user))
            {
                return this.Ok();
            }
            else
            {
                throw new Exception();
            }
        }
    }
}
