import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-adv';
  tasks: string[] = [];
  subscription: Subscription;
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.subscription = this.taskService.taskChanged.subscribe(
      (tasks: string[]) => {
        this.tasks = tasks;
      }
    );
    this.tasks = this.taskService.getTasks();
  }

  addTask(form: NgForm) {
    console.log(form.value);
    this.taskService.storeTask(form.value.task);
    form.reset();
  }
}
