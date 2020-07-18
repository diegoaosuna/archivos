import { Controller, Get, Req, Post } from '@nestjs/common';


@Controller('cats')
export class CatsController {


    @Post()
    create(): string {
        return ' This action adds a new cat'
    }
    
    @Get()
    findAl(): string {
        return 'This action return all cats';
    }
}
