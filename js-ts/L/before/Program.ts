import { SimpleProcessor, StandardProcessor } from "./CodeProcessor.ts";

const codeToProcess: string[] = ["45513363", "54546854153", "469746155"];

// The problem: we can't use SimpleProcessor where a StandardProcessor is expected
// without causing a runtime error.
const processor: StandardProcessor = new SimpleProcessor();
processCodes(processor, codeToProcess);

function processCodes(processor: StandardProcessor, codesToProcess: string[]): void {
    for (const code of codesToProcess) {
        processor.processCode(code);
    }
}
