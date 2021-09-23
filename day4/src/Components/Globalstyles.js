import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');

    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    * {
        box-sizing:border-box;
    }
    body {
        font-family: 'Baloo Tamma 2', 'Nanum Pen Script',  'Noto Sans KR', cursive;
        background-color:white;
        color: black;
        font-size 50px;
        padding-top: 50px;
        transform: skew(-0.1deg);
        margin: 30px;
    }

    p, a, h1, h2, h3, h4, h5, h6, span{
        transform: skew(-0.1deg);
    }
`;

export default globalStyles;
