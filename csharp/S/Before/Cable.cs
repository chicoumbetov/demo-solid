namespace Before;

internal class Cable
{
    public int Id { get; set; }
    public eCableType CableType { get; set; }
    public double Current { get; set; }
    public double Length { get; set; }
    public double Section { get; set; }

    private readonly List<Cable> _saves = [];

    public double CalculateSection()
    {
        return CableType switch
        {
            eCableType.Copper => Current * Length * 0.023,
            eCableType.Aluminum => Current * Length * 0.037,
            _ => 0
        };
    }

    public void Save()
    {
        Id = _saves.Count != 0 ? _saves.Max(x => x.Id) + 1 : 1;
        _saves.Add(this);
    }

    public void DeleteSave(int id)
    {
        _saves.RemoveAll(x => x.Id == id);
    }

    public string GenerateReport(double section)
    {
        return $"Section calculée : {section}mm2 pour le type {CableType}";
    }

    public string GenerateDetailedReport(double section)
    {
        return $"Cable: {CableType}, Courant: {Current}A, Longueur: {Length}m, Section: {section}mm2";
    }
}

internal enum eCableType
{ 
    Copper,
    Aluminum
}

