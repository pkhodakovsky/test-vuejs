import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import PageHeading from '../general/PageHeading.vue';

const testTitle = 'Test title';
describe('PageHeading', () => {
  it('Page heading is rendered and props are used correctly', () => {
    const wrapper = mount(PageHeading, { props: { title: testTitle } });
    expect(wrapper.text()).toContain(testTitle);
  });
});
