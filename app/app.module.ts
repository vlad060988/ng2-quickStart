import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroesComponent }   from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent} from "./app.component";
import { DashboardComponent } from "./dashboard.component"
import { HeroService } from './hero.service';





@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
              path: 'dashboard',
              component: DashboardComponent
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'datail/:id',
                component: HeroDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    providers: [HeroService],
    bootstrap: [ AppComponent ]

})
export class AppModule {

}