import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './component/login/login.component';
import { ForgetComponent } from './component/forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  MatSelectModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { NotesComponent } from './component/notes/notes.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { IconComponent } from './component/icon/icon.component';
import { UpdateComponent } from './component/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReminderComponent } from './component/reminder/reminder.component';
import { SearchnoteComponent } from './component/searchnote/searchnote.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { ArchiveComponent } from './component/archive/archive.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { LabelComponent } from './component/label/label.component';
import { TrashComponent } from './component/trash/trash.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearchpipePipe } from './pipe/searchpipe.pipe';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    DashboardComponent,
    NotesComponent,
    TakeNoteComponent,
    DisplaynotesComponent,
    IconComponent,
    UpdateComponent,
    ReminderComponent,
    SearchnoteComponent,
    ArchiveComponent,
    LabelComponent,
    TrashComponent,
    SearchpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    //MatDialog, 
    //MatDialogRef, 
    MatDialogModule,
    OwlDateTimeModule,
   OwlNativeDateTimeModule,
   MatDatepickerModule,
   MatNativeDateModule ,
MatSnackBarModule,
MatTooltipModule,
MatChipsModule,
MatCheckboxModule
 
   
   
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

