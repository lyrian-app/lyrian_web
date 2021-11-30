export function cloneObj<T extends object>(obj: T) {
  return Object.entries(obj).reduce<T>(
    (acc, cur) => ({ ...acc, [cur[0]]: cur[1] }),
    {} as T
  );
}
