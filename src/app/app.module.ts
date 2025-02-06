import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/elements/create-post/create-post.component';
import { AiContentComponent } from './components/elements/ai-content/ai-content.component';
import { SocialMediaComponent } from './components/elements/social-media/social-media.component';
import { MultiplePlatformsComponent } from './components/elements/multiple-platforms/multiple-platforms.component';
import { ConsistentScheduleComponent } from './components/elements/consistent-schedule/consistent-schedule.component';
import { AudienceGrowthComponent } from './components/elements/audience-growth/audience-growth.component';
import { GrowFollowersComponent } from './components/elements/grow-followers/grow-followers.component';
import { SchedulePostsComponent } from './components/elements/schedule-posts/schedule-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    AiContentComponent,
    SocialMediaComponent,
    MultiplePlatformsComponent,
    ConsistentScheduleComponent,
    AudienceGrowthComponent,
    GrowFollowersComponent,
    SchedulePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
