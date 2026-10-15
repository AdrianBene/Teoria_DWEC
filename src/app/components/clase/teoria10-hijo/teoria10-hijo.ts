import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria10-hijo',
  styleUrl: './teoria10-hijo.css',
  templateUrl: './teoria10-hijo.html',
})
export class Teoria10Hijo {
  //ANTES

  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  quantityModern = model<number>(1);
  modifyQuantity(newQuantity: number) {
    //ANTES

    this.quantityChange.emit(newQuantity);

    //AHORA

    this.quantityModern.update((q) => q + newQuantity);
  }
}
