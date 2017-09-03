import { Vue, mount } from '../../test-utils';
import { DcBox } from './box.component';

describe('box', () => {
  it('all prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :all="5" :top="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin: 10px 5px 5px 5px;');
    clear();
  });

  it('top prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :top="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-top: 10px;');
    clear();
  });

  it('bottom prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :bottom="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-bottom: 10px;');
    clear();
  });

  it('left prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :left="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-left: 10px;');
    clear();
  });

  it('right prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :right="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-right: 10px;');
    clear();
  });

  it('x prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :x="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-right: 10px');
    expect(document.body.innerHTML).toContain('margin-left: 10px');
    clear();
  });

  it('y prop should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :y="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-top: 10px');
    expect(document.body.innerHTML).toContain('margin-bottom: 10px');
    clear();
  });

  it('top with y should work', async() => {
    const { clear } = mount({
      template: `
        <dc-box :top="5" :y="10">Test</dc-box>
      `,
      components: { DcBox },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toContain('margin-top: 5px');
    expect(document.body.innerHTML).toContain('margin-bottom: 10px');
    clear();
  });
});
