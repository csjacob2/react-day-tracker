import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import Road from 'react-icons/lib/fa/road'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => (decimal * 100) + '%'
const calcGoalProgress = (total, goal) => percentToDecimal(total/goal)

export const BikeDayCount = ({total=70, offroad=20, onroad=10, goal=100}) => (
    <div className="bike-day-count">
        <div className="total-days">
            <span>{total}</span>
                <Calendar />
            <span>days</span>
        </div>
        <div className="offroad-days">
            <span>{offroad}</span>
                <Terrain />
            <span>days</span>
        </div>
        <div className="onroad-days">
            <span>{onroad}</span>
                <Road />
            <span>days</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(
                    total,
                    goal)
                }
            </span>
        </div>
    </div>
)

BikeDayCount.propTypes = {
    total: PropTypes.number,
    offroad: PropTypes.number,
    onroad: PropTypes.number,
    goal: PropTypes.number
}