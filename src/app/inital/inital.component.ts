import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpsService } from '../services/https.service';

@Component({
  selector: 'app-inital',
  standalone: true,
  imports: [],
  templateUrl: './inital.component.html',
  styleUrl: './inital.component.css'
})
export class InitalComponent implements OnInit {
  payload: any;
  position: any;

  constructor(private service: HttpsService) { }

  ngOnInit() {
    this.service.getDataPositionBetplay().subscribe((data: any) => {
      this.payload = data.response;
      this.position = this.payload[0].league.standings[1];
      console.log(this.position);
    });
  }
}
