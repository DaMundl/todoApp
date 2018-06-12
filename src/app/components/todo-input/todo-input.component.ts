import { Component, OnInit } from '@angular/core';
import { TodoService} from '../../services/todo.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todoText:string;

  constructor(private todoService:TodoService) {
    this.todoText = '';
   }

  ngOnInit() {
  }

  private addTodo(): void{
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

}
