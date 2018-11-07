import React from 'react'
import PropTypes from 'prop-types'
import {
  Svg,
  Defs,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop,
  G,
} from '@vgm/rsvg'

/**
 * @render react
 * @name Background
 * @example
 * <div>
 * 	<Background width={320} height={568} />
 * </div>
 */
export const Background = ({width, height}) => (
  <Svg width={width} height={height} viewBox="0 0 320 568">
    <Defs>
      <LinearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
        <Stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%" />
        <Stop stopColor="#000000" stopOpacity="0.5" offset="100%" />
      </LinearGradient>
      <RadialGradient
        cx="50%"
        cy="87.75%"
        fx="50%"
        fy="87.75%"
        r="177.5%"
        gradientTransform="translate(0.500000,0.877500),scale(1.000000,0.563380),rotate(90.000000),scale(1.000000,0.969285),translate(-0.500000,-0.877500)"
        id="radialGradient-2"
      >
        <Stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%" />
        <Stop stopColor="#000000" stopOpacity="0.5" offset="100%" />
      </RadialGradient>
      <Rect id="path-3" x="0" y="0" width="320" height="568" />
    </Defs>
    <G id="vgm" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <G id="background">
        <G id="gradient">
          <Rect x="0" y="0" width="320" height="568" fill="#646770" />
          <Rect
            x="0"
            y="0"
            width="320"
            height="568"
            fillOpacity="0.799999952"
            fill="url(#linearGradient-1)"
            style={{mixBlendMode: 'multiply'}}
          />
          <Rect
            x="0"
            y="0"
            width="320"
            height="568"
            fillOpacity="0.600000024"
            fill="url(#linearGradient-1)"
            style={{mixBlendMode: 'multiply'}}
            href="#path-3"
          />
        </G>
      </G>
    </G>
  </Svg>
)

Background.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Background
