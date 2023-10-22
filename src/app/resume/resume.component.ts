import { Component, OnInit, HostListener} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  jsonData: any;
  imagePath: string = '../../../assets/images/profile-image.jpg';
  isScrolled = false;
  resumePath: string = '../../../assets/Coresume5.pdf';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getJSONData().subscribe(data => {
      this.jsonData = data;
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;

    if (scrollY >= 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}


