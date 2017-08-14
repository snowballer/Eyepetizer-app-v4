import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'

import Container from './container'
import Modal from './modal'
import QRCode from './qrcode'
import Text from './text'
import Alink from './alink'

injectGlobal`
  .modal--hide {
    display: none;
    opacity: 0;
  }
  .modal--show {
    display: block;
    opacity: 1;
  }
  .modal--fade-out {
    opacity: 0;
  }
  .modal--fade-in {
    opacity: 1;
  }
`

class MyModal extends PureComponent {

  constructor (props) {
    super(props)
    this.click = this.click.bind(this)
  }

  render () {
    return (
      <Container
        id="modal"
        className={ this.props.isShow ? 'modal--show' : 'modal--hide' }
        onClick={ this.click }>
        { this.getContent(this.props.platform) }
      </Container>
    )
  }

  click (event) {
    if (event.target.id === 'modal') {
      this.props.close()
    }
  }

  getContent (platform) {
    const className = this.props.isShow ? 'modal--fade-in' : 'modal--fade-out'
    let imgPrefix = 'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/'
    let srcImg
    let textElement
    switch (platform) {
      case 'WeChat':
        srcImg = `${imgPrefix}landing_wechat_account.53f45180.jpg`
        textElement = <Text>
                        扫描二维码<br />
                        关注「开眼」微信公众号
                      </Text>
        break
      case 'iOS':
        srcImg = `${imgPrefix}landing_scan_qr_ios.e13aaceb.png`
        textElement = <Text>
                        扫描二维码<br />
                        下载iOS版开眼<br />
                        <Alink  target="_blank" href={"https://itunes.apple.com/app/apple-store/id978591579?mt=8"}>
                        点击跳转至 App Store</Alink>
                      </Text>
        break
      case 'Android':
        srcImg = `${imgPrefix}landing_scan_qr_android.8915ce9c.png`
        textElement = <Text>
                        扫描二维码<br />
                        下载Android版开眼<br />
                        <Alink href={"http://release.cdn.kaiyanapp.com/files/eyepetizer/3.8.1.2.216/eyepetizer-eyepetizer_web.apk"}>点击直接下载 apk</Alink>
                      </Text>
        break
    }
    return (
      <Modal className={ className }>
        <QRCode src={ srcImg } />
        { textElement }
      </Modal>
    )
  }

}


export default MyModal
