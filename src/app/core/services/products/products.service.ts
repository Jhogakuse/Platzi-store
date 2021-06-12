import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];

  constructor( private http: HttpClient ) { }

  /**
   * Get a list of all products
   */
  // tslint:disable-next-line: typedef
  getAllProducts(){
    return this.http.get(`${environment.url_api}/products`)
    .toPromise()
    .then( res => {
      return res;
    }).catch(
      this.handleError
    );
  }

  /**
   * Look for a product by id
   * @param id Identificador del producto a buscar
   * @returns the request
   */
  // tslint:disable-next-line: typedef
  getProduct(id: string) {
    return this.http.get(`${environment.url_api}/products/${id}`)
    .toPromise()
    .then( res => {
      return res;
    }).catch(
      this.handleError
    );
  }

  /**
   * Insert a new product
   * @param product new product
   * @returns the request
   */
  // tslint:disable-next-line: typedef
  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct = (id: string, changes: Partial<Product>) => {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct = (id: string) => {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  // tslint:disable-next-line: typedef
  private handleError(error: Response) {
    console.log(error);
    throw error;
  }
}
