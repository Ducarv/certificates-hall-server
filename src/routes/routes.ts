import { Router } from 'express';
import { createUserController } from '../entities/User/CreateUser';
import { loginUserController } from '../entities/User/LoginUser';
import { logoutUserController } from '../entities/User/LogoutUser';
import { getUserController } from '../entities/User/GetUser';

const router = Router();

router.post("/user/register", async (request, response) => {
    return await createUserController.handle(request, response);
});

router.post("/user/login", async (request, response) => {
    return await loginUserController.handle(request, response);
})

router.get("/user/:id", async (request, response) => {
    return await getUserController.handle(request, response);
})

router.put("/user/logout/:id", async (request, response) => {
    return await logoutUserController.handle(request, response);
})

export { router }