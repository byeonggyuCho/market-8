import { button } from '/utils/elements.js';

const Button = (
    className, 
    buttonText,
    onclick,
) => button({ className, onclick }, buttonText);

export default Button;
