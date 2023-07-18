namespace Infal.Service.Service;

class EmployeeService : GenericService<Employee>, IEmployeeService
{
    public EmployeeService(InfalDbContext context) : base(context)
    {
    }
}