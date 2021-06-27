/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import { Eos10kFilled, Eos10kOutlined, EosloadingAnimated } from '../lib'

test('React Filled SVG Component test', () => {
  const component = renderer.create(
    <Eos10kFilled/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('React Filled SVG Component Prop Test', () => {
  const component = renderer.create(
    <Eos10kFilled color="blue" rotate={90} size="xxxl" verticalFlip={true} horizontalFlip={true}/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('React Outlined SVG Component test', () => {
  const component = renderer.create(
    <Eos10kOutlined/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('React Outlined SVG Component Prop Test', () => {
  const component = renderer.create(
    <Eos10kOutlined color="blue" rotate={90} size="xxxl" verticalFlip={true} horizontalFlip={true}/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('React animated SVG Component test', () => {
  const component = renderer.create(
    <EosloadingAnimated/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('React animated SVG Component Prop Test', () => {
  const component = renderer.create(
    <EosloadingAnimated color="blue" rotate={90} size="xxxl" verticalFlip={true} horizontalFlip={true}/>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
