import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LaptopService} from '../../service/laptop/laptop.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.scss']
})
export class UpdateLaptopComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private laptopService: LaptopService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  public laptopForm: FormGroup = this.formBuilder.group({
    id: [null],
    brandName: ['', [Validators.required]],
    ram: [null, [Validators.required]],
    rom: [null, [Validators.required]],
    hardDisk: [null, [Validators.required]],
    price: [null, [Validators.required]]
  });
  getExistingLaptop(): void{
    this.laptopService.getLaptopById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(
      (response => {
        this.laptopForm.setValue(response);
      }),
      (error => console.log((error as Error).message))
    );
  }
  saveLaptop(): void{
    this.laptopService.postOneLaptop(this.laptopForm.value).subscribe(
      (response => {
        this.router.navigate(['/dashboard/all-laptop']);
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
    this.getExistingLaptop();
  }

}
