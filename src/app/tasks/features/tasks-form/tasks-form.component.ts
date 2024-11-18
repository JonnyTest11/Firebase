import { AfterViewInit, Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task, TasksCreate, TasksService } from '../../data-access/tasks.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.scss',
  providers: [TasksService]
})
export default class TasksFormComponent{

  private _formBuilder = inject(FormBuilder);
  private _taskService = inject(TasksService);
  private _router = inject(Router);

  loading = signal(false);

  idTask = input.required<string>();

  form = this._formBuilder.group({
    title: this._formBuilder.control('', Validators.required),
    completed: this._formBuilder.control(false, Validators.required),
  });

  constructor () {
    effect(() => {
      const id = this.idTask();

      if(id){
        this.getTask(id)
      }
    })
  }

  async submit() {
    if (this.form.invalid) return;
    try {
      this.loading.set(true);
      const { title, completed } = this.form.value;
      const task: TasksCreate = {
        title: title || '',
        completed: !!completed,
      }

      const id = this.idTask();

      if(id){
        await this._taskService.update(task, id);
      }else{
        await this._taskService.create(task);
      }

      await this._taskService.create(task);

      toast.success(`Tarea ${id ? 'Actualizada' : 'Creada'} Correctamente`);

      this._router.navigateByUrl('/tasks');

    } catch (error) {

      toast.error('Ocurrio Un Problema');

    } finally {

      this.loading.set(false);

    }
  }

  async getTask(id: string){
    const taskSnapshot = await this._taskService.getTask(id);

    if(!taskSnapshot.exists()) return;

    const task = taskSnapshot.data() as Task;

    this.form.patchValue(task);
  }
}
