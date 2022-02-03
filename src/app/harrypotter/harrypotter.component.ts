import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HpService } from '../services/hp.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {
  chosenHouse = ""
  casa: any[] = [];

  constructor(private hpService: HpService) { }

  ngOnInit(): void { }

  getDatos(e: any) {
    this.hpService.getList(e).subscribe((data: any[]) => {
      this.casa = data
      console.log(this.casa)
    })
  }

  show(e: any) {
    console.log(e.target.innerText)
    this.chosenHouse = e.target.innerText
    this.getDatos(this.chosenHouse)
  }

}
