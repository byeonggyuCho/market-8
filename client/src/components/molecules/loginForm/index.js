import { form, div } from '/utils/elements.js';
import Button from '/components/atoms/button/index.js';
import Input from '/components/atoms/input/index.js';
import Img from '/components/atoms/img/index.js';
import A from '/components/atoms/a/index.js';

const LoginForm = (failureMsg = '') => form(
    { className : 'molecule-loginForm', action: 'users/login', method: 'post' },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    div({ className : 'failureMsg'}, failureMsg === 'Missing credentials' ? '아이디와 비밀번호를 모두 입력해주세요.' : failureMsg),
    Input('atom.input.full', 'username', '아이디', 'text'),
    Input('atom.input.full', 'password', '비밀번호', 'password'),
    div(
        { className : 'linkDiv'},
        A('atom.a', '회원가입', '/signup'),
        
    ),
    Button('atom.button.full', '로그인'),
);

export default LoginForm;


