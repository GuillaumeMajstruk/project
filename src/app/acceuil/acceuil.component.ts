import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  receive: string;
  constructor(private data: SharedService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(receive => this.receive = receive);
  }
}
