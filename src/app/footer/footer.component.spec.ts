import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have background color dark and text color primary', () => {
    fixture.detectChanges();
    const footerElement = fixture.nativeElement as HTMLElement;
    const footerDiv = footerElement.querySelector('.text-center');
    expect(footerDiv).toBeTruthy();
    expect(footerDiv?.classList).toContain('bg-dark');
    expect(footerDiv?.classList).toContain('text-primary');
  });

  it('should have correct content', () => {
    const footerElement: HTMLElement = fixture.nativeElement.querySelector('footer');
    const copyrightText = '© 22 March 2002 | SIX | Nizami Sevindi';
    expect(footerElement.textContent).toContain(copyrightText);
  });
});
