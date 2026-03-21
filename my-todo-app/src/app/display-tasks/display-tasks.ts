import { Component, Input } from '@angular/core';
import { Task } from './display-tasks.model';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-display-tasks',
  imports: [MatCardTitle,MatCardSubtitle,MatCardHeader,MatCardContent,MatCard],
  templateUrl: './display-tasks.html',
  styleUrl: './display-tasks.css',
})
export class DisplayTasks {

  @Input()tasks!: Task[];
}
