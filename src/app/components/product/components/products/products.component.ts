import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  // tslint:disable-next-line: typedef
  clickProduct(id: string) {
    console.log('El id del producto desde app.component es: ' + id);
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // tslint:disable-next-line: typedef
  fetchProducts() {
    this.productsService.getAllProducts()
    .then(
      res => {
        this.products = res as Product[];
        console.log(this.products);
      }
    );
  }
}
