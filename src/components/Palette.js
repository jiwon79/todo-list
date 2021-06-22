import React from 'react'
import './Palette.css';

const Color = ({color, active, onClick}) => {
    return (
        <div className="color" style={{background: color}}>
        </div>

    )
}

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} />)
    );
    
    return (
        <div>
            {colorList}
        </div>
    )
};

export default Palette;