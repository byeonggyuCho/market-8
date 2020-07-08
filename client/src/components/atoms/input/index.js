import { input } from '/utils/elements.js';

const Input = (
    className,
    name, 
    placeholder, 
    onchange, 
      
) => input({ className, name, placeholder, onchange });

export default Input;
