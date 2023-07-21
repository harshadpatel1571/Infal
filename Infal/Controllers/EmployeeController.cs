namespace Infal.Controllers;

[Route("[controller]")]
[ApiController]
public class EmployeeController : Controller
{
    private readonly IUnitOfWork _unitOfWork;
    public EmployeeController(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    [HttpPost]
    [Route("save")]
    public async Task<ResponseDto> Save(Employee employee)
    {
        var response = new ResponseDto();

        if (employee != null)
        {
            try
            {
                await _unitOfWork.EmployeeService.Add(employee);
                response.Status = true;
                response.Message = "Record Save Successfully.";
                response.Data = employee;
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Message = "Error !!";
                response.Data = null;
            }
        }
        else
        {
            response.Status = false;
            response.Message = "Model Property Required";
            response.Data = null;
        }

        return response;
    }

    [HttpPut]
    [Route("update")]
    public async Task<ResponseDto> Update(Employee employee)
    {
        var response = new ResponseDto();

        if (employee != null)
        {
            try
            {
                await _unitOfWork.EmployeeService.Update(employee);
                response.Status = true;
                response.Message = "Record Update Successfully.";
                response.Data = employee;
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Message = "Error !!";
                response.Data = null;
            }
        }
        else
        {
            response.Status = false;
            response.Message = "Model Property Required";
            response.Data = null;
        }

        return response;
    }

    [HttpGet]
    [Route("get")]
    public async Task<ResponseDto> Get()
    {
        var response = new ResponseDto();
        var listData = await _unitOfWork.EmployeeService.GetAll();

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

    [HttpGet]
    [Route("getSingle")]
    public async Task<ResponseDto> GetSingle(int id)
    {
        var response = new ResponseDto();
        var singleData = await _unitOfWork.EmployeeService.GetById(id);

        if (singleData != null)
        {
            response.Status = true;
            response.Message = "Recored Found.";
            response.Data = singleData;
        }
        else
        {
            response.Status = false;
            response.Message = "No Recored Found.";
            response.Data = null;
        }

        return response;
    }

    [HttpDelete]
    [Route("delete")]
    public async Task<ResponseDto> Delete(int id)
    {
        var response = new ResponseDto();

        if (id != 0)
        {
            try
            {
                await _unitOfWork.EmployeeService.Remove(id);

                response.Status = true;
                response.Message = "Recored Deleted Successfully";
                response.Data = null;
            }
            catch
            {
                response.Status = false;
                response.Message = "Error !!";
                response.Data = null;
            }
        }
        else
        {
            response.Status = false;
            response.Message = "Wrong Id Found";
            response.Data = null;
        }

        return response;

    }

    //[HttpGet]
    //[Route("bindGrid")]
    //public async Task<DataSourceResult> BindGrid([DataSourceRequest] DataSourceRequest request)
    //{
    //    var data = await _unitOfWork.EmployeeService.GetAll();
    //    return data.ToDataSourceResult(request);
    //}

    //[HttpPut]
    //[Route("saveGridData")]
    //public async Task<JsonResult> SaveGridData([FromBody] PostEmpModel postModel)
    //{
    //    var dsRequest = new DataSourceRequest();
    //    dsRequest.Take = postModel.Take;
    //    dsRequest.Skip = postModel.Skip;
    //    dsRequest.PageSize = postModel.Take;
    //    // we check if this is an existing or a new item

    //    try
    //    {
    //        var model = new Employee
    //        {
    //            Id = postModel.Employee.Id ?? 0,
    //            EmailId = postModel.Employee.EmailId,
    //            EmpId = postModel.Employee.EmpId,
    //            MobileNo = postModel.Employee.MobileNo,
    //            Name = postModel.Employee.Name
    //        };
    //        await _unitOfWork.EmployeeService.Add(model);
    //    }
    //    catch (Exception ex)
    //    {

    //    }

    //    if (!string.IsNullOrEmpty(postModel.Filter))
    //    {
    //        dsRequest.Filters = FilterDescriptorFactory.Create(postModel.Filter);
    //    }

    //    if (!string.IsNullOrEmpty(postModel.Sort))
    //    {
    //        dsRequest.Sorts = DataSourceDescriptorSerializer.Deserialize<SortDescriptor>(postModel.Sort);
    //    }

    //    if (!string.IsNullOrEmpty(postModel.Group))
    //    {
    //        dsRequest.Groups = DataSourceDescriptorSerializer.Deserialize<GroupDescriptor>(postModel.Group);
    //    }

    //    var data = await _unitOfWork.EmployeeService.GetAll();

    //    var result = Json(data.ToDataSourceResult(dsRequest));

    //    return result;
    //}

    //public class PostEmpModel
    //{
    //    public EmployeeDto? Employee { get; set; }
    //    public int Take { get; set; }
    //    public int Skip { get; set; }
    //    public string? Sort { get; set; }
    //    public string? Filter { get; set; }
    //    public string? Group { get; set; }
    //}
}
