import { Component } from '@angular/core';

@Component({
  template: `
  <button id="btn1" type="button" preventMultipleClicks>
    <span>Click me</span>
  </button>
  <button id="btn2">Bare</button>
  `,
})
export class TestComponent {}
