
using Before;


string[] codeToProcess = ["45513363", "54546854153", "469746155"];

StandardProcessor processor = new SimpleProcessor();
ProcessCodes(processor, codeToProcess);

void ProcessCodes(StandardProcessor processor, IEnumerable<string> codesToProcess)
{
    foreach (var code in codesToProcess)
    {
        processor.ProcessCode(code);
    }
}