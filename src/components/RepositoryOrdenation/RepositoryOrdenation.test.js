import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import selectEvent from 'react-select-event'

import RepositoryOrdenation from "../RepositoryOrdenation"
import { repositories } from './RepositoryOrdenation.props'

describe('RepositoryOrdenation', () => {
    const setup = () => {
        const dispatcherMock = jest.fn()
        const { container, getByText } = render(<RepositoryOrdenation repositories={repositories} dispatcher={dispatcherMock} />)
        const repositoryOrdenation = container.querySelector('repositoryOrdenation')
        return {
            dispatcherMock,
            container,
            getByText,
            repositoryOrdenation
        }
    }

    it('Should be render RepositoryOrdenation', () => {
        const { getByText } = setup()
        expect(getByText('--Ordenar os repositórios--')).toBeInTheDocument()
        expect(getByText('Estrelas Crescente')).toBeInTheDocument()
        expect(getByText('Estrelas Decresente')).toBeInTheDocument()
        expect(getByText('Nome Crescente')).toBeInTheDocument()
        expect(getByText('Nome Decresente')).toBeInTheDocument()
    })

    it('Should be call dispatcherMock when update ordenation', () => {
        const { getByText, dispatcherMock, container } = setup()
        fireEvent.change(container.querySelector('.repositoryOrdenation'), { target: { value: "stargazers_count_asc" } })
        expect(dispatcherMock).toHaveBeenCalled()

    })
})