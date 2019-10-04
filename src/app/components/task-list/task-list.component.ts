import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.findAll().subscribe(data => {
      this.tasks = data;
    });
  }
}
