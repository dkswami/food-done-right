import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
const tj = require('togeojson')
// node doesn't have xml parsing or a dom. use xmldom
import { DOMParser } from 'xmldom';

const NodeGeocoder = require('node-geocoder');
const classifyPoint = require('robust-point-in-polygon');

const options = {
	provider: 'mapquest',
	apiKey: 'KoPQHyBHYRZwhIAT94wCMGAM9oU9X8QX'
}
const geocoder = NodeGeocoder(options);


@Injectable()
export class OutletService {
	file = readFileSync('./asset.kml', 'utf-8');
	kml = new DOMParser().parseFromString(this.file);
	KmlAssets = tj.kml(this.kml).features;

	async getOutletForLocation(location: string): Promise<any> {
		const locationData = await geocoder.geocode(location);
		const locationCoordinates = [locationData[0].longitude, locationData[0].latitude];

		const outlet = this.KmlAssets.filter((asset) => {
			return asset.geometry.type === 'Polygon';
		}).find((asset) => {
			const isOutlet = classifyPoint(asset.geometry.coordinates[0], locationCoordinates)	// test coordinate [16.38717,48.20266]
			console.log('isOutlet', isOutlet)
			return isOutlet === -1 || isOutlet === 0
		})

		if(outlet) {
			return outlet.properties.name;
		} else {
			return 'No Outlet Found';
		}
	}

	getAll(): any {
		return this.KmlAssets;
	}

	async checkOutlet(location: string): Promise<any> {
		const result = await this.getOutletForLocation(location);
		return result;
	}
}
