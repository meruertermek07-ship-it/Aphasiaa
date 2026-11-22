/* ==================================
   1. БӨЛІМДЕРДІҢ АҚПАРАТЫ
================================== */

const sections = {

    breathing: {
        number: "01 БӨЛІМ",
        title: "Тыныс алу",
        description: "Сөйлеу тынысын дамытуға арналған логопедиялық бағыт.",
        information: "Бұл бөлімде сөйлеу тынысын қалыптастыруға, тыныс шығаруды реттеуге және сөйлеу кезіндегі тыныс алу дағдыларын дамытуға арналған жаттығулар мен тапсырмалар орналастырылады."
    },

    articulation: {
        number: "02 БӨЛІМ",
        title: "Артикуляция",
        description: "Артикуляциялық аппаратты дамытуға арналған бағыт.",
        information: "Бұл бөлімде тіл, ерін, жақ және басқа артикуляциялық мүшелердің қозғалысын дамытуға арналған жаттығулар мен көрнекі материалдар орналастырылады."
    },

    vocabulary: {
        number: "03 БӨЛІМ",
        title: "Сөздік қор",
        description: "Сөздік қорды дамыту және белсендіру.",
        information: "Бұл бөлімде заттарды атау, суреттерді сәйкестендіру, сөз мағынасын түсіну, сөздерді топтастыру және сөздік қорды белсендіруге арналған тапсырмалар орналастырылады."
    },

    understanding: {
        number: "04 БӨЛІМ",
        title: "Сөйлеуді түсіну",
        description: "Ауызша сөйлеуді қабылдау және түсіну.",
        information: "Бұл бөлімде сөзді, сөз тіркесін және сөйлемді түсінуге, нұсқауларды орындауға және есту арқылы қабылдауды дамытуға арналған тапсырмалар орналастырылады."
    },

    speech: {
        number: "05 БӨЛІМ",
        title: "Сөйлеуді қалыптастыру",
        description: "Сөйлеу дағдыларын қалыптастыру.",
        information: "Бұл бөлімде сөздерді қайталау, сөз тіркестерін құрастыру, сөйлем құру және байланыстырып сөйлеуді дамытуға арналған жаттығулар орналастырылады."
    },

    reading: {
        number: "06 БӨЛІМ",
        title: "Оқу және жазу",
        description: "Оқу және жазу дағдыларын дамыту.",
        information: "Бұл бөлімде әріптерді тану, буындарды оқу, сөздерді оқу, жазу және мәтінмен жұмыс жасауға арналған тапсырмалар орналастырылады."
    },

    logorhythmics: {
        number: "07 БӨЛІМ",
        title: "Логоритмика",
        description: "Қозғалыс, ырғақ және сөйлеуді үйлестіру.",
        information: "Бұл бөлімде қозғалыс пен сөйлеуді үйлестіруге, ырғақты сезінуге, қимылдарды орындауға және музыкалық сүйемелдеумен жұмыс жасауға арналған жаттығулар орналастырылады."
    },

    results: {
        number: "08 БӨЛІМ",
        title: "Нәтижелер",
        description: "Орындалған тапсырмаларды бақылау.",
        information: "Бұл бөлімде орындалған тапсырмалар, жинақталған ұпайлар және жұмыс барысындағы нәтижелер көрсетіледі."
    }

};


/* ==================================
   2. БАСТЫ БЕТТЕН КІРУ
================================== */

function enterSite() {

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("mainPage")
        .classList.remove("hidden");

    document.getElementById("sectionPage")
        .classList.add("hidden");

    window.scrollTo(0, 0);

}


/* ==================================
   3. БӨЛІМДІ АШУ
================================== */

function openSection(sectionName) {

    const section = sections[sectionName];

    if (!section) {
        return;
    }

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("mainPage")
        .classList.add("hidden");

    document.getElementById("sectionPage")
        .classList.remove("hidden");


    // Бөлім атауы

    document.getElementById("sectionNumber")
        .textContent = section.number;

    document.getElementById("selectedTitle")
        .textContent = section.title;

    document.getElementById("selectedDescription")
        .textContent = section.description;

    document.getElementById("sectionInformation")
        .textContent = section.information;


    // Тапсырмалар аймағын тазарту

    document.getElementById("taskContent")
        .innerHTML = "";


    // Беттің жоғарғы жағына өту

    window.scrollTo(0, 0);

}


/* ==================================
   4. НЕГІЗГІ МӘЗІРГЕ ҚАЙТУ
================================== */

function backToMenu() {

    document.getElementById("sectionPage")
        .classList.add("hidden");

    document.getElementById("mainPage")
        .classList.remove("hidden");

    window.scrollTo(0, 0);

}


/* ==================================
   5. БАСТЫ БЕТКЕ ҚАЙТУ
================================== */

function backToHome() {

    document.getElementById("sectionPage")
        .classList.add("hidden");

    document.getElementById("mainPage")
        .classList.add("hidden");

    document.getElementById("homePage")
        .classList.remove("hidden");

    window.scrollTo(0, 0);

}
