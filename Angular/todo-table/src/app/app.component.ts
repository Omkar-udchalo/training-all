import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-table';
  displayedColumns: string[] = ['task'];
  dataSource: string[] = [];
  tasks: string[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    // this.dataSource = [];
    this.taskService.taskChanged.subscribe((tasks: string[]) => {
      console.log(tasks);

      this.tasks = tasks;
      this.dataSource = this.tasks;
    });
    if (!this.tasks.length) {
      this.tasks = this.taskService.getTask();
      this.dataSource = this.tasks;
    }
    // console.log(this.tasks);

    console.log('datasource');
    console.log(this.dataSource);
  }
  onTaskSubmit(taskForm: NgForm) {
    console.log(taskForm.value.task);
    this.taskService.storeTask(taskForm.value.task);
    taskForm.reset();
  }
}
