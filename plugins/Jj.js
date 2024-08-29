const handler = async (m, { conn, text, usedPrefix,

command, args }) {

let inputnumber
= text;
const sortedOnline = uniqueOnline.sort((a, b) => a.split('@')[0].localeCompare(b.split('@')[0]));

    const onlineList = sortedOnline.map((k, i) => `*${i + 1}.* @${k.split('@')[0]}`).join('\n') 
        filename: __filename,
    },
  
        if (!inputnumber.includes('x')) return citel.reply('You did not add x\nExample: iswa 9196285162xx')
        citel.reply(`Searching for WhatsApp account in given range...`)

        function countInstances(string, word) {
            return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text = `*--『 List of Whatsapp Numbers 』--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          let status1 = nu[Math.floor(Math.random() * nu.length)]
            let status2 = nu[Math.floor(Math.random() * nu.length)]
            let status3 = nu[Math.floor(Math.random() * nu.length)]
            let dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) {
                random = `${status1}`
            } else if (random_length == 2) {
                random = `${status1}${status2}`
            } else if (random_length == 3) {
                random = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    let anu1 = await Void.fetchStatus(anu[0].jid)
                } catch {
                    let anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text += `🧐 *الرقم:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*البايو ${anu1.status}\n🍁*اخر اتحديث :* ${moment(anu1.setAt).tz('Africa /Egypt').format('HH:mm:ss DD/MM/YYYY')}\n\n متصل او لا \n ${onlineList} `
               }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text}${nobio}${nowhatsapp}${onlineList}`)

    }
    
handler.help = ['number '];
handler.tags = ['نفسي']
handler.command = /^(هاتو)/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
export default handler;
