import Terrain from 'react-icons/lib/md/terrain'
import Road from 'react-icons/lib/fa/road'
import Calendar from 'react-icons/lib/fa/calendar'
import { BikeDayRow } from './BikeDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const BikeDayList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/offroad|onroad/))?
                            days : days.filter(day => day[filter])

    return (
        <div className="bike-day-list">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Off Road</th>
                        <th>On Road</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to="list-days">
                                All Days
                            </Link>
                            <Link to="/list-days/offroad">
                                Off Road Days
                            </Link>
                            <Link to="/list-days/onroad">
                                On Road Days
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                        <BikeDayRow key={i}
                                {...day}
                        />
                )}
                </tbody>
            </table>
        </div>
    )
}

BikeDayList.propTypes = {
    days: function(props) {
        if (!Array.isArray(props.days)) {
            return new Error(
                "BikeDayList should be an array"
            )
        } else if (!props.days.length) {
            //empty props.days
            return new Error(
                "BikeDayList must have at least one record"
            )
        } else {
            return null
        }
    }
}