import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-men-fragrance',
  templateUrl: './men-fragrance.component.html',
  styleUrls: ['./men-fragrance.component.css']
})
export class MenFragranceComponent implements OnInit {
  showPro :any =[]

  constructor(public global:GlobalService) {}
  

  
  ngOnInit(): void {
  

  // this.global.loadprods().subscribe(product=>{
  //   this.showPro = product.data
  // })
}

}
