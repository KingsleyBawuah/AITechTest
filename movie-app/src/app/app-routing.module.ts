import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: 'search', component: MovieSearchComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
