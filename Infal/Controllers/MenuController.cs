using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Infal.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public MenuController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("get")]
        public async Task<ResponseDto> Get()
        {
            var response = new ResponseDto();
            var listData = await _unitOfWork.MenueService.GetAllMenue();

            if (listData.Count() > 0)
            {
                response.Status = true;
                response.Message = "Recored Found.";
                response.Data = listData;
            }
            else
            {
                response.Status = false;
                response.Message = "No Recored Found.";
                response.Data = null;
            }

            return response;
        }
    }
}
