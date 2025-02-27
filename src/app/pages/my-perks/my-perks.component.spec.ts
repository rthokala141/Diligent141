import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPerksComponent } from './my-perks.component';

describe('MyPerksComponent', () => {
  let component: MyPerksComponent;
  let fixture: ComponentFixture<MyPerksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPerksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
