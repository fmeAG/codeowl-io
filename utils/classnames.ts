export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return classes.filter((a) => a).join(' ');
}
