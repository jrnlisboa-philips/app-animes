import { Observable } from 'rxjs';
import { Anime } from './../interfaces/anime';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  public animeCollection: AngularFirestoreCollection<Anime>;
  anime: Anime;

  constructor(public firestore: AngularFirestore) {
    this.animeCollection = this.firestore.collection<Anime>('animes');
  }

  addAnime(anime: Anime) {

  }

  listAnime(): Observable<Anime[]> {
    return this.animeCollection.snapshotChanges().pipe(
      map(actions => actions.map(regs => {
        const id = regs.payload.doc.id;
        const data = regs.payload.doc.data();
        return {id, ...data};
      }))
    );
  }

  getAnime(id: string) {
    return this.animeCollection.doc<Anime>(id).valueChanges();
  }

  updateAnime(id: string, anime: Anime) {
    return this.animeCollection.doc<Anime>(id).update(anime);
  }

  }
