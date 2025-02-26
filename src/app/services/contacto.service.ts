import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl=`${environment.apiUrl}/contacto`;
  constructor(private htpp:HttpClient) { }


  sendMail(data:Contacto):Observable<Contacto>{
    return this.htpp.post<Contacto>(`${this.apiUrl}/send-mail`,data)

  }
}
