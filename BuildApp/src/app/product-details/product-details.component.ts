import { Component } from '@angular/core';
import { products } from '../data/data';
import { CommonModule } from '@angular/common';
import { AlertWindowComponent } from "../alert-window/alert-window.component";

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [CommonModule, AlertWindowComponent]
})
export class ProductDetailsComponent {

  title: string = 'Infinity Apparels';
  products = products;
  isDisabled = true;

  clickMe(product: any){
    window.alert(product.name+' Courses available at your location');
  }

  isEnabled(){
    this.isDisabled = !this.isDisabled;
  }
}
