import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Heading from './Heading'

describe('Heading', () => {
  it('Should be render H1 for title type', () => {
    const { container, getByText } = render(
      <Heading
        type='title'
        text='React & GitHub Rest API Test'
      />
    )
    expect(getByText(/React & GitHub Rest API Test/i)).toBeInTheDocument()
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('.heading--title')).toBeInTheDocument()
  })

  it('Should be render H2 for subtitle type', () => {
    const { container, getByText } = render(
      <Heading
        type='subtitle'
        text='React & GitHub Rest API Test'
      />
    )
    expect(getByText(/React & GitHub Rest API Test/i)).toBeInTheDocument()
    expect(container.querySelector('h2')).toBeInTheDocument()
    expect(container.querySelector('.heading--subtitle')).toBeInTheDocument()
  })

  it('Should be render H3 for intertitle type', () => {
    const { container, getByText } = render(
      <Heading
        type='intertitle'
        text='React & GitHub Rest API Test'
      />
    )
    expect(getByText(/React & GitHub Rest API Test/i)).toBeInTheDocument()
    expect(container.querySelector('h3')).toBeInTheDocument()
    expect(container.querySelector('.heading--intertitle')).toBeInTheDocument()
  })

  it('Should be render children', () => {
    const { container, getByText } = render(
      <Heading>React & GitHub Rest API Test</Heading>
    )
    expect(getByText(/React & GitHub Rest API Test/i)).toBeInTheDocument()
    expect(container.querySelector('h1')).toBeInTheDocument()
  })
})
