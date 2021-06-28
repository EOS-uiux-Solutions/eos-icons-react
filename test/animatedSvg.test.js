/* eslint-disable no-undef */
import React from 'react'
// import renderer from 'react-test-renderer'
import { EosloadingAnimated } from '../lib'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('Animated SVG Size prop test', () => {
  const randomSize = Math.floor(Math.random()) + 1
  const { getByTestId } = render(
    <EosloadingAnimated size={`${randomSize}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveStyle({
    width: `${randomSize}`,
    height: `${randomSize}`
  })
})

it('Animated SVG Color prop test', () => {
  const { getByTestId } = render(
    <EosloadingAnimated color="blue"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('fill', 'blue')
})

it('Animated SVG Rotation prop test', () => {
  const randomDegree = Math.floor(Math.random() * 360) + 1
  const { getByTestId } = render(
    <EosloadingAnimated rotate={`${randomDegree}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', `rotate(${randomDegree}) translate(0, 0) scale(1, 1)`)
})

it('Animated SVG horizontalFlip prop test', () => {
  const { getByTestId } = render(
    <EosloadingAnimated horizontalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(24, 0) scale(-1, 1)')
})

it('Animated SVG verticalFlip prop test', () => {
  const { getByTestId } = render(
    <EosloadingAnimated verticalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(0, 24) scale(1, -1)')
})
