function Button(props) {
    return (
        <>
            <h1 className={props.h1class}>{props.h1}</h1>
            <input
                className={props.inputclass}
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.inputvalue}
            />
            <img
                className={props.imgclass}
                src={props.imgsrc}
                alt={props.imgalt}
            />
            <button
                className={props.btnclass}
                onClick={props.btnclick}
                onMouseDown={props.btnmouse}
            />
            

        </>
    )
}
export default Button; 