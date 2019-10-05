import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-task-list-created',
  templateUrl: './task-list-created.component.html'
})
export class TaskListCreatedComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService
      .getCreated()
      .pipe(first())
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }
}
