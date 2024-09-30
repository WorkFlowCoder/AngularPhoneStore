export class Phone {
  id!: string;
  name!: string;
  image!: string;
  description!: string;
  price!: number;

  constructor(id:string,name:string,image:string,description:string,price:number){
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }

}
