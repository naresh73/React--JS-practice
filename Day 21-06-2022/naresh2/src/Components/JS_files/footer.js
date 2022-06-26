import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Offcanvas.Title>contact</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <footer>
                        <p>Author: Netflix</p>
                        <p><a href="netflix@example.com">netflix@example.com</a></p>
                    </footer>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <footer>
            <center>
                {['contact us'].map((placement, idx) => (
                    <OffCanvasExample key={idx} placement={placement} name={placement} />
                ))}
            </center>
        </footer>
    );
}

export default Example;