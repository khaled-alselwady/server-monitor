import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  label = input.required<string>();
}
