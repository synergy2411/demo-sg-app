import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {

  filterStatus = "";

  addNewTodo(){
    this.todos.push({
      label : "New Work", 
      status : "pending"
    });
  }

  todos = [{
    label : "Some Work",
    status : "done"
  },{
    label : "New Work",
    status : "pending"
  },{
    label : "Some Work",
    status : "done"
  },{
    label : "New Work",
    status : "pending"
  }]

  contact_no : number = 987654321;

  asyncData = new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve("Here the data comes...")
    }, 2000);
  })

}
