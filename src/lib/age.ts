/** Completed years, using UTC calendar dates consistently during build and in the browser. */
export function getAge(birthDate: string, today = new Date()): number {
  const birth = new Date(`${birthDate}T00:00:00Z`);
  if (
    !Number.isFinite(birth.getTime()) ||
    birth.toISOString().slice(0, 10) !== birthDate
  ) {
    throw new RangeError(
      "Birth date must be a valid YYYY-MM-DD calendar date."
    );
  }

  const birthdayHasPassed =
    today.toISOString().slice(5, 10) >= birthDate.slice(5);
  return (
    today.getUTCFullYear() -
    birth.getUTCFullYear() -
    (birthdayHasPassed ? 0 : 1)
  );
}
