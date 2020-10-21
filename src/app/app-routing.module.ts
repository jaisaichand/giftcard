import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home' },
    {path: 'home', component: HomeComponent},
    {path: 'checkbalance', component: ContactComponent},
    {path: 'product', component: ProductdetailComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'aboutus', component: AboutusComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
