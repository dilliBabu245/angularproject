import { Component, OnInit } from '@angular/core';
import { coursesService } from '../courses.service';

@Component({
  selector: 'app-aboutservice',
  templateUrl: './aboutservice.component.html',
  styleUrls: ['./aboutservice.component.css']
})
export class AboutserviceComponent implements OnInit {
courses;
  constructor(service:coursesService) {
    this.courses=service.getCourses()
    
   }

  ngOnInit() {
  }

}
