import { Body, Controller, Post } from '@nestjs/common';

class CreateUserDto {
    readonly name: string;
    readonly age: number;
    readonly email: string;
}

@Controller('foo')
export class FooController {

    @Post("create")
    postCreate(@Body() createUserDto: CreateUserDto): string {
        // Process the form data
        const { name, age, email } = createUserDto;
        // Perform some logic, like saving to a database
        return `User created: ${name}, ${age}, ${email}`;
    }
}
