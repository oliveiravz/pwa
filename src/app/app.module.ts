import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaSeguroComponent } from './components/lista-seguro/lista-seguro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastroSeguroComponent,
    MenuComponent,
    ListaSeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
