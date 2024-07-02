import { Body, Controller, Put } from '@nestjs/common';

class UpdateUserDto {
    name?: string;
    age?: number;
    email?: string;
  }

@Controller('bar')
export class BarController {

    @Put('update')
    async updateUser(@Body() updateUserDto: UpdateUserDto) {
        // Process the update data
        const { name, age, email } = updateUserDto;
        // Perform some logic, like updating in a database
        return `User updated: ${name ?? 'N/A'}, ${age ?? 'N/A'}, ${email ?? 'N/A'}`;
    }
}
