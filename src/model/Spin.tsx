export type Spin = {
    name: string
    data: string
}

export type SpinConfig = {
    merek_ins_t: boolean
    title: string
    desc: string
    smax: number
    smin: number
}

export type ErrKey = 'title' | 'stock' | 'desc'
