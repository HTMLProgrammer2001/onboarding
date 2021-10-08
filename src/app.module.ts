import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { IncorporationModule } from './features/incorporation/incorporation.module';
import { LanguageMiddleware } from './common/middlewares/language.middleware';
import { SharedModule } from './common/shared.module';

@Module({
  imports: [
    //libraries
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: '',
      database: 'onboarding',
      autoLoadModels: true,
      synchronize: true,
      define: {
        timestamps: false,
      },
    }),

    //my modules
    SharedModule,
    IncorporationModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('');
  }
}
