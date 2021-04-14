import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAttributionsComponent } from './artist-attributions.component';

describe('ArtistAttributionsComponent', () => {
  let component: ArtistAttributionsComponent;
  let fixture: ComponentFixture<ArtistAttributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAttributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAttributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
