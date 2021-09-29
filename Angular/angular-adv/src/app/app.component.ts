import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  tasks: string[] = [];
  subscription: Subscription;
  constructor(private taskStoreService: TaskService) {}

  ngOnInit() {
    //retrive data of task
    this.taskStoreService.taskChanged.subscribe((tasks: string[]) => {
      console.log(tasks);

      this.tasks = tasks;
    });
    this.tasks = this.taskStoreService.getTask();
  }

  onTaskSubmit(taskForm: NgForm) {
    // console.log(taskForm.value);
    let task = taskForm.value.task;
    //add the task using task Storage Service
    // let newTask = new Task(taskForm.value);
    this.taskStoreService.storeTask(task);
    taskForm.reset();
  }

  onCheckClicked(todoItem: string) {
    console.log('Checked ' + todoItem);
  }

  onDeleteClicked(todoItem: string) {
    console.log('Delete ' + todoItem);
  }
}
