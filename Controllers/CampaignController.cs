using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PopApp.BusinessLogic.DTO;
using PopApp.BusinessLogic.UserAccount;
using System;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PopApp.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class CampaignController : Controller
    {
        private readonly ILogger _logger;
        private readonly ICampaignService campaignService;
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        public CampaignController(
            ICampaignService campaignService,
            ILoggerFactory loggerFactory
            )
        {
            this.campaignService = campaignService;
            _logger = loggerFactory.CreateLogger<CampaignController>();
        }
        [HttpPost]
        public void CreateCampaign([FromBody]CampaignDTO data)
        {
            _logger.LogInformation(0,"inside method");
            try
            {
                campaignService.CreateCampaign(data);
            }
            catch (Exception ex)
            {
                _logger.LogInformation(4, ex.Message);
            }
           
        }
        [HttpPost]
        public IActionResult test()
        {
            return Ok();
        }
        
    }
    
}
