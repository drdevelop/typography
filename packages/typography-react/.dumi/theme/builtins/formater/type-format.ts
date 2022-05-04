export function interfaceFormat(str: string) {
  return str
    .replace('{', '{  ')
    .replace(';', ';  ')
    .replace('}', '}  ');
}
