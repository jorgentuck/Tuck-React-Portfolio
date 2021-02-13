import React from 'react';

export function Container({ children }) {
    return <div className="container-fluid mt-5 float-left">{children}</div>
};

export function Row({ children }) {
    return <div className="row">{children}</div>
};

export function Col({ size, children }) {
    return (
        <div className={
            size
                .split(' ')
                .map(size => 'col' + size)
                .join(' ')
        }
        >
            {children}
        </div>
    );
};

export function H1({ children }) {
    return <h1 className="display-4 text-dark">{children}</h1>
};

export function Hr() {
    return <hr className="my-2"/>
};

export function Img(props) {
    return (
        <img
        src={props.src}
        alt={props.alt}
        className={props.className}
        />
    )
};
