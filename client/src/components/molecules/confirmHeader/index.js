import { div } from '/utils/elements.js';
import Img from '/components/atoms/Img/index.js';

const ConfirmHeader = () => div(
    { className : 'molecule-confirmHeader', },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
    '회원이 되셨습니다.',
)

export default ConfirmHeader;

