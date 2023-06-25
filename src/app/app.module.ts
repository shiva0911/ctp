import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { ChildcomComponent } from './childcom/childcom.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ChildComponent,
       ChildcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
