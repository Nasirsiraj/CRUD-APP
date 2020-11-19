export class Student{
  public id ?: number;
  public name ?: string;
  public roll ?: number;
  public reg ?: number;
  public email ?: string;
  public department ?: string;
  public semester ?: string;

  constructor(id ?: number,
              name ?: string,
              roll ?: number,
              reg ?: number,
              email ?: string,
              department ?: string,
              semester ?: string) {
    this.id = id;
    this.name = name;
    this.roll = roll;
    this.reg = reg;
    this.email = email;
    this.department = department;
    this.semester = semester;
  }
}
