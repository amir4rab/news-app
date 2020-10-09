import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUiManagerComponent } from './news-ui-manager.component';

describe('NewsUiManagerComponent', () => {
  let component: NewsUiManagerComponent;
  let fixture: ComponentFixture<NewsUiManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsUiManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsUiManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
