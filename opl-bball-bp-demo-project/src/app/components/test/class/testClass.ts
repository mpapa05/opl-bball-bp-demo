export class AdditionalFeatureReszlet {
    featureId!: string;
    label!: string;
    text!: string;
    belyegKep?: string;
    isFirst?: boolean;
    link?: string;
    type?: 'muemlek' | 'helyrajziSzam';
  }
  
  export class AdditionalFeatureReszletVerzio {
    helyrajziSzam!: string[];
    type?: 'muemlek' | 'helyrajziSzam';
  }