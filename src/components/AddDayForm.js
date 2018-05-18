import { PropTypes, Component } from 'react'

const bikeRoutes = [
    "Lake Merrit",
    "Signal Hill",
    "Whistler Resort",
    "Squamish Trails",
    "Victoria Island",
    "Headlands Loop",
    "Point Reyes",
    "Golden Gate Park",
    "Mount Tam"
]

class Autocomplete extends Component {

    //get and set are commonly used in forms
    get value() {
        return this.refs.inputLocation.value
    }

    set value(inputValue) {
        this.refs.inputLocation.value = inputValue
    }

    render() {
        return (
            <div>
                <input ref="inputLocation"
                       type="text"
                       list="bike-locations" />
                <datalist id="bike-locations">
                    {this.props.options.map(
                        (opt, i) => <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}

export const AddDayForm = ({ location, date, offroad, onroad, onNewDay }) => {

    let _location, _date, _offroad, _onroad

    const submit = (e) => {
        e.preventDefault()

        onNewDay({
            location: _location.value,
            date: _date.value,
            offroad: _offroad.checked,
            onroad: _onroad.checked
        })

        // reset form to empty
        _location.value = ''
        _date.value = ''
        _offroad.checked = false
        _onroad.checked = false
    }

    return (
        <form onSubmit={submit} className="add-day">
            <label htmlFor="location">Location Name</label>
            <Autocomplete options={bikeRoutes}
                ref={input => _location = input}
            />

            <label htmlFor="date">Date</label>
            <input id="date"
                type="date"
                required
                defaultValue={date}
                ref={input => _date = input}
            />

            <div>
                <input id="offroad"
                    type="checkbox"
                    defaultChecked={offroad}
                    ref={input => _offroad = input}
                />
                <label htmlFor="offroad">Offroad Day</label>
            </div>

            <div>
                <input id="onroad"
                    type="checkbox"
                    defaultChecked={onroad}
                    ref={input => _onroad = input}
                />
                <label htmlFor="onroad">Onroad Day</label>
            </div>
            <button>Add Day</button>
        </form>
    )
}

AddDayForm.defaultProps = {
    location: "Kirkwood",
    date: "2018/12/02",
    offroad: true,
    onroad: false
}

AddDayForm.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    offroad: PropTypes.bool.isRequired,
    onroad: PropTypes.bool.isRequired
}