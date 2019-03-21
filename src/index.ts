import { initializeTray } from './tray';
import gui from 'gui';
import { cropper } from './cropper';

async function main() {
  initializeTray();
  cropper();
}
main().catch(console.error);

gui.MessageLoop.run();
process.exit(0);
