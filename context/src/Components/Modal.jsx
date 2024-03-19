const Modal = (props) => {
    const { header, body, children } = props

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            border: '1px solid black',
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '400px' ,
            margin: 'auto'
        }}>
            <h2 className="modal-header">{header}</h2>
            <div className="body">{children}</div>
        </div>
    )
}

export default Modal;