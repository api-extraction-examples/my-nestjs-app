import { Injectable } from '@nestjs/common';

function FieldDecorator(target, key) {
    if (!target.constructor.__annotations__) {
        target.constructor.__annotations__ = {};
    }
    target.constructor.__annotations__[key] = "Field annotation";
}

class ABC {
    #aPrivateField = 42;
    static #aPrivateStaticField = 42;

    @FieldDecorator
    static aStaticFieldWithAnnotation;

    @FieldDecorator
    aFieldWithAnnotation;
}

@Injectable()
export class DoSomethingService {
  
  getHello(): string {
    return 'Doing something... :)';
  }
}
