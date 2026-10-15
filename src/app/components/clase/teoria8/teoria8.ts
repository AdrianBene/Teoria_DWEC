import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-teoria8',
  styleUrl: './teoria8.css',
  templateUrl: './teoria8.html',
})
export class Teoria8 implements OnInit {
  restarCantidad() {
   this.quantity.update(val => val - 1);
  }
  // COMPUTED
  price = signal(100);
  quantity = signal(2);

  subtotal = computed(() => this.price() * this.quantity());

  constructor() {
    effect(() => {
      console.log('Price: ' + this.price());
      console.log('Quantity: ' + this.quantity());
    });
  }

  ngOnInit() {
     // setInterval(() => {
     //  this.changeQuantity();
     //   this.changePrice();
     // }, 500);
  }

  changeQuantity() {
    this.quantity.update((val) => val + 1);
  }
  changePrice() {
    this.price.update((val) => val + 20);
  }

  protected restarPrecio() {

    this.price.update((val) => val -50);

  }
}
