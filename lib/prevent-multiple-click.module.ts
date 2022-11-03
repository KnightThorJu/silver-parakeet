import { NgModule } from '@angular/core';
import { PreventMultipleClicksDirective } from './preventMultipleClicks.directive';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [
    PreventMultipleClicksDirective,
    TestComponent
  ],
  imports: [
  ],
  exports: [
    PreventMultipleClicksDirective
  ]
})
export class PreventMultipleClickModule { }
