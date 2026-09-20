import assert from "node:assert/strict";
import { test } from "node:test";
import { formatVisitorTime } from "#src/lib/visitor-time.ts";

test("uses the visitor timezone for both the time and calendar date", () => {
  const result = formatVisitorTime(
    new Date("2026-01-01T00:30:00Z"),
    "America/Los_Angeles"
  );
  assert.equal(result.date, "31 Dec 2025");
  assert.equal(result.time, "16:30");
  assert.equal(result.zone, "America/Los Angeles");
});

test("follows daylight saving time without a hardcoded offset", () => {
  const before = formatVisitorTime(
    new Date("2026-03-29T00:30:00Z"),
    "Europe/Paris"
  );
  const after = formatVisitorTime(
    new Date("2026-03-29T01:30:00Z"),
    "Europe/Paris"
  );
  assert.equal(before.time, "01:30");
  assert.equal(after.time, "03:30");
});

test("supports UTC without a geographic city", () => {
  assert.equal(
    formatVisitorTime(new Date("2026-01-01T00:00:00Z"), "UTC").time,
    "00:00"
  );
});
