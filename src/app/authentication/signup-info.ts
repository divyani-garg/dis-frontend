export class SignUpInfo {
  username: string;
  email: string;
  dob: string;
  password: string;
  mobileNo: string;

  constructor(username: string, email: string, password: string, mobileNo: string, dob: string) {
      this.username = username;
      this.dob = dob;
      this.email = email;
      this.password = password;
      this.mobileNo = mobileNo;
  }
}
