import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { AppComponent } from './app.component';
import { MathjaxModule as DevMathjaxModule } from 'simple-ngx-mathjax';
//
import { MathjaxModule } from 'simple-ngx-mathjax';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // for dev mode testing
    // DevMathjaxModule.forRoot(),
    MathjaxModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
