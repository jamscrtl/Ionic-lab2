import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'lists',
        loadComponent: () => import('./lists/lists.page').then((m) => m.ListsPage),
      },
      {
        path: 'forms',
        loadComponent: () => import('./forms/forms.page').then((m) => m.FormsPage),
      },
      {
        path: 'cards',
        loadComponent: () => import('./cards/cards.page').then((m) => m.CardsPage),
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full',
      },
    ],
  },
];
      
