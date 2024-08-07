import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ServerStatus } from './server-status.model';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<ServerStatus>(ServerStatus.Online);
  // private intervalId?: ReturnType<typeof setInterval>;
  Status = ServerStatus;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      console.log(this.currentStatus());

      onCleanup(() => {
        // we call the function in onCleanup() before each the next effect call.
        console.log('effect finished');
      });
    });
  }

  ngOnInit() {
    const intervalId = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999999999...

      if (rnd < 0.5) {
        this.currentStatus.set(ServerStatus.Online);
      } else if (rnd > 0.9) {
        this.currentStatus.set(ServerStatus.Offline);
      } else {
        this.currentStatus.set(ServerStatus.Unknown);
      }
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  // }
}
