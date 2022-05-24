import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSmallCardComponent } from './match-small-card.component';

describe('MatchSmallCardComponent', () => {
  let component: MatchSmallCardComponent;
  let fixture: ComponentFixture<MatchSmallCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSmallCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
