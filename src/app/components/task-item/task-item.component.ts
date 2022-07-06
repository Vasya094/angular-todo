import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  faCoffee = faCoffee;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
    console.log(faCoffee)
  }
  onDelete(task: Task): void {
    this.onDeleteTask.emit(task)
  }
  onToggle(task: Task): void {
    this.onToggleTask.emit(task)
  }

}
