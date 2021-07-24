/* eslint-disable no-undef */
import React from 'react'
// import renderer from 'react-test-renderer'
import { EOS_10K } from '../lib'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

// default - filled
it('default filled component SVG Size prop test', () => {
  const randomSize = Math.floor(Math.random()) + 1
  const { getByTestId } = render(
    <EOS_10K size={`${randomSize}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveStyle({
    width: `${randomSize}`,
    height: `${randomSize}`
  })
})

it('default filled component SVG Color prop test', () => {
  const { getByTestId } = render(
    <EOS_10K color="blue"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('fill', 'blue')
})

it('default filled component SVG Rotation prop test', () => {
  const randomDegree = Math.floor(Math.random() * 360) + 1
  const { getByTestId } = render(
    <EOS_10K rotate={`${randomDegree}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', `rotate(${randomDegree}) translate(0, 0) scale(1, 1)`)
})

it('default filled component SVG horizontalFlip prop test', () => {
  const { getByTestId } = render(
    <EOS_10K horizontalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(24, 0) scale(-1, 1)')
})

it('default filled component SVG verticalFlip prop test', () => {
  const { getByTestId } = render(
    <EOS_10K verticalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(0, 24) scale(1, -1)')
})

// default - outlined
it('default outlined component SVG Size prop test', () => {
  const randomSize = Math.floor(Math.random()) + 1
  const { getByTestId } = render(
    <EOS_10K size={`${randomSize}`} theme="outlined"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveStyle({
    width: `${randomSize}`,
    height: `${randomSize}`
  })
})

it('default outlined component SVG Color prop test', () => {
  const { getByTestId } = render(
    <EOS_10K color="blue" theme="outlined"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('fill', 'blue')
})

it('default outlined component SVG Rotation prop test', () => {
  const randomDegree = Math.floor(Math.random() * 360) + 1
  const { getByTestId } = render(
    <EOS_10K rotate={`${randomDegree}`} theme="outlined"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', `rotate(${randomDegree}) translate(0, 0) scale(1, 1)`)
})

it('default outlined component SVG horizontalFlip prop test', () => {
  const { getByTestId } = render(
    <EOS_10K horizontalFlip={true} theme="outlined"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(24, 0) scale(-1, 1)')
})

it('default outlined component SVG verticalFlip prop test', () => {
  const { getByTestId } = render(
    <EOS_10K verticalFlip={true} theme="outlined"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(0, 24) scale(1, -1)')
})
