using Microsoft.AspNetCore.Mvc;
using PopApp.BusinessLogic.UserAccount;
using PopApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PopApp.Web.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IUserService userService;
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public AccountController(IUserService userService)
        {
            this.userService = userService;
        }

        // Account/GetUser?userId=5
        [HttpGet]
        public async Task<IActionResult> GetUser([FromQuery]string userId)
        {
            User user = await this.userService.GetByIdAsync(userId);
            //var model = this.mapper.Map<UserResponseModel>(user);

            if (user == null)
            {
                return this.NotFound();
            }

            return this.Ok(user);
        }



        [HttpGet("[action]")]
        public IEnumerable<SampleUser> Users()
        {
            var random = new Random();
            return Enumerable.Range(1, 1).Select(index => new SampleUser
            {
                TotalUsers = random.Next(340000, 360000),
                TargetedUsers = random.Next(140000, 150000),
                Emailable = random.Next(30000, 35000),
                Online = random.Next(110000, 125000),
                Offline = random.Next(25000, 30000)
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<SampleUser> test()
        {
            var random = new Random();
            return Enumerable.Range(1, 1).Select(index => new SampleUser
            {
                TotalUsers = random.Next(340000, 360000),
                TargetedUsers = random.Next(140000, 150000),
                Emailable = random.Next(30000, 35000),
                Online = random.Next(110000, 125000),
                Offline = random.Next(25000, 30000)
            });
        }

        public class SampleUser
        {
            public int TotalUsers { get; set; }
            public int TargetedUsers { get; set; }
            public int Emailable { get; set; }
            public int Online { get; set; }
            public int Offline { get; set; }
        }
    }

}
