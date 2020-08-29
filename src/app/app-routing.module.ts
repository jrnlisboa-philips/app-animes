import { UpdateAnimeComponent } from './update-anime/update-anime.component';
import { TopAnimeComponent } from './top-anime/top-anime.component';
import { DeleteAnimeComponent } from './delete-anime/delete-anime.component';
import { DetailAnimeComponent } from './detail-anime/detail-anime.component';
import { AlterAnimeComponent } from './alter-anime/alter-anime.component';
import { ListAnimeComponent } from './list-anime/list-anime.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'list', component: ListAnimeComponent},
  {path: 'inserir', component: AlterAnimeComponent},
  {path: 'update/:id', component: UpdateAnimeComponent},
  {path: 'detail/:id', component: DetailAnimeComponent},
  {path: 'delete/:id', component: DeleteAnimeComponent},
  {path: 'top/:id', component: TopAnimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
