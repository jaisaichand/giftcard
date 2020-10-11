import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainlandingComponent } from './mainlanding/mainlanding.component';

const routes: Routes = [
{path: '/giftcards', redirectTo: '', pathMatch: 'full'},
{path: 'giftcads', component: MainlandingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppMainRouting {

}
