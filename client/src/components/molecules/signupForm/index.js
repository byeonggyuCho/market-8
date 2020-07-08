import { form, div, span } from '/utils/elements.js';
import Button from '/components/atoms/button/index.js';
import Input from '/components/atoms/Input/index.js';
import Img from '/components/atoms/Img/index.js';
import Text from '/components/atoms/Text/index.js';

const emptyClass = '';
const emptyProperty = {};

const SignupForm = () => form(
    { className : 'signupForm', action: 'users/login', method: 'post' },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    Text(emptyClass, '필수 정보를 입력해주세요'),
    Input(emptyClass, 'id', '아이디* (4~20자)', 'text'),
    Input(emptyClass, 'pw', '비밀번호* (영문+숫자, 8~20자)', 'password'),
    Input(emptyClass, 'pwConfirm', '비밀번호 재확인*', 'password'),
    div({ className : 'emailDiv'},
        Input(emptyClass, 'emailFront', '이메일 앞자리*', 'text'),
        span(emptyProperty, '@'),
        Input(emptyClass, 'emailRear', '이메일 뒷자리*', 'text'), 
    ),
    Button('atom.button.full', '가입완료'),
)

export default SignupForm;


