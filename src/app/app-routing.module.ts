import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home' },
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product', component: ProductdetailComponent},
    {path: 'checkout', component: CheckoutComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
