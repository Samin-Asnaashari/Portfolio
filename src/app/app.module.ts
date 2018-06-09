import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ProjectsComponent } from './projects/projects.component';
import { Project3Component } from './project3/project3.component';

/**
 * Services
 */
import { GithubService } from './github.service';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule,MatGridTile} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    SocialLinksComponent,
    ProjectsComponent,
    Project3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
