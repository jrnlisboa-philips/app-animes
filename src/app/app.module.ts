import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ListAnimeComponent } from './list-anime/list-anime.component';
import { DetailAnimeComponent } from './detail-anime/detail-anime.component';
import { AlterAnimeComponent } from './alter-anime/alter-anime.component';
import { DeleteAnimeComponent } from './delete-anime/delete-anime.component';
import { TopAnimeComponent } from './top-anime/top-anime.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListAnimeComponent,
    DetailAnimeComponent,
    AlterAnimeComponent,
    DeleteAnimeComponent,
    TopAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
