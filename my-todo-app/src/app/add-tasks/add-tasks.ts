import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Task } from '../display-tasks/display-tasks.model';

@Component({
  selector: 'app-add-tasks',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './add-tasks.html',
  styleUrl: './add-tasks.css',
})
export class AddTasks {
  private static taskIdCounter: number = 1;
  
  id: number = 0;
  title: string = '';
  priority: string = '';
  description: string = '';

  @Output() taskAdded = new EventEmitter<Task>();

  onSelectSubmit(): void {
    this.id = AddTasks.taskIdCounter++;
    const newTask: Task = {
      id: this.id,
      title: this.title,
      priority: this.priority,
      description: this.description
    };
    
    this.taskAdded.emit(newTask);
    console.log('Task added:', newTask);
    
    // Reset form
    this.title = '';
    this.priority = '';
    this.description = '';
  }
}
