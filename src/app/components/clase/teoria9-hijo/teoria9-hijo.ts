import { booleanAttribute, Component, computed, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria9-hijo',
  styleUrl: './teoria9-hijo.css',
  templateUrl: './teoria9-hijo.html',
})
export class Teoria9Hijo {
  productName = input<string>('Producto genérico'); //OPCIONAL
  price = input.required<number>(); //OBLIGATORIO
  productId = input.required<number>();

  disable = input(false, { transform: booleanAttribute }); //SI PASAMO EL TRU O FALSE EN STRING QUE LO CONVIERTA EN BOOLEAN

  priceWithTaxes = computed(() => this.price() * 1.21);

  onAddToCart = output<number>();

  addToCart(productId: number) {
    this.onAddToCart.emit(productId);
  }
}
