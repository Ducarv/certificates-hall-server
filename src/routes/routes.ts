import { Router } from 'express';
import { createUserController } from '../entities/User/CreateUser';

const router = Router();

router.post("/user/register", async (request, response) => {
    return await createUserController.handle(request, response);
})

export { router }