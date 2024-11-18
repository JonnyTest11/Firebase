import { Component, effect, input } from '@angular/core';
import { Task, TasksService } from '../../data-access/tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html'
})
export class TableComponent {
  tasks = input.required<Task[]>();
}
