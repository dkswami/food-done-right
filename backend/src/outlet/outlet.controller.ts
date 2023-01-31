import { Controller, Get, Param, Post } from '@nestjs/common';
import { OutletService } from './outlet.service'

@Controller('outlet')
export class OutletController {
	constructor(private readonly outletService: OutletService) {}

	@Get()
	getAll(): Promise<any> {
		return this.outletService.getAll();
	}

	@Get(':address')
	checkOutlet(@Param('address') address: string): Promise<any> {
		return this.outletService.checkOutlet(address);
	}
}
