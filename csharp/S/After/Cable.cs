
namespace After;

internal class Cable
{
    public int Id { get; set; }
    public eCableType CableType { get; set; }
    public double Current { get; set; }
    public double Length { get; set; }
    public double Section { get; set; }
}

internal class CableCalculator
{
    public double CalculateSection(Cable cable)
    {
        return cable.CableType switch
        {
            eCableType.Copper => cable.Current * cable.Length * 0.023,
            eCableType.Aluminum => cable.Current * cable.Length * 0.037,
            _ => 0
        };
    }
}

internal class CableRepository
{
    private readonly List<Cable> _saves = [];

    public void Save(Cable cable)
    {
        cable.Id = _saves.Count != 0 ? _saves.Max(x => x.Id) + 1 : 1;
        _saves.Add(cable);
    }

    public void DeleteSave(int id)
    {
        _saves.RemoveAll(x => x.Id == id);
    }
}

internal class ReportGenerator
{
    public string GenerateReport(Cable cable)
    {
        return $"Section calculée : {cable.Section}mm2 pour le type {cable.CableType}";
    }

    public string GenerateDetailedReport(Cable cable)
    {
        return $"Cable: {cable.CableType}, Courant: {cable.Current}A, Longueur: {cable.Length}m, Section: {cable.Section}mm2";
    }
}



internal enum eCableType
{
    Copper,
    Aluminum
}
