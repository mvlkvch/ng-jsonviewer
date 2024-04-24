import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJsonViewerComponent } from './ng-jsonviewer.component';

describe('NgJsonViewerComponent', () => {
  let component: NgJsonViewerComponent;
  let fixture: ComponentFixture<NgJsonViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgJsonViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgJsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
