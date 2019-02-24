export class SignUpInfo {
  enrollmentID: string;
  email: string;
  dob: string;
  password: string;
  mobileNo: string;

  constructor(enrollmentID: string, email: string, password: string, mobileNo: string, dob: string) {
      this.enrollmentID = enrollmentID;
      this.dob = dob;
      this.email = email;
      this.password = password;
      this.mobileNo = mobileNo;
  }
}
