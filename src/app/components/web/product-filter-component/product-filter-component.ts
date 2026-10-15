import { Component, model, ModelSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-product-filter-component',
  styleUrl: './product-filter-component.css',
  templateUrl: './product-filter-component.html',
})
export class ProductFilterComponent {
  searchQuery: ModelSignal<string> = model<string>('');
  selectedCategory: ModelSignal<string> = model<string>('All');
  categories = signal<string[]>(['All', 'electronics', 'books', 'clothing', 'home']);
}
