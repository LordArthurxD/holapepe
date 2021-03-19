let handler = async m => m.reply(`
╭─〘𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 ]
│ • Pero con que te suscribas a mi canal basta:)
│ https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
