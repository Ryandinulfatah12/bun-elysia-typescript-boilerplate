import { Elysia } from "elysia";

export const routes = new Elysia()
    .get("/api/users", () => {
        return [
            {
                name: "John Doe",
                email: "johndoe@example.com",
                age: 25
            },
            {
                name: "Erik Doe",
                email: "jane@example.com",
                age: 22
            }
        ];
    });