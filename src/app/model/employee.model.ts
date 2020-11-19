export class Employee {
  public id ?: number;
  public name ?: string;
  public department ?: string;
  public shift ?: string;
  public salary ?: number;

  constructor(id ?: number,
              name ?: string,
              department ?: string,
              shift ?: string,
              salary ?: number) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.shift = shift;
    this.salary = salary;
  }
}
