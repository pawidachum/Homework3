import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SwiftComponent } from './swift/swift.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiftComponent,
    NavbarComponent,
    ContentComponent,
    MiddleContentComponent,
    FooterContentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
