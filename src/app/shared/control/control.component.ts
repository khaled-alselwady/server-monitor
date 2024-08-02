import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>();

  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked!');
  // }
  // we preferred to use host element that inside the component instead of using @HostBinding & @HostListener

  private el = inject(ElementRef);

  onClick() {
    console.log('Control clicked!');
    console.log(this.el); // using that to interact with DOM of the host element 'app-control' directly
  }
}
