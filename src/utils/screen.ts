import screenInfo from 'screen-info';

const screen = screenInfo.main();

export const bounds = () => ({ width: screen.width, height: screen.height });
