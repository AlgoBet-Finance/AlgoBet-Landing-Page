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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
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
            <img className="img-nft" src="/images/sample.png" alt="nft" />
          </div>
          <div className="info-nft">
            <h3>Collections NFT</h3>
            <div className="d-flex">
              <div className="price-text">Price</div>
              <div className="d-flex align-items-center">
                <img className="logo-sm" src="/images/logo-sm.svg" alt="logo" />
                <div className="price-nft">0.05</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
