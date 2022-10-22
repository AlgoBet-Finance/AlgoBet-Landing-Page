/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import Slider from 'components/Slider'

const Algobet = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const unitScreen = screenWidth / 1920
  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div>
      <div className="popup-join" style={{ display: openPopup ? 'flex' : 'none' }}>
        <div className="popup-join-fg" style={{ width: unitScreen * 782, height: unitScreen * 385 }}>
          <img
            style={{ top: unitScreen * 15, right: unitScreen * 20 }}
            className="close-popup-join"
            width={unitScreen * 55}
            height={unitScreen * 40}
            src="/images/close.svg"
            alt="close"
            onClick={() => setOpenPopup(false)}
          />
          <div className="join-group" style={{ top: unitScreen * 90, left: unitScreen * 104 }}>
            <div className="popup-join-input-div" style={{ width: unitScreen * 466, height: unitScreen * 80 }}>
              <input
                className="popup-join-input"
                style={{ fontSize: unitScreen * 18, paddingLeft: unitScreen * 48 }}
                placeholder="Your email address"
              />
            </div>
            <div
              className="btn-join"
              style={{ width: unitScreen * 142, height: unitScreen * 80, fontSize: unitScreen * 20 }}
            >
              Join Now
            </div>
          </div>
          <div className="join-group align-items-end" style={{ top: unitScreen * 240, left: unitScreen * 70 }}>
            <img
              style={{ marginRight: unitScreen * 300 }}
              width={unitScreen * 45}
              height={unitScreen * 46}
              src="/images/logo.svg"
              alt="logo"
            />
            <div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: unitScreen * 18,
                  marginBottom: unitScreen * 31,
                  fontFamily: 'Inter',
                }}
              >
                Join Our Community
              </div>
              <div className="d-flex align-items-center">
                <a href="/">
                  <img
                    style={{
                      height: unitScreen * 26,
                      width: unitScreen * 32,
                      marginRight: unitScreen * 70,
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
                      marginRight: unitScreen * 70,
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
            </div>
          </div>
        </div>
        {/* <div className='popup-join-bg'>
        <div className='popup-join-fg' style={{width: unitScreen * 728, height: unitScreen * 385}}>
          ok
        </div>
        </div> */}
      </div>
      <div className="hero-section" style={{ padding: `${unitScreen * 55}px ${unitScreen * 78}px`, height: unitScreen * 1080 }}>
        <div>
          <div>
            <img style={{ width: unitScreen * 80 }} className="logo" src="/images/logo.svg" alt="logo" />
          </div>
          <h1 style={{ fontSize: unitScreen * 70, marginTop: unitScreen * 156 }}>
            <div style={{ color: '#FFFFFF' }}>The Blockchain</div>
            <div style={{ color: '#FEDA00' }}>Betting Playground</div>
          </h1>
          <div className="sub-title" style={{ fontSize: unitScreen * 28, marginTop: unitScreen * 51 }}>
            Get ready for the future of betting!
          </div>
          <div className="d-flex" style={{ fontSize: unitScreen * 25, marginTop: unitScreen * 152 }}>
            <div
              className="btn-launch"
              style={{
                height: unitScreen * 61,
                width: unitScreen * 213,
                marginRight: unitScreen * 23,
                fontSize: unitScreen * 25,
              }}
              role="presentation"
              onClick={() => setOpenPopup(true)}
            >
              Launch app
            </div>
            <div
              className="btn-marketplace"
              style={{
                height: unitScreen * 61,
                width: unitScreen * 213,
                marginRight: unitScreen * 23,
                fontSize: unitScreen * 25,
              }}
              role="presentation"
              onClick={() => setOpenPopup(true)}
            >
              MARKETPLACE
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <div className="nav" style={{ marginRight: unitScreen * 135 }}>
              <div className="nav-item active" style={{ marginRight: unitScreen * 68, fontSize: unitScreen * 30 }}>
                Home
              </div>
              <div className="nav-item" style={{ marginRight: unitScreen * 68, fontSize: unitScreen * 30 }}>
                What is Algobet
              </div>
              <div className="nav-item" style={{ marginRight: unitScreen * 68, fontSize: unitScreen * 30 }}>
                Features
              </div>
              <div className="nav-item" style={{ marginRight: unitScreen * 68, fontSize: unitScreen * 30 }}>
                Token
              </div>
              <div className="nav-item" style={{ marginRight: unitScreen * 68, fontSize: unitScreen * 30 }}>
                Roadmap
              </div>
              <div className="nav-item" style={{ marginRight: unitScreen * 68, fontSize: unitScreen * 30 }}>
                Parter
              </div>
              <div className="nav-item" style={{ fontSize: unitScreen * 30 }}>
                <div className="dropdown-nav">
                  Docs
                  <img
                    style={{ width: unitScreen * 15, height: unitScreen * 8.5, marginLeft: unitScreen * 10 }}
                    src="/images/arrow-down.svg"
                    alt="arrow-down"
                  />
                  <div className="dropdown-comp" style={{ paddingTop: unitScreen * 60 }}>
                    <div
                      className="dropdown"
                      style={{
                        padding: `${unitScreen * 20}px ${unitScreen * 5}px ${unitScreen * 2}px ${unitScreen * 2}px`,
                      }}
                    >
                      <div
                        className="dropdown-main"
                        style={{ fontSize: unitScreen * 22, padding: `${unitScreen * 16}px ${unitScreen * 56}px` }}
                      >
                        <div className="dd-item" style={{ marginBottom: unitScreen * 16 }}>
                          white paper
                        </div>
                        <div className="dd-item">PitchDeck</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social-horizon" style={{ marginTop: unitScreen * 320 }}>
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
        </div>
      </div>
      <div
        style={{ padding: `${unitScreen * 91}px ${unitScreen * 300}px`, fontSize: unitScreen * 40 }}
        className="data-section"
      >
        <div>
          <div>Member</div>
          <div className="data-number" style={{ fontSize: unitScreen * 70 }}>
            100+
          </div>
        </div>
        <div>
          <div>Entries</div>
          <div className="data-number" style={{ fontSize: unitScreen * 70 }}>
            100+
          </div>
        </div>
        <div>
          <div>Telegram</div>
          <div className="data-number" style={{ fontSize: unitScreen * 70 }}>
            100+
          </div>
        </div>
        <div>
          <div>Stake</div>
          <div className="data-number" style={{ fontSize: unitScreen * 70 }}>
            100+
          </div>
        </div>
      </div>
      <div className="intro-section">
        <div className="algobet-intro" style={{ paddingTop: unitScreen * 123 }}>
          <h2 style={{ fontSize: unitScreen * 70 }}>
            <span style={{ color: '#FFFFFF' }}>What is </span>
            <span style={{ color: '#FEDA00' }}>Algobet</span>
          </h2>
          <img
            width={unitScreen * 392}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <div style={{ fontSize: unitScreen * 20, marginTop: unitScreen * 36 }} className="intro-subtitle">
            <div>
              AlgoBet is one of the transparent, safe and promising betting sites that bring a lot of value to football
              fans.
            </div>
            <div>
              With the biggest football festival on the planet, AlgoBet is expected to be a much-awaited playground.
            </div>
          </div>
          <img
            style={{ marginTop: unitScreen * 36 }}
            width={unitScreen * 1320}
            height={unitScreen * 579}
            src="/images/functions.png"
            alt="functions"
          />
        </div>
        <div className="algobet-intro" style={{ paddingTop: unitScreen * 212 }}>
          <h2 style={{ fontSize: unitScreen * 70 }}>
            <span style={{ color: '#FFFFFF' }}>Our </span>
            <span style={{ color: '#FEDA00' }}>Product</span>
          </h2>
          <img
            width={unitScreen * 295}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <img width={unitScreen * 1332} height={unitScreen * 883} src="/images/devices.png" alt="devices" />
        </div>
        <div className="algobet-intro" style={{ paddingTop: unitScreen * 101 }}>
          <h2 style={{ fontSize: unitScreen * 70 }}>
            <span style={{ color: '#FFFFFF' }}>Features</span>
          </h2>
          <img
            width={unitScreen * 218}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <img width={unitScreen * 1324} height={unitScreen * 728} src="/images/features.png" alt="features" />
        </div>

        <div className="algobet-intro" style={{ paddingTop: unitScreen * 183 }}>
          <h2 style={{ fontSize: unitScreen * 70 }}>
            <span style={{ color: '#FFFFFF' }}>Token </span>
            <span style={{ color: '#FEDA00' }}>AGB</span>
          </h2>
          <img
            width={unitScreen * 261}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <img
            style={{ marginTop: unitScreen * 82 }}
            width={unitScreen * 1320}
            height={unitScreen * 695.5}
            src="/images/token-agb.png"
            alt="token-agb"
          />
        </div>

        <div className="algobet-intro" style={{ paddingTop: unitScreen * 283 }}>
          <h2 style={{ fontSize: unitScreen * 70 }}>
            <span style={{ color: '#FFFFFF' }}>ROAD</span>
            <span style={{ color: '#FEDA00' }}>MAP</span>
          </h2>
          <img
            width={unitScreen * 243}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <img
            style={{ marginTop: unitScreen * 81 }}
            width={unitScreen * 1331}
            height={unitScreen * 584}
            src="/images/roadmap.png"
            alt="roadmap"
          />
        </div>
        <div className="algobet-intro" style={{ paddingTop: unitScreen * 200 }}>
          <h2 style={{ fontSize: unitScreen * 70 }}>
            <span style={{ color: '#FEDA00' }}>NFT </span>
            <span style={{ color: '#FFFFFF' }}>Collections</span>
          </h2>
          <img
            width={unitScreen * 380}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <Slider unitScreen={unitScreen} />
        </div>

        <div className="algobet-intro" style={{ paddingTop: unitScreen * 316, paddingBottom: unitScreen * 180 }}>
          <h2 style={{ fontSize: unitScreen * 70, textTransform: 'uppercase' }}>
            <span style={{ color: '#FFFFFF' }}>Advisors - Backers - </span>
            <span style={{ color: '#FEDA00' }}>Partner</span>
          </h2>
          <img
            width={unitScreen * 787}
            height={unitScreen * 35}
            src="/images/header-divider.svg"
            alt="header-divider"
          />
          <img
            style={{ marginTop: unitScreen * 97 }}
            width={unitScreen * 366}
            height={unitScreen * 99}
            src="/images/algorand.png"
            alt="algorand"
          />
          <div
            style={{
              fontSize: unitScreen * 18,
              marginTop: unitScreen * 44,
              maxWidth: unitScreen * 914,
              fontFamily: 'Inter',
            }}
            className="intro-subtitle text-center"
          >
            FIFA+ Collect is powered by Algorand, the official blockchain platform of FIFA and the technology of choice
            for over 2,000 global organisations, governments and digital-native decentralised finance applications. It
            is a low-cost, carbon neutral blockchain accessible via multiple currencies and payment methods.
          </div>
          <div className="d-flex align-items-center" style={{ marginTop: unitScreen * 100 }}>
            <img
              style={{ marginRight: unitScreen * 82 }}
              width={unitScreen * 275}
              height={unitScreen * 155}
              src="/images/coinmarketcap.png"
              alt="coinmarketcap"
            />
            <img
              style={{ marginRight: unitScreen * 104 }}
              width={unitScreen * 430}
              height={unitScreen * 215}
              src="/images/pinksale.png"
              alt="pinksale"
            />
            <img width={unitScreen * 153} height={unitScreen * 157} src="/images/hpnetwork.png" alt="hpnetwork" />
          </div>
        </div>
      </div>
      <footer style={{ padding: `${unitScreen * 77}px ${unitScreen * 300}px` }}>
        <div className="subcrible">
          <input
            style={{
              width: unitScreen * 592,
              height: unitScreen * 80,
              fontSize: unitScreen * 18,
              paddingLeft: unitScreen * 40,
            }}
            className="input-subcrible"
            placeholder="Your email address"
          />
          <button
            type="button"
            className="btn-subcrible"
            style={{
              width: unitScreen * 177,
              height: unitScreen * 80,
              fontSize: unitScreen * 25,
              marginLeft: unitScreen * 15,
            }}
          >
            Subcribe
          </button>
        </div>
        <div className="footer" style={{ marginTop: unitScreen * 60, paddingTop: unitScreen * 63 }}>
          <div className="d-flex align-items-center">
            <div>
              <img width={unitScreen * 132} height={unitScreen * 132} src="/images/logo-footer.png" alt="logo-footer" />
              <div style={{ fontSize: unitScreen * 53 }} className="name-footer">
                ALGOBET
              </div>
            </div>
            <div className="footer-list" style={{ marginLeft: unitScreen * 136, fontSize: unitScreen * 18 }}>
              <a href="/" className="footer-item active" style={{ marginBottom: unitScreen * 20 }}>
                Home{' '}
              </a>
              <a href="/" className="footer-item" style={{ marginBottom: unitScreen * 20 }}>
                What is Algobet
              </a>
              <a href="/" className="footer-item" style={{ marginBottom: unitScreen * 20 }}>
                Token
              </a>
              <a href="/" className="footer-item">
                Roadmap{' '}
              </a>
            </div>
            <div className="footer-list" style={{ marginLeft: unitScreen * 81, fontSize: unitScreen * 18 }}>
              <a href="/" className="footer-item" style={{ marginBottom: unitScreen * 20 }}>
                Team{' '}
              </a>
              <a href="/" className="footer-item" style={{ marginBottom: unitScreen * 20 }}>
                Partner
              </a>
              <a href="/" className="footer-item" style={{ marginBottom: unitScreen * 20 }}>
                Docs
              </a>
              <a href="/" className="footer-item">
                About Us
              </a>
            </div>
          </div>
          <div className="d-flex flex-column align-items-end" style={{fontSize: unitScreen * 16}}>
            <div className="footer-item" style={{ fontWeight: 500, marginBottom: unitScreen * 30}}>
              Join Our Community
            </div>
            <div className="d-flex align-items-center">
              <a href="/">
                <img
                  style={{
                    height: unitScreen * 26,
                    width: unitScreen * 32,
                    marginRight: unitScreen * 53,
                  }}
                  src="/images/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a href="/">
                <img
                  style={{
                    height: unitScreen * 26,
                    width: unitScreen * 32,
                    marginRight: unitScreen * 53,
                  }}
                  src="/images/twitter.svg"
                  alt="twitter"
                />
              </a>
              <a href="/">
                <img
                  style={{
                    height: unitScreen * 33,
                    width: unitScreen * 15,
                  }}
                  src="/images/facebook.svg"
                  alt="facebook"
                />
              </a>
            </div>
            <a href="/" className="footer-item" style={{ marginTop: unitScreen * 52 }}>
              contactalgobet@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Algobet
