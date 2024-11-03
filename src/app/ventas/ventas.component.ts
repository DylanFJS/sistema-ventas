import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
})
export class VentasComponent implements OnInit {
  productos: any[] = [];
  cantidad: number = 0;
  mensajeError: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.authService.getProducts().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        this.mensajeError = 'Error al cargar productos';
      }
    );
  }

  agregarProducto(producto: any) {
    if (producto.cantidad < this.cantidad) {
      this.mensajeError = 'No hay suficiente stock';
      return;
    }
    // Lógica para agregar el producto a la compra
  }
}
