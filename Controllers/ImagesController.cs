using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;
using System.Threading.Tasks;

namespace PopApp.Web.Controllers
{
    public class ImagesController : Controller
    {
        [Route("resize/{*imagePath}")]
       public async Task<IActionResult> Resize(string imagePath, int width,
           [FromServices] IHostingEnvironment environment,
           [FromServices] INodeServices nodeServices)
        {
            var fileInfo = environment.WebRootFileProvider.GetFileInfo(imagePath);
            if(!fileInfo.Exists) { return NotFound(); }

            var result = await nodeServices.InvokeAsync<string>(
                "imageresizer.js", fileInfo.PhysicalPath, width);

            return Content(result);
        }
    }
}
