import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  data = Observable.create((observer)=>{
    setTimeout(()=>{
      observer.next("First Package");
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package");
    }, 2000);
    setTimeout(()=>{
      observer.next("Third Package");
    }, 4000);
    setTimeout(()=>{
      observer.complete();
    }, 5000);
    setTimeout(()=>{
      observer.next("Fourth Package");
    }, 6000);
  });

  myObs : any;
  obsData : any[] = [];

  ngOnInit() {
    this.myObs = this.data.subscribe(newData=>{
      console.log(newData);
      this.obsData.push(newData);
    }, 
    (err)=>{console.log("Error", err)},
    ()=>{console.log("COMPLETED!")})
  }

  onSubscribe(){
    this.data.subscribe(packages=>{this.obsData.push(packages)})
  }

  onUnsubscribe(){
    this.myObs.unsubscribe();
  }

}
