import React, { useEffect, useMemo, useState } from 'react'
import $ from 'jquery'

export default function Slider({ unitScreen }: { unitScreen: any }) {
  useEffect(() => {
    $('#scroll-left').on('click', () => {
      $('#scroll-bar').animate({ scrollLeft: ($('#scroll-bar').scrollLeft() || 0) - 700 }, 300)
    })
    $('#scroll-right').on('click', () => {
      $('#scroll-bar').animate({ scrollLeft: ($('#scroll-bar').scrollLeft() || 0) + 700 }, 300)
    })
  }, [])

  return (
    <div className="card-comp" data-aos="flip-down">
      <img id="scroll-left" className="slide-left" src="/images/slide-left.svg" alt="slide-left" />
      <img id="scroll-right" className="slide-right" src="/images/slide-right.svg" alt="slide-right" />

      <div id="scroll-bar" className="card-list">
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/3_.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Star Ticket 3%</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">10</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/5_.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Star Ticket 5%</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">20</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/10_.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Star Ticket 10%</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">50</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/15_.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Star Ticket 15%</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">100</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/20_.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Star Ticket 20%</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">150</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/x_.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Star Ticket Lucky</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img">
            <div className="bg-nft" />
            <img className="img-nft" src="/images/nft-collection/ctBrazil.jpg" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Country Token</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <div className="price-nft">1 USDT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
