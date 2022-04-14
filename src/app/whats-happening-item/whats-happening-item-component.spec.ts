import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WhatsHappeningItemComponent } from './whats-happening-item.component';

describe('WhatsHappeningItemComponent', () => {
  let component: WhatsHappeningItemComponent;
  let imgComponent: WhatsHappeningItemComponent;
  let fixture: ComponentFixture<WhatsHappeningItemComponent>;
  let cardDE: DebugElement;
  let cardEL: HTMLElement;
  let expectedCategory: string = "Video Games";
  let expectedTime: string = "69 minutes ago."
  let expectedText: string = "Sample Text";
  let expectedEmptyImage: string = "";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [WhatsHappeningItemComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsHappeningItemComponent);
    component = fixture.componentInstance;

    cardDE = fixture.debugElement.query(By.css('.has-image'));
    cardEL = cardDE.nativeElement;

    component.categoryAndTime = "Video Games - 69 minutes ago.";
    component.text = "Sample Text";
    component.img = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('(no img) should display category', () =>{
    expect(cardEL.textContent).toContain(expectedCategory);
  });

  it('(no img) should display time', () =>{
    expect(cardEL.textContent).toContain(expectedTime);
  });


  it('(no img) should display text', () =>{
    expect(cardEL.textContent).toContain(expectedText);
  });

  it('(no img) should display empty image', () =>{
    expect(cardEL.textContent).toContain(expectedEmptyImage);
  });
});