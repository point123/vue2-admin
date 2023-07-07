import Vue from "vue"
import VueI18n from "vue-i18n";
import zh_cn from "@/lang/zh_cn";
import en_us from "@/lang/en_us";

Vue.use(VueI18n);

export default new VueI18n({
    locale: "zh_cn",
    messages: {
        zh_cn,
        en_us,
    }
})