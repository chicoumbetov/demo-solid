// Adhering to the Liskov Substitution Principle (LSP)
// The subclasses are now substitutable for their base type without breaking the program.

const CHAR_IDENTIFIER = '_';

// Base class - Defines a common contract.
// Subclasses must implement the ProcessCode method.
export abstract class CodeProcessor {
    public abstract processCode(code: string): void;
}

// Subclass that correctly implements the contract
export class StandardProcessor extends CodeProcessor {
    private addIdentifier(code: string): string {
        const underscoreLocation = Math.floor(Math.random() * (code.length - 1));
        return code.slice(0, underscoreLocation) + CHAR_IDENTIFIER + code.slice(underscoreLocation);
    }

    // The implementation correctly fulfills the contract of the base class.
    public override processCode(code: string): void {
        const newCode = this.addIdentifier(code);
        const identifier = newCode.split(CHAR_IDENTIFIER)[1];
        
        console.log(`
            Process finished for:
            Code => ${newCode}
            ID => ${identifier}
        `);
    }
}

// Another subclass that correctly implements the contract
export class SimpleProcessor extends CodeProcessor {
    // This implementation is different but still valid according to the contract.
    public override processCode(code: string): void {
        console.log(`
            Process finished for:
            Code => ${code}
        `);
    }
}

/*
* The core change is the introduction of a new abstract base class, CodeProcessor. This class defines the public contract: every processor must have a ProcessCode method. The specific implementation of that method is left to the subclasses.

*StandardProcessor fulfills the contract by implementing ProcessCode with its own unique identifier logic.

* SimpleProcessor fulfills the same contract by implementing a different, simpler ProcessCode method.

* Because both subclasses now correctly implement the defined contract, they can be used interchangeably in the ProcessCodes function without any runtime errors. The "after" code now correctly adheres to the LSP.
*/
