import React from 'react'

const footerText = [
  {
    link : "/",
    title : "phone",
    desc : "010-2821-5798"
  },
  {
    link : "/",
    title : "mail",
    desc : "vbnm0712@naver.com"
  },
  {
    link : "/",
    title : "github",
    desc : "깃헙에 들어오시면 모든 소스를 볼 수 있습니다."
  },  
  {
    link : "/",
    title : "github",
    desc : "깃헙에 들어오시면 모든 소스를 볼 수 있습니다."
  },
  {
    link : "/",
    title : "phone",
    desc : "010-2821-5798"
  },
];

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">notion</a>
            </div>
            <p>노션으로 들어가시면 더 많은 정보를 볼 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">
          © 2024 ShinHeesu<br />
          이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  )
}

export default Footer