import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderbarComponent } from './headerbar.component';

describe('HeaderbarComponent', () => {
  let component: HeaderbarComponent;
  let fixture: ComponentFixture<HeaderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
