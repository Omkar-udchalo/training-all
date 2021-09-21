import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: string[] = [];
  taskChanged = new Subject<String[]>();
  // constructor(task: string) {}
  storeTask(currentTask: string) {
    // this.getTasks();
    if (!this.tasks) {
      this.tasks = [currentTask];
    } else {
      this.tasks.push(currentTask);
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log('In service:' + currentTask);
    this.taskChanged.next(this.tasks.slice());
  }

  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    // console.log(this.tasks);
    console.log('In service' + this.tasks);
    return this.tasks;
  }
}
