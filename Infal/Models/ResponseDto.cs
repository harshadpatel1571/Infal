﻿namespace Infal.Models;

public class ResponseDto
{
    public bool Status { get; set; }
    public string Message { get; set; } = string.Empty;
    public object? Data { get; set; }
}
