import { Injectable } from '@angular/core';
import { concatMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../../features/dashboard/products/models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private httpClient: HttpClient) {}

  createProduct(data: Omit<Product, 'id'>): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiBaseURL}/productss`, data);
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiBaseURL}/products`);
  }

  getProductById(id: string): Observable<Product> {
    const result = this.httpClient.get<Product>(
      `${this.apiBaseURL}/products/${id}`
    );
    return result;
  }

  updateProductById(id: string, update: Partial<Product>) {
    return this.httpClient
      .patch<Product>(`${this.apiBaseURL}/products/${id}`, update)
      .pipe(concatMap(() => this.getProducts()));
  }

  removeProductById(id: string): Observable<Product[]> {
    return this.httpClient
      .delete<Product>(`${this.apiBaseURL}/products/${id}`)
      .pipe(concatMap(() => this.getProducts()));
  }
}
