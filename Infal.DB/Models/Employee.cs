using System;
using System.Collections.Generic;

namespace Infal.DB.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string EmpId { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string EmailId { get; set; } = null!;

    public string? MobileNo { get; set; }
}
