import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-tasks',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './add-tasks.html',
  styleUrl: './add-tasks.css',
})
export class AddTasks {}
