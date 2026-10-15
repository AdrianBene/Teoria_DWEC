import { Component, signal, WritableSignal } from '@angular/core';
import { QuantityStepperComponent } from '../quantity-stepper-component/quantity-stepper-component';

@Component({
  imports: [QuantityStepperComponent],
  selector: 'app-quantity-stepper-parent-component',
  styleUrl: './quantity-stepper-parent-component.css',
  templateUrl: './quantity-stepper-parent-component.html',
})
export class QuantityStepperParentComponent {
  orderQuantity: WritableSignal<number> = signal<number>(1);
}
