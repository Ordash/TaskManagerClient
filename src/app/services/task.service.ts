import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { environment } from 'src/environments/environment.prod';
import { AuthenticationService } from './auth/authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getUserRelatedTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/api/task/userRelated`);
  }

  postNewTask(task: Task) {
    return this.http.post<any>(`${environment.apiUrl}/api/task/new`, task);
  }
}
