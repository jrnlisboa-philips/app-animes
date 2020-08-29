import { Anime } from './../interfaces/anime';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alter-anime',
  templateUrl: './alter-anime.component.html',
  styleUrls: ['./alter-anime.component.scss']
})
export class AlterAnimeComponent implements OnInit {
  public animeCollection: AngularFirestoreCollection<Anime>;
  anime: Anime = {};
  public msg: string;

  constructor(public firestore: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.animeCollection = this.firestore.collection<Anime>('animes');

    const paramId = this.route.snapshot.paramMap.get('id');

  }

  add() {
    console.log(this.anime);
    return this.animeCollection.add(this.anime).then(
      () => {
        this.msg = "Criado com sucesso";
        console.log(this.msg);
        this.router.navigate(['/', 'list']);
      },
      error => {
        this.msg = "Ocorreu um erro: " + error;
      }
    );
  }


}
