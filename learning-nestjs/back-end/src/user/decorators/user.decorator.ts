import { ExecutionContext, createParamDecorator } from "@nestjs/common";


export const User = createParamDecorator((data: object, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
});

