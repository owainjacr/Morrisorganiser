const AISLES = [
  { id: "saladFruit", order: 1, name: "Salad / fruit" },
  { id: "meat", order: 2, name: "Meat" },
  { id: "cheeseMilk", order: 3, name: "Cheese & milk" },
  { id: "ingredients", order: 4, name: "Curry sauce, ingredients, spices" },
  { id: "crisps", order: 5, name: "Crisps" },
  { id: "coke", order: 6, name: "Coke" }
];

const AISLE_BY_ID = Object.fromEntries(AISLES.map(aisle => [aisle.id, aisle]));
const UNKNOWN_AISLE = { id: "unknown", order: 999, name: "Needs review" };

const TAXONOMY = {
  saladFruit: [
    "fruit", "fruits", "salad", "salad bag", "mixed salad", "side salad", "lettuce", "iceberg", "iceberg lettuce",
    "romaine", "little gem", "rocket", "watercress", "spinach", "baby spinach", "kale", "cabbage", "red cabbage",
    "white cabbage", "coleslaw", "slaw", "beetroot", "radish", "spring onion", "spring onions", "cucumber",
    "tomato", "tomatoes", "cherry tomatoes", "plum tomatoes", "vine tomatoes", "avocado", "avocados", "pepper", "peppers",
    "bell pepper", "sweet pepper", "red pepper", "green pepper", "yellow pepper", "apple", "apples", "braeburn", "gala apple",
    "granny smith", "pear", "pears", "banana", "bananas", "orange", "oranges", "satsuma", "clementine", "mandarin",
    "lemon", "lemons", "lime", "limes", "grapefruit", "grapes", "red grapes", "green grapes", "strawberry", "strawberries",
    "raspberry", "raspberries", "blueberry", "blueberries", "blackberry", "blackberries", "cranberry", "cranberries", "melon",
    "watermelon", "honeydew", "cantaloupe", "pineapple", "mango", "mangoes", "kiwi", "kiwis", "passion fruit",
    "peach", "peaches", "nectarine", "nectarines", "plum", "plums", "apricot", "apricots", "cherry", "cherries",
    "pomegranate", "fig", "figs", "dates", "fresh dates", "fruit salad", "prepared fruit", "smoothie fruit",
    "carrot", "carrots", "celery", "celery sticks", "salad tomatoes", "grape tomatoes"
  ],

  meat: [
    "meat", "fresh meat", "chicken", "chicken breast", "chicken breasts", "chicken thigh", "chicken thighs", "chicken leg",
    "chicken legs", "chicken drumstick", "chicken drumsticks", "chicken wings", "whole chicken", "roast chicken", "diced chicken",
    "chicken mince", "turkey", "turkey mince", "turkey breast", "turkey steaks", "duck", "duck breast", "goose", "beef",
    "beef mince", "minced beef", "lean mince", "steak", "rump steak", "sirloin", "sirloin steak", "ribeye", "rib eye",
    "fillet steak", "braising steak", "stewing steak", "beef joint", "roast beef", "burgers", "beef burgers", "burger patties",
    "pork", "pork mince", "pork chop", "pork chops", "pork shoulder", "pork belly", "pork loin", "gammon", "gammon steak",
    "bacon", "back bacon", "streaky bacon", "lardons", "ham", "ham slices", "prosciutto", "salami", "chorizo", "pepperoni",
    "sausage", "sausages", "pork sausages", "chipolatas", "frankfurters", "hot dogs", "black pudding", "lamb", "lamb mince",
    "lamb chops", "lamb shoulder", "lamb leg", "lamb shank", "mutton", "venison", "veal", "rabbit", "meatballs",
    "kebab meat", "doner", "doner meat", "deli meat", "cold cuts", "cooked meats", "charcuterie", "parma ham",
    "corned beef", "brisket", "ribs", "spare ribs", "pancetta", "meat feast", "free range chicken", "organic chicken"
  ],

  cheeseMilk: [
    "dairy", "milk", "semi skimmed milk", "skimmed milk", "whole milk", "full fat milk", "filtered milk", "lactose free milk",
    "oat milk", "almond milk", "soya milk", "soy milk", "goat milk", "goats milk", "evaporated milk", "condensed milk",
    "cheese", "cheeses", "cheddar", "mature cheddar", "extra mature cheddar", "red leicester", "double gloucester", "wensleydale",
    "stilton", "blue stilton", "blue cheese", "gorgonzola", "roquefort", "danish blue", "brie", "camembert", "camambert",
    "camenbert", "mozarella", "mozzarella", "buffalo mozzarella", "parmesan", "parmigiano", "pecorino", "feta", "halloumi",
    "goat cheese", "goats cheese", "soft cheese", "cream cheese", "philadelphia", "boursin", "ricotta", "mascarpone", "cottage cheese",
    "paneer", "edam", "gouda", "emmental", "emmenthal", "gruyere", "jarlsberg", "manchego", "provolone", "monterey jack",
    "cheese slices", "processed cheese", "cheese strings", "babybel", "grated cheese", "shredded cheese", "cheese block", "cheese board",
    "yoghurt", "yogurt", "greek yoghurt", "greek yogurt", "natural yoghurt", "natural yogurt", "fromage frais", "skyr", "kefir",
    "butter", "salted butter", "unsalted butter", "spreadable butter", "margarine", "cream", "single cream", "double cream", "whipping cream",
    "sour cream", "creme fraiche", "clotted cream", "custard", "fresh custard", "dairy cream", "milkshake", "chocolate milk",
    "strawberry milk", "cheesy", "dairylea"
  ],

  ingredients: [
    "curry", "curry sauce", "curry paste", "korma", "korma sauce", "tikka", "tikka masala", "tikka masala sauce", "madras",
    "madras sauce", "vindaloo", "jalfrezi", "balti", "rogan josh", "thai curry", "green curry", "red curry", "yellow curry",
    "coconut milk", "coconut cream", "mango chutney", "lime pickle", "naan", "naan bread", "poppadom", "poppadoms",
    "rice", "basmati rice", "pilau rice", "jasmine rice", "long grain rice", "brown rice", "microwave rice", "egg fried rice",
    "pasta", "spaghetti", "tagliatelle", "penne", "fusilli", "macaroni", "lasagne", "noodles", "egg noodles", "rice noodles",
    "flour", "plain flour", "self raising flour", "bread flour", "cornflour", "corn starch", "baking powder", "bicarbonate", "bicarbonate of soda",
    "yeast", "sugar", "caster sugar", "brown sugar", "icing sugar", "salt", "sea salt", "table salt", "pepper", "black pepper",
    "white pepper", "paprika", "smoked paprika", "cumin", "ground cumin", "coriander", "ground coriander", "turmeric", "garam masala",
    "curry powder", "chilli powder", "chili powder", "chilli flakes", "chili flakes", "cayenne", "cinnamon", "nutmeg", "cloves", "cardamom",
    "star anise", "fennel seeds", "mustard seeds", "bay leaves", "oregano", "basil", "thyme", "rosemary", "sage", "parsley",
    "mixed herbs", "italian herbs", "herbs", "spices", "seasoning", "stock cube", "stock cubes", "chicken stock", "beef stock",
    "vegetable stock", "gravy", "gravy granules", "bouillon", "soy sauce", "dark soy sauce", "light soy sauce", "fish sauce", "oyster sauce",
    "worcester sauce", "worcestershire sauce", "hot sauce", "tabasco", "sriracha", "sweet chilli sauce", "chili sauce", "bbq sauce", "barbecue sauce",
    "tomato ketchup", "ketchup", "brown sauce", "mustard", "english mustard", "dijon mustard", "mayonnaise", "mayo", "salad cream",
    "vinegar", "malt vinegar", "white wine vinegar", "balsamic vinegar", "apple cider vinegar", "oil", "olive oil", "vegetable oil", "sunflower oil",
    "rapeseed oil", "sesame oil", "groundnut oil", "passata", "tomato puree", "tomato paste", "tinned tomatoes", "chopped tomatoes",
    "plum tomatoes", "beans", "baked beans", "kidney beans", "black beans", "chickpeas", "lentils", "red lentils", "green lentils",
    "tuna", "tinned tuna", "sardines", "anchovies", "soup", "tinned soup", "cereal", "porridge", "oats", "granola", "muesli",
    "bread", "white bread", "brown bread", "wholemeal bread", "sourdough", "bagels", "wraps", "tortilla wraps", "pitta", "pita",
    "crumpets", "muffins", "eggs", "egg", "jam", "marmalade", "honey", "peanut butter", "nutella", "chocolate spread",
    "coffee", "instant coffee", "ground coffee", "tea", "tea bags", "green tea", "hot chocolate", "cocoa", "biscuits",
    "digestives", "hobnobs", "cookies", "crackers", "cream crackers", "ryvita", "breadsticks", "couscous", "quinoa", "bulgur wheat",
    "tomato sauce", "pasta sauce", "bolognese sauce", "pesto", "green pesto", "red pesto", "salsa", "taco seasoning", "fajita seasoning",
    "tortilla", "tortillas", "sriracha mayo", "garlic", "garlic paste", "ginger", "ginger paste", "lemongrass", "vanilla extract",
    "almond extract", "icing", "sprinkles", "cake mix", "jelly", "gelatine", "gelatin", "packet sauce", "sauce mix", "marinade",
    "teriyaki", "teriyaki sauce", "hoisin", "hoisin sauce", "miso", "miso paste", "breadcrumbs", "panko", "stuffing",
    "branston pickle", "pickle", "gherkins", "olives", "capers", "sun dried tomatoes", "sun-dried tomatoes", "pickled onions",
    "raisins", "sultanas", "currants", "dried fruit", "nuts", "almonds", "cashews", "peanuts", "walnuts", "pecans"
  ],

  crisps: [
    "crisps", "crisp", "potato crisps", "ready salted", "salt and vinegar", "cheese and onion", "prawn cocktail", "walkers",
    "tyrrells", "kettle chips", "kettle crisps", "doritos", "pringles", "wotsits", "quavers", "skips", "monster munch",
    "hula hoops", "pom bears", "popchips", "tortilla chips", "nachos", "snack a jacks", "corn snacks", "pretzels",
    "popcorn", "sweet popcorn", "salted popcorn", "nuts snack", "bar snacks", "snacks", "multipack crisps", "sharing crisps",
    "mini cheddars", "cheddars", "cheeselets", "twiglets", "frazzles", "nik naks", "space raiders", "mccoys"
  ],

  coke: [
    "coke", "coca cola", "coca-cola", "coka cola", "cocacola", "diet coke", "coke zero", "zero coke", "coke zero sugar",
    "pepsi", "pepsi max", "cola", "diet cola", "own brand cola", "fizzy cola", "cherry coke", "vanilla coke", "fanta",
    "sprite", "dr pepper", "dr. pepper", "7up", "seven up", "soft drink", "soft drinks", "fizzy drink", "fizzy drinks",
    "lemonade", "tonic water", "soda water", "sparkling water", "energy drink", "red bull", "monster energy", "lucozade"
  ]
};

const DEFAULT_EXAMPLE = `brie
Curry sauce
Fruit
chicken thighs
camembert
coke
camambert
chiken brest
coka cola
madras saus`; 

const COMMON_REPLACEMENTS = new Map([
  ["chiken", "chicken"],
  ["chikn", "chicken"],
  ["camambert", "camembert"],
  ["camenbert", "camembert"],
  ["mozarella", "mozzarella"],
  ["chease", "cheese"],
  ["yougurt", "yoghurt"],
  ["yogurt", "yoghurt"],
  ["coka", "coca"],
  ["cocacola", "coca cola"],
  ["coco cola", "coca cola"],
  ["sause", "sauce"],
  ["sorce", "sauce"],
  ["sos", "sauce"],
  ["currie", "curry"],
  ["cary", "curry"],
  ["brest", "breast"],
  ["thys", "thighs"],
  ["mince beef", "beef mince"]
]);

const LEADING_QUANTITY_RE = /^(?:\d+\s*x\s*)?(?:\d+(?:\.\d+)?|\d+\/\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s*(?:x\s*)?/i;
const PACKAGING_RE = /\b(?:kg|g|gram|grams|ml|l|litre|litres|pack|packs|packet|packets|tin|tins|can|cans|bottle|bottles|box|boxes|bag|bags|jar|jars|loaf|loaves|slice|slices|piece|pieces|bunch|punnet|tray|large|small|medium|fresh|organic|free range|reduced fat|low fat|extra|finest|basic|value)\b/gi;
const FILLER_RE = /\b(?:of|the|a|an|some|for|and|with|plus|please|get|buy)\b/gi;

let lastResults = [];
let dictionary = [];
let customRules = loadCustomRules();

const els = {
  input: document.getElementById("shoppingInput"),
  thresholdInput: document.getElementById("thresholdInput"),
  thresholdLabel: document.getElementById("thresholdLabel"),
  groupedToggle: document.getElementById("groupedToggle"),
  organiseBtn: document.getElementById("organiseBtn"),
  copyBtn: document.getElementById("copyBtn"),
  clearBtn: document.getElementById("clearBtn"),
  loadExampleBtn: document.getElementById("loadExampleBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  resultsBody: document.getElementById("resultsBody"),
  groupedResults: document.getElementById("groupedResults"),
  resultHelp: document.getElementById("resultHelp"),
  totalCount: document.getElementById("totalCount"),
  matchedCount: document.getElementById("matchedCount"),
  reviewCount: document.getElementById("reviewCount"),
  customCount: document.getElementById("customCount"),
  reviewList: document.getElementById("reviewList"),
  customRuleForm: document.getElementById("customRuleForm"),
  customPhraseInput: document.getElementById("customPhraseInput"),
  customAisleInput: document.getElementById("customAisleInput"),
  exportRulesBtn: document.getElementById("exportRulesBtn"),
  importRulesInput: document.getElementById("importRulesInput"),
  resetRulesBtn: document.getElementById("resetRulesBtn"),
  customRulesList: document.getElementById("customRulesList"),
  reviewTemplate: document.getElementById("reviewItemTemplate")
};

initialise();

function initialise() {
  populateAisleSelects();
  rebuildDictionary();
  renderCustomRules();
  updateStats([]);

  els.thresholdInput.addEventListener("input", () => {
    els.thresholdLabel.textContent = `${els.thresholdInput.value}%`;
    if (lastResults.length) renderAll(lastResults);
  });

  els.groupedToggle.addEventListener("change", () => {
    if (lastResults.length) renderAll(lastResults);
  });

  els.organiseBtn.addEventListener("click", organiseList);
  els.copyBtn.addEventListener("click", copySortedList);
  els.downloadBtn.addEventListener("click", downloadSortedList);
  els.clearBtn.addEventListener("click", clearAll);
  els.loadExampleBtn.addEventListener("click", () => {
    els.input.value = DEFAULT_EXAMPLE;
    organiseList();
  });

  els.customRuleForm.addEventListener("submit", event => {
    event.preventDefault();
    addCustomRule(els.customPhraseInput.value, els.customAisleInput.value);
    els.customPhraseInput.value = "";
  });

  els.exportRulesBtn.addEventListener("click", exportRules);
  els.importRulesInput.addEventListener("change", importRules);
  els.resetRulesBtn.addEventListener("click", resetRules);
}

function populateAisleSelects() {
  els.customAisleInput.innerHTML = AISLES.map(aisle => `<option value="${aisle.id}">${aisle.order}. ${aisle.name}</option>`).join("");
}

function rebuildDictionary() {
  const entries = [];

  Object.entries(TAXONOMY).forEach(([aisleId, terms]) => {
    terms.forEach(term => entries.push(makeEntry(term, aisleId, "built-in taxonomy")));
  });

  customRules.forEach(rule => entries.push(makeEntry(rule.phrase, rule.aisleId, "custom rule", true)));

  const unique = new Map();
  entries.forEach(entry => {
    const key = `${entry.term}::${entry.aisleId}`;
    if (!unique.has(key) || entry.custom) unique.set(key, entry);
  });

  dictionary = [...unique.values()].sort((a, b) => b.term.length - a.term.length);
}

function makeEntry(phrase, aisleId, source, custom = false) {
  const normalised = normalise(phrase, { stripPackaging: false });
  return {
    raw: phrase,
    term: normalised,
    words: normalised.split(" ").filter(Boolean),
    aisleId,
    source,
    custom,
    length: normalised.length
  };
}

function organiseList() {
  const items = parseInput(els.input.value);
  const threshold = Number(els.thresholdInput.value) / 100;

  lastResults = items.map((item, originalIndex) => classifyItem(item, originalIndex, threshold));
  lastResults.sort(compareResults);
  renderAll(lastResults);
}

function parseInput(value) {
  const trimmed = value.trim();
  if (!trimmed) return [];

  const rawLines = trimmed.includes("\n")
    ? trimmed.split(/\n+/)
    : trimmed.split(/,(?![^()]*\))/);

  return rawLines
    .map(line => line.trim())
    .filter(Boolean);
}

function classifyItem(original, originalIndex, threshold) {
  const normalised = normalise(original);
  const expanded = applyCommonReplacements(normalised);
  const candidates = buildCandidates(normalised, expanded);
  const exactCustom = findExactCustom(candidates);

  let best = exactCustom || findBestDictionaryMatch(candidates, original, normalised, expanded);
  best = applyLogicOverrides(best, original, normalised, expanded, candidates);

  const aisle = best ? AISLE_BY_ID[best.aisleId] : UNKNOWN_AISLE;
  const confidence = best ? Math.min(0.99, best.score) : 0;
  const needsReview = !best || confidence < threshold;

  return {
    original,
    normalised,
    expanded,
    originalIndex,
    aisle,
    match: best,
    confidence,
    needsReview,
    sortOrder: needsReview ? 999 : aisle.order
  };
}

function normalise(value, options = { stripPackaging: true }) {
  const text = String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .replace(/[-_/]/g, " ")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(LEADING_QUANTITY_RE, " ")
    .toLowerCase();

  const stripped = options.stripPackaging
    ? text.replace(PACKAGING_RE, " ").replace(FILLER_RE, " ")
    : text;

  return stripped.replace(/\s+/g, " ").trim();
}

function applyCommonReplacements(value) {
  let output = ` ${value} `;
  COMMON_REPLACEMENTS.forEach((replacement, typo) => {
    const escaped = typo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    output = output.replace(new RegExp(`\\b${escaped}\\b`, "g"), replacement);
  });
  return output.replace(/\s+/g, " ").trim();
}

function buildCandidates(normalised, expanded) {
  const values = new Set([normalised, expanded].filter(Boolean));

  [normalised, expanded].forEach(value => {
    const words = value.split(" ").filter(Boolean);
    for (let start = 0; start < words.length; start += 1) {
      for (let length = 1; length <= Math.min(4, words.length - start); length += 1) {
        values.add(words.slice(start, start + length).join(" "));
      }
    }
  });

  return [...values].filter(Boolean);
}

function findExactCustom(candidates) {
  const customEntries = dictionary.filter(entry => entry.custom);
  for (const candidate of candidates) {
    const entry = customEntries.find(custom => custom.term === candidate || hasWordBoundaryMatch(candidate, custom.term));
    if (entry) {
      return {
        ...entry,
        score: 0.99,
        method: "custom rule"
      };
    }
  }
  return null;
}

function findBestDictionaryMatch(candidates, original, normalised, expanded) {
  let best = null;

  for (const entry of dictionary) {
    const scores = [];

    for (const candidate of candidates) {
      if (!candidate) continue;

      if (candidate === entry.term) {
        scores.push({ score: 0.98 + phraseBonus(entry.term), method: "exact phrase" });
        continue;
      }

      if (hasWordBoundaryMatch(candidate, entry.term) || hasWordBoundaryMatch(expanded, entry.term) || hasWordBoundaryMatch(normalised, entry.term)) {
        scores.push({ score: 0.88 + phraseBonus(entry.term), method: "phrase contains" });
        continue;
      }

      const fuzzy = fuzzyScore(candidate, entry.term);
      if (fuzzy.accepted) {
        scores.push({ score: fuzzy.score, method: `typo match: ${candidate} ≈ ${entry.term}` });
      }
    }

    if (!scores.length) continue;

    const candidateBest = scores.sort((a, b) => b.score - a.score)[0];
    const adjustedScore = adjustScoreForAmbiguity(candidateBest.score, entry, normalised, expanded, original);

    if (!best || adjustedScore > best.score) {
      best = {
        ...entry,
        score: adjustedScore,
        method: candidateBest.method
      };
    }
  }

  return best;
}

function hasWordBoundaryMatch(haystack, needle) {
  if (!haystack || !needle) return false;
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|\\s)${escaped}(\\s|$)`, "i").test(haystack);
}

function phraseBonus(term) {
  const wordCount = term.split(" ").length;
  const lengthBonus = Math.min(0.04, term.length / 240);
  const phraseLengthBonus = Math.min(0.04, wordCount * 0.012);
  return lengthBonus + phraseLengthBonus;
}

function fuzzyScore(candidate, term) {
  if (!candidate || !term) return { accepted: false, score: 0 };
  if (candidate.length < 5 && term.length < 5) return { accepted: false, score: 0 };

  const shorter = Math.min(candidate.length, term.length);
  const longer = Math.max(candidate.length, term.length);
  if (longer - shorter > Math.max(3, Math.floor(longer * 0.34))) return { accepted: false, score: 0 };

  const distance = damerauLevenshtein(candidate, term);
  const allowed = allowedDistance(term);
  const similarity = 1 - distance / longer;

  const accepted = distance <= allowed && similarity >= 0.72;
  return {
    accepted,
    score: accepted ? Math.max(0.58, similarity * 0.9) : 0
  };
}

function allowedDistance(term) {
  const length = term.length;
  if (length <= 4) return 0;
  if (length <= 7) return 1;
  if (length <= 12) return 2;
  return 3;
}

function damerauLevenshtein(a, b) {
  const alen = a.length;
  const blen = b.length;
  const matrix = Array.from({ length: alen + 1 }, () => new Array(blen + 1).fill(0));

  for (let i = 0; i <= alen; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= blen; j += 1) matrix[0][j] = j;

  for (let i = 1; i <= alen; i += 1) {
    for (let j = 1; j <= blen; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );

      if (
        i > 1 &&
        j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost);
      }
    }
  }

  return matrix[alen][blen];
}

function adjustScoreForAmbiguity(score, entry, normalised, expanded, original) {
  let adjusted = score;
  const text = ` ${expanded || normalised} `;

  const strongProductWords = {
    ingredients: ["sauce", "paste", "powder", "spice", "spices", "seasoning", "rice", "flour", "oil", "vinegar", "stock", "curry", "masala", "chutney", "noodles", "pasta"],
    meat: ["chicken", "beef", "pork", "lamb", "turkey", "bacon", "sausage", "steak", "mince"],
    cheeseMilk: ["cheese", "milk", "brie", "camembert", "cheddar", "yoghurt", "yogurt", "butter", "cream"],
    crisps: ["crisps", "doritos", "pringles", "walkers", "chips", "snacks"],
    coke: ["coke", "cola", "pepsi"],
    saladFruit: ["fruit", "salad", "lettuce", "apple", "banana", "tomato", "cucumber"]
  };

  Object.entries(strongProductWords).forEach(([aisleId, words]) => {
    const hasStrongWord = words.some(word => hasWordBoundaryMatch(text, word));
    if (!hasStrongWord) return;
    adjusted += aisleId === entry.aisleId ? 0.08 : -0.05;
  });

  const weakTerms = new Set(["pepper", "cream", "milk", "sauce", "oil", "nuts", "fruit"]);
  if (weakTerms.has(entry.term) && expanded.split(" ").length > 1) adjusted -= 0.08;

  if (/\b(?:chocolate|biscuit|biscuits|cookies)\b/.test(text) && entry.aisleId === "cheeseMilk") adjusted -= 0.25;
  if (/\b(?:coconut milk|evaporated milk|condensed milk)\b/.test(text) && entry.aisleId === "ingredients") adjusted += 0.12;
  if (/\b(?:milk chocolate|chocolate milk)\b/.test(text) && entry.aisleId === "cheeseMilk") adjusted += 0.1;
  if (/\b(?:chicken curry|beef curry|lamb curry)\b/.test(text) && entry.aisleId === "ingredients" && /\bsauce\b/.test(text)) adjusted += 0.14;

  return Math.max(0, Math.min(0.99, adjusted));
}

function applyLogicOverrides(best, original, normalised, expanded) {
  const text = ` ${expanded || normalised} `;

  const overrideRules = [
    { aisleId: "coke", pattern: /\b(?:coke|coca cola|coca\s+cola|cola|pepsi|pepsi max)\b/, term: "cola drink" },
    { aisleId: "ingredients", pattern: /\b(?:curry sauce|curry paste|tikka masala|korma|madras|vindaloo|jalfrezi|balti|rogan josh)\b/, term: "curry product" },
    { aisleId: "ingredients", pattern: /\b(?:spice|spices|seasoning|masala|cumin|turmeric|paprika|coriander)\b/, term: "spice or seasoning" },
    { aisleId: "crisps", pattern: /\b(?:crisps|pringles|doritos|walkers|kettle chips|wotsits|quavers|monster munch)\b/, term: "crisps or snacks" },
    { aisleId: "meat", pattern: /\b(?:chicken|beef|pork|bacon|lamb|turkey|steak|sausages?|mince)\b/, term: "meat product" },
    { aisleId: "cheeseMilk", pattern: /\b(?:brie|camembert|cheddar|cheese|mozzarella|feta|halloumi|milk|yoghurt|yogurt|butter)\b/, term: "dairy or cheese" },
    { aisleId: "saladFruit", pattern: /\b(?:fruit|salad|lettuce|apple|banana|orange|grapes|tomatoes?|cucumber|avocado)\b/, term: "fruit or salad" }
  ];

  let override = null;
  for (const rule of overrideRules) {
    if (rule.pattern.test(text)) {
      override = {
        raw: rule.term,
        term: rule.term,
        aisleId: rule.aisleId,
        source: "logic rule",
        custom: false,
        score: 0.93,
        method: "logic rule"
      };
      break;
    }
  }

  if (!override) return best;
  if (!best) return override;

  const bestAisleOrder = AISLE_BY_ID[best.aisleId]?.order ?? 999;
  const overrideOrder = AISLE_BY_ID[override.aisleId]?.order ?? 999;
  const materialImprovement = override.score > best.score + 0.04;
  const sameAisle = override.aisleId === best.aisleId;

  if (sameAisle) return { ...best, score: Math.max(best.score, override.score) };
  if (materialImprovement) return { ...override, score: Math.max(override.score, best.score) };

  const exactOrCustom = ["custom rule", "exact phrase"].includes(best.method);
  if (exactOrCustom) return best;

  if (Math.abs(override.score - best.score) < 0.04 && overrideOrder < bestAisleOrder) return override;
  return best;
}

function compareResults(a, b) {
  if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
  const aAisle = a.aisle.order;
  const bAisle = b.aisle.order;
  if (aAisle !== bAisle) return aAisle - bAisle;
  return a.originalIndex - b.originalIndex;
}

function renderAll(results) {
  const threshold = Number(els.thresholdInput.value) / 100;
  results.forEach(result => {
    result.needsReview = !result.match || result.confidence < threshold;
    result.sortOrder = result.needsReview ? 999 : result.aisle.order;
  });
  results.sort(compareResults);

  renderTable(results);
  renderGroupedResults(results);
  renderReviewList(results);
  updateStats(results);

  const hasResults = results.length > 0;
  els.copyBtn.disabled = !hasResults;
  els.downloadBtn.disabled = !hasResults;
  els.resultHelp.textContent = hasResults
    ? "Items are sorted by aisle order. Low-confidence results are pushed into review."
    : "Sort a list to see the output.";
}

function renderTable(results) {
  if (!results.length) {
    els.resultsBody.innerHTML = `<tr class="empty-row"><td colspan="5">No list organised yet.</td></tr>`;
    return;
  }

  els.resultsBody.innerHTML = results.map((result, index) => {
    const aisleName = escapeHtml(result.aisle.name);
    const matchText = result.match
      ? `${escapeHtml(result.match.raw || result.match.term)} <span class="muted">(${escapeHtml(result.match.method)})</span>`
      : "No reliable match";
    const confidenceClass = result.needsReview ? "warning" : "";
    const badgeClass = result.needsReview ? "badge warning" : "badge";

    return `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${escapeHtml(result.original)}</strong></td>
        <td><span class="${badgeClass}">${aisleName}</span></td>
        <td>${matchText}</td>
        <td><span class="confidence ${confidenceClass}">${Math.round(result.confidence * 100)}%</span></td>
      </tr>
    `;
  }).join("");
}

function renderGroupedResults(results) {
  if (!els.groupedToggle.checked || !results.length) {
    els.groupedResults.classList.add("hidden");
    els.groupedResults.innerHTML = "";
    return;
  }

  const groups = new Map();
  [...AISLES, UNKNOWN_AISLE].forEach(aisle => groups.set(aisle.id, []));

  results.forEach(result => {
    const key = result.needsReview ? "unknown" : result.aisle.id;
    groups.get(key).push(result);
  });

  els.groupedResults.innerHTML = [...groups.entries()]
    .filter(([, items]) => items.length)
    .map(([aisleId, items]) => {
      const aisle = aisleId === "unknown" ? UNKNOWN_AISLE : AISLE_BY_ID[aisleId];
      return `
        <section class="aisle-group">
          <h3>${aisle.order === 999 ? "Review" : `${aisle.order}. ${escapeHtml(aisle.name)}`}</h3>
          <ol>${items.map(item => `<li>${escapeHtml(item.original)}</li>`).join("")}</ol>
        </section>
      `;
    }).join("");

  els.groupedResults.classList.remove("hidden");
}

function renderReviewList(results) {
  const reviewItems = results.filter(result => result.needsReview);

  if (!reviewItems.length) {
    els.reviewList.className = "review-list empty-state";
    els.reviewList.textContent = "Nothing to review.";
    return;
  }

  els.reviewList.className = "review-list";
  els.reviewList.innerHTML = "";

  reviewItems.forEach(result => {
    const node = els.reviewTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".review-name").textContent = result.original;
    node.querySelector(".review-reason").textContent = result.match
      ? `Best guess was ${AISLE_BY_ID[result.match.aisleId]?.name || "unknown"} from “${result.match.raw || result.match.term}” at ${Math.round(result.confidence * 100)}%.`
      : "No reliable dictionary or fuzzy match found.";

    const select = node.querySelector(".review-aisle");
    select.innerHTML = AISLES.map(aisle => `<option value="${aisle.id}">${aisle.order}. ${aisle.name}</option>`).join("");
    select.value = result.match?.aisleId || AISLES[0].id;

    node.querySelector(".save-review").addEventListener("click", () => {
      addCustomRule(result.original, select.value);
      organiseList();
    });

    els.reviewList.appendChild(node);
  });
}

function updateStats(results) {
  const total = results.length;
  const review = results.filter(result => result.needsReview).length;
  const matched = total - review;

  els.totalCount.textContent = String(total);
  els.matchedCount.textContent = String(matched);
  els.reviewCount.textContent = String(review);
  els.customCount.textContent = String(customRules.length);
}

function copySortedList() {
  if (!lastResults.length) return;
  navigator.clipboard.writeText(getSortedListText()).then(() => {
    const originalText = els.copyBtn.textContent;
    els.copyBtn.textContent = "Copied";
    window.setTimeout(() => {
      els.copyBtn.textContent = originalText;
    }, 1200);
  }).catch(() => {
    alert("Could not copy automatically. Select the sorted output manually instead.");
  });
}

function downloadSortedList() {
  if (!lastResults.length) return;
  const blob = new Blob([getSortedListText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "organised-shopping-list.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getSortedListText() {
  return lastResults
    .filter(result => !result.needsReview)
    .concat(lastResults.filter(result => result.needsReview))
    .map(result => result.original)
    .join("\n");
}

function clearAll() {
  els.input.value = "";
  lastResults = [];
  renderAll([]);
}

function addCustomRule(phrase, aisleId) {
  const cleanPhrase = normalise(phrase, { stripPackaging: false });
  if (!cleanPhrase || !AISLE_BY_ID[aisleId]) return;

  customRules = customRules.filter(rule => !(rule.phrase === cleanPhrase && rule.aisleId === aisleId));
  customRules.push({ phrase: cleanPhrase, aisleId, createdAt: new Date().toISOString() });
  saveCustomRules();
  rebuildDictionary();
  renderCustomRules();
  updateStats(lastResults);
}

function renderCustomRules() {
  if (!customRules.length) {
    els.customRulesList.className = "custom-rules-list empty-state";
    els.customRulesList.textContent = "No custom rules saved.";
    return;
  }

  els.customRulesList.className = "custom-rules-list";
  els.customRulesList.innerHTML = customRules.map((rule, index) => {
    const aisle = AISLE_BY_ID[rule.aisleId];
    return `
      <span class="rule-pill">
        <strong>${escapeHtml(rule.phrase)}</strong>
        <span>→ ${aisle.order}. ${escapeHtml(aisle.name)}</span>
        <button type="button" aria-label="Delete custom rule" data-rule-index="${index}">×</button>
      </span>
    `;
  }).join("");

  els.customRulesList.querySelectorAll("button[data-rule-index]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.ruleIndex);
      customRules.splice(index, 1);
      saveCustomRules();
      rebuildDictionary();
      renderCustomRules();
      if (lastResults.length) organiseList();
      else updateStats([]);
    });
  });
}

function loadCustomRules() {
  try {
    const stored = localStorage.getItem("shoppingOrganiserCustomRules");
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed)
      ? parsed.filter(rule => rule && rule.phrase && rule.aisleId)
      : [];
  } catch {
    return [];
  }
}

function saveCustomRules() {
  localStorage.setItem("shoppingOrganiserCustomRules", JSON.stringify(customRules));
}

function exportRules() {
  const blob = new Blob([JSON.stringify(customRules, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "shopping-organiser-rules.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importRules(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!Array.isArray(imported)) throw new Error("Expected an array of rules.");

      imported.forEach(rule => {
        if (rule.phrase && AISLE_BY_ID[rule.aisleId]) {
          addCustomRule(rule.phrase, rule.aisleId);
        }
      });

      if (lastResults.length) organiseList();
    } catch (error) {
      alert(`Could not import rules: ${error.message}`);
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function resetRules() {
  if (!customRules.length) return;
  const confirmed = window.confirm("Delete all custom rules saved in this browser?");
  if (!confirmed) return;
  customRules = [];
  saveCustomRules();
  rebuildDictionary();
  renderCustomRules();
  if (lastResults.length) organiseList();
  else updateStats([]);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
