const sections = [
{
title: “1. Жеке мәліметтер”,
fields: [
[“Аты-жөні”, “text”],
[“Жасы”, “number”],
[“Тексеру күні”, “date”],
[“Логопедтің аты-жөні”, “text”],
[“Сөйлеу бұзылысының басталған уақыты”, “text”],
[“Бұрын жүргізілген түзету жұмыстары”, “textarea”]
]
},
{
title: “2. Жалпы бақылау”,
fields: [
[“Қарым-қатынасқа түсуі”, “textarea”],
[“Нұсқауды қабылдауы”, “textarea”],
[“Тапсырманы орындауға қатысуы”, “textarea”],
[“Шаршағыштығы”, “textarea”],
[“Қосымша ескертпе”, “textarea”]
]
},
{
title: “3. Сөйлеу дағдыларын бақылау”,
description: “Бағалау шкаласы: 3 – өздігінен дұрыс; 2 – қайталағаннан кейін; 1 – логопед көмегімен; 0 – орындай алмады.”,
groups: [
{
title: “3.1. Сөйлеуді түсіну”,
tasks: [
“Жеке сөздерді түсіну”,
“Сөзді суретпен сәйкестендіру”,
“Қарапайым нұсқауды орындау”,
“Күрделі нұсқауды орындау”,
“Сөйлемнің мағынасын түсіну”,
“Қысқа мәтінді тыңдап түсіну”
]
},
{
title: “3.2. Сөздік қор және атау”,
tasks: [
“Заттардың атауын айту”,
“Әрекеттерді атау”,
“Сурет бойынша сөз табу”,
“Сөздерді мағынасына қарай топтастыру”,
“Қажетті сөзді өздігінен еске түсіру”
]
},
{
title: “3.3. Ауызша сөйлеу және сөйлем құрау”,
tasks: [
“Дыбыс немесе буынды айту”,
“Сөзді қайталау”,
“Сөз тіркесін айту”,
“Қарапайым сөйлем құрау”,
“Сурет бойынша сөйлем құрау”,
“Қысқа әңгіме құрастыру”,
“Диалогқа қатысу”
]
},
{
title: “3.4. Қайталап айту”,
tasks: [
“Дыбысты қайталау”,
“Буындарды қайталау”,
“Сөзді қайталау”,
“Сөз тіркесін қайталау”,
“Сөйлемді қайталау”
]
},
{
title: “3.5. Оқу дағдылары”,
tasks: [
“Әріптерді тану”,
“Буындарды оқу”,
“Сөздерді оқу”,
“Сөзді суретпен сәйкестендіру”,
“Сөйлемді оқу және түсіну”,
“Қысқа мәтінді оқу және түсіну”
]
},
{
title: “3.6. Жазу дағдылары”,
tasks: [
“Әріптерді жазу”,
“Буындарды жазу”,
“Сөздерді көшіріп жазу”,
“Диктант бойынша сөз жазу”,
“Сурет бойынша сөз жазу”,
“Сөйлем құрастырып жазу”,
“Қысқа хабарлама жазу”
]
}
]
},
{
title: “4. Қарым-қатынас дағдыларын бақылау”,
description: “Адамның күнделікті өмірде өз ойын жеткізу мүмкіндігін бағалаңыз.”,
tasks: [
“Амандасу және қоштасу”,
“Өз аты-жөнін айту”,
“Қажеттілігін білдіру”,
“Сұраққа жауап беру”,
“Сұрақ қою”,
“Көмек сұрау”,
“Күнделікті диалогқа қатысу”
],
checkboxes: [
“Ауызша сөйлеу”,
“Ым-ишара”,
“Жазу”,
“Суреттер мен карточкалар”,
“Коммуникативтік тақта”
]
},
{
title: “5. Қосымша бақылау”,
description: “Бұл көрсеткіштер қажеттілігіне қарай тексеріледі.”,
checks: [
“Дыбыстарды айтуда қиындық байқалады”,
“Сөйлеу қарқынында өзгеріс байқалады”,
“Дауыс ерекшеліктері байқалады”,
“Сөйлеу кезінде қимылдық қиындық байқалады”,
“Тыныс пен сөйлеуді үйлестіруде қиындық байқалады”
],
note: true
},
{
title: “6. Логопедтің қорытындысы”,
fields: [
[“Салыстырмалы түрде жақсы сақталған дағдылар”, “textarea”],
[“Қиындық байқалған дағдылар”, “textarea”],
[“Логопедтің ұсыныстары”, “textarea”],
[“Логопедтің қолы”, “text”],
[“Күні”, “date”]
],
checkboxes: [
“Сөйлеуді түсіну”,
“Сөздік қорды белсендіру”,
“Сөздерді атау”,
“Сөйлем құрау”,
“Қайталап айту”,
“Оқу”,
“Жазу”,
“Күнделікті қарым-қатынас”,
“Қажеттілігіне қарай қосымша бағыттар”
]
},
{
title: “7. Даму динамикасын бақылау”,
description: “Әр бірнеше сабақтан кейін немесе белгіленген бақылау күнінде толтырылады.”,
dynamic: [
“Сөйлеуді түсіну”,
“Сөздік қор және атау”,
“Ауызша сөйлеу”,
“Қайталап айту”,
“Оқу”,
“Жазу”,
“Қарым-қатынас”
],
fields: [
[“Оң өзгеріс байқалған дағдылар”, “textarea”],
[“Әлі де жұмыс қажет ететін дағдылар”, “textarea”],
[“Келесі сабақтың мақсаты”, “textarea”],
[“Логопедтің ескертпесі”, “textarea”]
]
},
{
title: “8. Кабинетте қолдану тәртібі”,
information: [
“Бастапқы бақылау: алғашқы кездесуде адамның сөйлеу мүмкіндіктері мен қиындықтары тіркеледі.”,
“Аралық бақылау: түзету сабақтары барысында өзгерістер белгіленеді.”,
“Қорытынды бақылау: бастапқы және соңғы көрсеткіштер салыстырылады.”
]
}
];

const formContainer = document.getElementById(“formContainer”);

function createField(label, type, id) {
let input = type === “textarea”
? <textarea id="${id}" placeholder="Мәлімет енгізіңіз..."></textarea>
: <input id="${id}" type="${type}" placeholder="${type === "date" || type === "number" ? "" : "Мәлімет енгізіңіз..."}">;

return `
    <div class="form-group">
        <label for="${id}">${label}</label>
        ${input}
    </div>
`;

}

function createScoreTable(tasks, prefix) {
return <table class="task-list"> <thead> <tr> <th>Тексеру тапсырмасы</th> <th>Балл (0–3)</th> </tr> </thead> <tbody> ${tasks.map((task, i) =>
${task}
Таңдау
0
1
2
3
).join("")} </tbody> </table> ;
}

function createCheckboxes(items, prefix) {
return <div class="check-group"> ${items.map((item, i) =>
${item}
).join("")} </div> ;
}

function renderForm() {
let html = “”;

sections.forEach((section, index) => {
    html += `
        <div class="form-section">
            <h3>${section.title}</h3>
            ${section.description ? `<p class="section-description">${section.description}</p>` : ""}
    `;
    if (section.fields) {
        section.fields.forEach((field, i) => {
            html += createField(field[0], field[1], `field_${index}_${i}`);
        });
    }
    if (section.groups) {
        section.groups.forEach((group, i) => {
            html += `<h4 class="subsection-title">${group.title}</h4>`;
            html += createScoreTable(group.tasks, `score_${i}`);
            html += createField("Бақылау ескертпесі", "textarea", `group_note_${i}`);
        });
    }
    if (section.tasks) {
        html += createScoreTable(section.tasks, "communication");
    }
    if (section.checkboxes) {
        html += createCheckboxes(section.checkboxes, `checkbox_${index}`);
    }
    if (section.checks) {
        section.checks.forEach((item, i) => {
            html += `
                <div class="form-group">
                    <label>${item}</label>
                    <select id="check_${i}">
                        <option value="">Таңдау</option>
                        <option value="Иә">Иә</option>
                        <option value="Жоқ">Жоқ</option>
                    </select>
                </div>
            `;
        });
    }
    if (section.note) {
        html += createField("Қосымша түсініктеме", "textarea", "additional_note");
    }
    if (section.dynamic) {
        html += `
            <div class="table-scroll">
                <table class="task-list">
                    <thead>
                        <tr>
                            <th>Дағды</th>
                            <th>Бастапқы бақылау</th>
                            <th>Қайта бақылау</th>
                            <th>Соңғы бақылау</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${section.dynamic.map((item, i) => `
                            <tr>
                                <td>${item}</td>
                                <td><input type="number" min="0" max="3" id="dynamic_${i}_0"></td>
                                <td><input type="number" min="0" max="3" id="dynamic_${i}_1"></td>
                                <td><input type="number" min="0" max="3" id="dynamic_${i}_2"></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;
    }
    if (section.information) {
        html += section.information.map(item =>
            `<div class="result-card">${item}</div>`
        ).join("");
    }
    html += `</div>`;
});
html += `
    <div class="form-section">
        <h3>Бағалау туралы ескерту</h3>
        <p class="section-description">
            Бағалау нәтижелері тек осы тапсырмаларды орындау барысын сипаттайды.
            Бұл афазияның ауырлық дәрежесін анықтайтын диагностикалық шкала емес.
            Қосымша артикуляциялық немесе тыныс алу қиындықтары афазиясы бар
            әр адамда міндетті түрде кездеспейді.
        </p>
    </div>
`;
formContainer.innerHTML = html;

}

renderForm();

function collectData() {
const data = {};

document.querySelectorAll("#formContainer input, #formContainer textarea, #formContainer select")
    .forEach(element => {
        if (element.type === "checkbox") {
            data[element.id] = element.checked;
        } else {
            data[element.id] = element.value;
        }
    });
return data;

}

function restoreData(data) {
if (!data) return;

Object.entries(data).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (!element) return;
    if (element.type === "checkbox") {
        element.checked = value;
    } else {
        element.value = value;
    }
});

}

document.getElementById(“saveButton”).addEventListener(“click”, () => {
const data = collectData();

localStorage.setItem("tilashar_speech_card", JSON.stringify(data));
alert("Сөйлеу картасы сәтті сақталды!");

});

const savedData = localStorage.getItem(“tilashar_speech_card”);

if (savedData) {
restoreData(JSON.parse(savedData));
}

function calculateResults() {
const groups = {};

document.querySelectorAll('[data-score="true"]').forEach(select => {
    const group = select.dataset.group;
    if (!groups[group]) {
        groups[group] = {
            total: 0,
            max: 0,
            count: 0
        };
    }
    if (select.value !== "") {
        groups[group].total += Number(select.value);
        groups[group].max += 3;
        groups[group].count++;
    }
});
const communicationScores = groups.communication;
const communicationCount = communicationScores ? communicationScores.count : 0;
let allTotal = 0;
let allMax = 0;
let allCount = 0;
Object.values(groups).forEach(group => {
    allTotal += group.total;
    allMax += group.max;
    allCount += group.count;
});
const percentage = allMax > 0
    ? Math.round((allTotal / allMax) * 100)
    : 0;
return {
    groups,
    allTotal,
    allMax,
    allCount,
    percentage,
    communicationCount
};

}

function showResults() {
const result = calculateResults();

const resultSection = document.getElementById("resultSection");
const resultContent = document.getElementById("resultContent");
if (result.allCount === 0) {
    alert("Алдымен сөйлеу дағдыларын бағалау бөлімдеріне балл қойыңыз.");
    return;
}
const groupNames = {
    score_0: "Сөйлеуді түсіну",
    score_1: "Сөздік қор және атау",
    score_2: "Ауызша сөйлеу және сөйлем құрау",
    score_3: "Қайталап айту",
    score_4: "Оқу дағдылары",
    score_5: "Жазу дағдылары",
    communication: "Қарым-қатынас дағдылары"
};
let html = `
    <div class="result-card">
        <div class="result-description">Жалпы бағалау көрсеткіші</div>
        <div class="result-number">${result.percentage}%</div>
        <div class="progress-track">
            <div class="progress-fill" style="width:${result.percentage}%"></div>
        </div>
        <p>${result.allCount} тапсырма бағаланды.</p>
        <p>Жиналған балл: ${result.allTotal} / ${result.allMax}</p>
    </div>
`;
Object.entries(result.groups).forEach(([key, group]) => {
    const percent = Math.round((group.total / group.max) * 100);
    html += `
        <div class="result-card">
            <strong>${groupNames[key] || key}</strong>
            <div class="result-number">${percent}%</div>
            <div class="progress-track">
                <div class="progress-fill" style="width:${percent}%"></div>
            </div>
            <p>${group.count} тапсырма бағаланды. Балл: ${group.total}/${group.max}</p>
        </div>
    `;
});
html += `
    <div class="result-card">
        <strong>Нәтижені түсіндіру</strong>
        <p>
            Бұл пайыз толтырылған тапсырмалар бойынша алынған
            балдардың ең жоғары мүмкін балға қатынасын көрсетеді.
            Ол афазияның ауырлық дәрежесін анықтамайды.
            Қорытындыны логопед жеке бақылау деректерімен бірге жасайды.
        </p>
    </div>
    <button type="button" id="printButton" onclick="window.print()">
        НӘТИЖЕНІ БАСЫП ШЫҒАРУ
    </button>
`;
resultContent.innerHTML = html;
resultSection.hidden = false;
resultSection.scrollIntoView({ behavior: "smooth" });

}

document.getElementById(“resultButton”).addEventListener(“click”, showResults);
