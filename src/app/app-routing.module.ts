import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gameOfThrones', loadChildren: () => import('./game-of-thrones/game-of-thrones.module').then(m => m.GameOfThronesModule) }, { path: 'harrypotter', loadChildren: () => import('./harrypotter/harrypotter.module').then(m => m.HarrypotterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
