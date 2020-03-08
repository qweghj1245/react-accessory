const size = {
  mobileS: '320px',
  mobileL: '960px',
  minHeight: '700px',
  padHeight: '1000px',
}

export const device = {
  mobile: `screen and (min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
  wierdMobile: `screen and (max-width: ${size.mobileL}) and (min-height: ${size.minHeight})`,
  pad: `screen and (max-width: ${size.mobileL}) and (min-height: ${size.padHeight})`,
}