const isInstalled = require('is-program-installed')
const spawn = require('child_process').spawn

if (!isInstalled('dzen2')) {
  throw new Error('Please install dzen2')
}

const dzen = spawn('dzen2')

process.stdin.on('readable', () => {
  const c = process.stdin.read()
  if (c != null) {
    dzen.stdin.write(c)
  }
})
