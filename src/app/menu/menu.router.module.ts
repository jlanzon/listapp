import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'gallery',
        children: [
          {
            path: '',
            loadChildren: '../pages/tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'receipts-test',
        children: [
          {
            path: '',
            loadChildren: '../pages/tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: "profile",
        children: [
          { 
            path: '',
            loadChildren: '../pages/profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: "terms",
        children: [
          {
            path: '',
            loadChildren: '../pages/terms/terms.module#TermsPageModule'
          },
        ]      
      },
      {
        path: "privacy",
        children: [
          {
            path: '',
            loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule'
          },
        ]      
      },
      {
        path: "login",
        children: [
          {
            path: '',
            loadChildren: '../pages/login/login.module#LoginPageModule'
          },
        ]      
      },
      {
        path: "todo",
        children: [
          {
            path: '',
            loadChildren: '../pages/todo/todo.module#TodoPageModule'
          },
        ]      
      },
      {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
