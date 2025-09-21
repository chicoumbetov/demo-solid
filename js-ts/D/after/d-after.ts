// Adhering to the Dependency Inversion Principle (DIP)
// The high-level `PaymentProcessor` now depends on an abstraction (an interface),
// not on a concrete implementation.

interface IPaymentGateway {
  processPayment(amount: number): void;
}

// Low-level modules implement the abstraction.
class StripeApiAfter implements IPaymentGateway {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} via Stripe.`);
  }
}

class PayPalApi implements IPaymentGateway {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} via PayPal.`);
  }
}

// High-level module: now depends on the `IPaymentGateway` abstraction.
// The concrete implementation is "injected" at runtime.
class PaymentProcessorAfter {
  constructor(private paymentGateway: IPaymentGateway) {}

  processOrder(amount: number): void {
    this.paymentGateway.processPayment(amount);
  }
}

// Example usage
const stripeProcessor = new PaymentProcessorAfter(new StripeApiAfter());
stripeProcessor.processOrder(100);

const paypalProcessor = new PaymentProcessorAfter(new PayPalApi());
paypalProcessor.processOrder(150);
