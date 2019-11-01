import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'accueil', loadChildren: './modules/pages/accueil/accueil.module#AccueilModule' },
  { path: 'matrices', loadChildren: './modules/pages/matrice/matrice.module#MatriceModule' },
  { path: 'modeles', loadChildren: './modules/pages/modeles/modeles.module#ModelesModule' },

  {path: '**', pathMatch: 'full' , redirectTo:"/accueil"},
  {path:'',pathMatch:'full', redirectTo:"/accueil"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
