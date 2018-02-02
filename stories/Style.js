import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Style', module)
  .add('Color', () => <p />)
  .add('Typography', () => (
    <div>
      <p>
        <span>MyCase uses a constrained, purposeful set of typographic styles. These styles map as much as possible to functional roles
          so you know when each can be used.</span>
      </p>
      <h4>
        <span>Inline Styles</span>
      </h4>
      <p>
        <span>Paragraph</span>
      </p>
      <p>
        <span>font-size: </span>
        <span>.875rem/14px</span>
      </p>
      <p>
        <span>color: #222</span>
      </p>
      <p>
        <span></span>
      </p>
      <p>
        <span>Link</span>
      </p>
      <p>
        <span>font-size: .875rem/14px</span>
      </p>
      <p>
        <span>color: #0070bb</span>
      </p>
      <p>
        <span>text-direction on hover</span>
        <sup>
          <a href="#cmnt5">[e]</a>
        </sup>
      </p>
      <p>
        <span></span>
      </p>
      <h4>
        <span>Headlines</span>
      </h4>
      <p>
        <span>Bootstrap defaults and:</span>
      </p>
      <a></a>
      <a></a>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td colspan="1" rowspan="1">
              <p>
                <span>Heading 4</span>
              </p>
              <p>
                <span>font-size: 1.5rem/24px</span>
              </p>
              <p>
                <span>color: #222</span>
              </p>
            </td>
            <td colspan="1" rowspan="1">
              <p>
                <span>Heading 5</span>
              </p>
              <p>
                <span>font-size: 1.25rem/20px</span>
              </p>
              <p>
                <span>color: #222</span>
              </p>
            </td>
            <td colspan="1" rowspan="1">
              <p>
                <span>Heading 6</span>
              </p>
              <p>
                <span>font-size: 1rem/16px</span>
              </p>
              <p>
                <span>color: #222</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('Iconography', () => <p />)
  .add('Content', () => <p />);
