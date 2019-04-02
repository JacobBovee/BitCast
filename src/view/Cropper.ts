import gui from 'gui';
import { bounds } from '../utils/screen';
import iohook from 'iohook';

interface ICropperSize {
  start: boolean;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export default class Cropper {
  public window: any;
  public cropperSize: ICropperSize = { start: true };

  constructor() {
    this.window = gui.Window.create({ frame: false, transparent: true });
    const contentView = gui.Container.create();
    const cursor = gui.Cursor.createWithType('crosshair');
    contentView.setCursor(cursor);
    contentView.setMouseDownCanMoveWindow(false);
    this.window.setContentView(contentView);

    contentView.onDraw = (self, painter: any) => {
      this.drawRect(painter);
    };
  }

  public init() {
    const { width, height } = bounds();
    this.window.setHasShadow(false);
    this.window.setBounds({ width, height, x: 0, y: 0 });
    this.window.setAlwaysOnTop(true);
    this.window.setResizable(false);
    this.window.setMovable(false);
    this.window.center();
    this.window.activate();
    this.window.setContentSize({ width, height });

    iohook.on('mousedrag', (event) => {
      const { x, y } = event;
      if (this.cropperSize.start) {
        this.cropperSize.x = x;
        this.cropperSize.y = y;
        this.cropperSize.start = false;
      } else {
        this.cropperSize.height = Math.abs((this.cropperSize.y || 0) - y);
        this.cropperSize.width = Math.abs((this.cropperSize.x || 0) - x);
      }
    });

    iohook.start(false);
  }

  public drawRect(painter: any) {
    const { width, height, x, y } = this.cropperSize;

    painter.setStrokeColor('#fff');
    painter.beginPath();
    painter.moveTo({ x: 0, y: 0 });
    painter.strokeRect({ width, height, x, y });
    painter.stroke();
  }
}
