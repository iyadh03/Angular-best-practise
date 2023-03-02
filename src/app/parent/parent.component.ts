import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterTimeChildComponent } from '../counter-time-child/counter-time-child.component';

@Component({
  // template:`<h1> hello parent</h1>`,
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
// providers :resource that will be inject into component constructor
//styles: Inline styles. NOTE: DO NOT use this parameter with require, it works on development but when you
//build the application in production all your styles are lost

export class ParentComponent implements AfterViewInit {
  @ViewChild(CounterTimeChildComponent)
  private timercomponent!: CounterTimeChildComponent;
  agreed = 0;
  disagree = 0;
  seconds() {
    return 0
  }
  Names =
    ["feres   ", "   iyadh  ", "hello"]
  public form = new FormGroup({
    name: new FormControl('', Validators.required)
  })
  constructor() { }
  ngAfterViewInit(): void {
    console.log("child was called");
    
    setTimeout(() =>
      this.seconds = () => this.timercomponent.seconds,
      0);
  }
  Submit(event: any) {
    console.log(event);
    console.log(this.form.controls.name.value);




  }
  resultat(event: boolean) {
    event ? this.agreed++ : this.disagree++

  }
  start() {
    this.timercomponent.start();
  }
  stop() {
    this.timercomponent.stop();
  }

}
