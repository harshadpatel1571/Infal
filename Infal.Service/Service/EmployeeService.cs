namespace Infal.Service.Service;

class EmployeeService : GenericService<EmployeeDto>, IEmployeeService
{
    public EmployeeService(InfalContext context) : base(context)
    {
    }
}