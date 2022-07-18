const fsp = require('fs/promises')
const fs = require('fs')
const path = require('path')
const buildDir = 'build/'

const handleError = (err) => {
  console.error(err)
}

const pathRegex = /(href|src)="(.+?)"/gi

const getHTMLs = (root) => {
  const files = fs.readdirSync(root)

  files.forEach((file) => {
    const currentPath = root + file
    const stats = fs.statSync(currentPath)

    if (stats.isFile() && path.extname(currentPath) === '.html') {
      getFileReplacement(currentPath)
        .then((response = '') => {
          try {
            if (response) fs.writeFileSync(currentPath, response)
            console.log('substituted ', currentPath)
          } catch (e) {
            handleError(e)
          }
        })
        .catch(handleError)
    }

    if (stats.isDirectory()) {
      getHTMLs(currentPath + '/')
    }
  })
}

const getFileReplacement = async (filePath) => {
  const replacementsPromises = []
  const dataSubstrings = []
  let lastIndex = 0
  let lastMatchedLength = 0
  const data = fs.readFileSync(filePath, { encoding: 'utf8' })

  for (const match of data.matchAll(pathRegex)) {
    const [matchedString, prop, addressPath] = match

    dataSubstrings.push(`${data.substring(lastIndex, match.index)}${prop}=`)

    lastIndex = match.index + matchedString.length
    replacementsPromises.push(checkPaths(addressPath, filePath))
  }

  if(lastIndex) {
    dataSubstrings.push(`${data.substring(lastIndex)}`)
  }

  const replacements = await Promise.all(replacementsPromises)

  return dataSubstrings.reduce(
    (accum, substring, currentIndex) => accum + substring + (replacements[currentIndex] || ''),
    '',
  )
}

const checkPaths = async (originalPath, filePath) => {
  const fileDir = path.dirname(filePath) + '/'
  let newPath = originalPath

  if(newPath === '/') {
    newPath = 'index.html'
  }

  if (path.isAbsolute(newPath)) {
    newPath = path.normalize('.' + newPath)

    if (fs.existsSync(path.normalize(fileDir + newPath))) {
      console.log('***','substituted', originalPath, 'for', newPath, 'on', filePath)
      return invertSlashes(`"${newPath}"`)
    }
  }

  newPath = path.format({
    root: fileDir,
    dir: path.resolve(buildDir + path.dirname(newPath)),
    base: path.basename(newPath),
  })

  if (fs.existsSync(newPath)) {
    newPath = path.relative(path.resolve(fileDir), newPath)
    console.log('***','substituted', originalPath, 'for', newPath, 'on', filePath)
    return invertSlashes(`"${newPath}"`)
  }

  console.log('***','no substitution found for', originalPath, 'on', filePath)
  return invertSlashes(`"${originalPath}"`)
}

const invertSlashes = string => string.replace(/\\/g, '/')

getHTMLs(buildDir)
