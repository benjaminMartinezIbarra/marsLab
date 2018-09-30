import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePhotosListComponent } from './page-photos-list.component';

describe('PagePhotosListComponent', () => {
  let component: PagePhotosListComponent;
  let fixture: ComponentFixture<PagePhotosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
