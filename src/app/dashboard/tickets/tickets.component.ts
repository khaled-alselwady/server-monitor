import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

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
    this.tickets.push(ticket);
  }

  trackById(index: number, ticket: Ticket) {
    return ticket.id;
  }
}
