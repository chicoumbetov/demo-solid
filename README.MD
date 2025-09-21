SOLID is an acronym for five key design principles in object-oriented programming: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. They were introduced by Robert C. Martin, also known as 'Uncle Bob,' and are a set of guidelines to help developers create maintainable, scalable, and flexible software."

"At their core, these principles help us manage complexity by reducing coupling and increasing cohesion. They lead to code that is easier to read, test, and extend without introducing bugs into existing functionality.

# SOLID Principles: A Practical Demo
This repository serves as a practical demonstration of the SOLID principles of object-oriented design. It is structured to provide clear "before" and "after" examples for each principle, showing how to refactor code to be more maintainable, scalable, and flexible.

The project is available in both C# and TypeScript/JavaScript to illustrate that these are language-agnostic concepts.

## The "Why" behind SOLID: Connecting to TDD and Design Patterns
SOLID principles are not just isolated rules; they are the bedrock of modern software design. When an interviewer asks about their relationship to other concepts, this is an excellent opportunity to show a holistic understanding of software engineering.

Relationship to TDD (Test-Driven Development):

The core of TDD is writing a failing test, writing the minimal code to make it pass, and then refactoring. SOLID principles are what guide that refactoring process.

- Single Responsibility Principle (SRP): TDD naturally pushes you towards SRP. When a class has multiple responsibilities, it's difficult to write a single, focused unit test for it. By isolating responsibilities, you make each component easily testable. This leads to more robust test suites and code that is simpler to reason about.

- Open/Closed Principle (OCP): Following OCP is crucial for TDD. When you need to add a new feature, you shouldn't have to modify existing, working, and tested code. Adhering to OCP means you can add new functionality by simply extending a system, confident that your existing tests will not break.

- Dependency Inversion Principle (DIP): DIP makes TDD possible by allowing you to inject mock objects or "stubs" during testing. Instead of a high-level class depending on a concrete database implementation, it depends on an interface. This allows you to "mock" the database during a unit test, isolating your code and making tests fast and reliable.

In essence, SOLID principles are the "how-to" guide for writing the clean, modular code that TDD encourages.

Relationship to Design Patterns:

Design patterns are reusable solutions to common software design problems. SOLID principles are the fundamental building blocks that make these patterns effective. Many patterns are direct implementations of one or more SOLID principles.

- Strategy Pattern: This pattern is a direct application of the Open/Closed Principle (OCP). It allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. This lets you add new strategies (new algorithms) without modifying the client code.

- Factory Pattern: The Factory pattern relies on the Dependency Inversion Principle (DIP). It abstracts the object creation process, allowing a high-level component to depend on an abstraction (the factory interface) rather than on concrete implementations.

- Decorator Pattern: This pattern adheres to the Open/Closed Principle (OCP) by allowing you to add new responsibilities to an object dynamically without altering its core code.

## The Trade-Offs of Using SOLID
While the benefits are significant, it's important to acknowledge that applying SOLID principles isn't a silver bullet. A senior-level engineer understands the trade-offs.

Increased Initial Complexity: Adhering to SOLID often means creating more classes, interfaces, and files, which can increase the initial cognitive load and project setup time. For a very small or short-lived project, this can feel like over-engineering.

Increased Abstraction: The use of interfaces and abstractions, while beneficial for long-term maintenance, can sometimes make it harder to trace the flow of a program for a new developer. The simple switch statement is often easier to read at a glance than a complex dependency injection setup.

Refactoring Effort: Fixing a violation of a SOLID principle can be a significant refactoring effort, especially in a large, legacy codebase. This is why it's best to adopt these principles from the beginning of a project.

## Project Structure
### C# Project Structure
```
.
└── csharp
    ├── D
    │   ├── After
    │   │   ├── ApiDbContext.cs
    │   │   ├── After.csproj
    │   │   ├── DapperDeviceRepo.cs
    │   │   ├── Device.cs
    │   │   ├── EfDeviceRepository.cs
    │   │   ├── IDeviceRepository.cs
    │   │   ├── Program.cs
    │   │   └── Properties
    │   └── Before
    │       ├── ApiDbContext.cs
    │       ├── Before.csproj
    │       ├── Device.cs
    │       │   └── Properties
    │       └── Program.cs
    ├── DemoSolid.sln
    ├── I
    │   ├── After
    │   │   ├── After.csproj
    │   │   ├── Program.cs
    │   │   └── SolarPanel.cs
    │   └── Before
    │       ├── Before.csproj
    │       ├── Program.cs
    │       └── SolarPanel.cs
    ├── L
    │   ├── After
    │   │   ├── After.csproj
    │   │   ├── CodeProcessor.cs
    │   │   └── Program.cs
    │   └── Before
    │       ├── Before.csproj
    │       ├── CodeProcessor.cs
    │       └── Program.cs
    ├── O
    │   ├── After
    │   │   ├── After.csproj
    │   │   ├── ElectricalProtection.cs
    │   │   ├── Program.cs
    │   │   └── Strategy
    │   │       ├── BreakerDCStrategy.cs
    │   │       ├── BreakerHVStrategy.cs
    │   │       ├── BreakerStrategy.cs
    │   │       ├── FuseDCStrategy.cs
    │   │       ├── FuseStrategy.cs
    │   │       └── IProtectionStrategy.cs
    │   └── Before
    │       ├── Before.csproj
    │       ├── ElectricalProtection.cs
    │       └── Program.cs
    ├── PresentationSOLID.pptx
    └── S
        ├── After
        │   ├── After.csproj
        │   ├── Cable.cs
        │   └── Program.cs
        └── Before
            ├── Before.csproj
            ├── Cable.cs
            └── Program.cs
```

### TypeScript/JavaScript Project Structure

```
.
└── js-ts
    ├── D
    │   ├── after
    │   │   └── src
    │   │       ├── D-after.ts
    │   │       └── index.ts
    │   └── before
    │       └── src
    │           ├── D-before.ts
    │           └── index.ts
    ├── I
    │   ├── after
    │   │   └── src
    │   │       ├── I-after.ts
    │   │       └── index.ts
    │   └── before
    │       └── src
    │           ├── I-before.ts
    │           └── index.ts
    ├── L
    │   ├── after
    │   │   └── src
    │   │       ├── L-after.ts
    │   │       └── index.ts
    │   └── before
    │       └── src
    │           ├── L-before.ts
    │           └── index.ts
    ├── O
    │   ├── after
    │   │   └── src
    │   │       ├── O-after.ts
    │   │       └── index.ts
    │   └── before
    │       └── src
    │           ├── O-before.ts
    │           └── index.ts
    ├── S
    │   ├── after
    │   │   └── src
    │   │       ├── S-after.ts
    │   │       └── index.ts
    │   └── before
    │       └── src
    │           ├── S-before.ts
    │           └── index.ts
    ├── package.json
    └── tsconfig.json
```

# SOLID Principles in C# and TypeScript
This repository serves as a practical demonstration of the SOLID principles of object-oriented design and programming. It showcases how to identify common design flaws and refactor them to create cleaner, more maintainable, and scalable code. The examples are provided in both C# and TypeScript for a side-by-side comparison, making it easy to see how these universal principles apply across different languages.

## Project Structure
The project is organized by principle, with each principle's folder containing a Before and an After directory.

csharp/: Contains the C# project for each principle.

js-ts/: Contains the TypeScript project for each principle.

S/ (Single Responsibility)

O/ (Open/Closed)

L/ (Liskov Substitution)

I/ (Interface Segregation)

D/ (Dependency Inversion)

## Getting Started
To run the TypeScript project and see the principles in action, follow these steps:

1. Navigate to the js-ts directory in your terminal.

```cd demo-solid/js-ts```

2. Install the necessary dependencies. This project uses pnpm.

```pnpm install```

3. Run the main script, which will execute the Program.ts files for each principle and print the results to the console.

```pnpm start```

## SOLID Principles Explained
This section provides a recapitulation of each principle as demonstrated in this project.

### S - Single Responsibility Principle
The Single Responsibility Principle states that a class should have only one reason to change.

Before: The Cable class is a monolith that violates this principle. It is responsible for multiple tasks: calculating the section, persisting data (saving and deleting), and generating reports. Any change to these responsibilities would require modifying the single Cable class.

After: The code is refactored by splitting these responsibilities into dedicated classes. CableCalculator handles the calculation, CableRepository manages data persistence, and ReportGenerator creates reports. Each class now has a single, well-defined purpose.

### O - Open/Closed Principle
The Open/Closed Principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

Before: The ElectricalProtection class contains a series of switch statements to perform calculations and checks based on the ProtectionType enum. This makes the class fragile. If a new protection type is added, you would have to open and modify the class, violating the principle.

After: The problem is solved using the Strategy pattern. The ElectricalProtection class now depends on an abstraction (IProtectionStrategy). New protection types can be added as new classes (e.g., BreakerHVStrategy) without ever changing the core ElectricalProtection logic.

### L - Liskov Substitution Principle
The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

Before: The StandardProcessor class defines a ProcessCode method that relies on its AddIdentifier method to add a character to a string. The SimpleProcessor subclass overrides AddIdentifier to do nothing, which breaks the program's intended behavior when substituted for the parent class.

After: The refactored code fixes this by ensuring that both the StandardProcessor and SimpleProcessor correctly implement the same base contract from an abstract CodeProcessor class. This guarantees that they can be used interchangeably without causing runtime errors.

### I - Interface Segregation Principle
The Interface Segregation Principle states that no client should be forced to depend on methods it does not use.

Before: The IElectricalDevice interface is a "fat" interface that contains three methods. While a Battery can implement all of them, a SolarPanel cannot store or consume energy. Forcing it to implement these unnecessary methods is a violation of the principle.

After: The code is refactored by segregating the large interface into smaller, more specific ones (IEnergySource, IEnergyConsumer, IEnergyStorage). A SolarPanel can now implement only the IEnergySource interface it needs, leading to a cleaner design.

### D - Dependency Inversion Principle
The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions.

Before: The high-level Program class is tightly coupled to the low-level ApiDbContext class. This makes the Program class difficult to change or test independently.

After: The refactored code introduces an abstraction: the IDeviceRepository interface. The Program class now depends on this interface, and concrete implementations (EfDeviceRepository, DapperDeviceRepo) also depend on it. This allows you to swap out the low-level implementation without changing the high-level module.

## SOLID and Other Software Concepts
The SOLID principles are the foundation for many common design patterns and are crucial for writing testable code. By adhering to these principles, we create code that is modular, flexible, and easy to unit test. For example, the Open/Closed Principle naturally leads to the Strategy Pattern, and the Dependency Inversion Principle is the basis for Dependency Injection frameworks, which are essential for Test-Driven Development (TDD). Mentioning this connection shows a broader understanding of how these principles influence architectural decisions and lead to more robust software.
