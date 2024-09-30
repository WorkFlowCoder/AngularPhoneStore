import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../models/phone';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-phone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-phone.component.html',
  styleUrl: './single-phone.component.scss'
})
export class SinglePhoneComponent implements OnInit{

  id!: string;
  phone!: Phone;
  otherPhone!:Phone[];

  constructor(private router: Router,private routerAct : ActivatedRoute, private products : ProductsService){
  }

  ngOnInit():void{
    this.routerAct.paramMap.subscribe(params => {
      this.id = params.get("id") || "";
    });
    console.log(this.id);
    this.phone = this.products.getUniqueProduct(this.id);
    this.otherPhone= this.products.getOthersPhones(this.id, 3);
  }

  test(id: string){
    this.router.navigate(['/product', id]).then(() => {
      window.location.reload();
    });
  }

}
