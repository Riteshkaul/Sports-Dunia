import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollegeModule } from './college/college.module';

@Module({
  imports: [CollegeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
