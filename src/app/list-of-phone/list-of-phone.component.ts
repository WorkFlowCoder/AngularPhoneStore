import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Phone } from '../models/phone';

@Component({
  selector: 'app-list-of-phone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-of-phone.component.html',
  styleUrl: './list-of-phone.component.scss'
})

export class ListOfPhoneComponent {
  phones!: Phone[];

  constructor(private router: Router, private productsService : ProductsService) { }

  ngOnInit(): void {
    this.phones = this.productsService.getAllProduct();
  }

  test(id: string){
    //console.log(id);
    this.router.navigateByUrl("product/"+id);
  }
}
