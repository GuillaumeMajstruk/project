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
  myParams: object = {};
  myStyle: object = {};
  colorAnimation: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.data.currentMessage.subscribe(receive => this.receive = receive);
        this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': 'rgb(3, 43, 52)'
    };

    this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#f0d36e'
          },
          shape: {
              type: 'circle',
              polygon: {
                nb_sides: 3
              }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'top',
            random: false,
            straight: false,
            out_mode: 'out',
          }
        },
        interactivity:
        {
          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 0.4
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
    };
  }
}
