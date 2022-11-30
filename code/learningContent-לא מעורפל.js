/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "לומדת מערכות מתח";

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "7:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    "מבנה האטום": {
        // "icon":  "../assets/images/learning/Artboard 4.svg", // הכנס קישור של אייקון
        // שאלות לנושא הזה
        "questions": [
            {
                type: "binary",
                sentence: "אטום הוא החלק הקטן ביותר ביסוד",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "אלקטרון הוא מטען חיובי",
                trueOrFalse: false
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "מבנה האטום": {
                "מבנה האטום": [ 
                    {
                        cardType: "picAndText",
                        content: "אטום - החלק הקטן ביותר ביסוד.<br> פרוטון - מטענו חיובי ונמצא בתוך הגרעין. ניוטרון -מטענו ניטרלי (ללא מטען) ונמצא בתוך הגרעין.<br> אלקטרון - מטענו שלילי ונמצא מחוץ לגרעין<br><br> מטענו הכולל של אטום סטנדרטי שווה ל0 מכיוון שמינוס ופלוס מבטלים זה את זה <br><br> האלקטרונים נעים סביב הגרעין בתנועה מעגלית ונמשכים אליו. הפרוטונים והנויטרונים אינם נעים.",
                        pic: "../assets/images/learning/atomPic.svg"
                    },
                ],

            },
            "מטענים חשמליים": {
                "מטענים חשמליים": [
                    {
                        cardType: "picAndText",
                        pic:"../assets/images/learning/plusAndMinus.png",
                        content: 'גודלו של מטען חשמלי נקבע לפי כמות האלקטרונים ביחס לפרוטונים שבו.<br> בין שני מטענים חשמליים תמיד יווצר כוח חשמלי.<br> תוצר הכוח החשמלי מתחלק ל2: משיכה ודחייה. <br> שני מטענים חיוביים נדחים זה ע"י זה. שני מטענים שליליים נדחים זה ע"י זה. מטען חיובי ומטען שלילי נמשכים זה לזה.'
                    },
                    {
                        cardType: "text",
                        content: 'האלקטרונים מפוזרים במסלולם סביב האטום ברמות אנרגיה שונות ובמרחקים שונים.<br> ברמת האנרגיה העליונה, בה הכוח בין הגרעין לאלקטרון חלש יחסית, האלקטרון עשוי להתנתק ולכן נקרא "אלקטרון חופשי.“<br> לאלקטרון חופשי ישנה היכולת (פוטנציאל) לעבור מאטום לאטום וליצור זרם חשמלי. ברגע שלאטום נגרע/התווסף אלקטרון/ים הוא נטען חשמלית וייקרא יון. היון יהיה שלילי אם יהיה לנו עודף של אלקטרונים, ויהיה חיובי אם יהיה לנו עודף של פרוטונים.<br> *ברגע שמספר האלקטרונים והפרוטונים זהה, הוא ייחשב לאטום.'
                    },
                ],
            },
        },
    },
    // שם נושא
   "מושגי יסוד בחשמל": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "מהו זרם חשמלי?",
                ans1: "זרימת אלקטרונים מהקוטב החיובי לשלילי",
                ans2: "זרימת ניוטרונים מהקוטב השלילי לחיובי",
                ans3: "זרימת אלקטרונים מהקוטב השלילי לחיובי",
                ans4: "זרימת ניוטרונים מהקוטב החיובי לשלילי",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "מטען ששווה 3 ייחשב כמטען בעל חוסר אלקטרונים",
                trueOrFalse: true
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "מושגי יסוד בחשמל": {
                "מושגי יסוד בחשמל": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/battery.png",
                        content: ' חשמל: הגדרה כוללת לקבוצה של תופעות פיזיקליות הקשורות לנוכחות ולתנועה של מטען חשמלי.<br><br>זרם חשמלי: תנועה מכוונת ומסודרת של "אלקטרונים חופשיים" לאורך חומר מוליך. כיוון הזרם הוא מהקוטב השלילי של מקור המתח לקוטב החיובי. זרם חשמלי מסומן באות I ונמדד ביחידות מידה הנקראות אמפר המסומנות באות A.<br><br>מתח חשמלי: המעגל החשמלי שואף לאזן את המטען החשמלי בו, לכן התנועה של האלקטרונים תהיה מהקוטב השלילי העשיר באלקטרונים לקוטב החיובי הדל באלקטרונים. הפרש זה בין המטענים נקרא מתח. עוצמת הזרם שיזרום דרך מוליך מסוים מושפעת באופן ישיר מעוצמת המתח המופעלת באותו מוליך על פי נוסחה קבועה - ללא מתח אין זרם. מתח יסומן באות V ונמדד ביחידות מידה וולט (V).<br><br> ',
                    },
                ],
            },
        },
        
    },
    // שם נושא
    "חומר מוליך ומבודד": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "binary",
                sentence: "זהב הוא חומר מוליך?",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "מי ים הם חומר מבודד?",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "פלסטיק הוא חומר מבודד?",
                trueOrFalse: true
            },
        ],
        "amountOfQuestions": 3,
        "learningContent": {
            "חומר מוליך ומבודד": {
                "חומר מוליך ומבודד": [
                    {
                        cardType: "twoPics",
                        pic1: "../assets/images/learning/metal.png",
                        content1: "כמות האלקטרונים החופשיים הכוח ביניהם לגרעין משתנה <br><br> חומר מוליך: חומר המורכב מאטומים עשירים באלקטרונים חופשיים. כמו אלומיניום, זהב, מי ים וכו'",
                        pic2: "../assets/images/learning/wood.png",
                        content2: 'חומר מבודד: חומר המורכב מאטומים דלים באלקטרונים חופשיים או ללא אלקטרונים חופשיים. כמו עץ, פלסטיק, ניילון וכו.<br> *גם בתוך חומרים מולכים או מבודדים יש רמות שונות של מוליכות או בידוד בהתאם לחומר.'
                    },
                ],
            },
        },
    },
    "הארקה": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "מה הגוף הכי גדול שתמיד נעדיף להאריק אליו?",
                ans1: "סוליה של נעל",
                ans2: "אדמת כדור הארץ",
                ans3: "חול",
                ans4: "מתכת",
                correctAns: "ans4"
            },
        ],
        "learningContent": {
          "הארקה": {
                "הארקה": [
                    {
                        cardType: "picAndText",
                        pic:"../assets/images/learning/haaraka.png",
                        content: 'הארקה היא חיבור המכשיר החשמלי בעזרת מוליך לאדמה, כך שמטען הנצבר על גבי המכשיר נפרק באופן קבוע לאדמה. בכל מכשיר חשמלי תהיה הארקה כלשהי. אחד מהמוליכים יכול להיות גם גוף האדם, לכן אסור לגעת בפתילים חשופים, שקעים לא תקינים ואנטנות מחוברות (הארכת חיים)'
                    },
                ],
            },
        },
        "amountOfQuestions": 1
    },
    "קצר": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "במידה ויהיה קצר במעגל מה מהבאים יקרה?",
                ans1: "אוטומטית כל המעגל החשמלי יפסק",
                ans2: "המתח במעגל גדל",
                ans3: "הפתילים יתחממו וישרפו",
                ans4: "הזרם במעגל יהיה גבוה מאוד",
                correctAns: "ans4"
            },
        ],
        "learningContent": {
            "קצר": {
                  "קצר": [
                      {
                          cardType: "text",
                          content: 'מצב בו במעגל חשמלי לא קיים צרכן/ תקלה באחד הרכיבים - במצב זה הזרם הזורם במעגל הוא מאוד גבוה.<br> הקצר גורם להתבלות מקור המתח ובגלל הזרימה המוגברת, הפתילים המרכיבים את המעגל החשמלי יכולים להתחמם עד כדי שריפתם כדי למנוע את הקצר המציאו רכיב הנקרא "פיוז" או נתיך בעברית.'
                      },
                  ],
              },
          },
        "amountOfQuestions": 1,

    },
    "סוגי נתיכים": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "מה ההבדל בין נתיך נדרך לנשרף?",
                ans1: "נדרך הוא חד פעמי ונשרף הוא רב פעמי",
                ans2: "נשרף הוא חד פעמי ונדרך הוא רב פעמי",
                ans3: "נתיך נשרף נועד להישרף וסופג את כל הזרם",
                ans4: "נתיך נדרך דורך את הזרם במעגל",
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: "מהו תפקיד של נתיך?",
                ans1: "למנוע עומס יתר והתחממות במעגל החשמלי",
                ans2: "להיות הסוללה של המעגל",
                ans3: "ניתוק אוטומטי בעת תקלה במעגל",
                ans4: "להישרף בעת תקלה במעגל",
                correctAns: "ans1"
            },
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "סוגי נתיכים": {
                "סוגי נתיכים": [
                    {
                        cardType: "threePics",
                        pic1: "../assets/images/learning/flameNatich.png",
                        content1: 'נתיך נשרף: מוליך שייעודו להישרף בעת עומס יתר (מצב תקלה) במעגל החשמלי, ובכך למנוע את התפשטות תהליך ההתחממות הבלתי נשלט. הנתיך הנשרף הוא חד פעמי ואת הנתיך הנשרף יש להחליף לאחר איתור ותיקון התקלה במכשיר.  ',
                        pic2: "../assets/images/learning/natich.png",
                        content2: `נתיך נדרך: מתג עם שני מצבים שמאפשר ניתוק אוטומטי בעת עומס יתר (מצב תקלה) במעגל החשמלי, ובכך למנוע את התפשטות תהליך ההתחממות הבלתי נשלט. לאחר תיקון התקלה, יש להעביר את המתג למצב "גע". כלומר הוא רב פעמי`,
                        pic3: "../assets/images/learning/circle.jpg",
                        content3: "כך נראה מעגל חשמלי. בדוגמה זו תנועת האלקטרונים תיעצר בעקבות המפסק הפתוח ולכן לא יהיה מתח"
                    },
                ],

            }
        },
        "amountOfQuestions": 2
    },
    "זרם": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "binary",
                sentence: "שקע קיר הוא זרם ישר?",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "זרם שזורם בעוצמה קבועה ובמהירות קבועה יקרא?",
                ans1: "זרם חילופין",
                ans2: "זרם ישיר",
                ans3: "זרם רגיל",
                ans4: "זרם קבוע",
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: "סמן את התשובה הנכונה:",
                ans1: "24v זה זרם ישר ו230v זה זרם חילופין",
                ans2: "מתח של זרם חילופין משתנה בכל רגע נתון וזרם ישר יהיה קבוע 24v",
                ans3: "אין מתח ספציפי לכל זרם",
                ans4: "24v זה זרם חילופין ו230v זה זרם ישר",
                correctAns: "ans1"
            },
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "זרם": {
                "זרם": [
                    {
                        cardType: "textTwoParagraphs",
                        text1: 'זרם ישר  <br>DC (Direct Current) <br>זרם שזורם בכיוון אחד ובעוצמה קבועה. מסופק בדרך כלל על ידי סוללה, מצברים, גנרטור וכו. מכשירי הקשר המוסעים בצה"ל דורשים זרם ישר ממקור מתח של 24V',
                        text2: 'זרם חילופין - AC:<br>AC (Alternating Current)<br>זרם המשנה את כיוונו (מחיובי לשלילי ולהפך) ואת עוצמתו לאורך זמן בתדירות מסוימת. הזרם המיוצר ע"י חברת חשמל ומגיע לבית הינו זרם חילופין (שקע קיר). זאת מפני הפשטות והיעילות בהעברת זרם מסוג זה.'
                    },
                ],

            }
        },
        "amountOfQuestions": 3
    },
    "חיבור בטור ובמקביל": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "binary",
                sentence: "בחיבור טורי הזרם בין הצרכנים זהה?",
                trueOrFalse: true
            },
            {
                type: "binary",
                sentence: "בחיבור במקביל המתח על כל צרכן משתנה?",
                trueOrFalse: false
            },
            
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "חיבור בטור ובמביל": {
                "חיבור בטור ובמקביל": [
                    {
                        cardType: "picAndText",
                        pic:"../assets/images/learning/hiburBeturVebemakbil.jpg",
                        content: 'חיבור במקביל:<br> חיבור במקביל הוא חיבור שבו כל אחד מהמכשירים החשמליים מחובר באופן עצמאי למקור חשמל, כך נוצרים מספר מעגלים חשמליים, שאינם תלויים האחד בשני. ניתוק מכשיר אחד אינו מפריע לזרם במעגלים האחרים. רוב המכשירים מחוברים בשיטה זו. עוצמת הזרם בחיבור במקביל יהיה שווה לסך כל הזרמים הזורמים בכל תת מעגל.<br><br>חיבור בטור:<br> הצרכנים מחוברים בטור אחד אחרי השני. בחיבור בטור המכשירים החשמליים תלויים אחד בשני, כלומר אם אחד המכשירים מתקלקל, שאר המכשירים מפסיקים לפעול גם. הזרם זורם בצורה אחידה בכיוון אחד ובעוצמה קבועה.',
                    }
                ],

            }
        },
        "amountOfQuestions": 2
    },
    "מערכות מתח": {
        // "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questions": [
            {
                type: "multiple",
                question: "מה זה ס.כ (ספק כוח)?",
                ans1: "סוללה",
                ans2: "מכשיר שממיר בין זרם ישר לזרם חילופין",
                ans3: "מכשיר שממיר בין זרם חילופין לזרם ישר",
                ans4: "ספק כוח זה גנרטור",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "יש 3 מצברים בחמור מצברים",
                trueOrFalse: false
            }
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "מערכות מתח": {
                "מערכות מתח": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/tentionSystems.png",
                        content: 'כאשר נרצה לחבר מערכות מתח ניתקל ב2 אפשרויות:<br><br> 1. ספק כוח (ס.כ.) - זה מכשיר שלוקח את מתח הקיר של בין 220-230V זרם חילופין וממיר אותו ל24V זרם ישר למכשירי הקשר שלנו. תצורה זו תלויה ב100% במתח קיר לכן אם יש הפסקת חשמל, לא יהיה מתח. בגלל זה נראה את התצורה הזאת יותר במעבדות ולא בשטח.<br> 230V זרם חילופין -> ספק כוח->  24 V זרם ישר -> מכשירי קשר. <br> ארון חשמל -> תוף חשמל -> ספק כוח -> מצברים -> מ"ט.',
                    },
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/learning/hamorMatzberim.png",
                        content: '2. חמור מצברים (מ.ט 2900) - דרך שניה היא באמצעות חמור מצברים. בשיטה זו נוכל לספק מתח למכשירים ללא תלות במתח קיר אלא באמצעות מצברים נטענים.קודם ניקח את החמור מצברים ונכניס לתוכו את שני המצברים, כל מצבר 12V זרם ישר, סה"כ 24V. כעת נצטרך לחבר את כל המצברים לחמור מצברים עצמו באמצעות פתילי סנדליות. לאחר מכן נחבר את המ"טים באמצעות פתילי המתח בסנדליות לחיבור המתאים בחמור המצברים (או באמצעות קופסת מתח) והם יספקו מתח למכשירים (כמובן שנדליק את החמור מצברים עצמו). המצברים פועלים בעצמם כל עוד יש בהם מתח (כמו סוללה).',
                    },
                    {
                        cardType: "twoPics",
                        content1: 'על מנת להטעין את המצברים יש 2 אפשרויות:<br><br>1. נחבר מייצב כח למתח קיר (זרם חילופין)  והוא ימיר אותו לזרם ישר שאותו נחבר לחמור מצברים.',
                        pic1: "../assets/images/learning/Generator.jpeg",
                        content2: '2. גנרטור (י"כ) - נוכל לחבר גנרטור שיפעל על סולר ויתחבר לחמור מצברים כך בצורה כזאת אם נופל המתח קיר עדיין נוכל לעבור על הגנרטור.',
                        pic2: '../assets/images/learning/MK.jpeg',
                    },
                ],

            }
        },
        "amountOfQuestions": 2
    }
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.picTwoParagraphs = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.threePics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".pic3").src = json.pic3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}
CARD_TYPES.listDots3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}
CARD_TYPES.listNumbers3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}