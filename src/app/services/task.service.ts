import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/api/task/all`);
  }

  getCreated(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/api/task/created`);
  }

}
