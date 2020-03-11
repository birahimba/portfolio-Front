import {Route } from '@angular/router';
import { AdminComponent } from './admin.component';

export const AdminRoute: Route = {
    path: 'admin',
    component: AdminComponent,
    data: {
        authorities: [],
        pageTitle: 'admin.page.title'
    }
};
