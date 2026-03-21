import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AddTasks } from './add-tasks/add-tasks';
import { DisplayTasks } from './display-tasks/display-tasks';
import { Task } from './display-tasks/display-tasks.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,AddTasks,DisplayTasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-todo-app');
  tasks: Task[] = [];

  onTaskAdded(task: Task): void {
    this.tasks.push(task);
  }
}
