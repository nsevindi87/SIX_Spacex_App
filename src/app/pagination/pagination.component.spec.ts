import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the pagination component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total pages correctly', () => {
    component.totalItems = 50;
    component.itemsPerpage = 10;
    component.ngOnInit();
    expect(component.totalPages).toBe(5);
  });

  it('should emit the correct page number when a page is clicked', () => {
    spyOn(component.onClick, 'emit');
    component.totalItems = 50;
    component.itemsPerpage = 10;
    component.ngOnInit();
    fixture.detectChanges();

    const pageItem = fixture.debugElement.queryAll(By.css('.page-item'))[2]; // 2nd page number (index 2, since Previous is index 0)
    pageItem.triggerEventHandler('click', null);
    expect(component.onClick.emit).toHaveBeenCalledWith(2);
  });

  it('should disable the previous button when on the first page', () => {
    component.currentPage = 1;
    component.totalItems = 50;
    component.itemsPerpage = 10;
    component.ngOnInit();
    fixture.detectChanges();

    const previousButton = fixture.debugElement.query(By.css('.page-item')).nativeElement;
    expect(previousButton.classList).toContain('disabled');
  });

  it('should disable the next button when on the last page', () => {
    component.currentPage = 5;
    component.totalItems = 50;
    component.itemsPerpage = 10;
    component.ngOnInit();
    fixture.detectChanges();

    const nextButton = fixture.debugElement.queryAll(By.css('.page-item'))[6].nativeElement; // Last button
    expect(nextButton.classList).toContain('disabled');
  });
});
