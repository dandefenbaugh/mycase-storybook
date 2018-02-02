import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert, Button } from 'react-gears';

storiesOf('Components', module)
  .add('Alerts', () => (
    <div>
      <Alert>
        <p>
          The default alert is a "warning". It supports any sort of custom
          markup.
        </p>
        <div>
          <Button>Like This!</Button>
        </div>
      </Alert>
      <Alert color="success">
        You can specify an alert color. This one has{' '}
        <code>color="success"</code>
      </Alert>
      <Alert color="danger">This one looks dangerous!</Alert>
      <Alert color="info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not
        super important.
      </Alert>
      <Alert dismissible icon color="success">
        This alert is dismissible and shows icon.
      </Alert>
    </div>
  ))
  .add('Badges', () => <p />)
  .add('Buttons', () => <p />)
  .add('...');
