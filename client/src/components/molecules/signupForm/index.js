import { form, div, span, option, ul, li, label, a, p, script} from '/utils/elements.js';
import Button from '/components/atoms/button/index.js';
import Input from '/components/atoms/input/index.js';
import Img from '/components/atoms/img/index.js';
import Text from '/components/atoms/text/index.js';
import Select from '/components/atoms/select/index.js';
import { 
    validateId,
    validatePw,
    validateConfirmPw,
    validateName,
    validateEmail,
    validatePhone
} from '/components/molecules/signupForm/validator.js'

import { 
    emailSelecthandler,
    phoneButtonHandler,
    handleCheckTotal,
    handleCheckEssential,
    handleFindAddress,
    handleCheckAddress,
    handleForm,
    handleSingupButton
} from '/components/molecules/signupForm/handlers.js'

const emptyClass = '';
const emptyProperty = {};

const SignupForm = () => form(
    { className : 'molecule-signupForm', action: '/users', method: 'post', onclick: handleForm },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    Text(emptyClass, '필수 정보를 입력해주세요'),
    Input(emptyClass, 'id', '아이디* (4~20자)', 'text', validateId),
    Input(emptyClass, 'pw', '비밀번호* (영문+숫자, 8~20자)', 'password', validatePw),
    Input(emptyClass, 'pwConfirm', '비밀번호 재확인*', 'password', validateConfirmPw),
    div({ className : 'emailDiv'},
        Input(emptyClass, 'emailFront', '이메일 앞자리*', 'text', validateEmail),
        span(emptyProperty, '@'),
        Input('atom-input-disabled', 'emailRear', '이메일 뒷자리*', 'text'), 
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
    Input(emptyClass, 'name', '이름*', 'text', validateName),
    div({ className : 'button-input phone-container'},
        Input('atom-input-with-buton', 'phoneNo', '휴대폰*', 'tel', validatePhone),
        Button('atom-button-with-input phone-button atom-button-failed', '인증받기', phoneButtonHandler),
    ),
    div ({},
        ul({className: 'remove-indent'},
            li(emptyProperty, '인증번호 전송은 통신사에 따라 최대 1분까지 소요될 수 있습니다.'),
            li(emptyProperty, "인증번호가 도착하지 않을 경우 '인증번호 재전송'을 눌러주세요."),
        )
    ),
    div ({className: 'check-input-label'},
        div(
            {className: 'input-checkbox'},
            Input(emptyClass, 'checkAddress', '', 'checkbox', handleCheckAddress),
            label(emptyProperty, '선택 정보를 입력하시겠어요?'),
            a({
                className: 'info',
                href: 'https://ceo.baemin.com/#/policy/history?position=collectionAndUsageNormal'
            }, '내용보기')
        )
    ),
    script({src: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'}),
    div({ className : 'button-input address-container',},
        Input('atom-input-with-buton', 'zipCode', '우편번호', 'tel'),
        Button('atom-button-with-input find-address', '주소찾기', handleFindAddress),
    ),
    Input(emptyClass, 'address1', '주소', 'text'),
    Input(emptyClass, 'address2', '상세 주소', 'text'),
    div ({className: 'check-input-label'},
        div(
            {className: 'total-input-checkbox'},
            Input(emptyClass, 'checkTotal', '', 'checkbox', handleCheckTotal),
            label(emptyProperty, '전체 약관에 동의합니다.'),
        )
    ),
    div ({className: 'info-container'},
        div(
            {className: 'input-checkbox'},
            Input(emptyClass, 'checkEssential', '', 'checkbox', handleCheckEssential),
            label(emptyProperty, '필수 항목에 동의합니다.'),
            div({className: 'accept-info'},
                a({
                    className: 'info',
                    href: ''
                }, '배민사장님광장 이용약관'),
                a({
                    className: 'info',
                    href: ''
                }, '개인정보 수집이용 동의')
            )
        )
    ),
    div ({className: 'info-container'},
        div(
            {className: 'input-checkbox'},
            Input(emptyClass, 'isAdAgreed', '', 'checkbox'),
            label(emptyProperty, '광고성 정보 수신 동의 (선택)'),
            p({className: 'confirm-ad-info'}, '배민사장광장 회원에게 제공하는 서비스의 광고성 정보를 수신합니다.'),
        )
    ),
    div ({},
        ul({className: 'remove-indent'},
            li(emptyProperty, '14세 이상 회원만 가입 가능합니다.'),
        )
    ),
    Button('atom-button-full signup-button', '가입완료', handleSingupButton),
);


export default SignupForm;


