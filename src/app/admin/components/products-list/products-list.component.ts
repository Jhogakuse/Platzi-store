import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: any;
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.productsService.getAllProducts()
    .then(
      res => {
        console.log(res);
        this.products = res;
      }
    )
    .catch(
      this.handleError
    );
  }

  deleteProduct = (id: string) => {
    this.productsService.deleteProduct(id)
    .toPromise()
    .then(
      res => {
        console.log(res);
        this.fetchProducts();
      }
    )
    .catch(
      this.handleError
    );
  }

  private handleError = (error: Response) => {
    console.log(error);
    throw error;
  }
}
