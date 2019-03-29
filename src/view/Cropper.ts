import gui from 'gui';
import { bounds } from '../utils/screen';

export default class Cropper {
  public window: any;
  public innerWindow: any;

  constructor() {
    this.window = gui.Window.create({ transparent: true, frame: false });
    const contentView = gui.Container.create();

    contentView.setMouseDownCanMoveWindow(false);

    contentView.onDraw = (self, painter: any) => {
      painter.setStrokeColor('#fff');
      this.drawRect(painter);
    };

    this.window.setContentView(contentView);
  }

  public init() {
    const { width, height } = bounds();
    this.window.setHasShadow(false);
    this.window.setBounds({ width: (width / 2), height: (height / 2), x: 0, y: 0 });
    this.window.setAlwaysOnTop(true);
    this.window.setResizable(true);
    this.window.setMovable(false);
    this.window.center();
    this.window.activate();
    this.window.setContentSize({ width: (width / 2), height: (height / 2) });
  }

  public drawRect(painter: any) {
    const { width, height } = this.window.getContentSize();
    painter.beginPath();
    painter.moveTo({ x: 0, y: 0 });
    painter.strokeRect({ width, height, x: 0, y: 0 });
    painter.stroke();
  }
}
