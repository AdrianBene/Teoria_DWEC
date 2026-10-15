import { Component, computed, input, Input, InputSignal, output, signal } from '@angular/core';
import { Product } from '../../../models/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  product: InputSignal<Product> = input.required();

  showAlert = signal<boolean>(false);
  isLowStock = computed(() => this.product().stock > 0 && this.product().stock < 3);

  isOutOfStock = computed(() => this.product().stock === 0);

  viewDetails = output<Product>();

  addToCart = output<Product>();

  onAddToCart(): void {
    // if (this.stock() > 0) {
    //   this.stock.update((miStock) => miStock - 1);
    // }
    // if (this.stock() === 0) this.showAlert.set(true);

    if (!this.isOutOfStock()) {
      this.addToCart.emit(this.product());
    }
  }

  protected onViewDetails() {
    this.viewDetails.emit(this.product());
  }
}
