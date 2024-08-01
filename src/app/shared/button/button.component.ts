import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]', // Attribute selector => for access any button that has an attribute (appButton)
  // selector: 'button.app-button', // Class selector => for access any button that has a class (app-button)
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
