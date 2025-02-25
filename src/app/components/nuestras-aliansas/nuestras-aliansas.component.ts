import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Alianza, NuestrasAliansasService } from '../../services/nuestras-aliansas.service';
import { RouterLink } from '@angular/router';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nuestras-aliansas',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nuestras-aliansas.component.html',
  styleUrl: './nuestras-aliansas.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class NuestrasAliansasComponent  {
  alianzas: Alianza[] = [];

  constructor(private alianzasService: NuestrasAliansasService) {}

  ngOnInit(): void {
    this.alianzasService.getAlianzas().subscribe((data: Alianza[]) => {
      this.alianzas = data;
    });
  }
 

}
