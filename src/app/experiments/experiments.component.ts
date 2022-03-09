import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css'],
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    'Moon soil sample',
    'Plant growth in orbit',
    'Human bone density changes',
    'Water droplet podcast for grades K-5',
    'Satellite launch',
  ];

  chosenExperiments: string[] = [];

  constructor() {}

  ngOnInit() {}

  addExperiment(item: string) {
    if (
      !this.chosenExperiments.includes(item) &&
      this.chosenExperiments.length < 3
    ) {
      console.log('Something happened?', item);
      this.chosenExperiments.push(item);
    }
  }

  removeExperiment(item: string) {
    let index = this.chosenExperiments.indexOf(item);
    this.chosenExperiments.splice(index, 1);
  }
}
