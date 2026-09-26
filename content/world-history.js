window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["world-history"] = {
  tips: [
    "New for May 2027: all three short-answer questions are required. Q1 uses a secondary source, Q2 a primary source, and Q3 a non-text source such as a map or image.",
    "New for May 2027: the long essay is one required, broad prompt. Build a stock of evidence you know well from every era.",
    "Think in comparisons and causation across regions. Most questions are \"how did X change Y\" or \"compare A and B,\" not \"what year.\"",
    "DBQ: use at least 4 documents plus outside evidence, and explain the sourcing (point of view, purpose, historical situation or audience) for 2 of them.",
    "Organize your knowledge by theme: governance, economic systems, social structures, technology, cultural developments and the environment.",
  ],
  units: [
    {
      title: "The Global Tapestry (c. 1200–1450)",
      weight: "8–10%",
      tldr: "Around 1200, powerful states across Afro-Eurasia and the Americas built on older traditions. China's Song dynasty, the Islamic world, South and Southeast Asian kingdoms, and societies in Africa, Europe and the Americas each developed distinctive governments, economies and belief systems.",
      concepts: [
        {
          title: "Song China",
          simple: "China's Song dynasty was rich, innovative and run by educated officials.",
          detail: "Neo-Confucianism shaped government and family life, and filial piety and patriarchy were reinforced. Civil-service exams selected a bureaucracy by merit. Champa rice (fast-ripening) boosted food supplies and population. The Grand Canal linked markets. Innovations included paper money, gunpowder and printing.",
        },
        {
          title: "Dar al-Islam",
          simple: "The Islamic world stretched from Spain to South Asia and led the world in science and trade.",
          detail: "The Abbasid Caliphate fragmented, and Turkic groups (Seljuks), Mamluks and the Delhi Sultanate rose. Scholars preserved and advanced Greek knowledge in math, medicine and astronomy (the House of Wisdom). Islam spread through trade, conquest and Sufi missionaries.",
        },
        {
          title: "South and Southeast Asia",
          simple: "Hinduism and Buddhism shaped kingdoms across India and Southeast Asia, often blended with local beliefs.",
          detail: "The Vijayanagara Empire (Hindu) resisted the Delhi Sultanate (Muslim). Srivijaya (sea-based) controlled the Strait of Malacca's trade. The Khmer Empire (Angkor Wat) reflected Hindu-Buddhist influences. The Bhakti movement (Hindu) and Sufism (Islamic) made religion more personal.",
        },
        {
          title: "The Americas, Africa and Europe",
          simple: "Large states rose around the world, each organizing labor and power differently.",
          detail: "The Mexica (Aztec) collected tribute. The Inca used the mit'a labor system and road networks. Mali grew rich on gold and trans-Saharan trade. Great Zimbabwe traded through the Indian Ocean. Feudal Europe relied on manorialism and serfdom, and the Catholic Church held great power.",
        },
      ],
      terms: [
        ["Neo-Confucianism", "A blend of Confucian, Buddhist and Daoist ideas that shaped Song government and society."],
        ["Champa rice", "A fast-growing rice that increased China's food supply and population."],
        ["Civil-service exam", "China's merit-based test for bureaucrats."],
        ["Mit'a", "The Inca system of required public labor."],
        ["Tribute", "Payments of goods from conquered peoples, central to the Mexica state."],
        ["Feudalism", "A European system of land for loyalty and military service."],
      ],
      mistakes: [
        "Treating \"Islam\" as a single unified empire in this period. The Abbasid Caliphate had fragmented.",
        "Confusing the Inca mit'a with Spanish colonial labor (the Spanish later adapted it in Unit 4).",
      ],
      questions: [
        { q: "Champa rice most directly contributed to which development in Song China?", choices: ["The spread of Buddhism", "Rapid population growth", "The end of the civil-service exams", "Mongol conquest"], answer: 1, explain: "Fast-ripening rice allowed multiple harvests, increasing the food supply and population." },
        { q: "Song China selected government officials mainly through:", choices: ["Hereditary nobility", "Military conquest", "Civil-service examinations", "Religious appointment"], answer: 2, explain: "Merit-based exams on Confucian texts staffed the bureaucracy." },
        { q: "Scholars in Dar al-Islam (e.g., at the House of Wisdom) are known for:", choices: ["Rejecting Greek learning", "Preserving and expanding Greek and Indian knowledge", "Inventing the printing press", "Ending trade with Europe"], answer: 1, explain: "They translated and built on Greek and Indian works in math, medicine and astronomy." },
        { q: "The Inca mit'a system was primarily a:", choices: ["Tax paid in gold", "Required labor system for public projects", "Religious ceremony", "Trade agreement with the Aztecs"], answer: 1, explain: "Subjects owed labor on roads, farms and buildings for the state." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE way the Song dynasty strengthened its government.\n(b) Describe ONE economic innovation of Song China.\n(c) Explain ONE similarity in how the Mexica and Inca governed large territories.",
        points: [
          "(a) E.g. a merit-based civil-service bureaucracy, or Neo-Confucian ideology legitimizing rule.",
          "(b) E.g. champa rice, paper money, the Grand Canal, or expanded commercialization and manufacturing.",
          "(c) E.g. both extracted resources from conquered peoples (Mexica tribute, Inca mit'a labor) to support a central state.",
        ],
      },
    },
    {
      title: "Networks of Exchange (c. 1200–1450)",
      weight: "8–10%",
      tldr: "Trade routes such as the Silk Roads, the Indian Ocean and the trans-Saharan routes connected Afro-Eurasia. They carried goods, ideas, religions, technologies and diseases. The Mongols briefly united much of Eurasia, which sped up exchange.",
      concepts: [
        {
          title: "The Silk Roads",
          simple: "Overland routes across Asia carried luxury goods, ideas and religions between China and the Mediterranean.",
          detail: "Luxury goods (silk, porcelain) were traded because transport was costly. Innovations such as caravanserai (inns), flying cash and bills of exchange supported trade. Trading cities like Kashgar and Samarkand grew.",
        },
        {
          title: "The Mongol Empire",
          simple: "The Mongols built the largest land empire in history, then let trade and ideas flow across it.",
          detail: "The Pax Mongolica made the Silk Roads safer. The Mongols adopted local administration and transferred technologies and knowledge (for example, Greek and Islamic medicine and astronomy). They also spread the Black Death along trade routes.",
        },
        {
          title: "Indian Ocean trade",
          simple: "Sailors used predictable seasonal winds to trade across the Indian Ocean, from East Africa to China.",
          detail: "Monsoon winds and technologies like the lateen sail, the astrolabe and the dhow made the trade possible. Swahili city-states (like Kilwa) grew through trade and Islam. Diasporic merchant communities settled in foreign ports. Zheng He's Ming voyages displayed Chinese power.",
        },
        {
          title: "Trans-Saharan trade and the effects of exchange",
          simple: "Camel caravans crossed the Sahara to trade gold and salt, making West African empires rich.",
          detail: "Camel saddles and caravans made the routes possible. Mali (Mansa Musa's pilgrimage to Mecca) grew wealthy from gold. Travelers like Ibn Battuta documented connected worlds. Effects of exchange included the spread of Islam and Buddhism, crops (Champa rice, citrus) and disease (the Black Death).",
        },
      ],
      terms: [
        ["Caravanserai", "An inn for merchants along trade routes."],
        ["Pax Mongolica", "The period of stability under Mongol rule that boosted Eurasian trade."],
        ["Monsoon", "Seasonal winds that made Indian Ocean sailing predictable."],
        ["Swahili city-states", "East African coastal trading cities that blended Bantu and Arab cultures."],
        ["Diasporic community", "A group of merchants living far from their homeland."],
        ["Mansa Musa", "The ruler of Mali whose pilgrimage to Mecca displayed its gold wealth."],
      ],
      mistakes: [
        "Thinking bulky everyday goods traveled the Silk Roads. Mostly LUXURY goods did.",
        "Forgetting that the same routes that spread goods also spread disease (the Black Death).",
      ],
      questions: [
        { q: "Why did the Silk Roads mainly carry luxury goods?", choices: ["Luxury goods were lighter and valuable enough to justify costly overland transport", "Governments banned other goods", "Only nobles could travel", "Bulk goods were illegal in China"], answer: 0, explain: "Long, expensive overland travel only paid off for high-value, low-weight goods." },
        { q: "The Pax Mongolica most directly led to:", choices: ["The collapse of Eurasian trade", "Increased trade and cultural exchange across Eurasia", "The end of the Black Death", "The rise of feudalism in Europe"], answer: 1, explain: "Mongol control made routes safer, boosting trade and the transfer of ideas and technology." },
        { q: "Indian Ocean trade depended most on:", choices: ["Camel caravans", "Knowledge of monsoon wind patterns", "Steam-powered ships", "The Grand Canal"], answer: 1, explain: "Seasonal monsoons made sailing schedules predictable." },
        { q: "Mansa Musa's pilgrimage to Mecca is significant because it:", choices: ["Introduced Islam to Europe", "Displayed Mali's enormous gold wealth to the Islamic world", "Ended trans-Saharan trade", "Began the Atlantic slave trade"], answer: 1, explain: "He spent so much gold in Cairo that it made Mali famous, and gold's value dropped there." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE technology that facilitated trade between 1200 and 1450.\n(b) Explain ONE way the Mongol Empire affected Eurasian exchange.\n(c) Explain ONE unintended consequence of expanding trade networks.",
        points: [
          "(a) E.g. caravanserai, the compass, the astrolabe, the lateen sail, the camel saddle, or flying cash.",
          "(b) E.g. the Pax Mongolica made routes safe, and the Mongols transferred technology and knowledge between regions.",
          "(c) E.g. the spread of the Black Death along trade routes, which killed large parts of Afro-Eurasia's population.",
        ],
      },
    },
    {
      title: "Land-Based Empires (c. 1450–1750)",
      weight: "12–15%",
      tldr: "Gunpowder empires (the Ottomans, Safavids and Mughals) plus the Qing and Russia expanded by conquest. They held diverse populations together through bureaucracy, taxation and religion, and used monumental architecture and ritual to legitimize their rule.",
      concepts: [
        {
          title: "Expansion of the gunpowder empires",
          simple: "Big land empires used cannons and guns to conquer and hold territory.",
          detail: "The Ottomans took Constantinople in 1453. The Safavids ruled Persia and the Mughals ruled South Asia. The Qing (Manchu) conquered China, and Russia expanded east. Firearms and cannons gave them decisive military advantages.",
        },
        {
          title: "Administering empires",
          simple: "Rulers needed loyal officials and steady taxes to control huge, diverse territories.",
          detail: "The Ottoman devshirme took Christian boys to train as soldiers (Janissaries) and officials. Tax farming was used by the Ottomans, and the Mughals used zamindars as tax collectors. Bureaucracies were often staffed by merit or loyalty, not birth.",
        },
        {
          title: "Legitimizing power",
          simple: "Rulers showed they deserved power through religion, grand buildings and ceremonies.",
          detail: "Monumental architecture (the Taj Mahal, Versailles). Religious authority (the Ottoman sultan as caliph, divine right in Europe). Art and court ritual.",
        },
        {
          title: "Religious conflict and change",
          simple: "Religious divisions shaped politics, both between empires and inside them.",
          detail: "The Protestant Reformation split Christianity (Luther, 1517), and the Counter-Reformation followed. The Sunni Ottomans fought the Shia Safavids. Sikhism emerged in South Asia, blending Hindu and Islamic ideas. The Mughal ruler Akbar practiced religious tolerance.",
        },
      ],
      terms: [
        ["Gunpowder empire", "An empire that expanded using firearms and cannons (Ottoman, Safavid, Mughal)."],
        ["Devshirme", "The Ottoman practice of recruiting Christian boys as soldiers and officials."],
        ["Janissaries", "Elite Ottoman infantry drawn from the devshirme."],
        ["Zamindar", "A Mughal-era landholder who collected taxes."],
        ["Protestant Reformation", "The 16th-century split from the Catholic Church, started by Luther."],
        ["Sikhism", "A religion founded in South Asia that blends Hindu and Islamic elements."],
      ],
      mistakes: [
        "Mixing up the Sunni Ottomans and the Shia Safavids. Their religious rivalry drove their conflict.",
        "Forgetting that tolerance varied: Akbar was tolerant, while the later ruler Aurangzeb was less so.",
      ],
      questions: [
        { q: "The Ottoman devshirme system was used to:", choices: ["Collect taxes from farmers", "Recruit Christian boys to become soldiers and officials", "Convert Europe to Islam", "Build the Taj Mahal"], answer: 1, explain: "Boys were trained as Janissaries or administrators loyal to the sultan." },
        { q: "Conflict between the Ottoman and Safavid empires was fueled partly by:", choices: ["The Sunni–Shia divide", "The Protestant Reformation", "Competition over Atlantic colonies", "The Opium Wars"], answer: 0, explain: "The Ottomans were Sunni and the Safavids were Shia." },
        { q: "The Taj Mahal is an example of rulers legitimizing power through:", choices: ["Military conquest", "Monumental architecture", "Tax farming", "Joint-stock companies"], answer: 1, explain: "Grand buildings displayed the wealth and power of the Mughal ruler." },
        { q: "What was a major effect of the Protestant Reformation?", choices: ["Unification of Christianity", "Religious division and wars in Europe", "The end of the Catholic Church", "The spread of Islam in Europe"], answer: 1, explain: "It split Western Christianity and led to religious conflicts and the Counter-Reformation." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE method a land-based empire used to expand between 1450 and 1750.\n(b) Explain ONE way a land-based empire legitimized its rule.\n(c) Explain ONE similarity in how two land-based empires administered diverse populations.",
        points: [
          "(a) E.g. gunpowder weapons and cannons (the Ottoman conquest of Constantinople, Mughal campaigns).",
          "(b) E.g. monumental architecture, religious authority (the caliph, divine right), or court ritual.",
          "(c) E.g. both Ottomans and Mughals used bureaucracies and tax collection (devshirme and tax farming, zamindars), or both practiced a degree of religious tolerance.",
        ],
      },
    },
    {
      title: "Transoceanic Interconnections (c. 1450–1750)",
      weight: "12–15%",
      tldr: "New maritime technology let Europeans cross oceans. That created the Columbian Exchange, maritime empires and new labor systems, including the Atlantic slave trade. It reshaped societies in the Americas, Africa and Europe, and provoked resistance.",
      concepts: [
        {
          title: "Maritime technology and exploration",
          simple: "Better ships and navigation tools made long ocean voyages possible.",
          detail: "The caravel, lateen sail, astrolabe and magnetic compass, many borrowed from other cultures. Motives included wealth, God and glory, and finding sea routes to Asian trade. Portugal pioneered voyages along Africa (Prince Henry, da Gama), and Columbus reached the Americas in 1492.",
        },
        {
          title: "The Columbian Exchange",
          simple: "Plants, animals, people and diseases moved between the Eastern and Western Hemispheres.",
          detail: "Smallpox devastated Native populations. American crops (potatoes, maize) fed population growth in Afro-Eurasia. Horses and cattle transformed the Americas, and sugar and cash crops drove plantation economies.",
        },
        {
          title: "Maritime empires and trade",
          simple: "European states built ocean empires, some based on trading posts and some on colonies.",
          detail: "Portugal built a trading-post empire. Spain conquered land and mined silver (Potosí), and silver flowed to China. Joint-stock companies (the Dutch VOC, the British East India Company) spread risk among investors. Mercantilism viewed colonies as sources of wealth.",
        },
        {
          title: "Labor systems and resistance",
          simple: "Colonial economies relied on forced labor, and many people resisted.",
          detail: "The encomienda system, the hacienda, the Spanish adaptation of the mit'a for mines, and the chattel slavery of the Atlantic slave trade (Middle Passage). Resistance included the Pueblo Revolt (1680), maroon communities and cultural preservation. The casta system created racial hierarchy.",
        },
      ],
      terms: [
        ["Caravel", "A small, maneuverable Portuguese ship used for exploration."],
        ["Columbian Exchange", "The transfer of plants, animals, people and diseases between hemispheres."],
        ["Joint-stock company", "A company owned by shareholders, which spread the risk of trading ventures."],
        ["Mercantilism", "The idea that colonies should enrich the home country."],
        ["Chattel slavery", "Slavery in which people are treated as property, and enslavement is hereditary."],
        ["Maroon community", "A settlement of people who escaped slavery."],
      ],
      mistakes: [
        "Thinking European technology was all invented in Europe. The compass and astrolabe came from Asia and the Islamic world.",
        "Forgetting that American silver flowed across the Pacific to China, making trade truly global.",
      ],
      questions: [
        { q: "Which technology came to Europeans from other cultures and aided exploration?", choices: ["The steam engine", "The astrolabe and magnetic compass", "The telegraph", "The cotton gin"], answer: 1, explain: "Both reached Europe through Islamic and Chinese contact." },
        { q: "A major effect of the Columbian Exchange on Afro-Eurasia was:", choices: ["Population decline from smallpox", "Population growth from American crops like potatoes and maize", "The end of the slave trade", "The collapse of Chinese trade"], answer: 1, explain: "Calorie-rich American crops supported population growth. Smallpox devastated the AMERICAS." },
        { q: "Joint-stock companies like the Dutch East India Company were important because they:", choices: ["Were run by monarchs", "Spread financial risk among many investors", "Banned slavery", "Ended mercantilism"], answer: 1, explain: "Shareholders shared the risk and profit of costly voyages." },
        { q: "The Pueblo Revolt of 1680 is an example of:", choices: ["Resistance to Spanish colonial rule", "A European religious war", "Ottoman expansion", "The Industrial Revolution"], answer: 0, explain: "The Pueblo temporarily drove the Spanish out of New Mexico." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE motive for European maritime exploration.\n(b) Explain ONE effect of the Columbian Exchange on the Americas.\n(c) Explain ONE way enslaved or colonized peoples resisted European control.",
        points: [
          "(a) E.g. access to Asian trade and spices, spreading Christianity, or gaining wealth and prestige.",
          "(b) E.g. smallpox killed most Native people, or horses and cattle transformed ways of life.",
          "(c) E.g. the Pueblo Revolt, maroon communities, slave revolts, or preserving cultural and religious practices.",
        ],
      },
    },
    {
      title: "Revolutions (c. 1750–1900)",
      weight: "12–15%",
      tldr: "Enlightenment ideas inspired political revolutions and nationalism, while the Industrial Revolution transformed how goods were made, how people worked, and which states held power. New ideologies and reform movements responded to industrial society.",
      concepts: [
        {
          title: "Enlightenment and political revolutions",
          simple: "New ideas about natural rights and consent of the governed inspired people to overthrow their rulers.",
          detail: "Locke (natural rights) and Rousseau (the social contract). The American Revolution (1776), the French Revolution (1789) and the Haitian Revolution (1791, led by enslaved people under Toussaint Louverture). Latin American independence came under Bolívar. The Declaration of the Rights of Man.",
        },
        {
          title: "Nationalism",
          simple: "People began to see themselves as a nation united by language and culture, and demanded their own state.",
          detail: "German unification (Bismarck, 1871) and Italian unification (1861). Nationalism both united and divided empires, fueling independence movements.",
        },
        {
          title: "The Industrial Revolution",
          simple: "Machines and factories replaced hand production, starting in Britain.",
          detail: "Britain had coal, iron, rivers, capital, colonies and an agricultural revolution that freed up labor. Factories, the steam engine and railroads followed. The Second Industrial Revolution brought steel, chemicals and electricity. Industrialization spread to the U.S., Germany, Russia and Meiji Japan.",
        },
        {
          title: "Responses to industrialization",
          simple: "Industrial life created harsh conditions, and people organized to change them.",
          detail: "Liberalism and laissez-faire (Adam Smith), socialism and Marxism (class struggle). Labor unions, and reforms such as child labor laws and suffrage. Some states resisted industrialization (the Ottomans and Qing, which were slower) while others pursued state-led reform (Meiji Japan).",
        },
      ],
      terms: [
        ["Enlightenment", "An 18th-century movement emphasizing reason and natural rights."],
        ["Haitian Revolution", "The successful 1791–1804 revolt of enslaved people against French rule."],
        ["Nationalism", "Loyalty to a nation defined by shared culture, language or history."],
        ["Industrial Revolution", "The shift from hand production to machine and factory production."],
        ["Marxism", "Marx's theory that class struggle would lead workers to overthrow capitalism."],
        ["Meiji Restoration", "Japan's state-led modernization and industrialization after 1868."],
      ],
      mistakes: [
        "Leaving out the Haitian Revolution, the only successful revolt of enslaved people to create a state.",
        "Saying industrialization started everywhere at once. It began in BRITAIN, for specific reasons.",
      ],
      questions: [
        { q: "Which revolution was led by enslaved people and created an independent state?", choices: ["The American Revolution", "The French Revolution", "The Haitian Revolution", "The Glorious Revolution"], answer: 2, explain: "Enslaved Haitians, led by Toussaint Louverture, won independence from France in 1804." },
        { q: "Why did the Industrial Revolution begin in Great Britain?", choices: ["Britain had no colonies", "Britain had coal, iron, capital and a growing labor supply", "Britain banned agriculture", "Britain had the largest population in the world"], answer: 1, explain: "Resources, capital, colonies and an agricultural revolution combined to make Britain first." },
        { q: "Karl Marx argued that:", choices: ["Free markets would end poverty", "Class struggle would lead workers to overthrow capitalism", "Monarchy was the best government", "Industrialization should be reversed"], answer: 1, explain: "Marxism predicted a proletarian revolution against the capitalist class." },
        { q: "Japan's response to Western industrial power in the late 1800s was:", choices: ["Complete isolation", "State-led industrialization and modernization (Meiji Restoration)", "Becoming a British colony", "Rejecting all Western technology"], answer: 1, explain: "The Meiji government deliberately adopted Western industry, military methods and education." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE Enlightenment idea that influenced revolutions between 1750 and 1900.\n(b) Explain ONE reason Britain industrialized first.\n(c) Explain ONE way workers or reformers responded to industrialization.",
        points: [
          "(a) E.g. natural rights, the social contract, popular sovereignty, or equality before the law.",
          "(b) E.g. abundant coal and iron, capital from trade and colonies, an agricultural revolution freeing labor, or rivers and ports.",
          "(c) E.g. labor unions and strikes, socialist and Marxist movements, or reforms limiting child labor.",
        ],
      },
    },
    {
      title: "Consequences of Industrialization (c. 1750–1900)",
      weight: "12–15%",
      tldr: "Industrial states needed raw materials and markets, so they expanded their empires in Africa and Asia. They justified this with racist ideologies. Colonized peoples resisted, economic imperialism reshaped trade, and millions migrated for work.",
      concepts: [
        {
          title: "Rationales for imperialism",
          simple: "Industrial countries wanted resources and markets, and used racist ideas to justify taking over other lands.",
          detail: "Economic motives (raw materials, markets). Social Darwinism and the \"civilizing mission\" / \"White Man's Burden.\" Nationalism and competition among powers.",
        },
        {
          title: "State expansion",
          simple: "Europeans divided up Africa and took more control of Asia.",
          detail: "The Berlin Conference (1884–85) and the Scramble for Africa. The British Raj replaced East India Company rule after 1857. Settler colonies included Australia and South Africa. The U.S. and Japan also expanded (the Philippines, Korea).",
        },
        {
          title: "Resistance to imperialism",
          simple: "Colonized peoples fought back through rebellions, religious movements and new national identities.",
          detail: "The Sepoy Rebellion (India, 1857), the Ghost Dance, the Xhosa Cattle-Killing, the Zulu resistance, and Ethiopia's victory at Adwa (1896). Anti-imperial nationalism grew.",
        },
        {
          title: "Economic imperialism and migration",
          simple: "Powerful countries controlled weaker countries' economies, and millions of people moved for work.",
          detail: "The Opium Wars forced China to open trade and led to spheres of influence. Export economies developed (cotton in Egypt, rubber in the Congo). Indentured laborers migrated from India and China, and Europeans migrated to the Americas. Ethnic enclaves formed, along with anti-immigrant laws.",
        },
      ],
      terms: [
        ["Social Darwinism", "The misuse of evolution to justify racial hierarchy and imperialism."],
        ["Berlin Conference", "The 1884–85 meeting where Europeans set rules for claiming Africa."],
        ["Sepoy Rebellion", "An 1857 Indian uprising against East India Company rule."],
        ["Opium Wars", "Wars in which Britain forced China to accept opium trade and open its ports."],
        ["Sphere of influence", "An area where a foreign power holds exclusive economic privileges."],
        ["Indentured servitude", "Labor under contract for a set term, common for migrant workers."],
      ],
      mistakes: [
        "Seeing imperialism only as political control. Economic imperialism (the Opium Wars, spheres of influence) mattered too.",
        "Ignoring resistance. Many colonized societies fought back, sometimes successfully (Ethiopia at Adwa).",
      ],
      questions: [
        { q: "The Berlin Conference (1884–85) is significant because it:", choices: ["Ended the slave trade", "Set rules for European powers to claim African territory", "Granted independence to African nations", "Created the League of Nations"], answer: 1, explain: "It organized the Scramble for Africa, with no Africans present." },
        { q: "Social Darwinism was used to:", choices: ["Oppose imperialism", "Justify imperialism and racial hierarchy", "Promote labor unions", "Support the abolition of slavery"], answer: 1, explain: "It misapplied \"survival of the fittest\" to claim some races should rule others." },
        { q: "What was an effect of the Sepoy Rebellion of 1857?", choices: ["India won independence", "The British government took direct control of India (the British Raj)", "The Mughal Empire expanded", "Britain withdrew from Asia"], answer: 1, explain: "Rule passed from the East India Company to the British Crown." },
        { q: "The Opium Wars resulted in:", choices: ["China's victory over Britain", "Unequal treaties that opened China to foreign trade and spheres of influence", "The end of the Qing dynasty that year", "Chinese colonies in Europe"], answer: 1, explain: "Treaties like Nanjing forced open ports and gave foreigners privileges." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE economic motive for imperialism in the 1800s.\n(b) Explain ONE way colonized peoples resisted imperial control.\n(c) Explain ONE way imperialism affected migration patterns.",
        points: [
          "(a) E.g. obtaining raw materials (cotton, rubber) or new markets for industrial goods.",
          "(b) E.g. the Sepoy Rebellion, Ethiopia's victory at Adwa, the Ghost Dance, or nationalist movements.",
          "(c) E.g. indentured laborers from India and China moved to plantations and colonies, and settlers moved to colonies.",
        ],
      },
    },
    {
      title: "Global Conflict (c. 1900–present)",
      weight: "8–10%",
      tldr: "Two world wars, the collapse of old empires, economic depression and the rise of totalitarian regimes defined the early 20th century. Total war and genocide caused unprecedented destruction.",
      concepts: [
        {
          title: "Shifting power and the end of empires",
          simple: "Several old empires collapsed in the early 1900s through revolution and war.",
          detail: "The Qing fell (1911), the Ottoman Empire collapsed after WWI, the Russian Revolution (1917) created the USSR, and the Mexican Revolution (1910) took place. Internal weaknesses combined with nationalism brought them down.",
        },
        {
          title: "World War I",
          simple: "Europe's rivalries exploded into a massive war that drew in the world, including colonies.",
          detail: "Causes (MAIN): militarism, alliances, imperialism, nationalism. It was a total war that mobilized entire economies, with propaganda and colonial troops. The Treaty of Versailles punished Germany.",
          hook: "Causes of WWI = MAIN: Militarism, Alliances, Imperialism, Nationalism.",
        },
        {
          title: "The interwar years",
          simple: "After the war, economic collapse helped extreme governments rise to power.",
          detail: "The Great Depression. Fascism in Italy (Mussolini) and Germany (Hitler). Stalin's Five-Year Plans and collectivization in the USSR. Governments intervened more in their economies (the New Deal, Keynesian ideas).",
        },
        {
          title: "World War II and genocide",
          simple: "WWII was even more destructive, including the deliberate mass murder of whole groups of people.",
          detail: "Axis expansion (Germany, Italy, Japan). Total war, the Holocaust, the Armenian genocide (WWI era), the atomic bombs, and the Nanjing Massacre. WWII led to the creation of the United Nations.",
        },
      ],
      terms: [
        ["Total war", "A war that mobilizes a nation's entire economy and population."],
        ["Treaty of Versailles", "The 1919 treaty that punished Germany after WWI."],
        ["Fascism", "Authoritarian, ultranationalist rule that suppresses opposition."],
        ["Five-Year Plans", "Stalin's state-directed programs for rapid industrialization."],
        ["Holocaust", "Nazi Germany's genocide of six million Jews and millions of others."],
        ["Genocide", "The deliberate destruction of a national, ethnic, racial or religious group."],
      ],
      mistakes: [
        "Treating WWI as purely European. Colonial troops and resources were central to it.",
        "Forgetting that the Depression's economic crisis helped fascism rise.",
      ],
      questions: [
        { q: "Which is a long-term cause of World War I?", choices: ["The Great Depression", "Militarism and the alliance system", "The Cold War", "Decolonization"], answer: 1, explain: "Militarism, Alliances, Imperialism and Nationalism (MAIN) built tension before 1914." },
        { q: "\"Total war\" in WWI meant that:", choices: ["Only soldiers were involved", "Entire economies and populations were mobilized", "The war was fought only at sea", "No colonies participated"], answer: 1, explain: "Governments directed industry, rationed goods and used propaganda to support the war." },
        { q: "A major factor in the rise of fascism in the 1920s–30s was:", choices: ["Economic crisis such as the Great Depression", "The end of the Cold War", "The spread of democracy in Africa", "The Green Revolution"], answer: 0, explain: "Economic desperation made extreme promises of order and national revival appealing." },
        { q: "Stalin's Five-Year Plans aimed to:", choices: ["Restore the monarchy", "Rapidly industrialize the Soviet Union under state control", "Create a free-market economy", "Decolonize Africa"], answer: 1, explain: "They were state-directed industrialization programs with harsh collectivization." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE cause of World War I.\n(b) Explain ONE way governments mobilized for total war.\n(c) Explain ONE similarity between fascist and communist governments in the 1930s.",
        points: [
          "(a) E.g. militarism, alliances, imperial rivalry, nationalism, or the assassination of Franz Ferdinand as a trigger.",
          "(b) E.g. propaganda, rationing, conscription, directing industry, or recruiting colonial troops.",
          "(c) E.g. both were authoritarian single-party states that suppressed dissent and used propaganda.",
        ],
      },
    },
    {
      title: "Cold War and Decolonization (c. 1900–present)",
      weight: "8–10%",
      tldr: "After WWII, the U.S. and the USSR competed for global influence without fighting each other directly. At the same time, colonized peoples across Asia and Africa won independence, through negotiation in some places and violent struggle in others.",
      concepts: [
        {
          title: "The Cold War",
          simple: "The capitalist U.S. and the communist USSR competed for influence around the world.",
          detail: "Military alliances (NATO and the Warsaw Pact). Proxy wars in Korea, Vietnam and Afghanistan. The nuclear arms race. The Non-Aligned Movement (India, Indonesia) refused to pick a side.",
        },
        {
          title: "Decolonization",
          simple: "After WWII, most colonies in Asia and Africa became independent nations.",
          detail: "India (1947) won independence through Gandhi's nonviolent resistance, followed by partition. Ghana (1957) negotiated independence. Algeria (1962) and Kenya won through violent struggle. New states faced borders drawn by colonizers and ethnic conflict.",
        },
        {
          title: "Revolutions and new states",
          simple: "Some countries became communist through revolution, and new leaders tried to transform their societies.",
          detail: "The Chinese Communist Revolution (1949), the Great Leap Forward (famine) and the Cultural Revolution. The Cuban Revolution. Many new states pursued state-led economic development.",
        },
        {
          title: "The end of the Cold War",
          simple: "The Soviet Union collapsed in 1991, ending the Cold War.",
          detail: "Economic stagnation, costly military spending and the war in Afghanistan weakened the USSR. Gorbachev's reforms (glasnost, perestroika) followed, the Berlin Wall fell (1989), and the USSR dissolved (1991).",
        },
      ],
      terms: [
        ["Proxy war", "A conflict where superpowers support opposing sides instead of fighting directly."],
        ["Non-Aligned Movement", "Countries that refused to join either Cold War bloc."],
        ["Decolonization", "The process of colonies gaining independence."],
        ["Partition of India", "The 1947 division into India and Pakistan, which caused mass migration and violence."],
        ["Great Leap Forward", "Mao's failed 1958–62 industrialization campaign, which caused famine."],
        ["Glasnost", "Gorbachev's policy of openness in the USSR."],
      ],
      mistakes: [
        "Assuming all decolonization was peaceful. Compare nonviolent India with violent Algeria.",
        "Forgetting the Non-Aligned Movement: not every country chose a side.",
      ],
      questions: [
        { q: "The Korean and Vietnam Wars are examples of:", choices: ["Proxy wars during the Cold War", "Wars of European colonization", "World War I battles", "Religious wars"], answer: 0, explain: "The superpowers backed opposing sides without fighting each other directly." },
        { q: "India's independence movement is best known for:", choices: ["Violent guerrilla warfare", "Nonviolent civil disobedience led by Gandhi", "Support from the Soviet army", "Joining NATO"], answer: 1, explain: "Gandhi's satyagraha used mass nonviolent resistance." },
        { q: "Unlike India, Algeria's independence from France came mainly through:", choices: ["Peaceful negotiation", "A violent war of independence", "A UN vote", "An economic boycott only"], answer: 1, explain: "The Algerian War (1954–62) was long and violent." },
        { q: "Which contributed to the collapse of the Soviet Union?", choices: ["The Marshall Plan", "Economic stagnation and Gorbachev's reforms", "The Great Leap Forward", "The Berlin Conference"], answer: 1, explain: "A weak economy, military costs and glasnost/perestroika loosened control until the USSR dissolved in 1991." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE way the U.S. or the USSR tried to expand its influence during the Cold War.\n(b) Compare how TWO colonies achieved independence.\n(c) Explain ONE challenge newly independent states faced.",
        points: [
          "(a) E.g. military alliances (NATO, Warsaw Pact), economic aid, proxy wars, or the arms race.",
          "(b) E.g. India used nonviolent resistance and negotiation, while Algeria fought a violent war.",
          "(c) E.g. borders drawn by colonizers causing ethnic conflict, economic dependence, or political instability.",
        ],
      },
    },
    {
      title: "Globalization (c. 1900–present)",
      weight: "8–10%",
      tldr: "Technology, trade and communication have tied the world together. That has brought medical advances, economic growth and cultural exchange, along with inequality, environmental damage and movements demanding rights.",
      concepts: [
        {
          title: "Advances in technology and medicine",
          simple: "New technology and medicine changed daily life, though not equally everywhere.",
          detail: "The Green Revolution raised crop yields. Vaccines eradicated smallpox. Communication technology (radio, the internet) spread. Diseases persisted or emerged (HIV/AIDS, malaria), and environmental change followed (climate change, deforestation).",
        },
        {
          title: "Economic globalization",
          simple: "Countries traded more freely, and big companies operated worldwide.",
          detail: "Free-market policies (Reagan, Thatcher, Deng Xiaoping's reforms in China). Free-trade agreements (NAFTA, the WTO, the EU). Multinational corporations. Critics pointed to inequality and exploitation.",
        },
        {
          title: "Calls for reform and rights",
          simple: "Movements around the world pushed for equality and justice.",
          detail: "The civil rights movement, women's rights, and the end of apartheid in South Africa (Mandela, 1994). Human rights organizations. Environmentalism.",
        },
        {
          title: "Global culture",
          simple: "Music, sports, film and consumer brands spread worldwide, sometimes blending cultures and sometimes provoking backlash.",
          detail: "Global popular culture (Bollywood, K-pop, the Olympics). Some groups responded by reasserting religious or national identity.",
        },
      ],
      terms: [
        ["Green Revolution", "New seeds, fertilizers and irrigation that greatly increased crop yields."],
        ["Globalization", "The increasing economic, cultural and political connection of the world."],
        ["Multinational corporation", "A company operating in many countries."],
        ["Apartheid", "South Africa's system of legal racial segregation, which ended in 1994."],
        ["WTO", "The World Trade Organization, which promotes and regulates international trade."],
      ],
      mistakes: [
        "Describing globalization as only positive or only negative. The exam rewards weighing both.",
        "Forgetting that benefits like the Green Revolution were uneven and had environmental costs.",
      ],
      questions: [
        { q: "The Green Revolution primarily:", choices: ["Reduced global food production", "Increased crop yields through new seeds, fertilizers and irrigation", "Ended industrial pollution", "Began the Cold War"], answer: 1, explain: "High-yield crops and new technology boosted food production, especially in Asia and Latin America." },
        { q: "Which is an example of economic globalization?", choices: ["The Berlin Wall", "Free-trade agreements like NAFTA", "The Sepoy Rebellion", "Feudalism"], answer: 1, explain: "Lowering trade barriers linked national economies." },
        { q: "The end of apartheid in South Africa is associated with:", choices: ["Nelson Mandela", "Mao Zedong", "Otto von Bismarck", "Simón Bolívar"], answer: 0, explain: "Mandela became president in 1994 after apartheid ended." },
        { q: "A criticism of economic globalization is that it:", choices: ["Always equalizes wealth", "Has increased inequality and exploitation in some places", "Ended all trade", "Eliminated multinational corporations"], answer: 1, explain: "Critics point to uneven benefits, labor exploitation and environmental harm." },
      ],
      frq: {
        prompt: "Short answer:\n(a) Identify ONE technological or medical advance after 1900 and its effect.\n(b) Explain ONE effect of economic globalization.\n(c) Explain ONE movement that called for reform or rights after 1900.",
        points: [
          "(a) E.g. the Green Revolution raised food supply, or vaccines eradicated smallpox.",
          "(b) E.g. the growth of multinational corporations, rising trade, or increased inequality.",
          "(c) E.g. the anti-apartheid movement, women's rights, civil rights, or environmentalism.",
        ],
      },
    },
  ],
};
