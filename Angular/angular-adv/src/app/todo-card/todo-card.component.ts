import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input('todo-item') todoItem;
  @Output() checkClicked = new EventEmitter<string>();
  @Output() delClicked = new EventEmitter<string>();
  private todo: string = 'afds';

  ngOnInit(): void {}
  onChecked() {
    console.log('check');
    this.checkClicked.emit(this.todoItem);
  }
  onDelete() {
    console.log('del');
    this.delClicked.emit(this.todoItem);
  }
}
