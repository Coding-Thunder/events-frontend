import "./File.css"
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";



interface Props {
    name: string
    size: string
}

const File = ({ size, name }: Props) => {
    return (
     <div className="UploadedFile">
           <div className="FileComp">
            <FaCheck style={{color:"blue"}} />
            <p >{name}</p>

            <div className="FileSize">
                {size}
            </div>
        </div>
        <MdDeleteOutline style={{fontSize:"25px", color:"gray"}}/>
     </div>
    )
}

export default File