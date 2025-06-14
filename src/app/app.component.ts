import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, NgFor, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'desafio1';

  productoSeleccionado: any = null;

 
productos = [
    {
      id: 1,
      nombre: 'Smartphone Galaxy S21',
      precio: 899,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfyw1LjO88AEqiHSgv35v66clcccMj8EULA&s',
      tipoEnvio: 'Envío express'
    },
    {
      id: 2,
      nombre: 'Auriculares Inalámbricos',
      precio: 79,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvctz0XwjpbOZL92v8Gx9Hd5Fk5WHueUH0Q&s',
      tipoEnvio: 'Envío estándar'
    },
    {
      id: 3,
      nombre: 'Laptop HP Pavilion',
      precio: 1200,
      imagenUrl: 'https://m.media-amazon.com/images/I/61JTCfDkUpL.jpg',
      tipoEnvio: 'Envío prioritario'
    },
    {
      id: 4,
      nombre: 'Teclado Mecánico',
      precio: 65,
      imagenUrl: 'https://m.media-amazon.com/images/I/61cdNnPM7DL.jpg',
      tipoEnvio: 'Envío estándar'
    },
    {
      id: 5,
      nombre: 'Monitor 27" 4K',
      precio: 350,
      imagenUrl: 'https://m.media-amazon.com/images/I/714aVOYqLTL._AC_UF894,1000_QL80_.jpg',
      tipoEnvio: 'Envío frágil'
    },
    {
      id: 6,
      nombre: 'Mouse Inalámbrico',
      precio: 25,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNAXwUi8KVMbmdxtcQi3Hi178rQU48yfnmw&s',
      tipoEnvio: 'Envío económico'
    },
    {
      id: 7,
      nombre: 'Impresora Multifuncional',
      precio: 199,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBD3QpYdq6ExOnPnDu9_Zofq7AfyLGG2iHg&s',
      tipoEnvio: 'Envío grande'
    },
    {
      id: 8,
      nombre: 'Disco Duro Externo 1TB',
      precio: 59,
      imagenUrl: 'https://m.media-amazon.com/images/I/51ixOfwvwjL._AC_UF894,1000_QL80_.jpg',
      tipoEnvio: 'Envío estándar'
    },
    {
      id: 9,
      nombre: 'Tablet Samsung Galaxy Tab',
      precio: 320,
      imagenUrl: 'https://image-us.samsung.com/SamsungUS/pim/migration/mobile/tablets/all-other-tablets/sm-t550nzwaxar/Pdpkeyfeature-sm-t550nzwaxar-600x600-C1-062016.jpg?$product-details-jpg$',
      tipoEnvio: 'Envío express'
    },
    {
      id: 10,
      nombre: 'Cámara DSLR',
      precio: 750,
      imagenUrl: 'https://m.media-amazon.com/images/I/51NR+Auf92L._SR290,290_.jpg',
      tipoEnvio: 'Envío asegurado'
    }
  ];

  constructor(private router: Router) {}

  seleccionarProducto(producto: any) {
    this.router.navigate(['/descripcion', producto.id]);
  }

  seleccionarDetalles(producto: any) {
    this.productoSeleccionado = producto;
  }
}
