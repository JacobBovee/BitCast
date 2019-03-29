import gui from 'gui';
import Tray from './view/Tray';
import Cropper from './view/Cropper';

async function main() {
  new Tray();
  new Cropper().init();
}
main()
  .catch(console.error);

gui.MessageLoop.run();
process.exit(0);
