var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{H as n}from"./Header.6c792331.js";import{j as s}from"./jsx-runtime.dd8f15e4.js";import"./Button.e922f535.js";import"./index.8e2dab89.js";import"./iframe.26941337.js";const y={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}},"logged-out":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),d=t.bind({});d.args={user:{name:"Jane Doe"}};const l=t.bind({});l.args={};const f=["LoggedIn","LoggedOut"];export{d as LoggedIn,l as LoggedOut,f as __namedExportsOrder,y as default};
//# sourceMappingURL=Header.stories.d0943086.js.map
