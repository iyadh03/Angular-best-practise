import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-time-child',
  templateUrl: './counter-time-child.component.html',
  styleUrls: ['./counter-time-child.component.css']
})
export class CounterTimeChildComponent implements OnInit,OnDestroy {
  intervalId=0;
  message="";
  seconds=11;
  clearTimer(){
    clearInterval(this.intervalId)
  }
private CountDown(){
  this.clearTimer();
  this.intervalId=window.setInterval(()=>{
  this.seconds-=1;
  if(this.seconds==0){
    this.message="blast off"

  }else if(this.seconds<0) {
    this.seconds=10;

  }
  },1000)

}
start(){
  this.CountDown();
}
stop(){
  this.clearTimer();
  this.message=`time holding ${this.seconds}`

}

  ngOnInit(): void {
    console.log("init start");
    
    this.start();
  }
  ngOnDestroy(): void {
    console.log("clear time invoke");
    
    this.clearTimer();
  }

}
