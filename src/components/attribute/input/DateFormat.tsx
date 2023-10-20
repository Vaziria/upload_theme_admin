import { DatePicker } from "antd"
import dayjs from "dayjs"
import React from "react"

interface Props {
    value?: string
    onChange?(value?: string): void
}

const DateFormat: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props
    const [dateValue, setDateValue] = React.useState<dayjs.Dayjs>() 

    React.useEffect(() => {
        if (value) {
            const dvalue = dayjs(parseInt(value) * 1000)
            if (dvalue.isValid()) {
                setDateValue(dvalue)
                return
            }
        }

        setDateValue(undefined)
    }, [value])

    function onDateChange(dvalue: dayjs.Dayjs | null) {
        const time = dvalue?.startOf("day").toDate().getTime()
        const value = time ? Math.trunc(time / 1000).toString() : undefined
        onChange?.(value)
    }

    return <DatePicker
        placeholder=""
        className="w-100"
        value={dateValue}
        onChange={onDateChange}
    />
}

export default DateFormat
