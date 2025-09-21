// Violation of the Liskov Substitution Principle (LSP)
// The SimpleProcessor class cannot be substituted for its parent without breaking the program.

const CHAR_IDENTIFIER = '_';

// Base class
export class StandardProcessor {
    public addIdentifier(code: string): string {
        const underscoreLocation = Math.floor(Math.random() * (code.length - 1));
        return code.slice(0, underscoreLocation) + CHAR_IDENTIFIER + code.slice(underscoreLocation);
    }

    public processCode(code: string): void {
        const newCode = this.addIdentifier(code);

        // This line assumes the identifier was successfully added.
        // If a subclass violates this assumption, the program will break.
        const identifier = newCode.split(CHAR_IDENTIFIER)[1];
        
        console.log(`
            Process finished for:
            Code => ${newCode}
            ID => ${identifier}
        `);
    }
}

// Subclass that violates the principle
export class SimpleProcessor extends StandardProcessor {
    // This method violates the contract of the base class by not adding the identifier.
    // The base class's processCode method will break as a result.
    public override addIdentifier(code: string): string {
        // I want to do nothing
        return code;
    }
}
