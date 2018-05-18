import Terrain from 'react-icons/lib/md/terrain'
import Road from 'react-icons/lib/fa/road'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const BikeDayRow = ({location, date, offroad, onroad}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {location}
        </td>
        <td>
            {(offroad) ? <Terrain/> : null}
        </td>
        <td>
            {(onroad) ? <Road/> : null}
       </td>
    </tr>
)

BikeDayRow.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    offroad: PropTypes.bool,
    onroad: PropTypes.bool
}