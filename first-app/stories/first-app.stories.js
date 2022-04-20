import { html } from 'lit';
import '../src/first-app.js';

export default {
  title: 'FirstApp',
  component: 'first-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <first-app
      style="--first-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </first-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
