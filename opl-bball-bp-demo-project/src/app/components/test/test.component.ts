import { Component, ViewChild } from '@angular/core';
import { AdditionalFeatureReszlet, AdditionalFeatureReszletVerzio } from './class/testClass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent {
  title = 'Angular';
  additionalReszlet: AdditionalFeatureReszlet = {
      featureId: '1',
      label: 'műemlék',
      text: 'teszt szöveg',
      isFirst: true,
      link: 'www.google.com',
      type: 'muemlek'
  };
  additionalReszletVerzio: AdditionalFeatureReszletVerzio = {
      helyrajziSzam: ['123', '2255', '255678', '5879864'],
      type: 'helyrajziSzam'
  };

  getTemplate(
      data: AdditionalFeatureReszlet | AdditionalFeatureReszletVerzio
  ) {
    if ((data as AdditionalFeatureReszlet).featureId !== undefined) {
        return this.defaultTemplate;
      } else {
        return this.newDataTemplate;
  }
  }

  @ViewChild('defaultTemplate', { static: true }) defaultTemplate!: any;
  @ViewChild('newDataTemplate', { static: true }) newDataTemplate!: any;
}
