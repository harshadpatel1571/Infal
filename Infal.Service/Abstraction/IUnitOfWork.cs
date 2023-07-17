namespace Infal.Service.Abstraction;

public interface IUnitOfWork : IDisposable
{
    IEmployeeService EmployeeService { get; }
    IMenueService MenueService { get; }
    int Save();
}
