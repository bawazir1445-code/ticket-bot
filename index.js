const axios = require("axios");

const TOKEN = "HTTP API:
8714031556:AAF4iYEfhMTlBPGeSF3NPe-GUSCqZg3-NLJE";
const CHAT_ID = "1538316710";
const URL = "https://official-tickets.roadtoqatar.qa/qatar-football-festival/select/2742971?hl=ar-QA&cp_landing=cta_hero&cp_landing_term=cta_hero&cp_landing_source=tickets.roadtoqatar&utm_source=direct&viewCode=Vista_Principal";

// الكلمة اللي يبحث عنها داخل الصفحة
const KEYWORD = "Available
  ";

let alreadySent = false;

async function checkTickets() {
  try {
    const res = await axios.get(URL);

    if (res.data.toLowerCase().includes(KEYWORD.toLowerCase())) {
      if (!alreadySent) {
        await axios.get(
          https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=🎟️ التذاكر متاحة الآن! 🚀
        );
        alreadySent = true;
        console.log("✅ تم إرسال الإشعار");
      }
    } else {
      alreadySent = false;
    }
  } catch (error) {
    console.log("❌ خطأ في فحص الصفحة");
  }
}

// يفحص كل دقيقة

setInterval(checkTickets, 60000);


