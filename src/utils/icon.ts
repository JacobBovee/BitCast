import fs from 'fs';
import { join } from 'path';

export const encodeImage = (filename: string) => 
  fs.readFileSync(join(__dirname, `../../static/dist/icons/${filename}`)).toString();
