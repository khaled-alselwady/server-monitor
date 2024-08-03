import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private intervalId?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    const intervalId = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999999999...

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  // }
}
