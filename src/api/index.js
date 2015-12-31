let apiAddress

/* istanbul ignore if */
if (global.location &&
  /* istanbul ignore next */
  global.location.origin) {
  apiAddress = global.location.origin
} else {
  apiAddress = 'http://localhost:3000'
}

/* istanbul ignore if */
if (process.env.NODE_ENV === 'production') {
  apiAddress = ''
}

apiAddress += '/api'

export const apiServer = apiAddress
