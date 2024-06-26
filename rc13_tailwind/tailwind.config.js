/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //* projemize bir plugin dahil etmek istiyorsak config dosyasına eklememiz gerekir
  // content: ["./node_modules/flowbite/**/*.js"],
  //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.

    extend: {
      colors: {
        primary: "#891652",
        primary_hover: "#1450A3",
        dark: "#526D82",
        darker: "#27374D",
        blue: {
          950: "#17275c",
        },
      },
    },
  },
  plugins: [],
  //* projemize bir plugin dahil etmek istiyorsak config dosyasına eklememiz gerekir
  // plugins: [require("flowbite/plugin")],
  darkMode: "selector",
};
