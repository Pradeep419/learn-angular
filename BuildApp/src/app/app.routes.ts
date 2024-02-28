import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [{path: 'products/:productId', component: ShopProductComponent},
{path: 'products', component: ProductDetailsComponent},
{path: '', component: LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
