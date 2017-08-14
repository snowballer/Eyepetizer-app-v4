import React from 'react'
import styled from 'styled-components'

const Container= styled.footer`
  background: #444;
  font-size: 12px;
  padding: 55px 10px;
`
const List= styled.ul`
  color: #fff;
  font-size: 0;
  margin: 0 0 10px;
  padding: 0;
  text-align: center;
`
const Li= styled.li`
  display: inline-block;
  font-size: 12px;
  &:after {
    content: "·";
    position: relative;
	}
  &:last-child:after {
    content: "";
	}
`
const Alink= styled.a`
  color: inherit;
`

export default _ => (
  <Container>
    <List>
      <Li><Alink href={"mailto:bd@eyepetizer.net?subject=[意见反馈]"}>意见反馈</Alink></Li>
      <Li><Alink href={"http://www.eyepetizer.net/agreement.html"}>用户协议</Alink></Li>
      <Li><Alink href={"http://www.eyepetizer.net/right.html"}>权利声明</Alink></Li>
      <Li><Alink href={"mailto:bd@eyepetizer.net?subject=[商务合作]"}>商务合作</Alink></Li>
      <Li><Alink href={"http://www.eyepetizer.net/positions.html"}>加入我们</Alink></Li>
      <Li><Alink href={"http://www.eyepetizer.net/about_us.html"}>关于我们</Alink></Li>
    </List>
    <List>
      <Li><span>© 开眼 Eyepetizer 2015 - 2017</span></Li>
      <Li><Alink href={"http://www.miitbeian.gov.cn/"}>京 ICP 备16030848 号</Alink></Li>
      <Li><Alink href={"http://www.miitbeian.gov.cn/"}>京 ICP 证161038 号</Alink></Li>
    </List>
  </Container>
)
