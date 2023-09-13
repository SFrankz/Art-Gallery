
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from './web-socket.service';
import { PictureService } from './picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pictures: any[] = [];
  searchTerm: string = '';
  selectedPicture: any;

  constructor(private router: Router, private pictureService: PictureService) {}

  ngOnInit() {
    this.fetchPictures();
  }

  fetchPictures() {
    this.pictureService.getPictures().subscribe((data: any) => {
      this.pictures = data;
    });
  }

  get filteredPictures() {
    return this.pictures.filter(picture =>
      picture.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      picture.artist.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectPicture(picture: any) {
    this.selectedPicture = picture;
    const pictureId = picture.id;
    this.router.navigate(['picture-discussion', pictureId]);
  }
}
