export class Dealer {
    companyID: Number;
    name: String;
    phone1: String;
    email: String;
    addressLine1: String;
    addressLine2?: String;
    city: String;
    state: String;
    country: String;
    zipcode: String;
    weekHours: {
    mon: 	String;
    tue:  String;
    wed:  String;
    thu:  String;
    fri:  String;
    sat:  String;
    sun?: String;
    };
    certifications: Array<String>;
}
