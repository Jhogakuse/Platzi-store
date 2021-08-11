import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';
import { MyValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product-edit',
  templateUrl: './form-product-edit.component.html',
  styleUrls: ['./form-product-edit.component.scss']
})
export class FormProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.id = params.id;
      this.productService.getProduct(this.id)
      .then(
        res => {
          const product = res as Product;
          console.log(product);
          this.form.patchValue(product);
        }
      );
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
      .toPromise()
      .then(
        res => {
          console.log(res);
          this.router.navigate(['./admin/products']);
        }
      );
    }
  }

  get hasErrorPriceInvalid(): boolean {
    return this.priceField.hasError('invalid');
  }

  get priceField() {
    return this.form.get('price');
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidator.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

}
