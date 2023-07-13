namespace Infal.Service.Service;

class EmployeeService : GenericService<Employee>, IEmployeeService
{
    public EmployeeService(InfalContext context) : base(context)
    {
    }
}