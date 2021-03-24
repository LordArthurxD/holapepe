let handler = async m => m.reply(`
╭─〘LordArthur〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 ]
│ • con que entres a mi grupo va :)
│ https://chat.whatsapp.com/KRVkFvY6QSxDkPCZAkfjiV
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
