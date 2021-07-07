/* eslint-disable no-undef */
import React from 'react'
// import renderer from 'react-test-renderer'
import { EOS_10K_FILLED } from '../lib'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('Filled SVG Size prop test', () => {
  const randomSize = Math.floor(Math.random()) + 1
  const { getByTestId } = render(
    <EOS_10K_FILLED size={`${randomSize}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveStyle({
    width: `${randomSize}`,
    height: `${randomSize}`
  })
})

it('Filled SVG Color prop test', () => {
  const { getByTestId } = render(
    <EOS_10K_FILLED color="blue"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('fill', 'blue')
})

it('Filled SVG Rotation prop test', () => {
  const randomDegree = Math.floor(Math.random() * 360) + 1
  const { getByTestId } = render(
    <EOS_10K_FILLED rotate={`${randomDegree}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', `rotate(${randomDegree}) translate(0, 0) scale(1, 1)`)
})

it('Filled SVG horizontalFlip prop test', () => {
  const { getByTestId } = render(
    <EOS_10K_FILLED horizontalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(24, 0) scale(-1, 1)')
})

it('Filled SVG verticalFlip prop test', () => {
  const { getByTestId } = render(
    <EOS_10K_FILLED verticalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(0, 24) scale(1, -1)')
})
