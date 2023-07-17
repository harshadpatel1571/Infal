using System;
using System.Collections.Generic;

namespace Infal.DB.Models;

public partial class Student
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string MobileNo { get; set; } = null!;

    public virtual StudentCourse? StudentCourse { get; set; }
}
