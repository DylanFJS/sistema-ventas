import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routes from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './ventas/ventas.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de incluir FormsModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configurar el enrutamiento
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
