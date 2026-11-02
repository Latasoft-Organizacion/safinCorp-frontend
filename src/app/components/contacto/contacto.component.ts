import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contactForm!:FormGroup;
  constructor(private fb: FormBuilder, private contactoService:ContactoService){
    this.buildContactForm();
  }

  private buildContactForm(){
    this.contactForm= this.fb.group({
      nombre:['',Validators.required],
      email:['',Validators.required],
      telefono:['',Validators.required],
      mensaje:['',Validators.required],
      aceptaPrivacidad:[false,Validators.requiredTrue]
    })
  }


  sendEmail(){
    if(this.contactForm.invalid){
      alert("Formulario inválido. Por favor llene todos los campos y acepte la Política de Privacidad.")
      return;
    }
    const { aceptaPrivacidad, ...data } = this.contactForm.value;
    this.contactoService.sendMail(data).subscribe((res)=>{
      alert("Mensaje enviado correctamente")
      this.contactForm.reset();
    })
  }

}