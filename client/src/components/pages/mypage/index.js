import UserInfoBody from '/components/molecules/userInfoBody/index.js';
import MypageHeader from '/components/molecules/mypageHeader/index.js';

document.body.appendChild(MypageHeader());
document.body.appendChild(UserInfoBody(JSON.parse(document.cookie)));


