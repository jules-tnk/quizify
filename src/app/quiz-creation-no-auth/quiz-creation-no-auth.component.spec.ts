import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreationNoAuthComponent } from './quiz-creation-no-auth.component';

describe('QuizCreationNoAuthComponent', () => {
  let component: QuizCreationNoAuthComponent;
  let fixture: ComponentFixture<QuizCreationNoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCreationNoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCreationNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
