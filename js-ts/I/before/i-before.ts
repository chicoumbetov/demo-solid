// Violation of the Interface Segregation Principle (ISP)
// The `IWorker` interface is "fat" and forces a robot to implement methods
// that don't apply to it, such as `eat()` and `sleep()`.

interface IWorker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class HumanWorker implements IWorker {
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

// A robot doesn't eat or sleep, but it's forced to implement these methods.
class RobotWorker implements IWorker {
  work(): void {
    console.log("Robot is working.");
  }
  // ISP violation: These methods are irrelevant for a robot.
  eat(): void {
    throw new Error("Robots don't eat.");
  }
  sleep(): void {
    throw new Error("Robots don't sleep.");
  }
}

// The `manage` function doesn't need to know about eating or sleeping for a robot,
// but it's tied to the `IWorker` interface which includes them.
function manage(worker: IWorker): void {
  worker.work();
  // We can't call this on a robot without it throwing an error.
  // worker.eat();
}

const human = new HumanWorker();
const robot = new RobotWorker();

manage(human);
manage(robot);
