import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavArtistsComponent } from './list-fav-artists.component';

describe('ListFavArtistsComponent', () => {
  let component: ListFavArtistsComponent;
  let fixture: ComponentFixture<ListFavArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
