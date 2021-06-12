import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct = () => {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(id)
      .then(
        res => {
          this.product = res as Product;
          console.log(this.product);
        }
      );
    });
  }

  createProduct = () => {
    const newProduct: Product = {
      id: '7',
      title: 'PLatzi kit',
      price: 300,
      description: 'El kit de la conferencia de platzi',
      image: 'https://pbs.twimg.com/media/EiO52N9WAAEDAD9.jpg'
    };
    this.productsService.createProduct(newProduct)
    .toPromise()
    .then(
      res => {
        console.log(res);
      }
    );
  }

  updateProduct = () => {
    const updateProduct: Partial<Product> = {
      title: 'PLatzi kit',
      price: 300000,
      description: 'Edición: El kit de la conferencia de platzi',
    };
    this.productsService.updateProduct('7', updateProduct)
    .toPromise()
    .then(
      res => {
        console.log(res);
      }
    );
  }

  deleteProduct = () => {
    this.productsService.deleteProduct('7')
    .toPromise()
    .then(
      res => {
        console.log(res);
      }
    );
  }
}
