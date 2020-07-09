import { div, p } from '/utils/elements.js';
import Text from '/components/atoms/text/index.js';

/** @description insert newNde after refenceNode
     * @param {Node} newNode
     * @param {Node} referenceNode
     */
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/** @description select handler
     * @param {event} event
     */
export const emailSelecthandler = (event) => {
    const inputDisabledClass = 'atom-input-disabled';
    const selectValue = event?.target?.value;
    const emailInput = document.getElementsByName("emailRear")?.[0];

    const naverEmail = 'naver.com';
    const googleEmail = 'gmail.com';
    const nateEmail = 'nate.com';
    const hotEmail = 'hotmail.com';
    const hanEmail = 'hanmail.net';


    if(!selectValue || !emailInput) return;

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
            emailInput.className = '';
            break;
        default:
            emailInput.className = inputDisabledClass;
    }
}

export const validateId = (function() {
    let isAddNode = false;
    setTimeout(() => {
        const idInput = document.querySelector('input[name=id]');
        idInput.addEventListener('blur', (event) => {
            validateId(event);
        })
    });

    return (event) => {
        const id = event?.target?.value;
        const regex = /^[a-z0-9\_\-]{4,20}$/ // 아이디가 적합한지 정규식
        const isValitaed = regex.test(id);

        if(!isAddNode){
            isAddNode = true;
            const messageNode = div({className: 'msg'}, 
                    Text()
                );
            insertAfter(messageNode, event.target);
        }
        
        const message = document.querySelector('input[name=id]+.msg>p');
        if(isValitaed) {
            message.className = 'atom-text-success'
            message.textContent = '입력하신 아이디로 사용이 가능합니다.';
        } else {
            message.className = 'atom-text-error';
            message.textContent = '아이디는 영문과 숫자로 4자~20자 사이로 입력해 주세요';
        }        
    }
})();

export const validatePw = (function() {
    let isAddNode = false;
    setTimeout(() => {
        const pwInput = document.querySelector('input[name=pw]');
        pwInput.addEventListener('blur', (event) => {
            validatePw(event);
        })
    });
    return (event) => {
        const pwInput = event.target;
        const pw = event?.target?.value;
        const regex = /^[a-zA-Z0-9]{8,20}$/ // 아이디가 적합한지 정규식
        const isValitaed = regex.test(pw);
        if(!isValitaed) {
            if(!isAddNode){
                isAddNode = true;
                const messageNode = div({className: 'msg'}, 
                        Text('atom-text-error', '비밀번호는 영문과 숫자를 포함하여 8~20자로 입력해 주세요.')
                    );
                insertAfter(messageNode, event.target);
            }
        }else {
            if(pwInput && pwInput.nextSibling && isAddNode) {
                pwInput.parentNode.removeChild(pwInput.nextSibling)
                isAddNode = false;
            }
        }
        const confirmPwInput = document.getElementsByName("pwConfirm")?.[0];
        const confirmPw = confirmPwInput.value;
        if(confirmPw) {
            validateConfirmPw();
        }

    }
})();


export const validateConfirmPw = (function() {
    let isAddNode = false;
    setTimeout(() => {
        const confirmPwInput = document.getElementsByName("pwConfirm")?.[0];
        confirmPwInput.addEventListener('blur', () => {
            validateConfirmPw();
        })
    });
    return () => {
        const pwInput = document.getElementsByName("pw")?.[0];
        const confirmPwInput = document.getElementsByName("pwConfirm")?.[0];
        const pw = pwInput.value;
        const confirmPw = confirmPwInput.value;

        if(pw === confirmPw && confirmPw !== '') {
            if(confirmPwInput && confirmPwInput.nextSibling && isAddNode) {
                confirmPwInput.parentNode.removeChild(confirmPwInput.nextSibling)
                isAddNode = false;
            }
        } else {
            if(!isAddNode){
                isAddNode = true;
                const messageNode = div({className: 'msg'}, 
                        Text('atom-text-error')
                    );
                insertAfter(messageNode, confirmPwInput);
            }
            const message = document.querySelector('input[name=pwConfirm]+.msg>p');
            if(!confirmPw){
                message.textContent = '비밀번호 확인을 위해 한번 더 입력해 주세요.'
            }else {
                message.textContent = '위 비밀번호와 일치하지 않습니다. 다시 입력해주세요.';
            }
           
        }
    }
})();

export const validateEmail = (function() {
    let isAddNode = false;
    setTimeout(() => {
        const emailInput = document.querySelector('input[name=emailFront]');
        emailInput.addEventListener('blur', (event) => {
            validateEmail(event);
        })
    });
    return (event) => {
        const emailInput = event.target;
        const email = event?.target?.value;
        const emailContainer = document.querySelector('.emailDiv');
        console.log(email);
        if(!email) {
            if(!isAddNode){
                isAddNode = true;
                const messageNode = div({className: 'msg'}, 
                        Text('atom-text-error', '이메일을 입력해주세요.')
                    );
                insertAfter(messageNode, emailContainer);
            }
        }else {
            if(emailContainer && emailContainer.nextSibling && isAddNode) {
                emailContainer.parentNode.removeChild(emailContainer.nextSibling)
                isAddNode = false;
            }
        }
    }
})();


export const validateName = (function() {
    let isAddNode = false;
    setTimeout(() => {
        const nameInput = document.querySelector('input[name=name]');
        nameInput.addEventListener('blur', (event) => {
            validateName(event);
        })
    });
    return (event) => {
        const nameInput = event.target;
        const name = event?.target?.value;
        const regex = /^[가-힣a-zA-Z]{2,20}$/; // 이름이 적합한지 정규식
        const isValitaed = regex.test(name);
        if(isValitaed) {
            if(nameInput && nameInput.nextSibling && isAddNode) {
                nameInput.parentNode.removeChild(nameInput.nextSibling)
                isAddNode = false;
            }
        }else {
            if(!isAddNode){
                isAddNode = true;
                const messageNode = div({className: 'msg'}, 
                        Text('atom-text-error')
                    );
                insertAfter(messageNode, nameInput);
            }
            const message = document.querySelector('input[name=name]+.msg>p');
            if(!name) {
                message.textContent = '이름을 입력해주세요';
            } else {
                message.textContent = '한글과 영어만 포함하여 2 ~ 20 글자로 입력해주세요';
            }
        }
    }
})();