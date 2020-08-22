import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterAnimeComponent } from './alter-anime.component';

describe('AlterAnimeComponent', () => {
  let component: AlterAnimeComponent;
  let fixture: ComponentFixture<AlterAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
