import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './application/layout/layout.component';
import { AuthGuardService as AuthGuard} from './application/shared/services/guard/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./domaine/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children :[
      {
        path: '', redirectTo: 'accueil', pathMatch: 'full'
      },
      {
        path: 'accueil',
        //canActivate: [RoleGuard],
        data: {
          roles: ['ROLE_ADMIN_COUNTRY','ROLE_ADMIN_GROUP'],
          breadcrumb: 'Accueil',
        },
        loadChildren: () => import('./domaine/accueil/accueil.module').then(m => m.AccueilModule)
      },
      { 
        path: 'commandes', 
        data: {
          roles: ['ROLE_ADMIN_COUNTRY','ROLE_ADMIN_GROUP'],
          breadcrumb: 'commandes',
        },
        loadChildren: () => import('./domaine/commandes/commandes.module').then(m => m.CommandesModule) 
      },
      {
        path: 'factures', 
        data: {
          roles: ['ROLE_ADMIN_COUNTRY','ROLE_ADMIN_GROUP'],
          breadcrumb: 'factures',
        },
        loadChildren: () => import('./domaine/factures/factures.module').then(m => m.FacturesModule) 
      },

      { 
        path: 'transactions',
        data: {
          roles: ['ROLE_ADMIN_COUNTRY','ROLE_ADMIN_GROUP'],
          breadcrumb: 'transactions',
        },
       loadChildren: () => import('./domaine/transactions/transactions.module').then(m => m.TransactionsModule) },
      
      { 
        path: 'suivi-commande', 
        data: {
          roles: ['ROLE_ADMIN_COUNTRY','ROLE_ADMIN_GROUP'],
          breadcrumb: 'Détails',
        },
      loadChildren: () => import('./domaine/suivi-commande/suivi-commande.module').then(m => m.SuiviCommandeModule) 
    },
    {
       path: 'service-client',
       data: {
        roles: ['ROLE_ADMIN_COUNTRY','ROLE_ADMIN_GROUP'],
        breadcrumb: 'Service client',
      },
     loadChildren: () => import('./domaine/service-client/service-client.module').then(m => m.ServiceClientModule) 
    },
  { path: 'info-general', loadChildren: () => import('./domaine/info-general/info-general.module').then(m => m.InfoGeneralModule) },

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
