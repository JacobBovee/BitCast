import gui from 'gui';
import { iconPath } from '../utils/icon';

// Retrive icon path
const icon = iconPath('icon.png');

export default class Tray {
  public tray: void | null;
  public trayIcon: string | null;

  constructor() {
    this.trayIcon = iconPath('icon.png');

    const menu = gui.Menu.create([
      {
        type: 'label',
        label: 'Record tape',
        visible: true,
        enabled: true,
      },
      {
        type: 'label',
        label: 'Mute',
        visible: true,
        enabled: true,
      },
      {
        type: 'separator',
        enabled: false,
      },
      {
        type: 'label',
        label: 'Preferences',
        visible: true,
        enabled: true,
      },
      {
        type: 'label',
        label: 'Quit BitCast',
        visible: true,
        enabled: true,
      },
    ]);

    this.tray = gui.Tray
      .createWithImage(gui.Image.createFromPath(icon))
      .setMenu(
        menu,
      );
  }

  public unload() {
    this.trayIcon = null;
    this.tray = null;
  }

  public cropper() {
    /**
     * begin cropper
     */
  }
}
