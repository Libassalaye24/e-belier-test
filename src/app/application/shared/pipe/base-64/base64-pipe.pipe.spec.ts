import { Base64PipePipe } from './base64-pipe.pipe';

describe('Base64PipePipe', () => {
  it('create an instance', () => {
    const pipe = new Base64PipePipe();
    expect(pipe).toBeTruthy();
  });
});
