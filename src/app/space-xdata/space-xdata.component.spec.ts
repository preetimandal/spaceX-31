import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXdataComponent } from './space-xdata.component';

describe('SpaceXdataComponent', () => {
  let component: SpaceXdataComponent;
  let fixture: ComponentFixture<SpaceXdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
