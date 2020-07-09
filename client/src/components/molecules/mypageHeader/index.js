import { div } from '/utils/elements.js';
import Img from '/components/atoms/img/index.js';

const MypageHeader = () => div(
    { className : 'molecule-mypageHeader', },
    Img('https://ceo.baemin.com/lockpath/images/logo-ceo.png', '배민사장님광장', 274, 40),
)

export default MypageHeader;

