import gui from 'gui';
import { iconPath } from './utils/icon';

// Retrive icon path
const icon = iconPath('icon.png');

export const initializeTray = () => {
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

  gui.Tray
    .createWithImage(gui.Image.createFromPath(icon))
    .setMenu(menu);
};
