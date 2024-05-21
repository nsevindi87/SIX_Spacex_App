import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, PaginationComponent,FooterComponent],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "SpaceX Searching App"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('SpaceX Searching App');
  });

  it('should fetch data from the API', () => {
    spyOn(component, 'getData').and.callThrough();
    component.ngOnInit();
    expect(component.getData).toHaveBeenCalled();
  });

  

  it('should change items per page', () => {
    component.onChangeItemsPerPage({ target: { value: '3' } });
    expect(component.itemsPerPage).toBe(3);
  });

  it('should update search term', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchTerm).toBe('Test');
  });
});
