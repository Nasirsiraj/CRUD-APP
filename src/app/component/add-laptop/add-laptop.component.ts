import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LaptopService} from '../../service/laptop/laptop.service';
import {Laptop} from '../../model/laptop.model';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.scss']
})
export class AddLaptopComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private laptopService: LaptopService
  ) { }
  private laptop !: Laptop;
  public laptopForm: FormGroup = this.formBuilder.group({
    id: [null],
    brandName: ['', [Validators.required]],
    ram: [null, [Validators.required]],
    rom: [null, [Validators.required]],
    hardDisk: [null, [Validators.required]],
    price: [null, [Validators.required]]
  });
  onSubmit(): void{
    this.laptop = this.laptopForm.value;
    this.saveLaptop(this.laptop);
  }
  saveLaptop(laptop$: Laptop): void{
    this.laptopService.postOneLaptop(laptop$).subscribe(
      (laptop => {
        console.log(laptop);
        this.laptopForm.reset();
      }),
      (error => console.log((error as Error).message))
    );
  }
  // getter and setter
  get id(){
    return this.laptopForm.get('id');
  }
  get brandName(){
    return this.laptopForm.get('brandName');
  }
  get ram(){
    return this.laptopForm.get('ram');
  }
  get rom(){
    return this.laptopForm.get('rom');
  }
  get hardDisk(){
    return this.laptopForm.get('hardDisk');
  }
  get price(){
    return this.laptopForm.get('price');
  }
  ngOnInit(): void {
  }

}
