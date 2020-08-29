import { AnimeService } from './../services/anime.service';
import { Observable, of } from 'rxjs';
import { Anime } from './../interfaces/anime';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.component.html',
  styleUrls: ['./list-anime.component.scss']
})
export class ListAnimeComponent implements OnInit {
  public collection: string = 'animes';
  public animesCollection: AngularFirestoreCollection<Anime>;
  public animes: Anime[];

  constructor(private router: Router,
              private firestore: AngularFirestore,
              private service: AnimeService) { }

  ngOnInit(): void {
    this.animesCollection = this.firestore.collection<Anime>('animes');
    this.getList().subscribe(
      data => {
        this.animes = data;
      }
    )
  }

  getList(): Observable<Anime[]> {
    return this.service.listAnime();
  }

  update(id: string): void {
    this.router.navigate(['/', 'update', id]);
  }

  ver(): void {}

}
