namespace Infal.Service.Abstraction;

public interface IUnitOfWork : IDisposable
{
    IEmployeeService EmployeeService { get; }
    int Save();
}
