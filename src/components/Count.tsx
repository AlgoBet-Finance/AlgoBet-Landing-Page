import React, { useEffect, useMemo, useState, useCallback } from 'react'
import $ from 'jquery'

const speed = 10

export default function Count({ unitScreen, endNumber }: { unitScreen: any, endNumber: number }) {
  const [number, setNumber] = useState("0")

  const incNbrRec = useCallback((i: number) => {
    if (i < endNumber) {
      setNumber(`${i}`)
      setTimeout(() => {//Delay a bit before calling the function again.
        incNbrRec(i + 1);
      }, speed);
    }
    if (i === endNumber) {
      setNumber(`${endNumber}+`)
    }
  }, [endNumber])

  useEffect(() => {
    const i = 0
    incNbrRec(i)
  }, [incNbrRec])

  return  number
}
