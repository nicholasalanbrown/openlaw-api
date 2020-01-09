import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersEntity } from './users/users.entity';
import { RolesEntity } from './roles/roles.entity';
import { ProposalsEntity } from './proposals/proposals.entity';
import { MessagesEntity } from './messages/messages.entity';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ProposalsModule } from './proposals/proposals.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'openlaw',
      password: 'openlaw',
      database: 'openlaw',
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: [UsersEntity, RolesEntity, ProposalsEntity, MessagesEntity],
    }),
    AuthModule,
    MessagesModule,
    ProposalsModule,
    UsersModule,
    RolesModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => {
        return { req }},
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
