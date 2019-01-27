import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'incidents',
        children: [
          {
            path: '',
            loadChildren: '../incidents/incidents.module#IncidentsPageModule'
          }
        ]
      },
      {
        path: 'add',
        children: [
          {
            path: '',
            loadChildren: '../add/add.module#AddPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/incidents',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/incidents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
