import { Injectable } from '@nestjs/common';
import * as parseKML from 'parse-kml';
const NodeGeocoder = require('node-geocoder');
const options = {
	provider: 'mapquest',
	apiKey: 'KoPQHyBHYRZwhIAT94wCMGAM9oU9X8QX'
}
const geocoder = NodeGeocoder(options);
var classifyPoint = require('robust-point-in-polygon');

@Injectable()
export class OutletService {
	kmlData =  parseKML.toJson('./asset.kml');

	async getOutletForLocation(location: string): Promise<any> {
		const result = await geocoder.geocode(location);
		console.log('location: ', result);
		return result;
	}

	getAll(): any {		
		return this.kmlData;
	}

	async checkOutlet(location: string): Promise<any> {
		const result = await this.getOutletForLocation(location);

		return result;
	}
}
