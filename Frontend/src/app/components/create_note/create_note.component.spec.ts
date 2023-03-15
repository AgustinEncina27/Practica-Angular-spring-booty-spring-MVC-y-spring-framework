import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Create_noteComponent } from './create_note.component';

describe('Create_noteComponent', () => {
  let component: Create_noteComponent;
  let fixture: ComponentFixture<Create_noteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Create_noteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Create_noteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
