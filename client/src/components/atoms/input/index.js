import { input } from '/utils/elements.js';

const Input = (
    className,
    name, 
    placeholder,
    type,
    onchange, 
) => input({ className, name, placeholder, type, onchange });

export default Input;
