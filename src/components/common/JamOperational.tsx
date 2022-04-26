import React from 'react'

export const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const
export type Day = (typeof days)[number]

export interface JamOpValue {
    start: string
    end: string
}

interface IProps extends JamOpValue {
    day: Day
    onChange: (value: JamOpValue) => void
}

const dayName: Record<Day, string> = {
    sun: 'Minggu',
    mon: 'Senin',
    tue: 'Selasa',
    wed: 'Rabu',
    thu: 'Kamis',
    fri: 'Jumat',
    sat: 'Sabtu',
}

function parseTime(time: number): string {

    let int: number|string = parseInt(time.toString())
    let minute = '00'

    if (time > int) minute = '30'
    if (int < 10) int = `0${int}`

    return `${int}:${minute}:00`
}


// eslint-disable-next-line react/prop-types
const JamOperational: React.FC<IProps> = ({ day, start, end, onChange }) => {

    const clock = Array.from(Array(48).keys()).map(hour => hour / 2)

    function setOnChange (value: Partial<JamOpValue>) {
        onChange({
            start,
            end,
            ...value
        })
    } 

    return (
        <div className='d-flex align-items-center mt-2'>
            <span className='mr-3'>{dayName[day]}</span>
            <select
                value={start}
                className="form-control form-control-sm mr-3"
                style={{ width: '100px' }}
                onChange={(e) => setOnChange({ start: e.target.value })}
            >
                {clock.map(clock => {
                    const time = parseTime(clock)
                    return (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    )
                })}
            </select>
            <span className='mr-3'>to</span>
            <select
                value={end}
                className="form-control form-control-sm mr-3"
                style={{ width: '100px' }}
                onChange={(e) => setOnChange({ end: e.target.value })}
            >
                {clock.map(clock => {
                    const time = parseTime(clock)
                    return (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default JamOperational
