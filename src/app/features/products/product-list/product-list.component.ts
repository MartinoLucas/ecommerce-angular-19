import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import {toSignal} from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  
  productService = inject(ProductService)
  
  products:Signal<Product[] | undefined> = toSignal(
    this.productService.getProducts(),
  );

  

}
