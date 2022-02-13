import {act, renderHook} from '@testing-library/react-hooks'
import UseForm from './hook'

test ('should change keyword', () => {
    const { result } = renderHook(() => UseForm())

    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test ('should use initial value', () => {
    const { result } = renderHook(() => UseForm({
        initialKeyword: 'matrix'
    }))


    expect(result.current.keyword).toBe('matrix')
})


test ('should update correctly times when used twice', () => {
    const { result } = renderHook(() => UseForm({
        initialKeyword: 'matrix'
    }))

    act(() => {
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })

    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2)
})