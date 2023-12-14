import "./Avatar.css"

import { RxCross1 } from "react-icons/rx";


interface Props {
    image:string
}

const Avatar = ({image}:Props) => {
    return (
        <div>
            <div className="Avatar">
                <img src={image} alt="one" />
                <div className="ImageCross">
                    <RxCross1 />
                </div>
            </div>

        </div>
    )
}

export default Avatar