import uploadImage from '../lib/uploadImage'
import { sticker } from '../lib/sticker'
import { MessageType } from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://api.dhamzxploit.my.id/api/canvas/wanted?url=${url}`
  let stiker = await sticker(null, wanted, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['wanted']
handler.tags = ['sticker']
handler.command = /^wanted$/i
handler.limit = true
handler.fail = null

export default handler