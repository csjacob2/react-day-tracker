import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDays from 'react-icons/lib/fa/table'

export const Menu = () =>
    <nav className="menu">
        <Link to="/" activeClassName="selected">
            <HomeIcon />
        </Link>
        <Link to="add-day" activeClassName="selected">
            <AddDayIcon />
        </Link>
        <Link to="list-days" activeClassName="selected">
            <ListDays />
        </Link>
    </nav>