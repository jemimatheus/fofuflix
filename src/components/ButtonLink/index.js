import React from 'react';


function ButtonLink (props) {
    return (
        <nav>
             <a href={props.href} className={props.className}>
             {props.children}
            </a>
        </nav>
    )
}

export default ButtonLink;