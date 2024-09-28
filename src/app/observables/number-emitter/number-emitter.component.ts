import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-number-emitter',
  standalone: true,
  imports: [],
  templateUrl: './number-emitter.component.html',
  styleUrl: './number-emitter.component.scss'
})
export class NumberEmitterComponent {
  ngOnInit(): void {
    const numbers$ = interval(1000).pipe(take(5));

    numbers$.subscribe({
      next: (number) => console.log(number),
      complete() {
        console.log('complete');
      },
    });
  }
}
