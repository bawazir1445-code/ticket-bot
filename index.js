const axios = require("axios");

const TOKEN = "HTTP API:
8714031556:AAF4iYEfhMTlBPGeSF3NPe-GUSCqZg3-NLJE";
const CHAT_ID = "1538316710";
const URL = "https://official-tickets.roadtoqatar.qa/qatar-football-festival/select/2742971?viewCode=Vista_Principal";

let lastContent = "";

async function checkTickets() {
  try {
    const res = await axios.get(URL);
    const currentContent = res.data;

    // نقارن بين نسخة الصفحة القديمة والجديدة
    if (lastContent && currentContent !== lastContent) {
      await axios.get(
        https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=🔥🔥 حصل تغيير في صفحة التذاكر!
      );
      console.log("✅ تم اكتشاف تغيير وإرسال إشعار");
    }

    lastContent = currentContent;

  } catch (err) {
    console.log("❌ خطأ في الفحص");
  }
}

setInterval(checkTickets, 20000);