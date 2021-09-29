import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storeInLocalStorage(tasks: string[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  retriveLocal() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks;
  }

  removeItem(todoItem: string) {}
}
