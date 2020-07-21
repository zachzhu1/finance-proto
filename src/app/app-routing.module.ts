import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AboutComponent } from './shared/about/about.component';


const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'about', component: AboutComponent },
  { path:'', redirectTo:'/watchlist',pathMatch:'full'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
