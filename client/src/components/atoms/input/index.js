import { input } from '/utils/elements.js';

const Input = (
    className,
    name, 
    placeholder, 
    onchange, 
    type,
) => input({ className, name, placeholder, onchange, type });

export default Input;
