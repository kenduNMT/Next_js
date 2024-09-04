import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
    return (
        <button style={{ margin: '0 10px', padding: '10px 20px', cursor: 'pointer' }}>
            {children}
        </button>
    );
}
