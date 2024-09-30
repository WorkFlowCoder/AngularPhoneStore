import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail="maurand14000@gmail.com";
  nom="Maurand";
  prenom="Julia";
  competence="Développeuse Java/Angular";
  phone="+33 6 89 83 16 04";
  localisation="Rennes, France";

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire valide', this.contactForm.value);
      alert('Message envoyé avec succès !');
      this.contactForm.reset();
    } else {
      console.log('Formulaire invalide');
      alert('Veuillez remplir correctement tous les champs');
    }
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
