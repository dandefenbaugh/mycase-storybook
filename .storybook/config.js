import React from 'react';
import { addDecorator, configure } from '@storybook/react';

function loadStories() {
  require('../stories');
}

addDecorator((story, info) => (
  story ? (
    <div className="p-5">
      <h6 className="text-muted">MyCase Style Guide</h6>
      <hr />
      <header className="mb-5 ">
        <h6 className="lead mb-1">{info.kind}</h6>
        <h1>{info.story}</h1>
      </header>
      <section>
        {story()}
      </section>
    </div>
  ) : ''
));

configure(loadStories, module);
