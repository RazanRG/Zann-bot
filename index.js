
const {
   spawn
} = require('child_process')
const path = require('path')
const cfonts = require('cfonts')
const { say } = cfonts

say('ZANN', {
  font: 'block',
  align: 'center',
  colors: ['yellow']
})
say(`⧻ Powered By Razan`, { 
  font: 'console',
  align: 'center',
  colors: ['white']
})

var isRunning = false
function start() {
  if (isRunning) return
  isRunning = true
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()