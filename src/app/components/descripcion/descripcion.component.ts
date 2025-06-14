import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  idProducto: number | null = null;
  producto: any = null;
  

  currentRating = 0;

  setRating(rating: number) {
    this.currentRating = rating;
  }

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
  valorDolar: number = 0;
  valorBs: number = 0;
  valorPrincipio: number = this.valorDolar + 1;
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    fetch('https://ve.dolarapi.com/v1/dolares/oficial')
    .then(response => response.json())
    .then(data => {
      this.valorDolar = data.promedio;

      console.log(data);
      console.log(this.valorDolar +'hola');
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProducto = +params['id'];
      this.producto = this.productos.find(p => p.id === this.idProducto);
      this.valorBs =this.producto.precio *  this.valorDolar ;
    });
    
  }
}
