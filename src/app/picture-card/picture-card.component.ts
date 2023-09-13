
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css'],
})
export class PictureCardComponent {
  @Input() picture: any;
  @Output() pictureSelected: EventEmitter<any> = new EventEmitter<any>();
  imageResolution: string = '';
  imageSize: string = '';

  selectPicture() {
    this.pictureSelected.emit(this.picture);
  }

  onImageMouseover(event: MouseEvent) {
    this.getImageInformation(event.target as HTMLImageElement);
  }

  onImageMouseout() {
    this.imageResolution = '';
    this.imageSize = '';
  }

  private getImageInformation(image: HTMLImageElement) {
    const img = new Image();
    img.src = image.src;

    img.onload = () => {
      this.imageResolution = `${img.naturalWidth}x${img.naturalHeight}`;
      this.getImageSize(img.src).then((size: number) => {
        this.imageSize = this.formatBytes(size);
      });
    };
  }

  private getImageSize(url: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const fileSize = parseInt(xhr.getResponseHeader('Content-Length') || '0', 10);
            resolve(fileSize);
          } else {
            reject();
          }
        }
      };
      xhr.send(null);
    });
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
