import { apiServer } from './'

export default {
  load: () => fetch(apiServer + '/sample')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
}
