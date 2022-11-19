/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import smoothscroll from 'smoothscroll-polyfill'
import AOS from 'aos'
import { isMobile } from 'react-device-detect'
import 'aos/dist/aos.css'
import Slider from 'components/Slider'
import Count from 'components/Count'

import { send } from 'emailjs-com'
import Header from 'components/Header'
import * as Constant from 'constant'

const USER_ID = 'cN-nt46lnGb8utTSL' // userID
const TEMPLATE_ID = 'template_wcosvxi' // templateID
const SERVICE_ID = 'service_apapfkd' // serviceID

smoothscroll.polyfill()

// AOS.init()

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})
const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState(0)
  useEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
const Algobet = () => {
  const OPEN_LAUNCH_APP = process.env.OPEN_LAUNCH_APP
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [emailPopup, setEmailPopup] = useState('')
  const [emailFooter, setEmailFooter] = useState('')
  const [isSendMailPopupSuccess, setIsSendMailPopupSuccess] = useState(false)
  const [isSendMailFooterSuccess, setIsSendMailFooterSuccess] = useState(false)
  // const [scrollPosition, setScrollPosition] = useState(0)
  // const [scrollPosition, setPosition] = useState(0)

  // const unitScreen = 1
  const unitScreen = screenWidth / 1920

  const [indexFeature, setIndexFeature] = useState(1)

  const scrollY = useWindowScrollPositions()
  const backStyle = {
    left: `${scrollY}'px'`,
  }
  useEffect(() => {
    const back = document.getElementById('back')
    // const coin1 = document.getElementById('coin1')
    const coin1 = document.getElementById('coin1')
    const coin2 = document.getElementById('coin2')
    const coin3 = document.getElementById('coin3')
    const coin4 = document.getElementById('coin4')
    const coin5 = document.getElementById('coin5')
    const coin6 = document.getElementById('coin6')
    const coin7 = document.getElementById('coin7')
    console.log(scrollY)
    console.log(back)
    if (back) {
      back.style.top = `${scrollY * 0.55}px`
    }
    if (coin1 && coin2 && coin3 && coin4 && coin5 && coin6 && coin7) {
      coin1.style.top = `${scrollY * 0.05}px`
      coin2.style.top = `${scrollY * 0.15}px`
      coin3.style.top = `-${scrollY * 0.25}px`
      coin4.style.top = `-${scrollY * 0.85}px`
      coin5.style.top = `-${scrollY * 0.25}px`
      coin6.style.top = `${scrollY * 0.55}px`
      coin7.style.top = `-${scrollY * 0.35}px`
      // if(scrollY>200){

      // }
    }
  }, [scrollY])

  useEffect(() => {
    setTimeout(() => {
      if (!isMobile) {
        setOpenPopup(true)
      }
    }, 15000)
  }, [])

  const [openPopup, setOpenPopup] = useState(false)

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleChange = (e: { target: { name: string; value: React.SetStateAction<string> } }) => {
    if (e.target.name === 'emailPopup') {
      setEmailPopup(e.target.value)
    } else {
      setEmailFooter(e.target.value)
    }
  }

  const onFollow = (isEmailPopup: any) => {
    const toSend = {
      email: emailFooter,
    }
    if (isEmailPopup) {
      toSend.email = emailPopup
    }
    if (toSend.email) {
      send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
        .then(() => {
          if (isEmailPopup) {
            setIsSendMailPopupSuccess(true)
            setTimeout(() => {
              setOpenPopup(false)
              setIsSendMailPopupSuccess(false)
            }, 2000)
          } else {
            setIsSendMailFooterSuccess(true)
            setTimeout(() => {
              setIsSendMailFooterSuccess(false)
            }, 2000)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      alert('You must enter your email first!')
    }
  }

  return (
    <div>
      <div role="presentation" onClick={backToTop} id="back-to-top">
        <img src="/images/chevron_big_up.svg" alt="back to top" width="17" />
      </div>
      <Header />
      <div
        data-aos={isMobile ? '' : 'fade-left'}
        className="social-horizon social-fixed"
        data-aos-delay="1300"
        style={{ bottom: unitScreen * 70, right: unitScreen * 62 }}
      >
        <img
          style={{
            height: unitScreen * 393,
            marginBottom: unitScreen * 46,
          }}
          src="/images/line.png"
          alt="png"
        />
        <a href={Constant.SOCIAL_CHANEL.TELEGRAM} target="_blank" rel="noreferrer">
          <img
            style={{
              height: unitScreen * 26,
              width: unitScreen * 32,
              marginBottom: unitScreen * 46,
            }}
            src="/images/telegram-white.svg"
            alt="telegram"
          />
        </a>
        <a href={Constant.SOCIAL_CHANEL.TWITTER} target="_blank" rel="noreferrer">
          <img
            style={{
              height: unitScreen * 26,
              width: unitScreen * 32,
              marginBottom: unitScreen * 46,
            }}
            src="/images/twitter-white.svg"
            alt="twitter"
          />
        </a>
        <a href={Constant.SOCIAL_CHANEL.FACEBOOK} target="_blank" rel="noreferrer">
          <img
            style={{
              height: unitScreen * 33,
              width: unitScreen * 15,
            }}
            src="/images/facebook-white.svg"
            alt="facebook"
          />
        </a>
      </div>
      <div className="popup-join" data-aos={isMobile ? '' : 'fade-up'} style={{ display: openPopup ? 'flex' : 'none' }}>
        <div className="popup-join-fg">
          <img className="close-popup-join" src="/images/close.svg" alt="close" onClick={() => setOpenPopup(false)} />
          <div className="text-comming-soon">Subscribe</div>
          <div className="popup-body">
            <div className="join-community">Get the latest update, event news and more!</div>
            <div className="join-group">
              <div className="popup-join-input-div">
                <input
                  name="emailPopup"
                  onChange={handleChange}
                  className="popup-join-input"
                  placeholder="Your email address"
                  value={emailPopup}
                />
              </div>
              <div className="btn-join" role="presentation" onClick={() => onFollow(true)}>
                {isSendMailPopupSuccess ? 'Subscribed' : 'Subscribe'}
              </div>
            </div>
            <div className=" join-group-social">
              <img className="logo-join-group" src="/images/logo.svg" alt="logo" />
              <div>
                <div className="join-community">Join Our Community</div>
                <div className="d-flex align-items-center join-community-social">
                  <a href={Constant.SOCIAL_CHANEL.TELEGRAM} target="_blank" rel="noreferrer">
                    <img className="icon-telegram" src="/images/telegram-white.svg" alt="telegram" />
                  </a>
                  <a href={Constant.SOCIAL_CHANEL.TWITTER} target="_blank" rel="noreferrer">
                    <img className="icon-twitter" src="/images/twitter-white.svg" alt="twitter" />
                  </a>
                  <a href={Constant.SOCIAL_CHANEL.FACEBOOK} target="_blank" rel="noreferrer">
                    <img className="icon-facebook" src="/images/facebook-white.svg" alt="facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home" className="hero-section">
        <div className="inner">
          <img className="img" src="/images/hero/back.png" alt="back" id="back" />
          <img
            className="img"
            src="/images/hero/front.png"
            alt="front"
            id="front"
            data-aos={isMobile ? '' : 'fade-left'}
          />
          <img
            className="img coin"
            src="/images/hero/coin/01.png"
            alt="coin1"
            id="coin1"
            data-aos={isMobile ? '' : 'fade-down'}
          />
          <img
            className="img coin"
            src="/images/hero/coin/02.png"
            alt="coin1"
            id="coin2"
            data-aos={isMobile ? '' : 'fade-down'}
          />
          <img
            className="img coin"
            src="/images/hero/coin/03.png"
            alt="coin1"
            id="coin3"
            data-aos={isMobile ? '' : 'fade-down'}
          />
          <img
            className="img coin"
            src="/images/hero/coin/04.png"
            alt="coin1"
            id="coin4"
            data-aos={isMobile ? '' : 'fade-down'}
          />
          <img
            className="img coin"
            src="/images/hero/coin/05.png"
            alt="coin1"
            id="coin5"
            data-aos={isMobile ? '' : 'fade-down'}
          />
          <img
            className="img coin"
            src="/images/hero/coin/06.png"
            alt="coin1"
            id="coin6"
            data-aos={isMobile ? '' : 'fade-down'}
            data-aos-delay=" 300"
          />
          <img
            className="img coin"
            src="/images/hero/coin/07.png"
            alt="coin1"
            id="coin7"
            data-aos={isMobile ? '' : 'fade-down'}
          />
        </div>
        <div data-aos={isMobile ? '' : 'fade-right'} className="content">
          <div className="container">
            <h1>
              <div style={{ color: '#FFFFFF' }}>The Blockchain</div>
              <div style={{ color: '#FEDA00' }}>Betting Playground</div>
            </h1>
            <div className="sub-title">Become a betting superstar in this World Cup 2022 event!</div>
            <div className="  group-btn-launch">
              <div
                className="btn-launch"
                role="presentation"
                onClick={() =>
                  OPEN_LAUNCH_APP ? window.open(Constant.APP_URL, '_blank', 'noopener,noreferrer') : setOpenPopup(true)
                }
              >
                Launch app
              </div>
              <div className="btn-marketplace" role="presentation" onClick={() => setOpenPopup(true)}>
                MARKETPLACE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data-section">
        <div className="item">
          <div>Members</div>
          <div className="data-number">{Count({ endNumber: 5000, unitScreen })}</div>
        </div>
        <div className="item">
          <div>Twitter</div>
          <div className="data-number">{Count({ endNumber: 7000, unitScreen })}</div>
        </div>
        <div className="item">
          <div>Telegram</div>
          <div className="data-number">{Count({ endNumber: 3000, unitScreen })}</div>
        </div>
        <div className="item">
          <div>Stake</div>
          <div className="data-number">{Count({ endNumber: 1000, unitScreen })}</div>
        </div>
      </div>
      <div className="intro-section">
        <div className="algobet-intro" id="what-is-algobet">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>What is </span>
            <span style={{ color: '#FEDA00' }}>Algobet</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <div className="intro-subtitle">
            <div>
              AlgoBet is one of the transparent, safe and promising betting sites that bring a lot of value to football
              fans.
            </div>
            <div>
              With the biggest football festival on the planet, AlgoBet is expected to be a much-awaited playground.
            </div>
          </div>
          <div className="what">
            <h3 className="text-center">A whole new Bet experience!</h3>
            <div className="what-list">
              <div className="what-item">
                <div className="left">
                  <div>
                    <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M39.55 37.4122C38.4999 37.4122 37.6161 38.0683 37.2575 38.9871H29.6188V33.8071H27.869V39.862C27.869 40.3521 28.2627 40.7369 28.7439 40.7369H37.2578C37.6164 41.6644 38.5002 42.3207 39.5503 42.3207C40.9064 42.3207 42.0002 41.2182 42.0002 39.862C42.0002 38.5057 40.9064 37.4121 39.5503 37.4121L39.55 37.4122Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M39.5499 18.8625C38.4999 18.8625 37.6161 19.5274 37.2575 20.4463H36.5489V22.1961H37.2575C37.6164 23.1235 38.4998 23.7799 39.5499 23.7799C40.9061 23.7799 41.9998 22.6773 41.9998 21.3211C41.9998 19.9649 40.9061 18.8623 39.5499 18.8623V18.8625Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M29.6189 3.65499H37.2576C37.6165 4.57388 38.4999 5.22996 39.55 5.22996C40.9062 5.22996 41.9999 4.13623 41.9999 2.78008C41.9999 1.42393 40.9062 0.321289 39.55 0.321289C38.5 0.321289 37.6162 0.977404 37.2576 1.90509H28.7437C28.2624 1.90509 27.8687 2.29877 27.8687 2.78V8.84374H29.6186L29.6189 3.65499Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M2.45903 23.7796C3.5091 23.7796 4.39291 23.1235 4.74259 22.1958H5.46005V20.446H4.74259C4.39256 19.5271 3.50878 18.8622 2.45903 18.8622C1.10288 18.8622 0.000244141 19.9647 0.000244141 21.321C0.000244141 22.6772 1.10281 23.7798 2.45903 23.7798V23.7796Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M2.45892 5.23001C3.50898 5.23001 4.3928 4.57389 4.74248 3.65503H12.3898V8.84355H14.1396L14.1399 2.78012C14.1399 2.29886 13.7462 1.90521 13.265 1.90521H4.74247C4.39274 0.977807 3.50897 0.321411 2.45891 0.321411C1.10276 0.321411 0.00012207 1.42397 0.00012207 2.7802C0.00012207 4.13643 1.10268 5.23008 2.45891 5.23008L2.45892 5.23001Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M12.3902 38.9873H4.74259C4.39256 38.0684 3.50878 37.4123 2.45903 37.4123C1.10288 37.4123 0.000244141 38.5061 0.000244141 39.8622C0.000244141 41.2184 1.10281 42.321 2.45903 42.321C3.5091 42.321 4.39291 41.6649 4.74259 40.7372H13.2651C13.7464 40.7372 14.14 40.3521 14.14 39.8623V33.8074H12.3902V38.9873Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M34.7985 12.3439C34.7985 11.3725 34.0111 10.5941 33.0486 10.5941L8.95996 10.5938C7.98857 10.5938 7.21014 11.3726 7.21014 12.3436V30.3074C7.21014 31.2698 7.98895 32.0572 8.95996 32.0572H33.0486C34.0111 32.0572 34.7985 31.2698 34.7985 30.3074V25.8799H28.0261C25.5148 25.8799 23.4674 23.8325 23.4674 21.3212C23.4674 18.81 25.5148 16.7626 28.0261 16.7626H34.7985V12.3439Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M25.2173 21.321C25.2173 22.8698 26.4773 24.1298 28.0261 24.1298H34.7985V18.5126H28.0261C26.4773 18.5123 25.2173 19.7723 25.2173 21.321ZM29.6447 21.321C29.6447 22.0821 29.0322 22.6949 28.2797 22.6949C27.5186 22.6949 26.9058 22.0825 26.9058 21.321C26.9058 20.5685 27.5182 19.956 28.2797 19.956C29.0322 19.956 29.6447 20.5685 29.6447 21.321Z"
                        fill="#0E0E0E"
                      />
                    </svg>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <p>Directly link bet account with virtual currency wallet</p>
                  </div>
                </div>
              </div>

              <div className="what-item">
                <div className="left">
                  <div>
                    <svg width="54" height="34" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.8356 18.0391L9.83338 15.7652V7.5798H17.6995V4.79443L8.41233 4.79483C7.67326 4.79483 6.99127 5.42011 6.99127 6.21588V15.7652L1.98946 18.0391C1.70517 18.1529 1.70517 18.5505 1.98946 18.6643L8.29895 21.5632C8.41274 21.6199 8.46945 21.6199 8.58324 21.5632L14.8927 18.6643C15.1199 18.5505 15.1199 18.1525 14.8356 18.0391Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M7.16196 23.3821L0.454788 20.3695C0.227592 20.2557 0 20.4262 0 20.6538V29.8621C0 29.9759 0.0566986 30.0893 0.170496 30.1464L6.87767 33.2157C7.10487 33.3295 7.33246 33.159 7.33246 32.9314V23.7235C7.33246 23.553 7.27576 23.4392 7.16196 23.3821V23.3821Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M53.5454 20.3697L46.8382 23.4389C46.7244 23.4956 46.6677 23.6094 46.6677 23.7232V32.9316C46.6677 33.1588 46.8949 33.3296 47.1225 33.2159L53.8297 30.1466C53.9435 30.0899 54.0002 29.9761 54.0002 29.8623V20.654C54.0002 20.4268 53.773 20.2563 53.5454 20.3697Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M52.0104 18.039L47.0082 15.7656L47.0086 6.15873C47.0086 5.36296 46.3833 4.73767 45.5875 4.73767H36.4651V7.52304H44.1665V15.7651L39.1643 18.0389C38.88 18.1527 38.88 18.5504 39.1643 18.6642L45.4737 21.5631C45.5875 21.6198 45.6442 21.6198 45.758 21.5631L52.0105 18.6642C52.2381 18.5504 52.2381 18.1523 52.0105 18.0389L52.0104 18.039Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M44.2799 23.3823L37.5728 20.313C37.3456 20.1992 37.118 20.3697 37.118 20.5973V23.3256H16.8821V20.5973C16.8821 20.3701 16.6549 20.1992 16.4274 20.313L9.72018 23.3823C9.60638 23.439 9.54968 23.5527 9.54968 23.6665V32.8749C9.54968 33.1021 9.77688 33.273 10.0045 33.1592L16.7116 30.0899C16.8254 30.0332 16.8821 29.9194 16.8821 29.8056V26.1677H37.1748V29.8056C37.1748 29.9194 37.2315 30.0328 37.3453 30.0899L44.0525 33.1592C44.2797 33.273 44.5073 33.1025 44.5073 32.8749V23.7237C44.5073 23.5532 44.3935 23.4394 44.2797 23.3823L44.2799 23.3823Z"
                        fill="#0E0E0E"
                      />
                      <line
                        x1="21.9637"
                        y1="1.21651"
                        x2="31.9746"
                        y2="11.2274"
                        stroke="#0E0E0E"
                        strokeWidth="3.12443"
                      />
                      <line
                        y1="-1.56221"
                        x2="14.1576"
                        y2="-1.56221"
                        transform="matrix(-0.707107 0.707107 0.707107 0.707107 33.1154 2.32117)"
                        stroke="#0E0E0E"
                        strokeWidth="3.12443"
                      />
                    </svg>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <p>There has never been a platform using blockchain for betting before.</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-center mt-60">An AlgoBet Market with a wide range of products & services!</h3>
            <div className="what-list-1">
              <div className="what-item">
                <div className="left">
                  <div>
                    <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1388 5.13892L11.7328 4.23939C10.0253 3.78822 8.26783 4.78847 7.80985 6.47058L6.72905 10.4427H3.20331C1.43508 10.4427 0 11.8565 0 13.5985V38.8443C0 40.5862 1.43508 42 3.20331 42H20.2879C22.0561 42 23.4912 40.5862 23.4912 38.8443V38.2321L24.5044 34.5083L37.5602 13.1657C37.5634 13.1604 37.5677 13.154 37.5709 13.1488C38.455 11.6403 37.9287 9.7092 36.3986 8.83813L21.6029 0.422982C20.0718 -0.448017 18.1115 0.0693692 17.2273 1.57789L15.1398 5.13971L15.1388 5.13892ZM12.2945 19.0836C11.957 18.8829 11.534 18.8829 11.1969 19.0836L5.85821 22.2393C5.53574 22.4288 5.3391 22.7715 5.3391 23.141V29.4524C5.3391 29.8215 5.53573 30.1646 5.85821 30.3541L11.1969 33.5098C11.5344 33.7106 11.9574 33.7106 12.2945 33.5098L17.6332 30.3541C17.9557 30.1646 18.1523 29.8219 18.1523 29.4524V23.141C18.1523 22.7719 17.9557 22.4288 17.6332 22.2393L12.2945 19.0836ZM11.7457 21.2117L16.0169 23.7362V28.8569L11.7457 31.3815L7.4745 28.8569V23.7362L11.7457 21.2117ZM15.3623 7.37516L11.1808 6.27173C10.6117 6.12134 10.0253 6.45487 9.87267 7.01558L8.9406 10.4429H20.2876C22.0559 10.4429 23.4909 11.8566 23.4909 13.5986V30.1031L28.4379 11.9171C28.5905 11.3553 28.252 10.7787 27.6828 10.6283L15.3958 7.38525C15.3851 7.38208 15.3733 7.37891 15.3615 7.37574L15.3623 7.37516ZM26.5007 27.1688C30.3704 20.8425 35.7271 12.0853 35.7317 12.079C36.0123 11.5792 35.8354 10.946 35.3313 10.6589L20.5357 2.24376C20.0251 1.95355 19.3719 2.12578 19.077 2.62872L17.2754 5.70131L28.2362 8.59502C29.9448 9.04514 30.959 10.7776 30.5022 12.4597L26.5007 27.1688Z"
                        fill="#0E0E0E"
                      />
                    </svg>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <p>NFTs: football clubs, national teams or superstars</p>
                  </div>
                </div>
              </div>

              <div className="what-item">
                <div className="left">
                  <div>
                    <img src="/images/what4.png" alt="" />
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <p>Bet on Asia type, Europe type</p>
                  </div>
                </div>
              </div>

              <div className="what-item">
                <div className="left">
                  <div>
                    <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.000274409 9.69835V13.9235C0.000274409 14.9994 0.872341 15.8714 1.94827 15.8714H14.9253L14.925 7.75H1.948C0.872067 7.75 0 8.62207 0 9.69799L0.000274409 9.69835Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M30.2711 7.75H17.2941V15.8714H30.2711C31.347 15.8714 32.2191 14.9994 32.2191 13.9235V9.69835C32.2188 8.62242 31.3468 7.75035 30.2708 7.75035L30.2711 7.75Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M1.81055 34.1441C1.81055 34.8411 2.37556 35.4061 3.07256 35.4061H14.9249L14.9246 17.3101H1.81062L1.81055 34.1441Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M17.2941 35.4057H29.1464C29.8434 35.4057 30.4084 34.8407 30.4084 34.1437L30.4082 17.3093H17.2941L17.2941 35.4057Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M7.80554 6.37885C8.21386 6.60661 9.04424 6.90901 11.5317 6.90901C12.9027 6.90901 14.1158 6.81544 14.1666 6.81132C14.4413 6.79019 14.6872 6.63241 14.8214 6.39148C14.9556 6.15082 14.9602 5.85885 14.834 5.61382C14.4583 4.88443 12.5125 1.20712 11.1207 0.431369C10.6144 0.149004 10.0421 0 9.46524 0C8.23041 0 7.08999 0.669554 6.4893 1.74744C5.5755 3.3876 6.16576 5.46513 7.80561 6.37893L7.80554 6.37885ZM7.92711 2.54868C8.23747 1.99163 8.82692 1.64585 9.4652 1.64585C9.76212 1.64585 10.0574 1.72296 10.3189 1.86894C10.8295 2.15378 11.8649 3.67237 12.7575 5.2387C12.3882 5.25242 11.9664 5.2623 11.5312 5.2623C9.35295 5.2623 8.74214 5.01616 8.60627 4.94042C7.76027 4.46899 7.45483 3.39579 7.92711 2.54867V2.54868Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M18.0527 6.81168C18.1037 6.81552 19.3166 6.90937 20.6876 6.90937C23.1751 6.90937 24.0054 6.60697 24.4138 6.37921C26.0534 5.46542 26.6439 3.38788 25.7301 1.74772C25.1294 0.66954 23.989 0 22.7542 0C22.1773 0 21.605 0.149005 21.0987 0.431095C19.7069 1.20685 17.761 4.88423 17.3854 5.61355C17.2592 5.8586 17.2638 6.15057 17.398 6.3912C17.5322 6.63241 17.7781 6.78992 18.0528 6.8116L18.0527 6.81168ZM21.9002 1.86906C22.1617 1.72307 22.4573 1.64596 22.7539 1.64596C23.3924 1.64596 23.9816 1.99172 24.292 2.5488C24.764 3.39593 24.4591 4.46855 23.6123 4.94112C23.477 5.01658 22.8656 5.26299 20.6873 5.26299C20.2521 5.26299 19.8309 5.25284 19.461 5.2394C20.3542 3.6725 21.3895 2.15393 21.9002 1.86908L21.9002 1.86906Z"
                        fill="#0E0E0E"
                      />
                    </svg>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <p>Giving gifts, collecting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="algobet-intro" id="product">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>Our </span>
            <span style={{ color: '#FEDA00' }}>Product</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <div className="device-image">
            <img data-aos={isMobile ? '' : 'fade-up'} src="/images/devices.png" alt="devices" />
          </div>
        </div>
        <div className="algobet-intro" id="features">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>Features</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <div className="  ft-row1">
            <img
              className="ft-item"
              style={{
                filter: indexFeature === 1 ? 'drop-shadow(0px 4px 60px rgb(254 218 0 / 35%)' : '',
              }}
              src="/images/f-football.png"
              alt="f-football"
            />
            <img
              className="ft-item"
              style={{
                filter: indexFeature === 2 ? 'drop-shadow(0px 4px 60px rgb(254 218 0 / 35%)' : '',
              }}
              src="/images/f-marketplace.png"
              alt="f-marketplace"
            />
          </div>
          <div className="  ft-row2">
            <img
              className="ft-item"
              style={{
                filter: indexFeature === 3 ? 'drop-shadow(0px 4px 60px rgb(254 218 0 / 35%)' : '',
              }}
              src="/images/f-token-staking.png"
              alt="f-token-staking"
            />
            <img
              className="ft-item"
              style={{
                filter: indexFeature === 4 ? 'drop-shadow(0px 4px 60px rgb(254 218 0 / 35%)' : '',
              }}
              src="/images/f-algobet.png"
              alt="f-algobet"
            />
            <img
              className="ft-item"
              style={{ filter: indexFeature === 0 ? 'drop-shadow(0px 4px 60px rgb(254 218 0 / 35%)' : '' }}
              src="/images/f-betting-club.png"
              alt="f-betting-club"
            />
          </div>
        </div>

        <div className="algobet-intro" id="token">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>Token </span>
            <span style={{ color: '#FEDA00' }}>AGB</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <div className="token-agb">
            <div className="token-item" data-aos={isMobile ? '' : 'slide-right'}>
              <div className="left">
                <div>
                  <img className="medal gold-medal" src="/images/gold-medal.png" alt="gold-medal" />
                </div>
              </div>
              <div className="right">
                <div className="title">
                  <span>Algobet sports - AGB</span>
                </div>
                <div className="content">
                  <ul>
                    <li>AGB tokens are used for betting,</li>
                    <li>buying/exchanging Country Token, Star Ticket</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="token-item" data-aos={isMobile ? '' : 'slide-left'}>
              <div className="left">
                <div>
                  <img className="medal silver-medal" src="/images/silver-medal.png" alt="silver-medal" />
                </div>
              </div>
              <div className="right">
                <div className="title">
                  <span>Country Token (event for World Cup)</span>
                </div>
                <div className="content">
                  <ul>
                    <li>User can choose Country Token of any country they support. Use it to bet on matches.</li>
                    <li>Country Token is valued at 1USDT.</li>
                    <li>Users can buy Country Token tokens on AlgoBet Marketplace</li>
                    <li>
                      Every week, the system will rank and select the top 3 Country Token held by the holder the most to
                      award AGB according to the rate of Country Token that each individual holds
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="algobet-intro" id="roadmap">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>ROAD</span>
            <span style={{ color: '#FEDA00' }}>MAP</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          {isMobile ? (
            <div className="">
              <img
                data-aos={isMobile ? '' : 'fade-right'}
                className="roadmap-image"
                src="/images/roadmap-mb.png"
                alt="roadmap"
              />
            </div>
          ) : (
            <div>
              <img
                data-aos={isMobile ? '' : 'fade-right'}
                className="roadmap-image"
                src="/images/roadmap.png"
                alt="roadmap"
              />
            </div>
          )}
        </div>
        <div className="algobet-intro" id="nft">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FEDA00' }}>NFT </span>
            <span style={{ color: '#FFFFFF' }}>Collections</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <Slider unitScreen={unitScreen} />
        </div>

        <div className="algobet-intro" id="partner">
          <h2 style={{ textTransform: 'uppercase' }} data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>Advisors - Backers - </span>
            <span style={{ color: '#FEDA00' }}>Partner</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <div className="d-flex flex-column align-items-center" data-aos={isMobile ? '' : 'fade-down'}>
            <img className="algorand-image" src="/images/algorand.png" alt="algorand" />
            <div className="intro-subtitle text-center text-partner">
              FIFA+ Collect is powered by Algorand, the official blockchain platform of FIFA and the technology of
              choice for over 2,000 global organisations, governments and digital-native decentralised finance
              applications. It is a low-cost, carbon neutral blockchain accessible via multiple currencies and payment
              methods.
            </div>
          </div>

          <div data-aos={isMobile ? '' : 'fade-up'} className="list-partner">
            <div className="partner-item">
              <img className="pinksale" src="/images/pinksale.png" alt="pinksale" />
            </div>
            <div className="partner-item">
              <img className="coinmarketcap" src="/images/coinmarketcap.png" alt="coinmarketcap" />
            </div>
            <div className="partner-item">
              <img className="hpnetwork" src="/images/hpnetwork.png" alt="hpnetwork" />
            </div>
          </div>
          <div data-aos={isMobile ? '' : 'fade-up'} className="list-partner">
            <div className="partner-item">
              <img className="coinmarketcap" src="/images/bnbchain.png" alt="bnbsmartchain" />
            </div>
            <div className="partner-item">
              <img className="pinksale" src="/images/rugfreecoin.png" alt="rugfree" />
            </div>
            <div className="partner-item">
              <img className="hpnetwork" src="/images/pancakeswap.png" alt="pancake" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="subcrible">
          <input
            name="emailFooter"
            onChange={handleChange}
            className="input-subcrible"
            placeholder="Your email address"
            value={emailFooter}
          />
          <button type="button" className="btn-subcrible" onClick={() => onFollow(false)}>
            <div>{isSendMailFooterSuccess ? 'Subscribed' : 'Subcribe'}</div>
          </button>
        </div>
        <div className="footer">
          <div>
            <img className="logo-footer" src="/images/logo-footer.png" alt="logo-footer" />
            <div className="name-footer">ALGOBET</div>
          </div>
          <div className="footer-list">
            <a href="/" className="footer-item active">
              Home{' '}
            </a>
            <a href="/#what-is-algobet" className="footer-item">
              What is Algobet
            </a>
            <a href="/#token" className="footer-item">
              Token
            </a>
            <a href="/#roadmap" className="footer-item">
              Roadmap{' '}
            </a>
          </div>
          <div className="footer-list footer-list2">
            <a href="/" className="footer-item">
              Partner
            </a>
            <a target="_blank" href={Constant.DOCS_URL} className="footer-item" rel="noreferrer">
              Docs
            </a>
            <a href="/" className="footer-item">
              About Us
            </a>
            <div className="footer-item-temp" />
          </div>
          <div className="footer-community">
            <div className="footer-item footer-item-community">Join Our Community</div>
            <div className="d-flex align-items-center">
              <a href={Constant.SOCIAL_CHANEL.TELEGRAM} target="_blank" rel="noreferrer">
                <img className="icon-telegram" src="/images/telegram.svg" alt="telegram" />
              </a>
              <a href={Constant.SOCIAL_CHANEL.TWITTER} target="_blank" rel="noreferrer">
                <img className="icon-twitter" src="/images/twitter.svg" alt="twitter" />
              </a>
              <a href={Constant.SOCIAL_CHANEL.FACEBOOK} target="_blank" rel="noreferrer">
                <img className="icon-facebook" src="/images/facebook.svg" alt="facebook" />
              </a>
            </div>
            <a
              target="_blank"
              href={`mailto:${Constant.EMAIL_CONTACT_ALGOBET}`}
              className="footer-item footer-email"
              rel="noreferrer"
            >
              {Constant.EMAIL_CONTACT_ALGOBET}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Algobet
