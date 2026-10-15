import { Component, EventEmitter, Input, model, Output, signal } from '@angular/core';
import { Teoria10Hijo } from '../teoria10-hijo/teoria10-hijo';

@Component({
  imports: [Teoria10Hijo],
  selector: 'app-teoria10',
  styleUrl: './teoria10.css',
  templateUrl: './teoria10.html',
})
export class Teoria10 {
  updateQuantity(event: number) {
    console.log(event);
  }

  protected updateModerQuantity(event: number) {
    console.log(event);
  }
}
