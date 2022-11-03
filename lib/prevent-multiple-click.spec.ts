import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PreventMultipleClicksDirective } from './preventMultipleClicks.directive';
import { TestComponent } from './test.component';

describe('PreventMultipleClick', () => {
  let fixture: ComponentFixture<TestComponent>;

  let els: DebugElement[];
  let bareBtn: DebugElement;

  let timeoutId: any;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [PreventMultipleClicksDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached PreventMultipleClicksDirective
    els = fixture.debugElement.queryAll(
      By.directive(PreventMultipleClicksDirective)
    );

    // the button without the PreventMultipleClicksDirective
    bareBtn = fixture.debugElement.query(
      By.css('button:not([preventMultipleClicks])')
    );
  });

  afterAll(() => {
    clearTimeout(timeoutId);
  });

  it('should have one PreventMultipleClicksDirective element', () => {
    expect(els.length).toBe(1);
  });

  it('should be disabled after just clicking button with preventMultipleClicks, should be ok in 1 second', (done: VoidFunction) => {
    const el = els[0].nativeElement;
    el.click();
    expect(el.disabled).toBeTrue();

    timeoutId = setTimeout(() => {
      expect(el.disabled).toBeFalse();
      done();
    }, 1000);
  });

  it('should be ok after just clicking bare button', () => {
    const el = bareBtn.nativeElement;
    el.click();
    expect(el.disabled).toBeFalse();
  });

  it("should be disabled after just clicking button's content with preventMultipleClicks", () => {
    const parent = els[0].nativeElement;
    const el = parent.childNodes[0];
    el.click();
    expect(el.disabled).toBeUndefined();
    expect(parent.disabled).toBeTrue();
  });
});
