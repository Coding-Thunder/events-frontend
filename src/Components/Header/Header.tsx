import { RxCross1 } from "react-icons/rx";
import "./Header.css"


interface Props {
    title: string
    event: any
}

const Header = ({ title, event }: Props) => {
    return (
        <div className="Header">
            <p className="Header__title">{title}</p>
            <div className="Cancel">
                <RxCross1 className="Cancel__icon" onClick={event} />
            </div>
        </div>
    )
}

export default Header