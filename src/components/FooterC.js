require('normalize.css/normalize.css');
require('styles/FooterC.css');

import React from 'react';
class FooterC extends React.Component{
    render(){
        return (
            <footer className="footer">我是公司版权信息</footer>
        );
    }
}

export default FooterC;
