import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    TrackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
