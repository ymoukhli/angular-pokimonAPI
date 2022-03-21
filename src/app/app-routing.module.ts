import { NgModule } from "@angular/core";
import {Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokimonsComponent } from "./pokimons/pokimons.component";
import { PokimonDetailsComponent } from "./pokimon-details/pokimon-details.component";
const routes: Routes = [
    {path: 'pokimon/:name', component: PokimonDetailsComponent},
    {path: '', component: PokimonsComponent, pathMatch:'full' },
    {path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }