import React from "react"
import { Col, ColProps, Result, Row, RowProps, Spin } from "antd"

type DataviewProps = Omit<RowProps, "children"> & {
    colprops?: Omit<ColProps, "children">
}

interface Props<T> extends React.PropsWithChildren<DataviewProps> {
    data?: Array<T>
    loading?: boolean
    loadingText?: string
    error?: boolean
    errorTitle?: string
    errorDesc?: string
    emptyTitle?: string
    emptyDesc?: string
    render?: (item: T) => JSX.Element
}

export default function Dataview<T>(props: Props<T>): React.ReactElement {
    const {
        data,
        loading,
        loadingText,
        error,
        errorTitle,
        errorDesc,
        emptyTitle,
        emptyDesc,
        render,
        children,
        colprops,
        ...rowProps
    } = props

    if (loading) {
        return <div>
            <Spin tip={loadingText || "Loading"}>
                <div style={{ height: 150 }} />
            </Spin>
        </div>
    }

    if (error) {
        return <Result
            status="500"
            title={errorTitle}
            subTitle={errorDesc}
        />
    }

    if (error) {
        return <Result
            status="500"
            title={errorTitle || "Halaman Error"}
            subTitle={errorDesc}
        />
    }

    if (!data || !data?.length) {
        return <Result
            status="404"
            title={emptyTitle || "Halaman Tidak Ditemukan"}
            subTitle={emptyDesc}
        />
    }

    return <Row {...rowProps}>
        {data?.map((col, key) =>
            <Col key={key} {...colprops}>
                {render?.(col)}
            </Col>
        )}
        {children && <Col span={24}>{children}</Col>}
    </Row>
}
