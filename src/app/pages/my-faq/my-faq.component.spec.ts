import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFaqComponent } from './my-faq.component';

describe('MyFaqComponent', () => {
  let component: MyFaqComponent;
  let fixture: ComponentFixture<MyFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
