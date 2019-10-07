import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { environment } from 'src/environments/environment.prod';
import { AuthenticationService } from './auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private authenticationService: AuthenticationService, private http: HttpClient) {}

  getUserRelatedTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/api/task/userRelated`);
  }

  getCreated(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/api/task/created`);
  }

  isCreatedByCurrentUser(task: Task): boolean {
    return task.creator === this.authenticationService.currentUserValue;
  }
}
