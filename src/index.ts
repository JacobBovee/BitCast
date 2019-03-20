import systray from 'systray';
import { encodeImage } from './utils/icon';

async function main() {
  const tray = new systray({
    menu: {
      icon: encodeImage('icon.png'),
      title: '',
      tooltip: 'BitCast',
      items: [
        {
          title: 'Record new tape',
          tooltip: 'rnt',
          checked: false,
          enabled: false,
        },
        {
          title: 'Mute',
          tooltip: 'm',
          checked: false,
          enabled: false,
        },
        {
          title: 'Exit',
          tooltip: 'exit',
          checked: false,
          enabled: false,
        },
      ],
    },
    debug: true,
    copyDir: true,
  });

  tray.onClick((action: any) => {
    if (action.seq_id === 0) {
      console.log('Blah');
    } else if (action.seq_id === 1) {
      console.log('Blah two');
    } else if (action.seq_id === 2) {
      tray.kill();
    }
  });
}
main().catch(console.error);
console.log('running');
