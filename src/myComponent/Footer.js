import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "absolute",
        top:"91vh",
        width:"100%"
    };
    return (
        // <footer className="bg-dark text-light py-3" style={ footerStyle } >
        <footer className="bg-dark text-light py-3 position-sticky fixed-bottom" style={ footerStyle } >
            <span className="text-center">
                Copyright &copy; mytodo.com | Developed by Daksh Vaishnav
            </span>
        </footer>
    )
}
