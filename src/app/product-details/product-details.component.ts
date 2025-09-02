import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

   getImageURL(product: IProduct) {
    if(!product) return "";
    return 'assets/images/robot-parts/' + product.imageName;
  }

    getDiscountedClasses(product: IProduct) {
    if(product.discount > 0) {
      return ['strikethrough']; //here we can add more classes if applicable ['strikethough', 'bold', 'red']
    } else return [];
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

}
