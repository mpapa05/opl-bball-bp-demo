import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: Map;

  ngOnInit(): void {
    const osmLayer = new TileLayer({
      source: new OSM()
    });

    const kosarpalyak: Feature[] = [
      // Helyettesítsd a konkrét kosárpályák koordinátáival
      new Feature({
        geometry: new Point(fromLonLat([19.040235, 47.497913])),
        name: 'Kosárpálya 1'
      })
    ];

    const vectorSource = new VectorSource({
      features: kosarpalyak
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new Icon({
          src: '../../assets/icons/basketball-icon.png', // Helyettesítsd megfelelő ikonnal 
          scale: 0.1
        })
      })
    });

    this.map = new Map({
      target: 'map',
      layers: [osmLayer, vectorLayer],
      view: new View({
        center: fromLonLat([19.040235, 47.497913]),
        zoom: 12
      })
    });

    this.map.on('click', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
      if (feature) {
        alert('Kosárpálya: ' + feature.get('name'));
        // Itt lehetőség nyílik egy modális ablak nyitására az esemény szervezéséhez
      }
    });
  }
}
