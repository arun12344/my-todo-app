import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AddTasks } from './add-tasks/add-tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,AddTasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-todo-app');
}
