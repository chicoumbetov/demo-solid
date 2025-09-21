namespace After;

public abstract class CodeProcessor
{
    public abstract void ProcessCode(string code);
}

public class StandardProcessor : CodeProcessor
{
    private const char CHAR_IDENTIFIER = '_';

    public override void ProcessCode(string code)
    {
        // Gestion de l'identifier dans cette classe uniquement
        code = AddIdentifier(code);
        Console.WriteLine($"""
            Process terminé pour :
            Code => {code}
            ID => {code.Split(CHAR_IDENTIFIER)[1]}

            """);
    }

    private string AddIdentifier(string code)
    {
        Random random = new();
        var underscoreLocation = random.Next(0, code.Length - 1);
        return code.Insert(underscoreLocation, CHAR_IDENTIFIER.ToString());
    }
}

public class SimpleProcessor : CodeProcessor
{
    public override void ProcessCode(string code)
    {
        // Pas d'identifier du tout - traitement différent
        Console.WriteLine($"""
            Process terminé pour :
            Code => {code}

            """);
    }
}