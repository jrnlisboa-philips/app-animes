import { Anime } from './../interfaces/anime';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-alter-anime',
  templateUrl: './alter-anime.component.html',
  styleUrls: ['./alter-anime.component.scss']
})
export class AlterAnimeComponent implements OnInit {
  public collection: string = 'animes';
  private animeSelected: Anime;

  constructor(public firestore: AngularFirestore,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
  }

  add(anime: Anime) {
    return this.firestore.collection(this.collection).add(anime);
  }

  update(anime: Anime) {

  }

  getAnime(id: string): Observable<Anime> {

    return of();
  }

}
