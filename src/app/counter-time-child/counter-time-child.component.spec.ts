import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimeChildComponent } from './counter-time-child.component';

describe('CounterTimeChildComponent', () => {
  let component: CounterTimeChildComponent;
  let fixture: ComponentFixture<CounterTimeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTimeChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterTimeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
