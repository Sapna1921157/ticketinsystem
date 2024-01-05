import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcccSensorNodeComponent } from './nccc-sensor-node.component';

describe('NcccSensorNodeComponent', () => {
  let component: NcccSensorNodeComponent;
  let fixture: ComponentFixture<NcccSensorNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NcccSensorNodeComponent]
    });
    fixture = TestBed.createComponent(NcccSensorNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
