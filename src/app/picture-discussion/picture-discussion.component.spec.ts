import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDiscussionComponent } from './picture-discussion.component';

describe('PictureDiscussionComponent', () => {
  let component: PictureDiscussionComponent;
  let fixture: ComponentFixture<PictureDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureDiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
