import { LoginComponent } from './login/login.component';
import { VentasComponent } from './ventas/ventas.component';

const routes = [
  { path: '', component: LoginComponent }, // Ruta para el login
  { path: 'ventas', component: VentasComponent },
  { path: '**', redirectTo: '' } // Redirigir cualquier otra ruta al login
];

export default routes;
