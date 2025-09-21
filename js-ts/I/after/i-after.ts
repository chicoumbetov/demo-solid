// Adhering to the Interface Segregation Principle (ISP)
// We split the "fat" interface into smaller, more specific ones.

interface IWorkable {
  work(): void;
}

interface IEatable {
  eat(): void;
}

interface ISleepable {
  sleep(): void;
}

// Now, classes only implement the interfaces they need.
class HumanWorkerAfter implements IWorkable, IEatable, ISleepable {
  work(): void {
    console.log("Human is working.");
  }
  eat(): void {
    console.log("Human is eating.");
  }
  sleep(): void {
    console.log("Human is sleeping.");
  }
}

// The RobotWorker only implements `IWorkable`.
class RobotWorkerAfter implements IWorkable {
  work(): void {
    console.log("Robot is working.");
  }
}

// Functions now depend only on the interfaces they need.
function manageWork(worker: IWorkable): void {
  worker.work();
}

function manageBreak(eater: IEatable, sleeper: ISleepable): void {
  eater.eat();
  sleeper.sleep();
}

const humanAfter = new HumanWorkerAfter();
const robotAfter = new RobotWorkerAfter();

manageWork(humanAfter);
manageWork(robotAfter);

manageBreak(human, human); // Only humans can take a break.
