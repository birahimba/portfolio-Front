import { Routes, Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoute: Route = {
    path: 'home',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.page.title'
    }
};
