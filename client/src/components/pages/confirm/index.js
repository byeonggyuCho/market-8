import ConfirmHeader from '/components/molecules/confirmHeader/index.js';
import UserInfoBody from '/components/molecules/userInfoBody/index.js';

document.body.appendChild(ConfirmHeader());
document.body.appendChild(UserInfoBody(JSON.parse(document.cookie)));
