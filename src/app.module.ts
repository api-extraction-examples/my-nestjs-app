import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';
import { V2Module } from './v2/v2.module';
import { V3Module } from './v3/v3.module';
import { V5Module } from './v5/v5.module';

@Module({
  imports: [V1Module,
    V2Module,
    RouterModule.register([
      {
        path: 'v1',
        module: V1Module // This will be invalid since it replaces below
      },
      {
        path: 'v2',
        module: V2Module,
        children: [
          {
            path: 'old',
            module: V1Module, // This will be invalid since it replaces below
          },
          {
            path: 'legacy',
            module: V1Module, // This is ok. It is the last one defining route for V1Module, so will be the one working. The other ones are discarded.
          },
        ],
      },
      {
        path: 'v4' // it seems this is valid, but doesn't do anything without module or children in the object
      },
      {
        path: 'v5',
        children: [
          {
            path: 'sub',
            children: [
              {
                path: 'abcdefghij',
                module: V5Module,
              }
            ]
            
          }
        ]
      },
    ]),
    V3Module,
    V5Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
