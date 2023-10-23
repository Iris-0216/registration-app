export interface Applicant {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  gender: Gender;
}

enum Gender {
  male,
  female,
}
