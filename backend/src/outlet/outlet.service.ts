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
		const allLocations = await geocoder.geocode(location);
		const locationCordinates = allLocations.map(({ longitude, latitude }) => {
			return [longitude, latitude];
		})
		let outletName
		console.log(locationCordinates)
		this.KmlAssets.forEach((asset) => {
			if (asset.geometry.type === 'Polygon') {
				
				locationCordinates.forEach((location) => {
					
					const isOutlet = classifyPoint(asset.geometry.coordinates[0], location)	// test coordinate [16.38717,48.20266]
					if (isOutlet === -1 || isOutlet === 0) {
						outletName = asset.properties.name
					} else {
						outletName = 'Not found'
					}
				})
			}
		})
		return outletName;
	}

	getAll(): any {
		return this.KmlAssets;
	}

	async checkOutlet(location: string): Promise<any> {
		const result = await this.getOutletForLocation(location);

		return result;
	}
}
