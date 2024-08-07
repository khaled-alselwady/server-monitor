import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  Tickets: Ticket[] = [];

  private createTicket(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };

    return ticket;
  }

  onAdd(ticketData: { title: string; text: string }) {
    const ticket = this.createTicket(ticketData);
    this.Tickets.push(ticket);
  }
}
