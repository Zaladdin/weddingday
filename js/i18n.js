(() => {
    const STORAGE_KEY = "wedding-language";
    const DEFAULT_LANGUAGE = "ru";

    const translations = {
        ru: {
            meta: {
                homeTitle: "Z & E | Приглашение",
                invitationTitle: "Свадебное приглашение",
                detailsTitle: "The Details"
            },
            common: {
                withLove: "С ЛЮБОВЬЮ",
                clickHere: "НАЖМИТЕ ЗДЕСЬ"
            },
            home: {
                subtitle: "свадебное приглашение",
                hint: "нажмите на конверт, чтобы открыть",
                envelopeAlt: "Конверт"
            },
            invitation: {
                hero: {
                    alt: "Свадебное приглашение",
                    names: "Zaladdin & Emiliya",
                    date: "09.08.2026",
                    location: "Баку, Азербайджан"
                },
                intro: {
                    lead: "Вступая в новую главу нашей жизни, нам было бы искренне приятно разделить этот особенный день с вами. На этой странице вы найдёте всю важную информацию: расписание мероприятия, детали о месте проведения и ещё несколько приятных сюрпризов.",
                    closing: "За любовь, радость и начало нашей вечности!"
                },
                rsvp: {
                    title: "The Details",
                    envelopeAlt: "Конверт с деталями"
                },
                story: {
                    title: "Our<br>History"
                },
                footer: {
                    contact: "По всем вопросам свяжитесь напрямую с Zaladdin или Emiliya.",
                    back: "• НАЗАД К КОНВЕРТУ"
                },
                modals: {
                    rsvp: {
                        title: "The Details",
                        body: "Здесь вы найдёте всю важную информацию о нашем свадебном дне: расписание, место проведения и многое другое."
                    },
                    details: {
                        title: "Детали",
                        body: "Здесь вы найдёте всю важную информацию о нашем свадебном дне: расписание, место проведения и многое другое."
                    },
                    story: {
                        title: "Our History",
                        body: "Наша история всё ещё пишется, и мы очень счастливы разделить эту главу вместе с вами."
                    }
                }
            },
            details: {
                hero: {
                    title: "The Details",
                    back: "< НАЗАД",
                    imageAlt: "The Details"
                },
                dateLocation: {
                    title: "Дата и место",
                    dateLabel: "дата",
                    dateValue: "09.08.2026",
                    ceremonyLabel: "церемония",
                    ceremonyValue: "14:30&nbsp;&nbsp;&nbsp;Eshgala<br>Mərdakan, Dərya Dadaşov küç.",
                    ceremonyNote: "С 14:30 начинаем встречать гостей в Eshgala. Просим приехать немного заранее, чтобы спокойно разместиться, поприветствовать друг друга и без спешки подготовиться к началу церемонии в 15:00.",
                    receptionLabel: "вечер",
                    receptionValue: "18:00&nbsp;&nbsp;&nbsp;Liora Luxury Hall<br>Binəqədi, Məsud Davudoğlu 17"
                },
                timeline: {
                    title: "Тайминг дня",
                    intro: "Ниже собрали ориентировочный план нашего свадебного дня, чтобы вам было удобно сориентироваться и заранее понимать ход праздника.",
                    meet: {
                        time: "14:30",
                        label: "Сбор гостей",
                        description: "Встречаем гостей, помогаем с размещением и даём время спокойно настроиться на праздник."
                    },
                    ceremony: {
                        time: "15:00",
                        label: "Церемония",
                        description: "Официальная часть дня: тёплые слова, клятвы, кольца и момент, который мы очень хотим разделить с вами."
                    },
                    cocktails: {
                        time: "15:40",
                        label: "Фуршет",
                        description: "После церемонии будет время на лёгкий фуршет, поздравления, общение и первые тосты."
                    },
                    photos: {
                        time: "16:20",
                        label: "Фотографии",
                        description: "Запланируем несколько общих и семейных кадров, а затем останется время на живые снимки с гостями."
                    },
                    dinner: {
                        time: "18:00",
                        label: "Вечерняя программа",
                        description: "Продолжим праздник в Liora Luxury Hall: ужин, музыка, танцы и основная часть вечернего торжества."
                    },
                    farewell: {
                        time: "23:00",
                        label: "Окончание праздника",
                        description: "Ближе к завершению вечера соберём финальные объятия, тёплые слова и проводим этот день с благодарностью."
                    }
                },
                directions: {
                    title: "Как добраться",
                    byCarLabel: "На машине",
                    byCarBody: "Точный адрес площадки мы добавим здесь ближе к дате.<br>Для удобства рекомендуем сохранить адрес в навигаторе заранее.",
                    byTaxiLabel: "На такси",
                    byTaxiBody: "Если вы не планируете ехать на машине, удобнее всего добраться на такси.<br>Советуем заказать его заранее, особенно в вечернее время."
                },
                other: {
                    title: "Дополнительная информация",
                    dresscodeLabel: "дресс-код",
                    dresscodeBody: "Будем рады видеть вас в палитре dress code, показанной ниже: элегантно, празднично и комфортно для тёплого летнего дня.<br>Ожидается яркое солнце, поэтому просим заранее нанести SPF и, по желанию, взять солнцезащитные очки."
                },
                footer: {
                    photoAlt: "Zaladdin & Emiliya"
                }
            }
        },
        az: {
            meta: {
                homeTitle: "Z & E | Dəvət",
                invitationTitle: "Toy dəvəti",
                detailsTitle: "The Details"
            },
            common: {
                withLove: "SEVGİ İLƏ",
                clickHere: "BURAYA TOXUNUN"
            },
            home: {
                subtitle: "toy dəvəti",
                hint: "açmaq üçün zərfə toxunun",
                envelopeAlt: "Zərf"
            },
            invitation: {
                hero: {
                    alt: "Toy dəvəti",
                    names: "Zaladdin & Emiliya",
                    date: "09.08.2026",
                    location: "Bakı, Azərbaycan"
                },
                intro: {
                    lead: "Həyatımızın yeni bir fəslinə qədəm qoyarkən, bu özəl günü sizinlə bölüşmək bizim üçün səmimi bir sevinc olar. Bu səhifədə siz tədbirin proqramı, məkanla bağlı detallar və bir neçə xoş sürpriz də daxil olmaqla bütün vacib məlumatları tapa bilərsiniz.",
                    closing: "Sevgi, sevinc və əbədi yolumuzun başlanğıcına!"
                },
                rsvp: {
                    title: "The Details",
                    envelopeAlt: "Təfərrüatlar zərfi"
                },
                story: {
                    title: "Our<br>History"
                },
                footer: {
                    contact: "Hər hansı sualınız olarsa, birbaşa Zaladdin və ya Emiliya ilə əlaqə saxlayın.",
                    back: "• ZƏRFƏ QAYIT"
                },
                modals: {
                    rsvp: {
                        title: "The Details",
                        body: "Burada toy günümüzlə bağlı bütün vacib məlumatları tapa bilərsiniz: proqram, məkan və digər vacib detallar."
                    },
                    details: {
                        title: "Təfərrüatlar",
                        body: "Burada toy günümüzlə bağlı bütün vacib məlumatları tapa bilərsiniz: proqram, məkan və digər vacib detallar."
                    },
                    story: {
                        title: "Our History",
                        body: "Bizim hekayəmiz hələ də yazılır və bu fəslimizi sizinlə bölüşməkdən çox xoşbəxtik."
                    }
                }
            },
            details: {
                hero: {
                    title: "The Details",
                    back: "< GERI",
                    imageAlt: "The Details"
                },
                dateLocation: {
                    title: "Tarix və məkan",
                    dateLabel: "tarix",
                    dateValue: "09.08.2026",
                    ceremonyLabel: "mərasim",
                    ceremonyValue: "14:30&nbsp;&nbsp;&nbsp;Eshgala<br>Mərdakan, Dərya Dadaşov küç.",
                    ceremonyNote: "Saat 14:30-dan etibarən qonaqları Eshgala-da qarşılamağa başlayırıq. Rahat yerləşmək, bir-birinizi salamlamaq və saat 15:00-da başlayacaq mərasimə tələsmədən hazırlaşmaq üçün bir qədər tez gəlməyinizi xahiş edirik.",
                    receptionLabel: "axşam",
                    receptionValue: "18:00&nbsp;&nbsp;&nbsp;Liora Luxury Hall<br>Binəqədi, Məsud Davudoğlu 17"
                },
                timeline: {
                    title: "Günün planı",
                    intro: "Toy günümüzün təxmini planını aşağıda topladıq ki, günün gedişatını əvvəlcədən rahat şəkildə görə biləsiniz.",
                    meet: {
                        time: "14:30",
                        label: "Qonaqların gəlişi",
                        description: "Qonaqları qarşılayır, yerləşməyə kömək edir və hər kəsə bayram ab-havasına rahat uyğunlaşmaq üçün vaxt veririk."
                    },
                    ceremony: {
                        time: "15:00",
                        label: "Mərasim",
                        description: "Günün rəsmi hissəsi: səmimi sözlər, andlar, üzüklər və sizinlə bölüşmək istədiyimiz ən xüsusi an."
                    },
                    cocktails: {
                        time: "15:40",
                        label: "Furşet",
                        description: "Mərasimdən sonra yüngül furşet, təbriklər, ünsiyyət və ilk xoş tostlar üçün vaxt olacaq."
                    },
                    photos: {
                        time: "16:20",
                        label: "Şəkillər",
                        description: "Bir neçə ümumi və ailə şəkli çəkdirəcəyik, daha sonra isə qonaqlarla səmimi kadrlara vaxt qalacaq."
                    },
                    dinner: {
                        time: "18:00",
                        label: "Axşam proqramı",
                        description: "Bayramı Liora Luxury Hall-da davam etdirəcəyik: şam yeməyi, musiqi, rəqs və gecənin əsas proqramı."
                    },
                    farewell: {
                        time: "23:00",
                        label: "Bayramın sonu",
                        description: "Gecənin sonuna yaxın son qucaqlaşmalar, səmimi sözlər və bu günü minnətdarlıqla yola salacağıq."
                    }
                },
                directions: {
                    title: "Necə gəlmək olar",
                    byCarLabel: "Avtomobillə",
                    byCarBody: "Məkanın dəqiq ünvanını tarixə yaxın burada əlavə edəcəyik.<br>Ünvanı əvvəlcədən naviqasiyada saxlamağınızı tövsiyə edirik.",
                    byTaxiLabel: "Taksi ilə",
                    byTaxiBody: "Əgər avtomobillə gəlmirsinizsə, ən rahat seçim taksidir.<br>Xüsusilə axşam saatları üçün öncədən sifariş verməyi tövsiyə edirik."
                },
                other: {
                    title: "Əlavə məlumat",
                    dresscodeLabel: "geyim tərzi",
                    dresscodeBody: "Sizi aşağıda göstərilən dress code rəng palitrasında görməkdən məmnun olarıq: zərif, bayram ab-havalı və isti yay gününə uyğun rahat obrazlar.<br>Havanın günəşli olacağı gözlənilir, buna görə SPF çəkməyinizi və istəsəniz gün eynəyi götürməyinizi xahiş edirik."
                },
                footer: {
                    photoAlt: "Zaladdin & Emiliya"
                }
            }
        }
    };

    function getValue(source, path) {
        return path.split(".").reduce((accumulator, part) => {
            if (accumulator && Object.prototype.hasOwnProperty.call(accumulator, part)) {
                return accumulator[part];
            }

            return undefined;
        }, source);
    }

    function updateActiveButton(language) {
        document.querySelectorAll(".language-switcher__button").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.lang === language);
        });
    }

    function applyTranslations(language) {
        const dictionary = translations[language];
        const page = document.body.dataset.page;

        if (!dictionary || !page) {
            return;
        }

        document.documentElement.lang = language;

        const titleKeyByPage = {
            home: "meta.homeTitle",
            invitation: "meta.invitationTitle",
            details: "meta.detailsTitle"
        };
        const titleKey = titleKeyByPage[page];
        const translatedTitle = titleKey ? getValue(dictionary, titleKey) : undefined;

        if (translatedTitle) {
            document.title = translatedTitle;
        }

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const translatedText = getValue(dictionary, element.dataset.i18n);

            if (typeof translatedText === "string") {
                element.textContent = translatedText;
            }
        });

        document.querySelectorAll("[data-i18n-html]").forEach((element) => {
            const translatedHtml = getValue(dictionary, element.dataset.i18nHtml);

            if (typeof translatedHtml === "string") {
                element.innerHTML = translatedHtml;
            }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const translatedAlt = getValue(dictionary, element.dataset.i18nAlt);

            if (typeof translatedAlt === "string") {
                element.alt = translatedAlt;
            }
        });

        updateActiveButton(language);
    }

    function setLanguage(language) {
        if (!translations[language]) {
            return;
        }

        localStorage.setItem(STORAGE_KEY, language);
        applyTranslations(language);
    }

    document.querySelectorAll(".language-switcher__button").forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    const initialLanguage = translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;

    applyTranslations(initialLanguage);
})();
