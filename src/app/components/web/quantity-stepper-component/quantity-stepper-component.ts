import { Component, model, ModelSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-stepper-component',
  styleUrl: './quantity-stepper-component.css',
  templateUrl: './quantity-stepper-component.html',
})
export class QuantityStepperComponent {
  value: ModelSignal<number> = model.required();

  decrement() {
    if (this.value() > 1) this.value.update((val) => val - 1);
    console.log(this.value());
  }
  increment() {
    this.value.update((val) => val + 1);
    console.log(this.value());
  }
}
