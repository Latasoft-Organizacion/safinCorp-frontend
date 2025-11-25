export interface GaleriaItem {
  nombre: string;
  descripcion: string;
  link?: string;
  fotos?: string[];
  categoria: 'quienes-somos' | 'eventos' | 'certificaciones';
}

export interface GaleriaCategoria {
  id: string;
  nombre: string;
  items: GaleriaItem[];
}

export interface Charla {
  titulo: string;
  descripcion: string;
  url: string;
  thumbnail: string;
  fecha?: string;
}
