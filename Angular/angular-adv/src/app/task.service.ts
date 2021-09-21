import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = ['Get up at 5am', 'Exercise'];
  taskChanged = new Subject<string[]>();

  constructor(private storageService: StorageService) {}
  storeTask(task: string) {
    if (!this.tasks) {
      this.tasks = [task];
      this.taskChanged.next(this.tasks.slice());
      this.storageService.storeInLocalStorage(this.tasks);
    } else {
      this.tasks.push(task);
      this.taskChanged.next(this.tasks.slice());
      this.storageService.storeInLocalStorage(this.tasks);
    }
  }

  getTask() {
    this.tasks = this.storageService.retriveLocal();
    return this.tasks ? this.tasks.slice() : [];
  }
}
