import { Component } from 'react'
import { BikeDayList } from  './BikeDayList'
import { BikeDayCount } from './BikeDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allBikeDays: [
                {
                    location: "Whistler!",
                    date: "2018/01/02",
                    offroad: true,
                    onroad: false
                }
            ]
        }

        this.addDay = this.addDay.bind(this)
    }

    addDay(newDay) {
        this.setState({
            allBikeDays: [
                ...this.state.allBikeDays,
                newDay
            ]
        })
    }

    countDays(filter) {
        const { allBikeDays } = this.state
        return allBikeDays.filter((day) => (filter) ? day[filter] : day).length
    }

    render() {
        return (
            <div className="app">
            <Menu />
            {(this.props.location.pathname === "/") ?
                <BikeDayCount total={this.countDays()}
                    offroad={this.countDays('offroad')}
                    onroad={this.countDays('onroad')}
                /> :
             (this.props.location.pathname === "/add-day") ?
                 <AddDayForm onNewDay={this.addDay} /> :
                 <BikeDayList days={this.state.allBikeDays}
                              filter={this.props.params.filter}
                 />
            }
            </div>
        )
    }
}