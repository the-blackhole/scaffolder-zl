import path from 'path'
import fs from 'fs'

export default (filename) => {
  return fs.createWriteStream(path.join(filename), {
    flags: 'a'
  })
}
