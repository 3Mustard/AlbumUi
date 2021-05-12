import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { ShowGrpComponent } from './group/show-grp/show-grp.component';
import { AddEditGrpComponent } from './group/add-edit-grp/add-edit-grp.component';
import { AlbumComponent } from './album/album.component';
import { ShowAlbmComponent } from './album/show-albm/show-albm.component';
import { AddEditAlbmComponent } from './album/add-edit-albm/add-edit-albm.component';
import { SharedService } from './shared.service';



@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    ShowGrpComponent,
    AddEditGrpComponent,
    AlbumComponent,
    ShowAlbmComponent,
    AddEditAlbmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
