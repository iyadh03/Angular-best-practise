import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  disable:boolean=false;
  private _name!: String;
  @Input()
  set name(name:String){
    this._name= name.toUpperCase() ;

  }
  get name():String{
    return this._name
  }
  @Output() voteResult=new EventEmitter<boolean>()



  @Input("master") masterName:String | undefined;
  vote(value:boolean){
    this.voteResult.emit(value);
    this.disable=true

  }

}
