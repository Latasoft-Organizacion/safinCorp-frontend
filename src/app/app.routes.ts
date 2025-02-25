import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ListaSegurosComponent } from './components/lista-seguros/lista-seguros.component';
import { DetalleSeguroComponent } from './components/detalle-seguro/detalle-seguro.component';
import { CondominiosComponent } from './pages/condominios/condominios.component';
import { NuestrasAliansasComponent } from './components/nuestras-aliansas/nuestras-aliansas.component';
import { PagarSeguroComponent } from './components/pagar-seguro/pagar-seguro.component';
import { DenunciarSiniestroComponent } from './components/denunciar-siniestro/denunciar-siniestro.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio', // Redirige a la ruta 'inicio'
        pathMatch: 'full', // Coincidencia completa para evitar conflictos con rutas parciales
    },
    {
        path:'inicio',
        component:HomeComponent

    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'quienes-somos',
        component:QuienesSomosComponent
    },
    {
        path:'galeria',
        component:GaleriaComponent
    },
    {
        path:'seguros',
        component:ListaSegurosComponent
    },
    {
        path:'detalle-seguro/:slug',
        component:DetalleSeguroComponent
    },
    {
        path:'condominios',
        component:CondominiosComponent
    },
    {
        path:'nuestras-aliansas',
        component:NuestrasAliansasComponent
    },
    {
        path:'pagar-seguro',
        component:PagarSeguroComponent

    },
    {
        path:'denunciar-siniestro',
        component:DenunciarSiniestroComponent
    },
    {
        path: '**',
        redirectTo: 'inicio', // Redirige a la ruta 'inicio'
        
    }
];
