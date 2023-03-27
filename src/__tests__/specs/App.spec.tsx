import React from 'react'

import { render, screen } from '@testing-library/react'
import { App } from '../../App'

test('verificando se existe o texto "Hello World" no componente App ao ser renderizado', () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello World/i)
  expect(linkElement).toBeInTheDocument()
})
