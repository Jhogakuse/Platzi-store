import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'products/:id',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    // component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
