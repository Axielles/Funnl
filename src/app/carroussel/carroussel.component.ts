import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'CarrousselComponent',
  templateUrl: './carroussel.component.html',
  providers: [NgbCarouselConfig]
})

export class CarrousselComponent {

  images = [1, 2, 3].map(() => `https://picsum.photos/1440/400?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}
