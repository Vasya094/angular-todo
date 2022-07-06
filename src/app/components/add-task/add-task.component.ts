import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() addNewTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscribtion!: Subscription;

  constructor(private uiService: UiService) {
    this.subscribtion = uiService.onToggle().subscribe((value) => {
      this.showAddTask = value; 
    });
  }

  ngOnInit(): void {}

  cleanForm(): void {
    this.text = ''
    this.day = ''
    this.reminder = false
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please enter text');
      return;
    }

    const newTask = { text: this.text, day: this.day, reminder: this.reminder };
    this.addNewTask.emit(newTask);

    this.cleanForm()
  }
}
