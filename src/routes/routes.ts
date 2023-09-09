import { Router } from 'express';
import { createUserController } from '../entities/User/CreateUser';

const router = Router();

router.post("/user/register", (request, response) => {
    return createUserController.handle(request, response);
})

export { router }