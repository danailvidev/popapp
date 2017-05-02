using Microsoft.AspNetCore.Mvc;
using PopApp.BusinessLogic.DTO;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PopApp.Web.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginDTO model)
        {
            var obj = new PopAppUser
            {
                userName = model.Username,
                token = "fake-token"
            };
            if (model.Username == "x" && model.Password == "x")
            {
                return Ok(obj);
            }
            else
            {
                return Unauthorized();
            }
        }
        
    }

    public class PopAppUser
    {
        public string userName;
        public string token;
    }
}
