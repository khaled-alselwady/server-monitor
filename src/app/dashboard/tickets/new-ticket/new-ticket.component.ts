import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  @Output() add = new EventEmitter<{ title: string; text: string }>();
  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    console.log('OnInit');
    // console.log(this.form?.nativeElement); // undefined
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    // this.form?.nativeElement.reset(); // Clear form inputs after submission
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
