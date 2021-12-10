import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import LineTextarea, { IProp } from './LineTextarea'

type LineWrapper = ShallowWrapper<IProp, unknown, LineTextarea>
type TextareaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>

Enzyme.configure({ adapter: new Adapter() })

const defaultProps: IProp = {
    line: [],
    update: () => undefined
}
function setup (customProps?: Partial<IProp>): LineWrapper {
    const props = { ...defaultProps, ...customProps }
    const wrapper: LineWrapper = shallow(<LineTextarea {...props} />)
    return wrapper
}

describe('test component LineTextarea', () => {

    it('renders without error', () => {
        const wrapper = setup()
        expect(wrapper.getElement().type).toBe('textarea')
    })

    it('renders with correct props', () => {
        const wrapper = setup({
            line: ['test']
        })

        const textarea:TextareaProps = wrapper.props()
        expect(textarea.value).toBe('test')
    })
    
    it('check line string', () => {
        const wrapper = setup({
            line: ['test']
        })

        const component = wrapper.instance()
        expect(component.lineString()).toBe('test')
    })

    it('check update value', () => {
        
        const mockUpdate = jest.fn(linestr => linestr)
        const wrapper = setup({
            update: mockUpdate
        })

        wrapper.simulate('change', { target: { value: 'test-input' } })

        const mock = mockUpdate.mock
        expect(mock.calls.length).toBe(1)
        expect(mock.results[0].value).toStrictEqual(['test-input'])
    })

    it('check update value', () => {
        
        const mockUpdate = jest.fn(linestr => linestr)
        const wrapper = setup({
            update: mockUpdate
        })

        wrapper.simulate('change', { target: { value: 'test-input' } })

        const mock = mockUpdate.mock
        expect(mock.calls.length).toBe(1)
        expect(mock.results[0].value).toStrictEqual(['test-input'])
    })

    it('check fix update on mouse leave', () => {

        const mockUpdate = jest.fn(linestr => linestr)
        const wrapper = setup({
            line: ['test-mouse-leave', '', '', ''],
            update: mockUpdate
        })

        wrapper.simulate('mouseleave')

        const mock = mockUpdate.mock
        expect(mock.calls.length).toBe(1)
        expect(mock.results[0].value).toStrictEqual(['test-mouse-leave'])
    })

    it('check fix update on blue', () => {

        const mockUpdate = jest.fn(linestr => linestr)
        const wrapper = setup({
            line: ['test-blur', '', '', ''],
            update: mockUpdate
        })

        wrapper.simulate('blur')

        const mock = mockUpdate.mock
        expect(mock.calls.length).toBe(1)
        expect(mock.results[0].value).toStrictEqual(['test-blur'])
    })
})
