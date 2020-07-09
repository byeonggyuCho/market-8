import { div } from '/utils/elements.js';

const ConfirmColumn = () => div(
    { className : 'molecules__confirmColumn', },
    div(
        div({ className : 'key' }, '이름'), 
        div({ className : 'value' }, '윤지수')
    ),
    div(
        div({ className : 'key' }, '아이디'), 
        div({ className : 'value' }, 'crong')
    ),
    div(
        div({ className : 'key' }, '이메일'), 
        div({ className : 'value' }, 'crong@gmail.com')
    ),
    div(
        div({ className : 'key' }, '휴대폰'), 
        div({ className : 'value' }, '010-6858-5381')
    ),
)

export default ConfirmColumn;

