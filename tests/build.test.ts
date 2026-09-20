import assert from "node:assert/strict";
import { test } from "node:test";
import { getBuildInfo } from "#src/lib/build.ts";

const repository = "https://github.com/alexperronnet/alexperronnet.com";

test("links the deployed revision to its exact source commit", () => {
  const sha = "0123456789abcdef0123456789abcdef01234567";
  assert.deepEqual(getBuildInfo(sha, repository), {
    href: `${repository}/commit/${sha}`,
    sha,
    shortSha: "0123456",
  });
});

test("does not fabricate a build or publish malformed metadata", () => {
  for (const sha of [
    undefined,
    "",
    "main",
    "abcdef0",
    "../settings",
    "g".repeat(40),
  ]) {
    assert.equal(getBuildInfo(sha, repository), undefined);
  }
});
