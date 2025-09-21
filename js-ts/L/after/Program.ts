import { CodeProcessor, SimpleProcessor, StandardProcessor } from "./CodeProcessor.ts";

const codeToProcess: string[] = ["45513363", "54546854153", "469746155"];

// The problem is solved: we can now use both processors interchangeably
// without any issues.
const standardProcessor: CodeProcessor = new StandardProcessor();
processCodes(standardProcessor, codeToProcess);

const simpleProcessor: CodeProcessor = new SimpleProcessor();
processCodes(simpleProcessor, codeToProcess);

function processCodes(processor: CodeProcessor, codesToProcess: string[]): void {
    for (const code of codesToProcess) {
        processor.processCode(code);
    }
}
