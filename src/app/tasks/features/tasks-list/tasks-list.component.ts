import { Component, inject } from '@angular/core';
import { TableComponent } from '../../ui/table/table.component';
import { RouterLink } from '@angular/router';
import { TasksService } from '../../data-access/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './tasks-list.component.html',
  providers: [TasksService]
})
export default class TasksListComponent {
  taskService = inject(TasksService);
}
