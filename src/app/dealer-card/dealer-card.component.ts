import { Dealer } from './../interfaces/dealer';
import { DealersService } from './../services/dealers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-card',
  templateUrl: './dealer-card.component.html',
  styleUrls: ['./dealer-card.component.scss']
})
export class DealerCardComponent implements OnInit {
  dealers: Dealer[];
  constructor(private dealersService: DealersService) { }

  ngOnInit() {
    this.getDealers();
  }

  getDealers(): void {
    // this.dealers = this.dealersService.getDealers();
    this.dealersService.getDealers()
      .subscribe(dealers => this.dealers = dealers);
      console.table(this.dealers);
  }

}
