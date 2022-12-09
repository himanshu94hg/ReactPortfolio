import { useEffect, useRef } from 'react'
import { gsap } from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/dist/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s1.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: '100%',
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559.000000pt"
        height="901.000000pt"
        version="1.0"
        viewBox="0 0 559.000000 901.000000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,901.000000) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M3970 8879 c-602 -55 -601 -55 -620 -105 -10 -26 -70 -1360 -121 -2684 -8 -211 -14 -289 -24 -299 -9 -9 -93 -20 -282 -37 -323 -28 -329 -28 -337 -9 -3 8 6 264 19 568 38 869 66 1537 67 1593 0 29 -5 60 -10 71 -6 11 -63 64 -128 119 -64 54 -138 117 -164 139 -25 22 -129 110 -230 195 -101 85 -208 176 -238 203 -40 34 -64 47 -86 47 -62 0 -412 -31 -461 -40 -27 -6 -243 -26 -480 -45 -248 -21 -440 -41 -454 -48 -27 -13 -51 -62 -51 -103 0 -42 31 -83 72 -96 90 -27 196 -162 242 -307 60 -190 64 -296 32 -946 -14 -291 -28 -609 -31 -705 -3 -96 -16 -438 -30 -760 -42 -996 -74 -1788 -79 -1945 -3 -82 -16 -411 -30 -730 -86 -1949 -84 -1894 -63 -1932 7 -12 27 -34 46 -47 18 -14 52 -42 74 -63 23 -21 65 -56 92 -78 27 -22 84 -69 126 -105 42 -36 127 -108 189 -160 63 -52 151 -128 197 -167 84 -72 85 -73 141 -73 31 1 147 10 257 20 110 11 314 31 454 44 249 23 255 24 277 49 13 15 25 46 28 69 3 24 15 270 26 548 11 278 31 773 45 1100 13 327 30 735 36 905 6 171 14 328 18 350 l6 40 240 23 c132 12 265 25 295 28 40 4 60 2 74 -9 19 -14 19 -23 -7 -628 -77 -1758 -76 -1604 -19 -1646 15 -11 95 -78 178 -149 83 -71 188 -160 234 -199 112 -94 233 -197 299 -254 29 -25 62 -50 72 -55 11 -5 62 -5 126 2 60 6 283 27 497 46 377 34 390 36 414 59 31 31 36 80 51 492 6 171 21 517 32 770 11 253 24 582 29 731 4 150 20 532 34 850 14 319 37 860 51 1204 47 1150 85 2059 116 2752 23 516 28 696 20 720 -10 30 -78 99 -167 168 -54 42 -208 172 -219 185 -5 6 -35 30 -65 54 -30 24 -73 59 -95 80 -22 20 -61 53 -87 74 -26 21 -53 43 -60 50 -7 7 -38 34 -69 60 -56 47 -57 47 -125 46 -38 -1 -206 -14 -374 -30z m315 -381 c-3 -101 -17 -433 -30 -738 -13 -305 -27 -634 -30 -730 -3 -96 -15 -368 -25 -605 -11 -236 -24 -563 -30 -725 -6 -162 -17 -434 -25 -605 -8 -170 -19 -443 -25 -605 -6 -162 -19 -488 -30 -725 -10 -236 -22 -509 -25 -605 -3 -96 -15 -371 -25 -610 -11 -239 -24 -565 -30 -725 -8 -203 -14 -293 -23 -301 -9 -8 -707 -75 -771 -74 -10 0 -5 192 24 820 10 234 22 508 25 610 4 102 17 428 31 725 13 297 24 599 24 672 0 125 -1 133 -24 160 -22 25 -30 28 -80 26 -83 -4 -731 -60 -956 -83 -107 -11 -295 -29 -417 -39 -123 -11 -232 -25 -243 -31 -42 -23 -51 -70 -65 -372 -8 -158 -19 -422 -25 -585 -6 -164 -17 -444 -25 -623 -16 -343 -26 -601 -46 -1122 -7 -174 -15 -321 -18 -326 -8 -11 -743 -75 -765 -66 -12 5 -15 15 -12 38 3 17 8 126 11 241 6 222 19 549 35 880 5 110 14 333 20 495 6 162 19 493 30 735 11 242 24 568 30 725 6 157 19 481 29 720 11 239 23 516 26 615 3 99 12 322 20 495 25 518 45 1068 51 1360 5 225 3 297 -10 395 -19 136 -63 280 -114 373 -19 35 -32 65 -30 67 15 15 967 100 980 87 7 -7 -11 -556 -27 -787 -3 -44 -12 -269 -20 -500 -9 -231 -22 -550 -30 -710 -8 -159 -17 -362 -20 -450 -7 -243 -15 -418 -21 -440 -7 -31 20 -97 49 -118 25 -20 29 -19 409 12 211 18 489 43 618 56 129 13 323 32 430 41 114 10 206 22 222 30 18 9 31 27 37 52 10 36 28 397 56 1142 8 206 23 582 34 835 11 253 25 581 31 730 6 148 14 272 18 276 7 7 651 65 741 68 l43 1 -7 -182z m314 -5 c64 -54 124 -105 133 -113 9 -8 87 -74 173 -145 l156 -130 -5 -165 c-14 -401 -27 -748 -41 -1050 -8 -179 -22 -500 -30 -715 -8 -214 -22 -536 -30 -715 -8 -179 -22 -500 -30 -715 -8 -214 -22 -534 -30 -710 -8 -176 -22 -486 -30 -690 -8 -203 -19 -478 -25 -610 -5 -132 -14 -368 -20 -525 -20 -561 -42 -955 -52 -968 -14 -17 -285 -16 -315 1 -37 21 -271 217 -276 232 -3 8 -2 110 3 227 5 117 14 355 20 528 6 173 15 347 20 385 9 73 11 114 35 765 8 217 22 548 29 735 8 187 18 417 21 510 3 94 15 370 25 615 11 245 24 578 30 740 6 162 17 435 25 605 8 171 19 445 25 610 6 165 19 494 30 730 11 237 20 469 20 516 0 85 8 149 18 149 2 0 57 -44 121 -97z m-2604 -205 c33 -30 107 -94 165 -142 191 -160 265 -223 302 -257 l38 -34 -15 -360 c-8 -198 -24 -551 -35 -785 -12 -234 -23 -537 -26 -675 -2 -137 -7 -264 -9 -281 l-5 -31 -123 -12 c-378 -35 -470 -42 -484 -37 -13 5 -14 40 -8 263 3 142 10 274 15 293 9 33 28 450 50 1060 5 146 17 446 26 667 16 359 19 401 33 393 9 -4 43 -33 76 -62z m-130 -4413 c64 -55 131 -111 147 -125 17 -14 92 -77 167 -141 l136 -115 -3 -135 c-1 -74 -11 -332 -22 -574 -11 -242 -26 -611 -35 -820 -8 -209 -17 -407 -20 -440 -3 -33 -10 -217 -15 -410 -6 -192 -14 -353 -19 -358 -16 -16 -154 88 -276 208 -39 39 -126 115 -193 170 l-122 100 0 75 c0 41 5 172 10 290 5 118 14 348 20 510 12 330 19 503 25 570 2 25 9 160 15 300 6 140 17 417 25 615 9 198 15 368 15 378 0 24 7 20 145 -98z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
