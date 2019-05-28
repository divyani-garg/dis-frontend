export class LeaveForm {
  to: Date;
  from: Date;
  subject: string;
  details: string;

  constructor(to: Date,from: Date, subject: string, details: string) {
      this.to = to;
      this.from = from;
      this.subject = subject;
      this.details = details;
  }
}
