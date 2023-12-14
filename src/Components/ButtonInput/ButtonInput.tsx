import "./ButtonInput.css"

interface Props {
    buttonText : string
    width:string
    title:string
    placeholder:string
    className:string
    value:string,
    handleChange:any

}

const ButtonInput = ({value,handleChange,className,title,width,buttonText,placeholder}:Props) => {
    return (
        <div className="inputGroup">
            <label className="Form__Label" htmlFor="eventName">{title}</label>
            <div className="ButtonInput">
                <input value={value} onChange={(e) => handleChange(e.target.value)} className={className} placeholder={placeholder} style={{width}} type="text" id="eventName" />
                <button>{buttonText}</button>
            </div>
        </div>
    )
}

export default ButtonInput