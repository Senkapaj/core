import {Controller, Get} from '@nestjs/common';

@Controller('apps')
export class AppsController {
    @Get()
    findAll(): string {
        return "all apps";
    }
}
