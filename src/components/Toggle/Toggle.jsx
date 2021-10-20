import "./toggle.css";
import {MdDarkMode} from "react-icons/md";
import {FiSun} from "react-icons/fi"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <div >
                <MdDarkMode className="t-icon"/>
                <FiSun color="black" className="t-icon"/>
                <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : "30px"}}></div>
            </div>

        </div>
    )
}

export default Toggle
