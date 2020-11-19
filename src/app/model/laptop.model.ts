export class Laptop{
  public id ?: number;
  public brandName ?: string;
  public ram ?: number;
  public rom ?: number;
  public hardDisk ?: number;
  public price ?: number;

  constructor(id ?: number,
              brandName ?: string,
              ram ?: number,
              rom ?: number,
              hardDisk ?: number,
              price ?: number) {
    this.id = id;
    this.brandName = brandName;
    this.ram = ram;
    this.rom = rom;
    this.hardDisk = hardDisk;
    this.price = price;
  }
}
