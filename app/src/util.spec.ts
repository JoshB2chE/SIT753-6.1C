import { expect, test } from "bun:test";
import { helloWorld } from "./util";

test("Should return Hello World", () => {
  expect(helloWorld()).toBe("Hello World!");
});