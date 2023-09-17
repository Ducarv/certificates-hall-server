import { Router } from 'express';
import { createUserController } from '../entities/User/CreateUser';
import { loginUserController } from '../entities/User/LoginUser';

const router = Router();

router.post("/user/register", async (request, response) => {
    return await createUserController.handle(request, response);
});

router.post("/user/login", async (request, reponse) => {
    return await loginUserController.handle(request, reponse);
})

export { router }