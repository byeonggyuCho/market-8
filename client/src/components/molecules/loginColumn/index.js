import { h3, div } from '/utils/elements.js';
import Button from '/components/atoms/button/index.js';
import Img from '/components/atoms/img/index.js';
import A from '/components/atoms/a/index.js';

const LoginColumn = () => div(
    { className : 'molecule-loginColumn' },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    h3('사장님, 로그인해주세요!'),
    Button('atom-button-full', '로그인', () => location.href = '/login' ), 
    div({ className: 'aDiv' }, A('atom.a', '회원가입', '/signup')),

)

export default LoginColumn;

