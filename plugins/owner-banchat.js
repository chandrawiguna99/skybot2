let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐁𝐚𝐧𝐠!!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(bnct|banchat)$/i

handler.owner = true

export default handler