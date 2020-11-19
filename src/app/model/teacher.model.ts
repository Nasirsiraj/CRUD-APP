export class Teacher{
  public id ?: number;
  public name ?: string;
  public subject ?: string;
  public department ?: string;
  public shift ?: string;
  public email ?: string;


  constructor(id ?: number,
              name ?: string,
              subject ?: string,
              department ?: string,
              shift ?: string,
              email ?: string) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.department = department;
    this.shift = shift;
    this.email = email;
  }
}
