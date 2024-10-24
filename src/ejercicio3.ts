interface ContactInfo {
   id: number;
   name: string;
   phoneNumber: string;
   validatePhoneNumber(): void;
}

class Contact implements ContactInfo {
   id: number;
   name: string;
   phoneNumber: string;

   constructor() {

   }
   public validatePhoneNumber(): void {
      if (this.phoneNumber) {

      }
   }
}
