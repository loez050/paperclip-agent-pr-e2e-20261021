import test from "node:test";
import assert from "node:assert/strict";
import { healthMessage } from "../src/health.js";

test("health fixture returns a stable message", () => {
  assert.equal(healthMessage(), "Paperclip Agent delivery fixture is healthy");
});
