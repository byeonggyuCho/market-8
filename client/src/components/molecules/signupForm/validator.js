import { div, span } from '/utils/elements.js';
import Text from '/components/atoms/text/index.js';
import Input from '/components/atoms/input/index.js';
import Button from '/components/atoms/button/index.js';


/** @description insert newNde after refenceNode
     * @param {Node} newNode
     * @param {Node} referenceNode
     */
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/** @description delete sibling node
     * @param {Node} referenceNode
     */
const deleteSibling = (node) => {
    if(node && node.nextSibling) {
        node.parentNode.removeChild(node.nextSibling)
    }
};

export const validateStates = {
    phoneNo: false,
    phoneConfirm: false,
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


export const validatePhone = (function() {
    let isAddNode = false;
    let textNode = null;
    let phoneContainer = null;
    let phone = null;
    let phoneInput = null;
    let phoneButton = null;
    const defaultButtonClassName = 'atom-button-with-input phone-button';

    const addErrorMessage = () => {
        if(validateStates.phoneNo) {
            deleteSibling(phoneContainer);
        }
        if(!isAddNode){
            isAddNode = true;
            textNode = Text('atom-text-error');
            const messageNode = div({className: 'msg'}, 
                    textNode
                );
            insertAfter(messageNode, phoneContainer);
        }
        if(!phone) {
            textNode.textContent = '휴대폰 번호를 입력해 주세요';
        }else {
            textNode.textContent = '휴대폰 번호를 확인해 주세요';
        }
    };

    setTimeout(() => {
        phoneButton = document.querySelector('input[name=phoneNo]+button');
        phoneContainer = document.querySelector('.phone-container');
        phoneInput = document.querySelector('input[name=phoneNo]');
        phoneInput.addEventListener('blur', (event) => {
            phone = phoneInput.value;
            if(!phone){
                addErrorMessage();
            }
        });
        phoneInput.addEventListener('keyup', (event) => {
            const regex = /[0-9]/; // 폰 번호가 적합한지 validate
            const isValitaed = regex.test(event.target.value);
            if(isValitaed){
                validatePhone(event);
            }else {
                event.target.value = '';
            }
        })
    });

    return (event) => {
        phone = phoneInput.value;
        const regex = /^[0-9]{3}[0-9]{4}[0-9]{4}$/; // 폰 번호가 적합한지 validate
        const isValitaed = regex.test(phone);
        if(isValitaed) {
            if(phoneContainer && phoneContainer.nextSibling && isAddNode) {
                phoneContainer.parentNode.removeChild(phoneContainer.nextSibling)
                isAddNode = false;
            }
            phoneButton.className = defaultButtonClassName + ' atom-button-success';
            validateStates.phoneNo = true;
        } else {
            phoneButton.className = defaultButtonClassName + ' atom-button-failed';
            phoneButton.innerText = '인증받기';
            addErrorMessage()
            validateStates.phoneNo = false;
        }
    }
})();
