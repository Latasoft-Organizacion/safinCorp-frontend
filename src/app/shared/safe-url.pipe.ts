import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    // Prevenir autoplay en videos de YouTube
    if (value.includes('youtube.com/embed')) {
      // Agregar parámetros para prevenir autoplay
      const separator = value.includes('?') ? '&' : '?';
      value = `${value}${separator}autoplay=0&rel=0&modestbranding=1`;
    }
    
    // Prevenir autoplay en Google Drive
    if (value.includes('drive.google.com')) {
      // Google Drive no soporta autoplay en embeds por defecto
      const separator = value.includes('?') ? '&' : '?';
      value = `${value}${separator}autoplay=0`;
    }
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
