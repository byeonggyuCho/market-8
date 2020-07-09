import { form, div, span, option } from '/utils/elements.js';
import Button from '/components/atoms/button/index.js';
import Input from '/components/atoms/input/index.js';
import Img from '/components/atoms/img/index.js';
import Text from '/components/atoms/text/index.js';
import Select from '/components/atoms/select/index.js';

const emptyClass = '';
const emptyProperty = {};

const inputDisabledClass = 'atom-input-disabled';
let emailClass = inputDisabledClass;


/** @description select handler
     * @param {event} event
     */
const emailSelecthandler = (event) => {
    const selectValue = event?.target?.value;
    const emailInput = document.getElementsByName("emailRear")?.[0];

    const naverEmail = 'naver.com';
    const googleEmail = 'gmail.com';
    const nateEmail = 'nate.com';
    const hotEmail = 'hotmail.com';
    const hanEmail = 'hanmail.net';


    if(!selectValue || !emailInput) return;

    console.log(emailInput);
    switch(selectValue){
        case naverEmail:
            emailInput.value = naverEmail;
            break;
        case hanEmail:
            emailInput.value = hanEmail;
            break;
        case nateEmail:
            emailInput.value = nateEmail;
            break;
        case hotEmail:
            emailInput.value = hotEmail;
            break;
        case googleEmail:
            emailInput.value = googleEmail;
            break;
        case '직접입력':
            emailInput.value = '';
            emailInput.className = emptyClass;
            break;
        default:
            emailInput.className = inputDisabledClass;
    }
}

const SignupForm = () => form(
    { className : 'molecule-signupForm', action: 'users/login', method: 'post' },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    Text(emptyClass, '필수 정보를 입력해주세요'),
    Input(emptyClass, 'id', '아이디* (4~20자)', 'text'),
    Input(emptyClass, 'pw', '비밀번호* (영문+숫자, 8~20자)', 'password'),
    Input(emptyClass, 'pwConfirm', '비밀번호 재확인*', 'password'),
    div({ className : 'emailDiv'},
        Input(emptyClass, 'emailFront', '이메일 앞자리*', 'text'),
        span(emptyProperty, '@'),
        Input(emailClass, 'emailRear', '이메일 뒷자리*', 'text'), 
    ),
    Select({className: emptyClass, name: 'emailSelect', onchange: emailSelecthandler},
        option(
            {value: '이메일 선택', selected: "selected"},
            '이메일  선택'
        ),
        option(
            {value: 'naver.com'},
            'naver.com'
        ),
        option(
            {value: 'hanmail.net'},
            'hanmail.net'
        ),
        option(
            {value: 'nate.com'},
            'nate.com'
        ),
        option(
            {value: 'hotmail.com'},
            'hotmail.com'
        ),
        option(
            {value: 'gmail.com'},
            'gmail.com'
        ),
        option(
            {value: '직접입력'},
            '직접입력'
        ),
    ),

    Button('atom-button-full', '가입완료'),
)

export default SignupForm;


