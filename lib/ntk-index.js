const ntk = require('ntk')

const thing = async () => {
  const app = await ntk.createClient()
  const wnd = app.createWindow({ title: 'hello', x: 0, y: 0, width: 100, height: 100 })
  wnd.map()
  // const tree = await wnd.tree
  // const pointer = await wnd.pointer
  // const ctx = await wnd.getContext('2d')
  wnd.on('mousedown', (e) => console.log(e))
}

thing()
