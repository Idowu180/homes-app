import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Hello DevOps Team!</h1>
    <p>Counter: {{ counter() }}</p>
    <button (click)="increment()">Increment</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }
}
