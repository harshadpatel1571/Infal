namespace Infal.DB.DBModel;

public sealed class Employee
{
    [Key]
    public int Id { get; set; }

    public string EmpId { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string EmailId { get; set; } = string.Empty;

    public string MobileNo { get; set; } = string.Empty;
}
