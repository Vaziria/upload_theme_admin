import React from "react"
import { getProductRandom, getRandomAttribute, getSameResource, updateProductRandom, updateRandomAttribute, updateSameResource } from "../../api/legacy_setting"
import Checkbox from "../common/Checkbox"

interface IState {
    pilih_random: boolean
    random_attribute: {
        active: boolean
        force_tidakada: boolean
    }

    same_resource: boolean
}

export default class AdvancedSetting extends React.Component<unknown, IState> {
    state: IState = {
        pilih_random: false,
        random_attribute: {
            active: false,
            force_tidakada: false
        },

        same_resource: false
    }

    

    async componentDidMount(): Promise<void> {
        const pilihrnd = await getProductRandom()
        this.setState({
            pilih_random: pilihrnd.data
        })

        // random attribute
        const attrrnd = await getRandomAttribute()
        this.setState({
            random_attribute: attrrnd.data
        })

        // same resouce
        const same = await getSameResource()
        this.setState({
            same_resource: same.data
        })

    }

    async updateRandom(value: boolean): Promise<void> {
        await updateProductRandom(value)
    }

    async updateRandomAttr(data: {
        active?: boolean
        force_tidakada?: boolean
    }): Promise<void> {
        const payload = {...this.state.random_attribute, ...data}
        this.setState({
            random_attribute: payload
        })
        await updateRandomAttribute(payload)
    }

    async updateSameResource(value: boolean): Promise<void> {
        this.setState({
            same_resource: value
        })
        await updateSameResource(value)
    }

    render(): JSX.Element {

        const random_attribute = this.state.random_attribute

        return <>
            <label>ADVANCED SETTING:</label>
            <div className="form-check">
                <Checkbox
                    className="form-check-input"
                    checked={this.state.pilih_random}
                    onChange={(e) => this.updateRandom(e) }
                ></Checkbox>

                <label className="form-check-label">
                    Product Pilih Random
                </label>
            </div>

            <div className="form-check">
                <Checkbox
                    className="form-check-input"
                    checked={random_attribute.active}
                    onChange={(e) => this.updateRandomAttr({active: e}) }
                ></Checkbox>
                <label className="form-check-label">
                    Random Attribute
                </label>
            { random_attribute.active && 
                <div>
                    <Checkbox
                        className="form-check-input"
                        checked={random_attribute.force_tidakada}
                        onChange={(e) => this.updateRandomAttr({force_tidakada: e}) }
                    ></Checkbox>
                    <label className="form-check-label">
                        Jadikan Attribute Tidak Ada
                    </label>
                </div>
            }
            </div>
            <div className="form-check">
                <Checkbox
                    className="form-check-input"
                    checked={this.state.same_resource}
                    onChange={(e) => this.updateSameResource(e) }
                ></Checkbox>
                <label className="form-check-label">
                    Akun Pakai Product Sama
                </label>
            </div>
        </>
    }
}