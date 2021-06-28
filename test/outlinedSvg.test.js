/* eslint-disable no-undef */
import React from 'react'
// import renderer from 'react-test-renderer'
import { Eos10kOutlined } from '../lib'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('Outlined SVG Size prop test', () => {
  const randomSize = Math.floor(Math.random()) + 1
  const { getByTestId } = render(
    <Eos10kOutlined size={`${randomSize}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveStyle({
    width: `${randomSize}`,
    height: `${randomSize}`
  })
})

it('Outlined SVG Color prop test', () => {
  const { getByTestId } = render(
    <Eos10kOutlined color="blue"/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('fill', 'blue')
})

it('Outlined SVG Rotation prop test', () => {
  const randomDegree = Math.floor(Math.random() * 360) + 1
  const { getByTestId } = render(
    <Eos10kOutlined rotate={`${randomDegree}`}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', `rotate(${randomDegree}) translate(0, 0) scale(1, 1)`)
})

it('Outlined SVG horizontalFlip prop test', () => {
  const { getByTestId } = render(
    <Eos10kOutlined horizontalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(24, 0) scale(-1, 1)')
})

it('Outlined SVG verticalFlip prop test', () => {
  const { getByTestId } = render(
    <Eos10kOutlined verticalFlip={true}/>
  )
  expect(getByTestId('eos-svg-component')).toHaveAttribute('transform', 'rotate(0) translate(0, 24) scale(1, -1)')
})
