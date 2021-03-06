import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { title: 'Home', route: 'home' },
    { title: 'Lista', route: 'list' },
    { title: 'Inserir', route: 'inserir' }
  ];

  constructor(public route: ActivatedRoute) {}
}
