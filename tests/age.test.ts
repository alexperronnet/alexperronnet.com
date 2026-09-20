import assert from "node:assert/strict";
import { test } from "node:test";
import { getAge } from "#src/lib/age.ts";

test("increments Alexandre's age on his birthday, not at the start of the year", () => {
  assert.equal(getAge("1995-07-26", new Date("2026-07-25T23:59:59Z")), 30);
  assert.equal(getAge("1995-07-26", new Date("2026-07-26T00:00:00Z")), 31);
  assert.equal(getAge("1995-07-26", new Date("2027-01-01T00:00:00Z")), 31);
});

test("increments Blue's age on June 21", () => {
  assert.equal(getAge("2021-06-21", new Date("2026-06-20T23:59:59Z")), 4);
  assert.equal(getAge("2021-06-21", new Date("2026-06-21T00:00:00Z")), 5);
});

test("rejects malformed calendar dates instead of silently displaying a wrong age", () => {
  for (const date of ["not-a-date", "1995-02-31", "1995-13-26"]) {
    assert.throws(() => getAge(date), RangeError);
  }
});
