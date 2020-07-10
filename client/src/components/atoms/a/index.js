import { a } from '/utils/elements.js';

const A = (
    className, 
    text,
    href,
) => a({ className, href }, text);

export default A;
