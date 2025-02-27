import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImpactComponent } from './my-impact.component';

describe('MyImpactComponent', () => {
  let component: MyImpactComponent;
  let fixture: ComponentFixture<MyImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
