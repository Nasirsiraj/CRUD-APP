import { Component, OnInit } from '@angular/core';
import {LaptopService} from '../../service/laptop/laptop.service';
import {Laptop} from '../../model/laptop.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-laptop',
  templateUrl: './all-laptop.component.html',
  styleUrls: ['./all-laptop.component.scss']
})
export class AllLaptopComponent implements OnInit {

  constructor(
    private laptopService: LaptopService,
    private router: Router
  ) { }
  public laptops: Laptop[] = [];
  public tableColumns = ['id', 'brandName', 'ram', 'rom', 'hardDisk', 'price', 'action'];
  goToEditPage(id$: number): void{
    this.router.navigate(['/dashboard/update-laptop', id$]);
  }
  deleteLaptop(id$: number): void{
    this.laptopService.deleteLaptopById(id$).subscribe(
      (res => {
        console.log(res);
        this.updateLaptops();
      }),
      (error => console.log((error as Error).message))
    );
  }
  updateLaptops(): void{
    this.laptopService.getAllLaptop().subscribe(
      (laptops => this.laptops = laptops),
      (error => console.log((error as Error).message))
    );
  }

  ngOnInit(): void {
    this.updateLaptops();
  }

}
