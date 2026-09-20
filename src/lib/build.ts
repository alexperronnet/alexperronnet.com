const COMMIT_SHA = /^[a-f\d]{40}$/i;

/** Only a complete Git SHA can become a public commit link. */
export function getBuildInfo(
  sha: string | undefined,
  repository: `https://${string}`
) {
  if (!(sha && COMMIT_SHA.test(sha))) {
    return;
  }

  return {
    href: `${repository}/commit/${sha}` as const,
    sha,
    shortSha: sha.slice(0, 7),
  };
}
