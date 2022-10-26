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

const Algobet = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [emailPopup, setEmailPopup] = useState('')
  const [emailFooter, setEmailFooter] = useState('')
  const [isSendMailPopupSuccess, setIsSendMailPopupSuccess] = useState(false)
  const [isSendMailFooterSuccess, setIsSendMailFooterSuccess] = useState(false)

  // const unitScreen = 1
  const unitScreen = screenWidth / 1920

  const [indexFeature, setIndexFeature] = useState(1)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setScreenWidth(window.innerWidth)
      }
    }
    // window.addEventListener('resize', handleResize)

    const header = document.getElementById('header')
    const backToTop = document.getElementById('back-to-top')
    let sticky: number
    if (header) {
      sticky = header.offsetTop
    }

    function onScroll() {
      if (window.pageYOffset > sticky) {
        if (header && backToTop) {
          header.classList.add('bg-header')
          backToTop.style.display = 'flex'
        }
      } else if (header && backToTop) {
        header.classList.remove('bg-header')
        backToTop.style.display = 'none'
      }
    }
    window.addEventListener('scroll', onScroll)

    if (window.pageYOffset > 0) {
      if (header && backToTop) {
        header.classList.add('bg-header')
        backToTop.style.display = 'flex'
      }
    }

    let i = 1
    setInterval(() => {
      setIndexFeature(i % 5)
      i++
    }, 2000)
  }, [])

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

    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then(() => {
        if (isEmailPopup) {
          setIsSendMailPopupSuccess(true)
          setTimeout(() => {
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
  }

  return (
    <div>
      <div role="presentation" onClick={backToTop} id="back-to-top">
        <img src="/images/chevron_big_up.svg" alt="back to top" width="17" />
      </div>
      <Header/>
      <div
        data-aos={isMobile ? '' : 'fade-left'}
        className="social-horizon social-fixed"
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
        <a href="/">
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
        <a href="/">
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
        <a href="/">
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
          <img
            className="close-popup-join"
            width={unitScreen * 55}
            height={unitScreen * 40}
            src="/images/close.svg"
            alt="close"
            onClick={() => setOpenPopup(false)}
          />
          <div className="text-comming-soon">Comming Soon</div>
          <div className="join-group">
            <div className="popup-join-input-div">
              <input
                name="emailPopup"
                onChange={handleChange}
                className="popup-join-input"
                placeholder={isMobile ? '' : 'Your email address'}
                value={emailPopup}
              />
            </div>
            <div className="btn-join" role="presentation" onClick={() => onFollow(true)}>
              {isSendMailPopupSuccess ? 'Followed' : 'Follow'}
            </div>
          </div>
          <div className="join-group align-items-end join-group-social">
            <img className="logo-join-group" src="/images/logo.svg" alt="logo" />
            <div>
              <div className="join-community">Join Our Community</div>
              <div className="d-flex align-items-center join-community-social">
                <a href="/">
                  <img className="icon-telegram" src="/images/telegram-white.svg" alt="telegram" />
                </a>
                <a href="/">
                  <img className="icon-twitter" src="/images/twitter-white.svg" alt="twitter" />
                </a>
                <a href="/">
                  <img className="icon-facebook" src="/images/facebook-white.svg" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home" className="hero-section">
        <div data-aos={isMobile ? '' : 'fade-right'}>
          <h1>
            <div style={{ color: '#FFFFFF' }}>The Blockchain</div>
            <div style={{ color: '#FEDA00' }}>Betting Playground</div>
          </h1>
          <div className="sub-title">Get ready for the future of betting!</div>
          <div className="  group-btn-launch">
            <div className="btn-launch" role="presentation" onClick={() => setOpenPopup(true)}>
              Launch app
            </div>
            <div className="btn-marketplace" role="presentation" onClick={() => setOpenPopup(true)}>
              MARKETPLACE
            </div>
          </div>
        </div>
      </div>
      <div className="data-section">
        <div>
          <div>Member</div>
          <div className="data-number">{Count({ endNumber: 100, unitScreen })}</div>
        </div>
        <div>
          <div>Entries</div>
          <div className="data-number">{Count({ endNumber: 100, unitScreen })}</div>
        </div>
        <div>
          <div>Telegram</div>
          <div className="data-number">{Count({ endNumber: 100, unitScreen })}</div>
        </div>
        <div>
          <div>Stake</div>
          <div className="data-number">{Count({ endNumber: 100, unitScreen })}</div>
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
          <img
            className="function-image"
            data-aos={isMobile ? '' : 'slide-up'}
            src="/images/functions.png"
            alt="functions"
          />
        </div>
        <div className="algobet-intro" id="product">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>Our </span>
            <span style={{ color: '#FEDA00' }}>Product</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <img className="device-image" data-aos={isMobile ? '' : 'fade-up'} src="/images/devices.png" alt="devices" />
        </div>
        <div className="algobet-intro" id="features">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>Features</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <div className="d-flex justify-content-center ft-row1">
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
          <div className="d-flex justify-content-center ft-row2">
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
          <div data-aos={isMobile ? '' : 'slide-right'} className="token-agb">
            <img className="token-agb-image" src="/images/token-agb.png" alt="token-agb" />
            <img className="medal gold-medal" src="/images/gold-medal.png" alt="gold-medal" />
            <img className="medal silver-medal" src="/images/silver-medal.png" alt="silver-medal" />
          </div>
        </div>

        <div className="algobet-intro" id="roadmap">
          <h2 data-aos={isMobile ? '' : 'zoom-in'}>
            <span style={{ color: '#FFFFFF' }}>ROAD</span>
            <span style={{ color: '#FEDA00' }}>MAP</span>
          </h2>
          <img className="divider" src="/images/header-divider.svg" alt="header-divider" />
          <img
            data-aos={isMobile ? '' : 'fade-right'}
            className="roadmap-image"
            src="/images/roadmap.png"
            alt="roadmap"
          />
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

          <div data-aos={isMobile ? '' : 'fade-up'} className="d-flex align-items-center list-partner">
            <img className="coinmarketcap" src="/images/coinmarketcap.png" alt="coinmarketcap" />
            <img className="pinksale" src="/images/pinksale.png" alt="pinksale" />
            <img className="hpnetwork" src="/images/hpnetwork.png" alt="hpnetwork" />
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
            {isSendMailFooterSuccess ? 'Subscribed' : 'Subcribe'}
          </button>
        </div>
        <div className="footer">
          <div className="d-flex align-items-center">
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
              <a href="/" className="footer-item">
                Docs
              </a>
              <a href="/" className="footer-item">
                About Us
              </a>
              <div className="footer-item-temp" />
            </div>
          </div>
          <div className="d-flex flex-column align-items-end footer-community">
            <div className="footer-item footer-item-community">Join Our Community</div>
            <div className="d-flex align-items-center">
              <a href="/">
                <img className="icon-telegram" src="/images/telegram.svg" alt="telegram" />
              </a>
              <a href="/">
                <img className="icon-twitter" src="/images/twitter.svg" alt="twitter" />
              </a>
              <a href="/">
                <img className="icon-facebook" src="/images/facebook.svg" alt="facebook" />
              </a>
            </div>
            <a
              target="_blank"
              href="mailto:contactalgobet@gmail.com"
              className="footer-item footer-email"
              rel="noreferrer"
            >
              contactalgobet@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Algobet
