import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Home', module)
  .add('Introduction', () => (
    <p>
      The MyCase Design System enables us to design and build a consistent,
      responsive and accessible experience for our customers. Reusable and
      maintainable design assets and code allow us to design and develop more
      easily, moving faster to positive customer outcomes.
    </p>
  ))
  .add("What's New", () => (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td colspan="1" rowspan="1">
            <p>
              <span>Jan 19</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>v0.4</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>
                Added folder picker, case picker and complex modal components.
              </span>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p>
              <span>Jan 18</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>v0.3</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>
                Updated Content with new patterns. Added attribution section and
                change log.
              </span>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p>
              <span>Dec 21</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>v0.3</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>
                Added Patterns section under Style for Error Messages and
                Formatting Dates &amp; Times
              </span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ))
  .add('Guiding Values', () => (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Focus On Human Goals</span>
            </h4>
            <p>
              <span>Decisions founded in actual customer needs</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Listen</span>
            </h4>
            <p>
              <span>
                A consistent feedback rhythm inspires opportunities to delight
              </span>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Design Iteratively</span>
            </h4>
            <p>
              <span>Incremental changes minimize disruption</span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Use A Common Voice</span>
            </h4>
            <p>
              <span>
                Internal language and naming aligns with that of our customers
              </span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ))
  .add('Design Principles', () => (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Consistent</span>
            </h4>
            <p>
              <span>
                Page structures, patterns and interactions are familiar across
                multiple workflows.
              </span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Clear</span>
            </h4>
            <p>
              <span>
                The design is clean, my options are clear, and I can find what I
                need with limited distractions.
              </span>
            </p>
            <p>
              <span />
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Intuitive</span>
            </h4>
            <p>
              <span>
                An effortless experience keeps me moving fast throughout my
                daily work flow.
              </span>
              <sup>
                <a href="#cmnt1">[a]</a>
              </sup>
            </p>
            <sup>
              <a href="#cmnt2">[b]</a>
            </sup>
            <sup>
              <a href="#cmnt3">[c]</a>
            </sup>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Trustworthy</span>
            </h4>
            <p>
              <span>
                Visual cues and logical flows build my confidence in the
                security, reliability, and accuracy of my data and the product.
              </span>
              <sup>
                <a href="#cmnt4">[d]</a>
              </sup>
            </p>
            <p>
              <span />
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <h4>
              <span>Helpful</span>
            </h4>
            <p>
              <span>
                The experience supports self-discovery and learning in a
                continuous way that meets my individual needs and learning
                styles.
              </span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ))
  .add('Design Goals', () => (
    <ul>
      <li>
        <span>Maintain simplicity and ease of use with a minimalist approach. Less is more for the user.</span>
      </li>
      <li>
        <span>Brand consistency across the customer experience.</span>
      </li>
      <li>
        <span>Be a leader in SaaS </span>
        <span>experience</span>
        <span>&nbsp;with a mobile first approach.</span>
      </li>
    </ul>
  ));
