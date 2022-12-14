import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrumService {

  banks = [
    {
      id: 'heater-kit',
      description: 'Heater Kit',
    },
    {
      id: 'smooth-piano-kit',
      description: 'Smooth Piano Kit',
    }
  ];

  data = {
    'heater-kit': [
      {
        keyCode: 81,
        letter: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        keyCode: 87,
        letter: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        keyCode: 69,
        letter: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        keyCode: 65,
        letter: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        keyCode: 83,
        letter: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        keyCode: 68,
        letter: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        keyCode: 90,
        letter: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        keyCode: 88,
        letter: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        keyCode: 67,
        letter: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ],
    'smooth-piano-kit': [
      {
        keyCode: 81,
        letter: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      },
      {
        keyCode: 87,
        letter: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
      },
      {
        keyCode: 69,
        letter: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      },
      {
        keyCode: 65,
        letter: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
      },
      {
        keyCode: 83,
        letter: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      },
      {
        keyCode: 68,
        letter: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
      },
      {
        keyCode: 90,
        letter: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      },
      {
        keyCode: 88,
        letter: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      },
      {
        keyCode: 67,
        letter: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      }
    ]
  };

  getLookup(array: any[], key: string | number) {

    return array.reduce((acc, item) => {
      return {
        ...acc,
        [item[key]]: item
      };
    }, {});

  }
}
