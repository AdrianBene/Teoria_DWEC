import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-summary',
  styleUrl: './cart-summary.css',
  templateUrl: './cart-summary.html',
})
export class CartSummary {
  itemsCount = signal(1);
  unitPrice = signal(50);
  couponDiscount = signal(10);

  rawSubtotal = computed(() => this.itemsCount() * this.unitPrice());

  discountAmmount = computed(() => (this.rawSubtotal() * this.couponDiscount()) / 100);

  taxAmmount = computed(() => (this.rawSubtotal() - this.discountAmmount()) * 0.21);

  grandTotal = computed(() => this.rawSubtotal() - this.discountAmmount() + this.taxAmmount());

  loaded: WritableSignal<boolean> = signal(false);
  // PRACTICA 2
  constructor() {
    effect(() => {
      console.log('GrandTotal: ', this.grandTotal());
      console.log('ItemsCount: ', this.itemsCount());
      let cartState;

      if (this.loaded()) {
        cartState = {
          items: this.itemsCount(),
          price: this.unitPrice(),
          discount: this.couponDiscount(),
          total: this.grandTotal(),
        };
      } else {
        cartState = JSON.parse(localStorage.getItem('digishop_cart') as string);
        this.loaded.set(true);
        //CON ESTO HACEMOS QUE AL RECARGAR LA PAGGINA GUARDE LOS ULTIMOS DATOS EN EL LOCALSTORAGE
        this.itemsCount.set(cartState.items);
        this.unitPrice.set(cartState.price);
        this.couponDiscount.set(cartState.discount);
      }
      console.log(cartState);
      localStorage.setItem('digishop_cart', JSON.stringify(cartState));
      console.log('Carrito Guardado Corrrectamente');
    });
  }

  incrementItems() {
    this.itemsCount.update((n) => n + 1);
  }

  applySpecialCoupon() {
    this.couponDiscount.set(25);
  }
}
