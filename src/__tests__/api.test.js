import { fetchUsers, fetchProducts } from "../services/api";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://dummyjson.com/users", (req, res, ctx) => {
    return res(ctx.json({ users: [{ id: 1, firstName: "John", lastName: "Doe" }] }));
  }),
  rest.get("https://dummyjson.com/products", (req, res, ctx) => {
    return res(ctx.json({ products: [{ id: 1, title: "Laptop" }] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetchUsers API should return a user", async () => {
  const data = await fetchUsers(5, 0, "");
  expect(data.users[0]).toHaveProperty("firstName", "John");
});

test("fetchProducts API should return a product", async () => {
  const data = await fetchProducts(5, 0, "");
  expect(data.products[0]).toHaveProperty("title", "Laptop");
});
