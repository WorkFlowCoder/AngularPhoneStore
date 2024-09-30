import { Injectable } from '@angular/core';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  phones: Phone[] = [
    new Phone("1",'Phone A','assets/images/phone1.jpg','Description of Phone A',299.99),
    new Phone("2",'Phone B','assets/images/phone2.jpg','Description of Phone B',399.99),
    new Phone("3",'Phone C','assets/images/phone3.jpg','Description of Phone C',499.99),
    new Phone("4",'Phone D','assets/images/phone4.jpg','Description of Phone D',599.99),
    new Phone("5",'Phone E','assets/images/phone5.jpg','Description of Phone E',699.99),
    new Phone("6",'Phone F','assets/images/phone6.jpg','Description of Phone F',799.99)
  ];

  getUniqueProduct(id: string) : Phone{
    const phone = this.phones.find(phone => phone.id === id);
    if(phone==undefined){
      return new Phone("undefined","undefined","undefined","undefined",0);
    }
    return phone;
  }

  getAllProduct() : Phone[]{
    return this.phones;
  }

  getOthersPhones(id:string, num:number):Phone[]{
    const filteredPhones = this.phones.filter(phone => phone.id !== id);
    const listOfPhone = filteredPhones.slice(0, num);
    return listOfPhone;
  }
}
