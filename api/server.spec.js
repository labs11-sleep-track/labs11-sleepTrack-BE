const request = require("supertest");
const server = require("./server.js");

//Basic server testing
describe("BASIC SERVER TESTING - GET '/'", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/");

    expect(res.status).toBe(200);
  });

  it("should return JSON", async () => {
    const res = await request(server).get("/");

    expect(res.type).toBe("application/json");
  });

  it('should return "Sleepsta"', async () => {
    const res = await request(server).get("/");

    expect(res.body).toEqual("Sleepsta");
  });
});
