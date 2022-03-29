import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';

import { HeroesModule } from './heroes/heroes.module';
import { KeyLoggerComponent } from './components/key-logger/key-logger.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';
import { ReservedNameDirective } from './directives/reserved-name.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CopyTextComponent } from './components/copy-text/copy-text.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FlexComponent } from './components/flex/flex.component';
import { AnimationsComponent } from './components/animations/animations.component'

 
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    KeyLoggerComponent,
    PageNotFoundComponent,
    LoginComponent,
    ReactiveLoginComponent,
    ReservedNameDirective,
    ButtonsComponent,
    DialogComponent,
    TableComponent,
    CopyTextComponent,
    FlexComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      delay: 2000,
    }),
    // (environment.production ? HttpClientInMemoryWebApiModule.forRoot(DataService) : [])
    // RouterModule.forRoot(routes)
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ClipboardModule,
    DragDropModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:     AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

