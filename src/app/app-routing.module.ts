import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoute } from './admin/admin.route';
import { HomeRoute } from './home/home.route';
import { navbarRoute } from './layout/navbar/navbar.route';
import { HomeComponent } from './home/home.component';


const routes: Routes = [AdminRoute, HomeRoute, navbarRoute];

@NgModule({
  imports: [RouterModule.forRoot(
    [...routes, 
    {
      path:'**', 
      redirectTo:'not-found'
    },
    {
      path:'', 
      component:HomeComponent
    }
  ], 

    { useHash: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
