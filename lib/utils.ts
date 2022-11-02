export function makeSerializable(o: any) {
  return JSON.parse(JSON.stringify(o));
}
