import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../models/models';
import { PRODUCTS_MOCK } from '../../../models/product.mock';
import { ProductCardComponent } from '../product-card-component/product-card-component';
import { CurrencyPipe } from '@angular/common';
import { ProductFilterComponent } from '../product-filter-component/product-filter-component';

@Component({
  imports: [ProductCardComponent, CurrencyPipe, ProductFilterComponent],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  products = signal<Product[]>(PRODUCTS_MOCK);
  lastVieredProducts = signal<Product | null>(null);
  selectedCount = signal<number>(0);

  searchTerm: WritableSignal<string> = signal<string>('');
  categoryTerm: WritableSignal<string> = signal<string>('All');

  reduceStock(selectedProduct: Product): void {
    this.selectedCount.update((count) => count + 1);
    this.products.update((currentProducts) =>
      currentProducts.map((prod) => {
        if (prod.id === selectedProduct.id && prod.stock > 0) {
          return { ...prod, stock: prod.stock - 1 };
        }
        return prod;
      }),
    );
  }

  onProductDetails(product: Product) {
    this.lastVieredProducts.set(product);
  }

  //PARA REALIZAR EL FILTRO, CREAMOS VARIABLE SQUE RECOGAN LOS VALORES INTRODUCIDOS EN EL INPUT Y EN EL SELECT.DESPUES FILTRAMOS LOS PRDUCTOS Y HACEMOS COMPARATIBAS DONDE
  //EN EL INPUT UTILIZAMOS EL INCLUDES Y LE PASAMOS EL VALOR DEL INPUT PARA CONFORME SE MODIFIQUE HAGA A BUSQUEDA.
  //EN EL SELECT DEBE HACER UN BOOLEAN DE SI NO ES ALL EL VALOR DEL SELECT SEA UNA DE LAS CATEGORIAS DEL PRODUCTO
  filteredPRoducts = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const cat = this.categoryTerm();
    return this.products().filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(query);
      const matchesCategory = cat === 'All' || product.category === cat;
      return matchesSearch && matchesCategory;
    });
  });
}
