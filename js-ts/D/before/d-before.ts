// Violation of the Dependency Inversion Principle (DIP)
// The high-level `PaymentProcessor` class depends directly on the
// low-level, concrete `StripeApi` class.

class StripeApi {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} via Stripe.`);
    // A lot of Stripe-specific logic here
  }
}

// High-level module: depends on a concrete low-level implementation.
class PaymentProcessor {
  private stripe: StripeApi;

  constructor() {
    this.stripe = new StripeApi(); // Direct dependency
  }

  processOrder(amount: number): void {
    this.stripe.processPayment(amount);
  }
}

// Example usage
const processor = new PaymentProcessor();
processor.processOrder(100);
