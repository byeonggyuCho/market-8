import { div } from '/utils/elements.js';

const UserInfoBody = (user) => div(
    { className : 'molecule-userInfoBody', },
    div(
        div({ className : 'key' }, '이름'), 
        div({ className : 'value' }, user.name)
    ),
    div(
        div({ className : 'key' }, '아이디'), 
        div({ className : 'value' }, user.id)
    ),
    div(
        div({ className : 'key' }, '이메일'), 
        div({ className : 'value' }, user.email)
    ),
    div(
        div({ className : 'key' }, '휴대폰'), 
        div({ className : 'value' }, user.phoneNo)
    ),
)

export default UserInfoBody;

