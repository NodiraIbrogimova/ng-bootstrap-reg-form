export class User {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: number;


  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.street = obj.street;
    this.city = obj.city;
    this.state = obj.state;
    this.zip = obj.zip;
  }
}

export const list: User[] = [];

export const states = ['Uzbekistan', 'Russia', 'Korea', 'Germany', 'Italy', 'Brazil'];
