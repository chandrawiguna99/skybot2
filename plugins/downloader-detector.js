Import axios from 'axios'
let handler = async(m, { conn, text }) => {
    if (!text) throw `Harap masukan query\n\n\nContoh : .downdetector telkomsel`
    const query = encodeURI(text.trim())
    try {
       const fetchHtml = await axios.get(`https://downdetector.id/masalah/${query}`)
       const resultQuery = fetchHtml.data
       //Menggunakan cara termudah untuk mencari teks (tidak berfungsi dibeberapa web)
       if (resultQuery.includes('Laporan pengguna mengindikasikan kemungkinan ada problem')) return m.reply(`Laporan pengguna mengindikasikan ada problem di ${query}`)
       else if (resultQuery.includes('Laporan pengguna tidak mengindikasikan ada problem')) return m.reply(`Laporan pengguna tidak mengindikasikan ada problem di ${query}`)
    } catch (err) {
       m.reply(`Pencarian tidak ditemukan untuk ${query}!`)
   }
}
handler.help = ['downdetector <query>']
handler.tags = ['internet']
handler.command = /^(downdetector)$/i

export default handler