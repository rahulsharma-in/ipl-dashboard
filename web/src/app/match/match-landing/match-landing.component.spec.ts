import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchLandingComponent } from './match-landing.component';

describe('MatchLandingComponent', () => {
  let component: MatchLandingComponent;
  let fixture: ComponentFixture<MatchLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
