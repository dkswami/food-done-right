import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OutletModule } from './outlet/outlet.module';

@Module({
	imports: [OutletModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
