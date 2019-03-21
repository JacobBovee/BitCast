import { join } from 'path';

export const iconPath = (filename: string) =>
  join(__dirname, `../../static/dist/icons/${filename}`);
