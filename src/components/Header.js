import { useLocation } from "react-router"
import Button from "./Button"

function Header({ showAddTask, onAdd }) {
    const onClick = () => onAdd()
    const location = useLocation()

    return (
        <header className='header'>
            <h1>MyTask Manager</h1>
            { location.pathname === '/' &&
                <Button
                    color={showAddTask ? 'red' : 'steelBlue'}
                    text={showAddTask ? 'Close' : '+'}
                    onClick={onClick}
                /> 
            }
        </header>
    )
}

export default Header
