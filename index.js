const axios = require("axios");

const TOKEN = "HTTP API:
8714031556:AAF4iYEfhMTlBPGeSF3NPe-GUSCqZg3-NLJE";
const CHAT_ID = "1538316710";
const URL = "https://official-tickets.roadtoqatar.qa/qatar-football-festival/select/2742971";

let lastPage = "";

async function checkPage() {
  try {
    const res = await axios.get(URL);
    const currentPage = res.data;

    // إذا هذه أول مرة → نحفظ الصفحة بدون إرسال
    if (!lastPage) {
      lastPage = currentPage;
      return;
    }

    // إذا صار اختلاف → أرسل إشعار
    if (currentPage !== lastPage) {
      await axios.get(
        https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=🔥🔥 حصل تغيير في صفحة التذاكر!
      );

      console.log("✅ تم اكتشاف تغيير وإرسال إشعار");
      lastPage = currentPage;
    }

  } catch (error) {
    console.log("❌ خطأ في فحص الصفحة");
  }
}

setInterval(checkPage, 15000); // يفحص كل 15 ثانية