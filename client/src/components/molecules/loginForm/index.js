import { form } from '/utils/elements.js';
import Button from '/components/atoms/button/index.js';
import Input from '/components/atoms/Input/index.js';
import Img from '/components/atoms/Img/index.js';

const LoginForm = () => form(
    { className : 'molecules__loginForm', action: 'users/login', method: 'post' },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    Input('atoms__input__full', 'username', '아이디'),
    Input('atoms__input__full', 'password', '비밀번호', undefined, 'password'),
    Button('atoms__button__full', '로그인'),
)

export default LoginForm;

