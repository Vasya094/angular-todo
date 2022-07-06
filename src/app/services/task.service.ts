import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + '/' + task.id);
  }
  toggleTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + '/' + task.id, task);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post <Task>(this.apiUrl, task);
  }
}
