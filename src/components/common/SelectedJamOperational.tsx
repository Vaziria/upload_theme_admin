import React from 'react'
import JamOperational, { days, Day, JamOpValue } from './JamOperational'

interface SelectedDay {
    day: Day
    value: JamOpValue
}

export type SelectedValue = Partial<Record<Day, JamOpValue>>
interface IProps {
    value: SelectedValue
    onChange: (value: SelectedValue) => void
}

const defStart = '09:00:00'
const defEnd = '18:00:00'
const defValue = {
    start: defStart,
    end: defEnd
}

function encodeValue (value: SelectedValue): SelectedDay[] {
    return Object.keys(value).reduce((result, selected) => {
        result.push({
            day: selected as Day,
            value: value[selected as Day] || defValue
        })
        return result
    }, [] as SelectedDay[])
}

function decodeValue (selected: SelectedDay[]): SelectedValue {
    return selected.reduce((result, selected) => {
        result[selected.day] = selected.value
        return result
    }, {} as SelectedValue)
}

// eslint-disable-next-line react/prop-types
const SelectedJamOperational: React.FC<IProps> = ({ value, onChange }) => {

    // console.log(value)

    const [ selectedDays, setSelectedDays ] = React.useState<SelectedDay[]>(encodeValue(value))
    function toggleSelected (day: Day) {
        const findSelected = selectedDays.find(selected => selected.day === day)
        if (findSelected) {
            setSelectedDays(state => state.filter(selected => selected.day !== day))
        } else {
            const addSelected: SelectedDay = {
                day,
                value: defValue
            }
            setSelectedDays(state => [...state, addSelected])
        }
    }

    function onJamChange (day: Day): (value: JamOpValue) => void {
        return (value) => {
            setSelectedDays(state => state.map(selected => {
                if (selected.day === day) {
                    selected.value = value
                }
                return selected
            }))
        }
    }

    const filterSelecteds = selectedDays.sort(((currSelect, nextSelect) => {
        const currSort = days.indexOf(currSelect.day)
        const nextSort = days.indexOf(nextSelect.day)
        return currSort - nextSort
    }))

    React.useEffect(() => {
        onChange(decodeValue(filterSelecteds))
    }, [filterSelecteds])

    return (
        <div>
            <div className="d-flex">
                {days.map(day => {

                    const active = selectedDays.some(selectedDay => selectedDay.day === day)
                    let className = 'border mr-3 rounded-circle text-center font-weight-bold '
                    className += active ? 'bg-primary text-white' : 'bg-white'

                    return (
                        <div
                            key={day}
                            className={className}
                            style={{
                                cursor: 'pointer',
                                width: '25px',
                                height: '25px',
                                lineHeight: '25px'
                            }}
                            onClick={() => toggleSelected(day)}
                        >
                            {day[0].toLocaleUpperCase()}
                        </div>
                    )
                })}
            </div>
            {filterSelecteds.map((selected) => (
                <JamOperational
                    key={selected.day}
                    day={selected.day}
                    start={selected.value.start}
                    end={selected.value.end}
                    onChange={onJamChange(selected.day)}
                />
            ))}
        </div>
    )
}

export default SelectedJamOperational
