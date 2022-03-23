import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
      <div
      style={{
        backgroundImage: `url("images/bg-footer.png")`
      }}
      className="footer__section">
        <div className="container">
          <div className="footer">
            <Link to={"/"} className="footer__img">
              <img src="images/logo.png" alt="footer logo" />
            </Link>
            <nav>
              <ul className="nav__items">
                <li className="nav__item">
                  <Link to={"/about"} className="nav__item-link">О компании</Link>
                </li>
                <li className="nav__item">
                  <Link to={"/contact"} className="nav__item-link">Контакты</Link>
                </li>
                <li className="nav__item">
                  <Link to={"/vacans"} className="nav__item-link">Вакансии</Link>
                </li>
                <li className="nav__item">
                  <Link to={"/articles"} className="nav__item-link">Статьи</Link>
                </li>
                <li className="nav__item">
                  <Link to={"/personal"} className="nav__item-link">Политика обработки персональных данных</Link>
                </li>
              </ul>
            </nav>
            <ul className="socialy push_right">
              <li className="socialy__item">
                <a href="/" className="socialy__item-link">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 2H8.75C5.29875 2 2.5 4.79875 2.5 8.25V15.75C2.5 19.2013 5.29875 22 8.75 22H16.25C19.7013 22 22.5 19.2013 22.5 15.75V8.25C22.5 4.79875 19.7013 2 16.25 2ZM20.625 15.75C20.625 18.1625 18.6625 20.125 16.25 20.125H8.75C6.3375 20.125 4.375 18.1625 4.375 15.75V8.25C4.375 5.8375 6.3375 3.875 8.75 3.875H16.25C18.6625 3.875 20.625 5.8375 20.625 8.25V15.75ZM12.5002 7.2002C9.84939 7.2002 7.7002 9.34939 7.7002 12.0002C7.7002 14.651 9.84939 16.8002 12.5002 16.8002C15.151 16.8002 17.3002 14.651 17.3002 12.0002C17.3002 9.34939 15.151 7.2002 12.5002 7.2002ZM12.5002 15.0002C10.8466 15.0002 9.5002 13.6538 9.5002 12.0002C9.5002 10.3454 10.8466 9.0002 12.5002 9.0002C14.1538 9.0002 15.5002 10.3454 15.5002 12.0002C15.5002 13.6538 14.1538 15.0002 12.5002 15.0002ZM18.4998 6.6C18.4998 6.93137 18.2312 7.2 17.8998 7.2C17.5684 7.2 17.2998 6.93137 17.2998 6.6C17.2998 6.26863 17.5684 6 17.8998 6C18.2312 6 18.4998 6.26863 18.4998 6.6Z" fill="url(#paint0_linear_4744_14400)"/>
                  <defs>
                  <linearGradient id="paint0_linear_4744_14400" x1="5.42912" y1="19.0709" x2="19.5709" y2="4.92912" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFC107"/>
                  <stop offset="0.507" stop-color="#F44336"/>
                  <stop offset="0.99" stop-color="#9C27B0"/>
                  </linearGradient>
                  </defs>
                </svg>
                </a>
              </li>
              <li className="socialy__item">
                <a href="/" className="socialy__item-link">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.286 17.3635H13.4811C13.4811 17.3635 13.8424 17.3234 14.0261 17.1247C14.1961 16.9422 14.1899 16.5996 14.1899 16.5996C14.1899 16.5996 14.1661 14.9958 14.9112 14.7595C15.645 14.527 16.5876 16.3096 17.5864 16.9959C18.3414 17.5147 18.9152 17.401 18.9152 17.401L21.5867 17.3635C21.5867 17.3635 22.9843 17.2772 22.3217 16.1784C22.268 16.0884 21.9355 15.3658 20.3353 13.8807C18.6602 12.3256 18.8852 12.5781 20.9029 9.88915C22.1317 8.25152 22.623 7.25145 22.4692 6.82392C22.323 6.41639 21.4192 6.52389 21.4192 6.52389L18.4139 6.5414C18.4139 6.5414 18.1914 6.51139 18.0252 6.61015C17.8639 6.70766 17.7601 6.93268 17.7601 6.93268C17.7601 6.93268 17.2839 8.20027 16.6488 9.27785C15.31 11.5518 14.7737 11.6718 14.5549 11.5305C14.0461 11.2017 14.1736 10.2079 14.1736 9.50287C14.1736 7.29895 14.5074 6.38013 13.5223 6.14262C13.1948 6.06386 12.9548 6.01136 12.1185 6.00261C11.0459 5.99136 10.1371 6.00636 9.6233 6.25763C9.28078 6.42514 9.01701 6.79892 9.17827 6.82017C9.37703 6.84642 9.82707 6.94143 10.0658 7.26645C10.3746 7.68523 10.3634 8.6278 10.3634 8.6278C10.3634 8.6278 10.5409 11.2217 9.94958 11.5443C9.5433 11.7655 8.987 11.3143 7.79317 9.25035C7.18187 8.19402 6.71934 7.02518 6.71934 7.02518C6.71934 7.02518 6.63058 6.80767 6.47182 6.69141C6.27931 6.55015 6.00929 6.50514 6.00929 6.50514L3.15158 6.52264C3.15158 6.52264 2.7228 6.53515 2.56528 6.72141C2.42527 6.88767 2.55403 7.2302 2.55403 7.2302C2.55403 7.2302 4.7917 12.4643 7.32438 15.1033C9.6483 17.5222 12.286 17.3635 12.286 17.3635Z" fill="#1E88E5"/>
                </svg>
                </a>
              </li>
              <li className="socialy__item">
                <a href="/" className="socialy__item-link">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2H20C21.3787 2 22.5 3.12125 22.5 4.5V19.5C22.5 20.8787 21.3787 22 20 22H16.25V15.125H18.125L19.375 12H16.25V9.5C16.25 8.86577 16.7231 8.86942 17.3355 8.87416C17.3893 8.87458 17.4442 8.875 17.5 8.875H18.75V5.75H16.25C14.1788 5.75 12.5 7.42875 12.5 9.5V12H10V15.125H12.5V22H5C3.62125 22 2.5 20.8787 2.5 19.5V4.5C2.5 3.12125 3.62125 2 5 2Z" fill="#1976D2"/>
                </svg>
                </a>
              </li>
              <li className="socialy__item">
                <a href="/" className="socialy__item-link">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12.292 5.0251C13.4705 5.0251 14.4291 5.98373 14.4291 7.16224C14.4291 8.33977 13.4702 9.29839 12.292 9.29839C11.1142 9.29839 10.1553 8.33977 10.1553 7.16224C10.1551 5.98348 11.1144 5.0251 12.292 5.0251ZM12.292 12.322C15.1387 12.322 17.4537 10.0077 17.4537 7.16224C17.4537 4.31528 15.1389 2 12.292 2C9.44549 2 7.13021 4.31552 7.13021 7.16224C7.13021 10.0077 9.44549 12.322 12.292 12.322ZM14.3802 16.5323C15.442 16.2905 16.4554 15.8709 17.3774 15.2913C17.7168 15.0777 17.9575 14.7381 18.0465 14.3471C18.1355 13.9561 18.0655 13.5457 17.852 13.2063C17.7464 13.038 17.6086 12.8923 17.4466 12.7773C17.2846 12.6624 17.1016 12.5805 16.9079 12.5363C16.7142 12.4922 16.5138 12.4866 16.3179 12.52C16.1221 12.5534 15.9348 12.6251 15.7667 12.7309C13.6521 14.0604 10.9304 14.0594 8.81744 12.7309C8.64938 12.625 8.46209 12.5534 8.26629 12.52C8.07049 12.4865 7.87002 12.4921 7.67636 12.5362C7.48271 12.5804 7.29965 12.6623 7.13768 12.7773C6.97571 12.8922 6.838 13.038 6.73243 13.2063C6.51882 13.5456 6.44874 13.9559 6.53761 14.3469C6.62647 14.7379 6.86701 15.0776 7.20631 15.2913C8.12823 15.8707 9.14137 16.2902 10.203 16.5323L7.31749 19.4183C7.03392 19.702 6.87466 20.0867 6.87473 20.4878C6.8748 20.8888 7.0342 21.2735 7.31786 21.5571C7.60153 21.8406 7.98622 21.9999 8.38731 21.9998C8.7884 21.9997 9.17304 21.8403 9.45661 21.5567L12.2915 18.7213L15.1281 21.5569C15.2683 21.6974 15.4349 21.8088 15.6182 21.8848C15.8016 21.9609 15.9981 22 16.1966 22C16.3951 22 16.5917 21.9609 16.775 21.8848C16.9584 21.8088 17.1249 21.6974 17.2652 21.5569C17.4059 21.4167 17.5175 21.2501 17.5936 21.0666C17.6698 20.8832 17.709 20.6865 17.709 20.4879C17.709 20.2892 17.6698 20.0926 17.5936 19.9091C17.5175 19.7257 17.4059 19.559 17.2652 19.4188L14.3802 16.5323Z" fill="#EE8208"/>
                </svg>
                </a>
              </li>
            </ul>
            <div className="phone">
                <a href="/" className="phone-link">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M1.03055 5.62795C0.79859 3.78205 2.37862 2.5 4.07554 2.5H7.6672C8.39213 2.5 9.01333 3.01844 9.14301 3.73167L9.74935 7.06653C9.93046 8.06268 9.67133 9.08845 9.03884 9.87906L8.31545 10.7833C8.18654 10.9444 8.17475 11.1581 8.27434 11.3205C8.7439 12.0862 9.58857 13.3797 10.3553 14.1464C11.1221 14.9132 12.4156 15.7579 13.1813 16.2274C13.3437 16.327 13.5573 16.3152 13.7185 16.1863L14.6227 15.4629C15.4133 14.8304 16.4391 14.5713 17.4352 14.7524L20.7701 15.3588C21.4833 15.4885 22.0018 16.1096 22.0018 16.8346V20.1816C22.0018 22.0032 20.5508 23.624 18.6171 23.313C15.3045 22.7803 10.5694 21.0768 6.63538 16.8402C2.81033 12.7209 1.39331 8.51475 1.03055 5.62795ZM4.07554 3.5C2.81103 3.5 1.88547 4.41084 2.02275 5.50326C2.36104 8.19537 3.69444 12.2034 7.36818 16.1598C11.1177 20.1977 15.6307 21.8199 18.7758 22.3257C19.9703 22.5178 21.0018 21.5285 21.0018 20.1816V16.8346C21.0018 16.5929 20.829 16.3859 20.5912 16.3426L17.2564 15.7363C16.5448 15.6069 15.8121 15.792 15.2474 16.2438L14.3432 16.9672C13.8653 17.3495 13.1937 17.4081 12.6585 17.0799C11.8953 16.6119 10.508 15.7133 9.64823 14.8536C8.78849 13.9938 7.8899 12.6064 7.42187 11.8433C7.09367 11.3081 7.15231 10.6364 7.53458 10.1586L8.25797 9.25437C8.70975 8.68964 8.89485 7.95695 8.76548 7.24541L8.15914 3.91056C8.11591 3.67281 7.90885 3.5 7.6672 3.5H4.07554Z" fill="#414141"/>
                </svg>
                <span>8 800 777 33 33</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer