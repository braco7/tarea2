import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { GotService } from '../services/got.service';

@Component({
  selector: 'app-game-of-thrones',
  templateUrl: './game-of-thrones.component.html',
  styleUrls: ['./game-of-thrones.component.css']
})
export class GameOfThronesComponent implements OnInit {

  caracteres: any[] = []

  constructor(private gotService: GotService) { }

  ngOnInit(): void {
    this.getDat()
  }

  getDat() {
    this.gotService.getList().subscribe((data: any[]) => {
      this.caracteres = data
    })
    //console.log(this.caracteres)
  }
}



