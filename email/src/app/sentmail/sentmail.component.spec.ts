import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentmailComponent } from './sentmail.component';

describe('SentmailComponent', () => {
  let component: SentmailComponent;
  let fixture: ComponentFixture<SentmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentmailComponent]
    });
    fixture = TestBed.createComponent(SentmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
