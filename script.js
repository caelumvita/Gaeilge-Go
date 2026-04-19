const vocabulary = [
  { irish: 'Dia dhuit', uk: 'привіт', pron: 'діа ґвич', category: 'Привітання' },
  { irish: 'Dia is Muire dhuit', uk: 'відповідь на привітання', pron: 'діа іс мурє ґвич', category: 'Привітання' },
  { irish: 'Slán', uk: 'бувай', pron: 'слоон', category: 'Привітання' },
  { irish: 'Slán leat', uk: 'бувай (до однієї людини)', pron: 'слоон лят', category: 'Привітання' },
  { irish: 'Go raibh maith agat', uk: 'дякую', pron: 'ґо рев ма агат', category: 'Привітання' },
  { irish: 'Tá fáilte romhat', uk: 'будь ласка', pron: 'та фольче роват', category: 'Привітання' },

  { irish: 'duine', uk: 'людина', pron: 'динє', category: 'Прості слова' },
  { irish: 'cara', uk: 'друг', pron: 'кара', category: 'Прості слова' },
  { irish: 'teach', uk: 'дім', pron: 'тях', category: 'Прості слова' },
  { irish: 'uisce', uk: 'вода', pron: 'ішке', category: 'Прості слова' },
  { irish: 'arán', uk: 'хліб', pron: 'араан', category: 'Прості слова' },
  { irish: 'ainm', uk: 'ім’я', pron: 'анім', category: 'Прості слова' },
  { irish: 'páiste', uk: 'дитина', pron: 'паште', category: 'Прості слова' },
  { irish: 'bean', uk: 'жінка', pron: 'бян', category: 'Прості слова' },
  { irish: 'fear', uk: 'чоловік', pron: 'фяр', category: 'Прості слова' },

  { irish: 'Tá mé', uk: 'я є', pron: 'та мє', category: 'Граматика' },
  { irish: 'Tá tú', uk: 'ти є', pron: 'та ту', category: 'Граматика' },
  { irish: 'Tá sé', uk: 'він є', pron: 'та ше', category: 'Граматика' },
  { irish: 'Tá sí', uk: 'вона є', pron: 'та ші', category: 'Граматика' },
  { irish: 'Tá muid / Táimid', uk: 'ми є', pron: 'та мидь', category: 'Граматика' },
  { irish: 'Tá sibh', uk: 'ви є', pron: 'та шив', category: 'Граматика' },
  { irish: 'Tá siad', uk: 'вони є', pron: 'та шід', category: 'Граматика' },
  { irish: 'Tá mé go maith', uk: 'я добре', pron: 'та мє ґо ма', category: 'Граматика' },
  { irish: 'Tá tú tuirseach', uk: 'ти втомлений / втомлена', pron: 'та ту туршах', category: 'Граматика' },
  { irish: 'Tá sí sásta', uk: 'вона щаслива', pron: 'та ші сооста', category: 'Граматика' },
  { irish: 'Is ainm dom', uk: 'мене звати', pron: 'іс анім дум', category: 'Граматика' },

  { irish: 'An Cháisc', uk: 'Великдень / Пасха', pron: 'ан хашкь', category: 'Великдень' },
  { irish: 'cáca Cásca', uk: 'паска', pron: 'каака кооска', category: 'Великдень' },
  { irish: 'ubh Cásca', uk: 'великоднє яйце', pron: 'ув кооска', category: 'Великдень' },
  { irish: 'ubh', uk: 'яйце', pron: 'ув', category: 'Великдень' },
  { irish: 'Críostaí', uk: 'християнин', pron: 'кріістіі', category: 'Великдень' },
  { irish: 'an Chríostaíocht', uk: 'християнство', pron: 'ан хріістаїхт', category: 'Великдень' },
  { irish: 'Dia', uk: 'Бог', pron: 'діа', category: 'Великдень' },
  { irish: 'Íosa', uk: 'Ісус', pron: 'іса', category: 'Великдень' },
  { irish: 'eaglais', uk: 'церква', pron: 'агліш', category: 'Великдень' },
  { irish: 'paidir', uk: 'молитва', pron: 'паджір', category: 'Великдень' },
  { irish: 'naomh', uk: 'святий', pron: 'нів', category: 'Великдень' },
  { irish: 'beannacht', uk: 'благословення', pron: 'бянахт', category: 'Великдень' },
  { irish: 'creideamh', uk: 'віра', pron: 'кредєв', category: 'Великдень' },
  { irish: 'neamh', uk: 'небо / рай', pron: 'няв', category: 'Великдень' },
  { irish: 'ifreann', uk: 'пекло', pron: 'іфран', category: 'Великдень' },
  { irish: 'Aiséirí', uk: 'воскресіння', pron: 'ашееріі', category: 'Великдень' },
  { irish: 'an chros', uk: 'хрест', pron: 'ан хрос', category: 'Великдень' },
  { irish: 'anam', uk: 'душа', pron: 'анам', category: 'Великдень' },

  { irish: 'solas', uk: 'світло', pron: 'солас', category: 'Красиві слова' },
  { irish: 'dorcha', uk: 'темний', pron: 'дорха', category: 'Красиві слова' },
  { irish: 'grá', uk: 'любов', pron: 'ґраа', category: 'Красиві слова' },
  { irish: 'síocháin', uk: 'мир, спокій', pron: 'шііхаань', category: 'Красиві слова' },
  { irish: 'dóchas', uk: 'надія', pron: 'доохас', category: 'Красиві слова' },
  { irish: 'beatha', uk: 'життя', pron: 'бяха', category: 'Красиві слова' },
  { irish: 'bás', uk: 'смерть', pron: 'баас', category: 'Красиві слова' },
  { irish: 'fírinne', uk: 'правда', pron: 'фірінє', category: 'Красиві слова' },
  { irish: 'maithiúnas', uk: 'прощення', pron: 'махунес', category: 'Красиві слова' },
  { irish: 'croí', uk: 'серце', pron: 'крі', category: 'Красиві слова' },
  { irish: 'réalta', uk: 'зірка', pron: 'рєйлта', category: 'Красиві слова' },
  { irish: 'gealach', uk: 'місяць', pron: 'ґалах', category: 'Красиві слова' },
  { irish: 'grian', uk: 'сонце', pron: 'ґріан', category: 'Красиві слова' },
  { irish: 'muinín', uk: 'довіра', pron: 'муйнінь', category: 'Красиві слова' },
  { irish: 'cineáltas', uk: 'доброта', pron: 'кінєалтас', category: 'Красиві слова' },
  { irish: 'sonas', uk: 'щастя', pron: 'сонас', category: 'Красиві слова' },
  { irish: 'beannaithe', uk: 'благословенний', pron: 'бянахе', category: 'Красиві слова' },
  { irish: 'solas Dé', uk: 'світло Бога', pron: 'солас дзе', category: 'Красиві слова' },

  { irish: 'Sláinte!', uk: 'будьмо! / за здоров’я!', pron: 'слонче', category: 'Фрази' },
  { irish: 'Sláinte mhaith!', uk: 'доброго здоров’я!', pron: 'слонче вах', category: 'Фрази' },
  { irish: 'Go maire muid!', uk: 'хай ми живемо! / будьмо!', pron: 'ґо маре мудь', category: 'Фрази' },
  { irish: 'Is féidir liom', uk: 'я можу', pron: 'іс фєдір ліом', category: 'Фрази' },
  { irish: 'Is féidir leat', uk: 'ти можеш', pron: 'іс фєдір лят', category: 'Фрази' },
  { irish: 'Is féidir leis', uk: 'він може', pron: 'іс фєдір лєш', category: 'Фрази' },
  { irish: 'Is féidir léi', uk: 'вона може', pron: 'іс фєдір лей', category: 'Фрази' },
  { irish: 'Is féidir linn', uk: 'ми можемо', pron: 'іс фєдір лінь', category: 'Фрази' },
  { irish: 'Is féidir libh', uk: 'ви можете', pron: 'іс фєдір лів', category: 'Фрази' },
  { irish: 'Is féidir leo', uk: 'вони можуть', pron: 'іс фєдір льо', category: 'Фрази' },
  { irish: 'Ní féidir liom', uk: 'я не можу', pron: 'ні фєдір ліом', category: 'Фрази' },
  { irish: 'An féidir leat...?', uk: 'чи можеш ти...?', pron: 'ан фєдір лят', category: 'Фрази' },
  { irish: 'Ná habair é!', uk: 'та нічого!', pron: 'на авар е', category: 'Фрази' },
  { irish: 'Fáilte!', uk: 'ласкаво прошу / будь ласка', pron: 'фольче', category: 'Фрази' },

  { irish: 'madra', uk: 'собака', pron: 'мадра', category: 'Нові слова' },
  { irish: 'cat', uk: 'кіт', pron: 'кат', category: 'Нові слова' },
  { irish: 'scoil', uk: 'школа', pron: 'сколь', category: 'Нові слова' },
  { irish: 'leabhar', uk: 'книга', pron: 'ляур / ляуар', category: 'Нові слова' },
  { irish: 'bia', uk: 'їжа', pron: 'бія', category: 'Нові слова' },
  { irish: 'teaghlach', uk: 'сім’я', pron: 'тяллах / тьяулах', category: 'Нові слова' },
];

const sentenceChallenges = [
  { sentence: 'Tá mé go maith.', hint: 'Я добре.' },
  { sentence: 'Tá tú tuirseach.', hint: 'Ти втомлений / втомлена.' },
  { sentence: 'Tá sí sásta.', hint: 'Вона щаслива.' },
  { sentence: 'Is ainm dom Davyd.', hint: 'Мене звати Давид.' },
  { sentence: 'Tá an Cháisc ag teacht.', hint: 'Великдень наближається.' },
  { sentence: 'Tá dóchas agam.', hint: 'Я маю надію.' },
  { sentence: 'Tá an eaglais oscailte.', hint: 'Церква відкрита.' },
  { sentence: 'Is féidir liom dul.', hint: 'Я можу піти.' },
  { sentence: 'Ní féidir liom é a dhéanamh.', hint: 'Я не можу це зробити.' },
  { sentence: 'An féidir leat cabhrú liom?', hint: 'Можеш допомогти мені?' },
  { sentence: 'Tá bia agus uisce ann.', hint: 'Там є їжа і вода.' },
  { sentence: 'Tá grá i mo chroí.', hint: 'У моєму серці є любов.' },
];

const state = {
  activeTab: 'learn',
  activeCategory: 'Усе',
  learned: new Set(JSON.parse(localStorage.getItem('gaeilge-learned') || '[]')),
  totalPoints: Number(localStorage.getItem('gaeilge-points') || 0),
  quizBest: Number(localStorage.getItem('gaeilge-quiz-best') || 0),
  builderBest: Number(localStorage.getItem('gaeilge-builder-best') || 0),
  quizSession: null,
  builderSession: null,
};

const tabs = document.querySelectorAll('.tab-button');
const panels = {
  learn: document.getElementById('learn-panel'),
  quiz: document.getElementById('quiz-panel'),
  builder: document.getElementById('builder-panel'),
  dictionary: document.getElementById('dictionary-panel'),
};

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(text) {
  return text.toLowerCase().trim();
}

function saveProgress() {
  localStorage.setItem('gaeilge-learned', JSON.stringify([...state.learned]));
  localStorage.setItem('gaeilge-points', String(state.totalPoints));
  localStorage.setItem('gaeilge-quiz-best', String(state.quizBest));
  localStorage.setItem('gaeilge-builder-best', String(state.builderBest));
}

function updateStats() {
  document.getElementById('learnedCount').textContent = state.learned.size;
  document.getElementById('quizBest').textContent = state.quizBest;
  document.getElementById('builderBest').textContent = state.builderBest;
  document.getElementById('totalPoints').textContent = state.totalPoints;
}

function renderCategoryFilters() {
  const filters = document.getElementById('categoryFilters');
  const categories = ['Усе', ...new Set(vocabulary.map(item => item.category))];
  filters.innerHTML = categories.map(category => `
    <button class="filter-chip ${state.activeCategory === category ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');

  filters.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.category;
      renderCategoryFilters();
      renderLearnCards();
    });
  });
}

function renderLearnCards() {
  const grid = document.getElementById('learnGrid');
  const items = state.activeCategory === 'Усе'
    ? vocabulary
    : vocabulary.filter(item => item.category === state.activeCategory);

  grid.innerHTML = items.map((item, index) => `
    <article class="word-card ${state.learned.has(item.irish) ? 'revealed' : ''}" data-index="${index}" data-irish="${item.irish}">
      <div class="word-front">
        <span class="word-tag">${item.category}</span>
        <div class="word-irish">${item.irish}</div>
        <div class="word-meta">Натисни, щоб побачити переклад і вимову.</div>
      </div>
      <div class="word-hidden">
        <span class="word-tag">${item.category}</span>
        <div class="word-irish">${item.uk}</div>
        <div class="word-meta"><strong>Irish:</strong> ${item.irish}<br><strong>Вимова:</strong> ${item.pron}</div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.word-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
      state.learned.add(card.dataset.irish);
      state.totalPoints += 1;
      saveProgress();
      updateStats();
    });
  });
}

function setActiveTab(tab) {
  state.activeTab = tab;
  tabs.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab));
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle('active', key === tab);
  });
}

tabs.forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.dataset.tab)));

function buildQuizSession() {
  const questions = shuffle(vocabulary).slice(0, 12).map(item => {
    const distractors = shuffle(vocabulary.filter(v => v.uk !== item.uk)).slice(0, 3).map(v => v.uk);
    return {
      prompt: item.irish,
      answer: item.uk,
      pronunciation: item.pron,
      options: shuffle([item.uk, ...distractors]),
    };
  });
  return { index: 0, score: 0, questions, locked: false };
}

function renderQuizQuestion() {
  const session = state.quizSession;
  const question = session.questions[session.index];
  document.getElementById('quizProgress').textContent = `Питання ${session.index + 1} / ${session.questions.length}`;
  document.getElementById('quizScore').textContent = `${session.score} балів`;
  document.getElementById('quizPrompt').textContent = `Що означає: ${question.prompt}?`;
  document.getElementById('quizFeedback').textContent = `Вимова: ${question.pronunciation}`;
  document.getElementById('nextQuizBtn').disabled = true;

  const optionsWrap = document.getElementById('quizOptions');
  optionsWrap.innerHTML = '';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.addEventListener('click', () => handleQuizAnswer(option, button));
    optionsWrap.appendChild(button);
  });
}

function handleQuizAnswer(option, button) {
  const session = state.quizSession;
  if (!session || session.locked) return;
  session.locked = true;
  const question = session.questions[session.index];
  const optionButtons = [...document.querySelectorAll('.option-btn')];

  optionButtons.forEach(btn => {
    if (btn.textContent === question.answer) btn.classList.add('correct');
    if (btn === button && option !== question.answer) btn.classList.add('wrong');
    btn.disabled = true;
  });

  if (option === question.answer) {
    session.score += 1;
    state.totalPoints += 5;
    document.getElementById('quizFeedback').textContent = 'Правильно! Так тримати.';
  } else {
    document.getElementById('quizFeedback').textContent = `Не зовсім. Правильна відповідь: ${question.answer}.`;
  }

  document.getElementById('quizScore').textContent = `${session.score} балів`;
  document.getElementById('nextQuizBtn').disabled = false;
  saveProgress();
  updateStats();
}

function startQuiz() {
  state.quizSession = buildQuizSession();
  document.getElementById('quizCard').classList.remove('hidden');
  document.getElementById('quizEmptyState').classList.add('hidden');
  document.getElementById('nextQuizBtn').textContent = 'Далі';
  state.quizSession.locked = false;
  renderQuizQuestion();
}

function nextQuizQuestion() {
  const session = state.quizSession;
  if (!session) return;
  session.index += 1;
  session.locked = false;

  if (session.index >= session.questions.length) {
    state.quizBest = Math.max(state.quizBest, session.score);
    state.totalPoints += session.score * 2;
    saveProgress();
    updateStats();
    document.getElementById('quizPrompt').textContent = `Готово! Твій результат: ${session.score} / ${session.questions.length}`;
    document.getElementById('quizOptions').innerHTML = '';
    document.getElementById('quizFeedback').textContent = 'Можна пройти тест ще раз з новими словами.';
    document.getElementById('quizProgress').textContent = 'Тест завершено';
    document.getElementById('quizScore').textContent = `${session.score} балів`;
    document.getElementById('nextQuizBtn').textContent = 'Почати знову';
    document.getElementById('nextQuizBtn').disabled = false;
    state.quizSession = null;
    return;
  }

  renderQuizQuestion();
}

document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
document.getElementById('nextQuizBtn').addEventListener('click', () => {
  if (!state.quizSession) {
    startQuiz();
  } else {
    nextQuizQuestion();
  }
});

function buildBuilderSession() {
  return {
    index: 0,
    score: 0,
    challenges: shuffle(sentenceChallenges).slice(0, 10),
    chosen: [],
    locked: false,
  };
}

function renderBuilder() {
  const session = state.builderSession;
  const challenge = session.challenges[session.index];
  const tokens = shuffle(challenge.sentence.split(' '));
  document.getElementById('builderProgress').textContent = `Речення ${session.index + 1} / ${session.challenges.length}`;
  document.getElementById('builderScore').textContent = `${session.score} балів`;
  document.getElementById('builderPrompt').textContent = 'Збери правильне речення';
  document.getElementById('builderHint').textContent = challenge.hint;
  document.getElementById('builderFeedback').textContent = 'Підказка: натискай на слова по черзі.';
  document.getElementById('nextBuilderBtn').disabled = true;
  document.getElementById('builderAnswer').innerHTML = '';
  document.getElementById('builderTokens').innerHTML = '';
  session.chosen = [];
  session.locked = false;

  tokens.forEach((token, index) => {
    const button = document.createElement('button');
    button.className = 'token';
    button.textContent = token;
    button.dataset.index = index;
    button.addEventListener('click', () => {
      if (session.locked || button.classList.contains('used')) return;
      button.classList.add('used');
      session.chosen.push({ token, index });
      renderAnswerLine();
    });
    document.getElementById('builderTokens').appendChild(button);
  });
}

function renderAnswerLine() {
  const line = document.getElementById('builderAnswer');
  line.innerHTML = '';
  state.builderSession.chosen.forEach((entry, chosenIndex) => {
    const btn = document.createElement('button');
    btn.className = 'token';
    btn.textContent = entry.token;
    btn.addEventListener('click', () => {
      if (state.builderSession.locked) return;
      state.builderSession.chosen.splice(chosenIndex, 1);
      const original = [...document.querySelectorAll('#builderTokens .token')].find(item => item.dataset.index === String(entry.index));
      if (original) original.classList.remove('used');
      renderAnswerLine();
    });
    line.appendChild(btn);
  });
}

function startBuilder() {
  state.builderSession = buildBuilderSession();
  document.getElementById('builderCard').classList.remove('hidden');
  document.getElementById('builderEmptyState').classList.add('hidden');
  document.getElementById('nextBuilderBtn').textContent = 'Далі';
  renderBuilder();
}

function clearBuilder() {
  if (!state.builderSession || state.builderSession.locked) return;
  state.builderSession.chosen = [];
  document.querySelectorAll('#builderTokens .token').forEach(btn => btn.classList.remove('used'));
  renderAnswerLine();
}

function checkBuilder() {
  const session = state.builderSession;
  if (!session || session.locked) return;
  const challenge = session.challenges[session.index];
  const attempt = session.chosen.map(entry => entry.token).join(' ');
  const correct = challenge.sentence;
  session.locked = true;

  if (normalize(attempt) === normalize(correct)) {
    session.score += 1;
    state.totalPoints += 7;
    document.getElementById('builderFeedback').textContent = 'Чудово! Речення зібране правильно.';
  } else {
    document.getElementById('builderFeedback').textContent = `Поки ні. Правильний варіант: ${correct}`;
  }

  document.getElementById('builderScore').textContent = `${session.score} балів`;
  document.getElementById('nextBuilderBtn').disabled = false;
  saveProgress();
  updateStats();
}

function nextBuilder() {
  if (!state.builderSession) {
    startBuilder();
    return;
  }

  const session = state.builderSession;
  session.index += 1;
  if (session.index >= session.challenges.length) {
    state.builderBest = Math.max(state.builderBest, session.score);
    state.totalPoints += session.score * 2;
    saveProgress();
    updateStats();
    document.getElementById('builderProgress').textContent = 'Тренування завершено';
    document.getElementById('builderScore').textContent = `${session.score} балів`;
    document.getElementById('builderPrompt').textContent = `Готово! Твій результат: ${session.score} / ${session.challenges.length}`;
    document.getElementById('builderHint').textContent = 'Можна натиснути “Почати” ще раз і отримати інший порядок речень.';
    document.getElementById('builderAnswer').innerHTML = '';
    document.getElementById('builderTokens').innerHTML = '';
    document.getElementById('builderFeedback').textContent = 'Ти вже добре тренуєш побудову речень.';
    document.getElementById('nextBuilderBtn').textContent = 'Почати знову';
    document.getElementById('nextBuilderBtn').disabled = false;
    state.builderSession = null;
    return;
  }
  renderBuilder();
}

document.getElementById('startBuilderBtn').addEventListener('click', startBuilder);
document.getElementById('clearBuilderBtn').addEventListener('click', clearBuilder);
document.getElementById('checkBuilderBtn').addEventListener('click', checkBuilder);
document.getElementById('nextBuilderBtn').addEventListener('click', nextBuilder);

function renderDictionary(filter = '') {
  const list = document.getElementById('dictionaryList');
  const query = normalize(filter);
  const items = vocabulary.filter(item => {
    const hay = `${item.irish} ${item.uk} ${item.pron} ${item.category}`.toLowerCase();
    return hay.includes(query);
  });

  list.innerHTML = items.map(item => `
    <article class="dictionary-row">
      <div>
        <strong>${item.irish}</strong>
        <span>${item.category}</span>
      </div>
      <div>
        <strong>Переклад</strong>
        <span>${item.uk}</span>
      </div>
      <div>
        <strong>Вимова</strong>
        <span>${item.pron}</span>
      </div>
      <div>
        <strong>Тип</strong>
        <span>${item.category}</span>
      </div>
    </article>
  `).join('');
}

document.getElementById('dictionarySearch').addEventListener('input', e => renderDictionary(e.target.value));

renderCategoryFilters();
renderLearnCards();
renderDictionary();
updateStats();
setActiveTab('learn');
