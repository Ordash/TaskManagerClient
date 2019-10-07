import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Task } from '../../models/task';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.taskService
      .getUserRelatedTasks()
      .pipe(first())
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  createdByCurrentUser(task: Task): boolean {
    return task.creator.id === this.authenticationService.currentUserValue.id;
  }
}
