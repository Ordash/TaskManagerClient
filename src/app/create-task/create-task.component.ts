import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';
import { TaskService } from '../services/task.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {
  taskFormGroup: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  task: Task;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
      // priority: ['', Validators.required],
      // status: ['', Validators.required],
      // deadline: ['', Validators.required],
      // assignee: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.taskFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.taskFormGroup.errors);
    // stop here if form is invalid
    if (this.taskFormGroup.invalid) {
      return;
    }
    this.task = new Task(this.taskFormGroup.value);
    this.loading = true;
    this.taskService.postNewTask(this.task)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
