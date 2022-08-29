import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drum-kit',
  templateUrl: './drum-kit.component.html',
  styleUrls: ['./drum-kit.component.scss']
})
export class DrumKitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeydown(event: { code: string | null; }) {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
      //   take the event keycode and see if it matches with any audio sound
      if (audio.getAttribute('data-keyCode') === event.code) {
        audio.play();
        audio.currentTime = 0;
      }
    });

    const keyElements = document.querySelectorAll('.key');
    keyElements.forEach(key => {
      if (key.getAttribute('data-keyCode') === event.code) {
        key.classList.add('playing');

        // remove the animation when the key finishes transitioning from one CSS class to two (key + playing)
        key.addEventListener('transitionend', () => {
          key.classList.remove('playing');
        });
      }
    });
  }
}
