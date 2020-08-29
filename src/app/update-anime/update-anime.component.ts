import { AnimeService } from './../services/anime.service';
import { Observable } from 'rxjs';
import { Anime } from './../interfaces/anime';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-anime',
  templateUrl: './update-anime.component.html',
  styleUrls: ['./update-anime.component.scss']
})
export class UpdateAnimeComponent implements OnInit {
  public animeCollection: AngularFirestoreCollection<Anime>;
  anime: Anime;
  public msg: string;
  paramId: string;

  constructor(public firestore: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router,
              private service: AnimeService) {}

  ngOnInit(): void {
    this.animeCollection = this.firestore.collection<Anime>('animes');

    this.paramId = this.route.snapshot.paramMap.get('id');

    if (this.paramId) {
      this.service.getAnime(this.paramId).subscribe(
        data => this.anime = data
      );
      console.log(this.anime);
    } else {
      this.msg = 'Anime não identificado!';
    }

  }

  update() {
    this.service.updateAnime(this.paramId, this.anime).then(
      () => {
        //ok
        this.msg = "Anime alterado!";
      },
      error => {
        //erro
        this.msg = "Ocoreu um erro. : " + error;
      }
    ).finally(() => this.router.navigate(['/', 'list']));

  }

}
