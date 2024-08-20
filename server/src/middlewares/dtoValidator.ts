import { validateSync } from "class-validator";
import { plainToInstance } from "class-transformer";
import type { onRequestHookHandler } from "fastify";

export const dtoValidator = <T extends object>(Model: new () => T) => {
    const createInstance = (rawData: unknown): T => plainToInstance(Model, rawData,
        {
            excludeExtraneousValues: true,
            exposeDefaultValues: true
        }) ?? new Model();

    return ((request, reply, done) => {
        const instance = createInstance(['GET', 'DELETE'].includes(request.method) ? request.query : request.body);
        const errors = validateSync(instance);
        if (errors.length)
            reply.status(400).send(errors);
        else {
            reply.locals.dto = instance;
            done();
        }
    }) satisfies onRequestHookHandler;
};