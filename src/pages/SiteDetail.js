import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  justify-content: space-between;
  font-weight: 500;
`;

const HeaderLogo = styled.div`
  font-size: 24px;
  margin: 12px;
`;

const HeaderLogin = styled.div`
  background-color: rgb(0%, 18.1%, 48.7%);
  color: white;
  border-radius: 12px;
  padding: 4px 12px;
  margin: 12px;
`;

const Site = styled.div`
  padding: 12px;

  .site {
    display: flex;
    font-size: 20px;

    .score {
      font-size: 12px;
      line-height: 24px;
      margin: 0px 4px;
    }
  }
`;

const Opinion = styled.div`
  border: 1px solid #bbb;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  box-shadow: 4px 4px #999;

  .title {
    display: flex;
    font-weight: 700;

    .score {
      font-weight: 500;
      font-size: 12px;
      margin: 2px 4px;
    }
  }

  .writer {
    margin-bottom: 8px;
  }
  .body {
  }
  .score{
  }
`;

function SiteDetail() {
  return (
    <>
      <Header>
        <HeaderLogo>linkhub</HeaderLogo>
        <HeaderLogin>login</HeaderLogin>
      </Header>

      <Content>
        <Site>
          <div class="site">Naver cafe<div className="score">2.7</div></div>
          <div class="url">https://section.cafe.naver.com/</div>
          <div class="site_manager"><u>Site Manager</u></div>
        </Site>

        <Opinion>
          <div class="title">Helpful content <div class="score">2.7/5</div></div>
          <div class="writer">anonymous</div>
          <div class="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique pulvinar pulvinar. Nunc hendrerit accumsan diam et pulvinar. Sed quis erat et ante consequat venenatis. Fusce mi ex, bibendum rutrum egestas ac, commodo nec neque. Etiam ut sagittis sapien. Vivamus feugiat massa at lectus condimentum pulvinar. Curabitur tempor blandit nulla, sit amet pretium orci consequat et. Quisque sem nisi, mattis a pulvinar ac, bibendum at justo. Suspendisse ut porttitor urna. Sed maximus augue nulla, quis sollicitudin ex fringilla non. Aliquam quis tortor ac mi fermentum vehicula.
          </div>
        </Opinion>

        <Opinion>
          <div class="title">Readability good <div class="score">2.7/5</div></div>
          <div class="writer">@mibo</div>
          <div class="body">
            Sed eget dui accumsan, dignissim justo ac, efficitur risus. Maecenas dolor leo, semper non ultrices non, dignissim sed quam. Nunc venenatis ut ante in pretium. Cras pellentesque id lacus sed cursus. Nulla sed mollis elit. Sed lacinia sagittis tortor et laoreet. Fusce euismod sit amet erat quis rutrum. Morbi semper nunc vitae lectus molestie suscipit. Sed maximus ligula ut lobortis hendrerit. Suspendisse vulputate turpis turpis, luctus bibendum augue tristique at. Integer posuere magna sed nisl ultrices fermentum. Morbi dignissim quis augue sit amet ultricies. In ut tristique justo, sed cursus dolor. Morbi eget convallis quam. Mauris non varius eros, vitae dictum velit. Vestibulum maximus risus quis molestie tempus.
          </div>
        </Opinion>

        <Opinion>
          <div class="title">Easy to use <div class="score">2.7/5</div></div>
          <div class="writer">@yumxin</div>
          <div class="body">
          Aliquam ut posuere orci. Nullam ullamcorper pretium mauris, ut ultrices nunc auctor vitae. Donec feugiat ut ante condimentum laoreet. Sed faucibus arcu eros, in convallis dolor blandit in. Sed interdum turpis cursus gravida commodo. Maecenas convallis tortor vitae est suscipit malesuada. Quisque venenatis, nisl sit amet blandit rutrum, tellus tortor fringilla nisi, eget elementum mi nisi ut ipsum. Nam eu rhoncus lorem. Proin fermentum bibendum rhoncus. Suspendisse eget nisi mollis, porta diam at, interdum mauris. Suspendisse auctor odio eu augue aliquam, a condimentum nibh luctus.
          </div>
        </Opinion>
      </Content>
    </>
  );
}

export default SiteDetail;
