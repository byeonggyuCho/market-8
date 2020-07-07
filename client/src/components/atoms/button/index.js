import { button } from '/utils/elements.js';

const getStyles = (styleType = 'default') => {
    return styleType === 'default' ? null : ({
        '-webkit-tap-highlight-color' : 'rgba(255, 255, 255, 0)',
        'border-radius': 0,
        'display': 'inline-block',
        'padding': '14px 0 12px',
        'text-align': 'center',
        'font-weight': 'bold',
        'font-size': '16px',
        'line-height': '22px',
        'border': '1px solid',
        'background': '#fff',
        'width': '98px',
        'border-color': '#ccc',
        'color': '#bbc0cd',
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'left': '227px',
    });
    
}

const Button = (
    className, 
    styleType,
    buttonText,
) => button({ className, style : getStyles(styleType) }, buttonText );

export default Button;
