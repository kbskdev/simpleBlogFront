import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsIconsContainerComponent } from './posts-icons-container.component';

describe('PostsIconsContainerComponent', () => {
  let component: PostsIconsContainerComponent;
  let fixture: ComponentFixture<PostsIconsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsIconsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsIconsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
