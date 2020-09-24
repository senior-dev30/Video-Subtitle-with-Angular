import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements AfterViewInit {
  @ViewChild('slider') slider;
  vid: any;
  playflag: any = false;
  videopath = 'https://media.w3.org/2010/05/bunny/movie.mp4';
  videoDuration = 5.28;
  currentTime = 0;
  editItems = [{title: '', range: [0, 5.28]}];
  constructor() {
  }

  ngAfterViewInit() {
    this.vid = <HTMLAudioElement>document.getElementById('myvideo');
    const _this = this;
    setTimeout(function() {
      _this.videoDuration = _this.vid.duration;
      setInterval(function () {
        const variable =  (_this.vid.currentTime).toFixed(2);
        _this.currentTime = variable;
      }, 50);
    }, 100);
  }
  play() {
    this.playflag = true;
    this.vid.play();
    this.slider.config.range.max = 5;
  }
  stop() {
    this.playflag = false;
    this.vid.pause();
  }
  restart() {
    this.vid.currentTime = 0;
  }
  forward() {
    this.vid.currentTime += 1;
  }
  back() {
    this.vid.currentTime -= 1;
  }
  onChange() {
    this.vid.currentTime = this.currentTime;
  }
  add() {
    this.editItems.push({title: '', range: [0, 5.28]});
  }
  remove(index) {
    this.editItems.splice(index, 1);
  }
  changeRange(i, e) {
    // this.editItems[0].range = [2, 3];
    // this.editItems[i].range = [e[0], e[1]];
  }
}
