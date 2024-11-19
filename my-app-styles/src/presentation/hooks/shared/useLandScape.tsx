import { useEffect, useState } from "react"
import { useWindowDimensions } from "react-native"

export function useLandScape() {
  const [isLandScape, setIsLandScape] = useState(false)
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    setIsLandScape(width > height)
  }, [width, height])

  return {
    isLandScape,
  }
}
