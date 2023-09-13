
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { WebSocketService } from './web-socket.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureCardComponent } from './picture-card/picture-card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { PictureDiscussionComponent } from './picture-discussion/picture-discussion.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureCardComponent,
    PictureDiscussionComponent,
    ChatInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
