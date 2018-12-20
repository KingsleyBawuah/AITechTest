import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatDividerModule,
  MatPaginatorModule
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieApiService } from './movie-api.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, MovieSearchComponent, AboutPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSnackBarModule
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
