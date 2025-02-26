import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      mensaje:['',Validators.required]
    })
  }


  sendEmail(){
    if(this.contactForm.invalid){
      alert("Formulario invalido por favor llene todos los campos")
      return;
    }
    const data = this.contactForm.value;
    this.contactoService.sendMail(data).subscribe((res)=>{
      alert("Mensaje enviado correctamente")
      this.contactForm.reset();
    })
  }

}
