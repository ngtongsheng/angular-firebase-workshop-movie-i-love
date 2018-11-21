import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MoviesComponent } from './movies/movies.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCreateComponent,
    MovieFormComponent,
    MovieCardComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
