namespace Before;

public class StandardProcessor
{
    private const char CHAR_IDENTIFIER = '_';

    public virtual string AddIdentifier(string code)
    {
        Random random = new();
        var underscoreLocation = random.Next(0, code.Length - 1);

        return code.Insert(underscoreLocation, CHAR_IDENTIFIER.ToString());
    }

    public void ProcessCode(string code)
    {
        code = AddIdentifier(code);

        Console.WriteLine($"""
            Process terminé pour :
            Code => {code}
            ID => {code.Split(CHAR_IDENTIFIER)[1]}

            """);
    }
}

public class SimpleProcessor : StandardProcessor
{
    public override string AddIdentifier(string code)
    {
        // je veux rien faire

        return code;
    }
}
