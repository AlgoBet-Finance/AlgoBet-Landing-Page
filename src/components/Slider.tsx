import React, { useEffect, useMemo, useState } from 'react'
import $ from 'jquery'

export default function Slider({ unitScreen }: { unitScreen: any }) {

  useEffect(() => {
    $('#scroll-left').on('click', () => {
      $('#scroll-bar').animate({ scrollLeft: ($('#scroll-bar').scrollLeft() || 0) - 700 }, 300)
    })
    $('#scroll-right').on('click', () => {
      $('#scroll-bar').animate({ scrollLeft: ($('#scroll-bar').scrollLeft() || 0)  + 700 }, 300)
    })
  }, [])

  return (
    <div className="card-comp" data-aos="flip-down">
      <img
        id="scroll-left"
        style={{ left: unitScreen * -100, width: unitScreen * 55, height: unitScreen * 40 }}
        className="slide-left"
        src="/images/slide-left.svg"
        alt="slide-left"
      />
      <img
        id="scroll-right"
        style={{ right: unitScreen * -100, width: unitScreen * 55, height: unitScreen * 40 }}
        className="slide-right"
        src="/images/slide-right.svg"
        alt="slide-right"
      />

      <div id="scroll-bar" className="card-list" style={{ marginTop: unitScreen * 107, width: unitScreen * 1116 }}>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-img" style={{ height: unitScreen * 373 }}>
            <div
              style={{
                width: unitScreen * 352,
                height: unitScreen * 343,
                transform: `translateX(${unitScreen * 4}px)`,
              }}
              className="bg-nft"
            />
            <img
              style={{ width: unitScreen * 352, height: unitScreen * 343, top: unitScreen * 15, left: unitScreen * 5 }}
              className="img-nft"
              src="/images/sample.png"
              alt="nft"
            />
          </div>
          <div
            style={{ width: unitScreen * 295, height: unitScreen * 92, marginTop: unitScreen * 20 }}
            className="info-nft"
          >
            <h3 style={{ fontSize: unitScreen * 25, marginBottom: unitScreen * 5 }}>Collections NFT</h3>
            <div className="d-flex">
              <div style={{ fontSize: unitScreen * 16, marginRight: unitScreen * 86 }}>Price</div>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: unitScreen * 15, height: unitScreen * 15, marginRight: unitScreen * 5 }}
                  src="/images/logo-sm.svg"
                  alt="logo"
                />
                <div style={{ fontSize: unitScreen * 18, fontWeight: 700 }}>0.05</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
