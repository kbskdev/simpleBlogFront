import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIconComponent } from './post-icon.component';

describe('PostIconComponent', () => {
  let component: PostIconComponent;
  let fixture: ComponentFixture<PostIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
