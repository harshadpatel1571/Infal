namespace Infal.Service.Service;

class EmployeeService : GenericService<Employee>, IEmployeeService
{
    public EmployeeService(GenricDemoContext context) : base(context)
    {
    }
}