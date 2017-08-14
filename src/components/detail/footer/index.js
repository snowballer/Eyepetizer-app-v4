import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './logo'
import QRCode from './qrcode'
import QRTip from './qrtip'
import Container from './container'

/**
 * 底部
 */
export default _ => (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <QRCode src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.9c58110c.png" />
       <QRTip>长按二维码关注「开眼 Eyepetizer」微信公众号</QRTip>
    </Container>
)
