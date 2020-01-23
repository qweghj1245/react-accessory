import React from 'react';

import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';

import { Wrapper, Group, Texture, Title, SubTitle, Content } from './ShoppingNotes.style';

const ShoppingNotes = () => {
  return (
    <Wrapper>
      <Group mb='21'>
        <Texture>於網路商店下單完成後，您將收到【訂單成立通知信】</Texture>
      </Group>
      <Group mb='12'>
        <Texture>1.完成付款且頁面顯示付款成功時您會收到【付款成功通知信】代表訂單完成，</Texture>
        <Texture>我們將會立即安排出貨，約需1至3的工作天確認您訂購的商品完善並可出貨。</Texture>
      </Group>
      <Group mb='45'>
        <Texture>2.出貨後將會發送【出貨通知信】至您留下的email，並告知貨物追蹤號碼，</Texture>
        <Texture>您可於右上角【會員】中【我的訂單】追蹤商品運輸狀況。</Texture>
      </Group>
      <Content>
        <Group mb='22'>
          <Title>國內運送</Title>
          <Texture textAlign='left' mb='11' indent>中華郵政 - 國內包裹一般寄送 時間約5-7天</Texture>
          <Texture textAlign='left' mb='11' indent>黑貓宅急便 - 黑貓包裹快遞宅配 時間約1-3天</Texture>
          <SubTitle>＊運費皆依據各貨運公司及郵局公告之運費計算方式計費。</SubTitle>
        </Group>
        <Group mb='22'>
          <Title>國際運送</Title>
          <Texture textAlign='left' indent>若您的國家屬於特殊地區，而我們所採用的國際運輸無法送件，</Texture>
          <Texture textAlign='left' indent>則會另行通知或請您與客服人員進行連絡。</Texture>
        </Group>
        <Group mb='22'>
          <Title>退換貨需知</Title>
          <Texture textAlign='left' indent>商品退換貨須在收到商品後7天內通知並寄回，逾期恕不受理。</Texture>
          <Texture textAlign='left' indent>辦理退換貨時，某些情況可能會被認定為已逾越檢查商品之必要程度，</Texture>
          <Texture textAlign='left' indent mb='23'>而將影響您退貨權利的行使或需負擔毀壞之費用，因此，訂購前請先注意退換貨需知：</Texture>
          <Texture textAlign='left' indent>1.您所退回的商品必須保持商品本體、附件、內外包裝、配件、贈品、保證書、原廠包裝</Texture>
          <Texture textAlign='left' indent mb='12'>及所有隨附文件或資料的完整性，若原廠包裝或商品損毀，損壞費用將於退款中扣抵。</Texture>
          <Texture textAlign='left' indent>2.除瑕疵品外，其他原因退換貨請自行支付往來運費。換貨出貨時，將以訂單寄送地址為主，</Texture>
          <Texture textAlign='left' indent mb='12'>如修改收件資料、地址等影響運費不同，請理解額外之費用需自行負擔。</Texture>
          <Texture textAlign='left' indent>3.消耗性商品請勿拆封試用（例如：貼紙、紙膠帶等），試用後將影響您退貨權利的行使或需負</Texture>
          <Texture textAlign='left' indent mb='12'>擔毀壞之費用。</Texture>
          <Texture textAlign='left' indent mb='12'>4.欲退貨商品，若為參加任選活動而組套出售的促銷商品，不可單品退貨需將套組商品一起退回。</Texture>
          <Texture textAlign='left' indent>5.換貨僅能針對同一項商品更換，無法將商品A換為商品B。若您欲換成其他品項或尺寸，請先辦理</Texture>
          <Texture textAlign='left' indent mb='12'>原商品退貨再重新訂購您所需要的商品。</Texture>
          <Texture textAlign='left' indent>6.會員訂購後若大量退換貨由於已造成作業上之困擾，禮拜文房具會視情況對該會員採取拒絕交易</Texture>
          <Texture textAlign='left' indent mb='22'>或永久取消其會員資格辦理。</Texture>
        </Group>
        <Group>
          <Title>退換貨流程</Title>
          <Texture textAlign='left' indent>網路商店提供7天鑑賞期，若要辦理退換貨，請您與客服人員進行連絡，並告知您的姓名/訂單編號</Texture>
          <Texture textAlign='left' indent>/聯絡電話/退換貨品名/退換貨原因等信息。請務必於收到商品7天內連絡客服人員並將商品連同</Texture>
          <Texture textAlign='left' indent>發票、出貨明細表及折讓單寄回，我們於收到商品後立即為您辦理。</Texture>
        </Group>
      </Content>
    </Wrapper>
  )
}

export default BaseWrapper(ShoppingNotes);