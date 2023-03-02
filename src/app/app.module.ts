import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CounterTimeChildComponent } from './counter-time-child/counter-time-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    CounterTimeChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
