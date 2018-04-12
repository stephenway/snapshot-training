// Copyright 2004-present Facebook. All Rights Reserved.
/* eslint-disable no-unused-vars */

'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Link>Facebook</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('properly escapes quotes', () => {
  const tree = renderer
    .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('properly escapes quotes using enzyme', () => {
  const wrapper = shallow(
    <Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
