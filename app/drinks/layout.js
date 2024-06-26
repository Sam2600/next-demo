import React from 'react'

const DrinkLayout = ({ children }) => {
    return (
        // <div className='max-w-xl'>
        <div className="w-full">
            <div className='mockup-code mb-8'>
                <pre data-prefix='$'>
                    <code> npx create-next-app@latest Next-Demo </code>
                </pre>
            </div>
            {children}
        </div>
    )
};

export default DrinkLayout;