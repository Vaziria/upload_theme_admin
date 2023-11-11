import React from "react"
// import { deleteProducts } from "../../api/product"
import { emitEvent } from "../../event"
import { MarketList } from "../../model/Common"
import toCurrency, { IKotaStat } from "../../model/product"
import { useQuery } from "../../model/newapisdk"

interface IProp {
    namespace: string
    marketplace: MarketList
    stats: IKotaStat[],
    changeList(stats: IKotaStat[]): void
}

const StatKota: React.FC<IProp> = (props: IProp) => {

    const { namespace, marketplace, stats, changeList } = props
    const { send: deleteProducts } = useQuery("GetLegacyV1ProductDelete")

    async function deleteKota(stat: IKotaStat): Promise<void> {
        deleteProducts({
            query: {
                is_public: false,
                marketplace,
                namespace,
                kota: stat._id,
                pmax: 0,
                pmin: 0,
                use_empty_city: true,
            }
        })

        emitEvent('show_msg', {
            msg: `delete kota ${stat._id}`
        })

        const statsfilter = stats.filter(item => item._id !== stat._id)
        changeList(statsfilter)
    }

    return (
        <table id="example" className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Kota</th>
                    <th scope="col">Price</th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                {stats.map(stat => <tr key={stat._id}>
                    <td>{stat._id}</td>
                    <td scope="row">{toCurrency(stat.price_min)} - {toCurrency(stat.price_max)}</td>
                    <td scope="row">{stat.count}</td>
                    <td scope="row">
                        <button className="btn btn-sm btn-danger" type="button" onClick={() => deleteKota(stat)}>
                            DELETE
                        </button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default StatKota
