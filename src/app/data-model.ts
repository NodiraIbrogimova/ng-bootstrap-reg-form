export class User {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: Address;
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const users: User[] = [];
