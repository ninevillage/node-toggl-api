export function base64(value: string): string {
  return Buffer.from(value).toString('base64')
}
