import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelojComponent } from './reloj/reloj.component';
import { BotonPrincipalComponent } from './boton-principal/boton-principal.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { HistorialComponent } from './historial/historial.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RelojComponent,
    BotonPrincipalComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    ToastModule,
    MessagesModule,
    TableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
