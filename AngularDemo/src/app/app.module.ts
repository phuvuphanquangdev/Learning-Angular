import { BrowserModule } from '@angular/platform-browser';  
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule, FormsModule, ReactiveFormsModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent],  
  schemas: [NO_ERRORS_SCHEMA]  
})  
export class AppModule { }  