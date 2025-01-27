import { Injectable, inject } from '@angular/core';
import { Product, ProductRequest } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private url = "http://localhost:8080/api/products/"

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}getAll`)
  }

  createProduct(product : ProductRequest):Observable<Product>{
    return this.http.post<Product>(`${this.url}create`, product)
  }


}
