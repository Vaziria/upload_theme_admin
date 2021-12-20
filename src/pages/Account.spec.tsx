import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapater from '@wojtekmaj/enzyme-adapter-react-17'

import Account, { IState } from './Account'
import dumpAkun from '../test/dummy/akun'

Enzyme.configure({ adapter: new Adapater() })

describe('test page Account', () => {

    let wrapper: ShallowWrapper<unknown, IState, Account>
    let wrapperState: IState
    const akun = dumpAkun()
    
    beforeEach(() => {
        wrapper = shallow(<Account />)
        wrapperState = wrapper.instance().state

        const { paging } = wrapperState
        paging.data = [akun]
        wrapper.instance().setState({ paging })
    })

    it('test render akun item', () => {
        expect(wrapper.find('#itemContainer').children().length).toBe(1)
    })

    it('test akun item use akun id', () => {
        const firstAkunItem = wrapper.find('#itemContainer').children().at(0)
        expect(firstAkunItem.key()).toBe(akun._id)
    })
})
