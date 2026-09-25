window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["chemistry"] = {
  tips: [
    "Explain at the particle level. Talk about attractions, collisions and electrons, not just \"because it's more reactive.\"",
    "For periodic trends, use Coulomb's law: more protons pulling on electrons, or electrons that are closer, means stronger attraction. Mention shielding when it matters.",
    "Show your setup in calculations: units, moles, and the equation you're using. Partial credit depends on it.",
    "Know the difference between intermolecular forces (between molecules, which set boiling point) and bonds (within a molecule).",
    "Watch significant figures and include units on every final answer.",
    "The exam provides a periodic table, an equation sheet and a calculator on every section.",
  ],
  units: [
    {
      title: "Atomic Structure and Properties",
      weight: "7–9%",
      tldr: "Chemists count atoms using moles. An atom's electrons are arranged in shells and subshells, and the attraction between the nucleus and those electrons explains the periodic trends.",
      concepts: [
        {
          title: "Moles and molar mass",
          simple: "A mole is a chemist's \"dozen\": 6.022 × 10²³ particles. Molar mass converts grams to moles.",
          detail: "n = mass / molar mass. Avogadro's number converts moles to particles. Mass spectrometry reveals isotopes and their abundances. The average atomic mass is the abundance-weighted average of the isotope masses.",
          example: "36 g of H₂O ÷ 18 g/mol = 2.0 mol.",
        },
        {
          title: "Composition and empirical formulas",
          simple: "Percent composition tells you what fraction of a compound's mass comes from each element. The empirical formula is the simplest whole-number ratio of atoms.",
          detail: "Assume 100 g, convert each element to moles, and divide by the smallest number of moles. 40.0% C, 6.7% H, 53.3% O → 3.33 : 6.7 : 3.33 → CH₂O.",
        },
        {
          title: "Electron configuration and PES",
          simple: "Electrons fill energy levels in a set order. Photoelectron spectroscopy (PES) shows how tightly each group of electrons is held.",
          detail: "Filling order: 1s 2s 2p 3s 3p 4s 3d… In a PES spectrum, peak position shows binding energy (the core 1s electrons are the highest), and peak height shows how many electrons are in that subshell.",
        },
        {
          title: "Periodic trends and Coulomb's law",
          simple: "Across a row, more protons pull the electrons in tighter. Down a column, electrons sit farther away and are shielded, so they're held more loosely.",
          detail: "Across a period: effective nuclear charge increases, so radius decreases and ionization energy and electronegativity increase. Down a group: more shells and shielding, so radius increases and IE decreases. Coulomb's law: F ∝ q₁q₂/r².",
          hook: "Ionization energy increases toward fluorine (upper right). Atomic radius increases toward francium (lower left).",
        },
      ],
      terms: [
        ["Mole", "6.022 × 10²³ particles."],
        ["Isotopes", "Atoms of the same element with different numbers of neutrons."],
        ["Empirical formula", "The simplest whole-number ratio of atoms in a compound."],
        ["Ionization energy", "The energy needed to remove an electron from a gaseous atom."],
        ["Effective nuclear charge", "The net positive charge felt by the valence electrons."],
        ["Photoelectron spectroscopy", "A technique that measures the energy needed to remove electrons from each subshell."],
      ],
      mistakes: [
        "Explaining trends with \"atoms want a full octet.\" Explain with Coulombic attraction instead.",
        "Forgetting that 4s fills before 3d, but electrons are removed from 4s first when ions form.",
      ],
      questions: [
        { q: "How many moles of water are in 36 g of H₂O? (molar mass 18 g/mol)", choices: ["0.5 mol", "2.0 mol", "18 mol", "648 mol"], answer: 1, explain: "36 ÷ 18 = 2.0 mol." },
        { q: "Which element has the highest first ionization energy?", choices: ["Li", "Na", "O", "F"], answer: 3, explain: "F is farthest up and to the right: it has the highest effective nuclear charge and the smallest radius among these." },
        { q: "Why does atomic radius decrease across a period?", choices: ["More electron shells are added", "Proton count increases while the shell stays the same, pulling electrons closer", "Neutrons repel electrons", "Shielding increases greatly"], answer: 1, explain: "Same energy level, more protons: a stronger Coulombic attraction pulls the valence electrons in." },
        { q: "Chlorine is 75% Cl-35 and 25% Cl-37. What is its average atomic mass?", choices: ["35.0", "35.5", "36.0", "37.0"], answer: 1, explain: "0.75(35) + 0.25(37) = 26.25 + 9.25 = 35.5." },
      ],
      frq: {
        prompt: "(a) Write the electron configuration of Mg and of Al.\n(b) Mg has a HIGHER first ionization energy than Al, even though Al has more protons. Explain.\n(c) A compound is 40.0% C, 6.7% H and 53.3% O by mass. Determine its empirical formula.",
        points: [
          "(a) Mg: 1s²2s²2p⁶3s². Al: 1s²2s²2p⁶3s²3p¹.",
          "(b) Al's outermost electron is in a 3p orbital, which is higher in energy and slightly shielded by the 3s electrons, so it's removed more easily than Mg's 3s electron.",
          "(c) Moles: C 3.33, H 6.6, O 3.33. Ratio 1 : 2 : 1, so CH₂O.",
        ],
      },
    },
    {
      title: "Compound Structure and Properties",
      weight: "7–9%",
      tldr: "Atoms bond by transferring or sharing electrons. Lewis diagrams and VSEPR predict a molecule's shape, and shape plus bond polarity determines whether a molecule is polar.",
      concepts: [
        {
          title: "Types of bonds",
          simple: "Metals give electrons to nonmetals (ionic). Nonmetals share electrons (covalent). Metals pool their electrons in a \"sea\" (metallic).",
          detail: "Bond polarity depends on the electronegativity difference. Metallic bonding explains conductivity and malleability. Alloys can be interstitial (small atoms fit in the gaps) or substitutional (similar-sized atoms swap places).",
        },
        {
          title: "Lewis diagrams, resonance and formal charge",
          simple: "Lewis diagrams show where valence electrons are: in bonds or as lone pairs.",
          detail: "Count the valence electrons, connect the atoms, complete the octets, and use multiple bonds if needed. Formal charge = valence e⁻ − (nonbonding e⁻ + ½ bonding e⁻). The best structure has formal charges closest to zero. Resonance means the true structure is an average of several valid structures.",
        },
        {
          title: "VSEPR, shape and hybridization",
          simple: "Electron groups around a central atom spread out as far apart as possible, and that sets the molecule's shape.",
          detail: "2 groups: linear (sp, 180°). 3: trigonal planar (sp², 120°). 4: tetrahedral (sp³, 109.5°). Lone pairs change the shape: NH₃ is trigonal pyramidal and H₂O is bent.",
        },
        {
          title: "Molecular polarity",
          simple: "A molecule is polar if its charge is lopsided. Symmetrical molecules cancel out.",
          detail: "Polar bonds in a symmetrical shape (CO₂, CH₄) cancel, so the molecule is nonpolar. An asymmetrical shape (H₂O, NH₃) makes it polar.",
        },
      ],
      terms: [
        ["Electronegativity", "An atom's ability to attract shared electrons."],
        ["Lone pair", "A pair of valence electrons that isn't bonding."],
        ["Resonance", "Several valid Lewis structures for the same molecule. The real structure is an average of them."],
        ["Formal charge", "The bookkeeping charge used to choose the best Lewis structure."],
        ["VSEPR", "Valence Shell Electron Pair Repulsion theory for predicting shapes."],
        ["sp³ hybridization", "Four electron groups around an atom, giving tetrahedral geometry."],
      ],
      mistakes: [
        "Calling CO₂ polar because its bonds are polar. Its symmetry cancels the dipoles.",
        "Ignoring lone pairs when naming a molecule's shape.",
      ],
      questions: [
        { q: "What is the molecular shape of NH₃?", choices: ["Trigonal planar", "Tetrahedral", "Trigonal pyramidal", "Bent"], answer: 2, explain: "4 electron groups (3 bonds + 1 lone pair) → the shape is trigonal pyramidal." },
        { q: "CO₂ has polar C=O bonds but is nonpolar because:", choices: ["Carbon isn't electronegative", "Its linear shape makes the bond dipoles cancel", "It has lone pairs on carbon", "It is ionic"], answer: 1, explain: "Two equal dipoles pointing in opposite directions cancel out." },
        { q: "What is the hybridization of carbon in CH₄?", choices: ["sp", "sp²", "sp³", "sp³d"], answer: 2, explain: "Four electron groups around carbon → sp³." },
        { q: "Steel is iron with small carbon atoms in the gaps between iron atoms. This is a(n):", choices: ["Substitutional alloy", "Interstitial alloy", "Ionic solid", "Network covalent solid"], answer: 1, explain: "Small atoms that fit into the gaps of a metal lattice make an interstitial alloy." },
      ],
      frq: {
        prompt: "Consider formaldehyde, CH₂O.\n(a) Draw its Lewis diagram.\n(b) Identify the molecular geometry and the approximate H–C–H bond angle.\n(c) Is CH₂O polar? Justify.",
        points: [
          "(a) C in the center, double-bonded to O (O has two lone pairs), single-bonded to each H. That's 12 valence electrons.",
          "(b) Trigonal planar, about 120° (sp² carbon).",
          "(c) Polar: the C=O bond is polar and the molecule isn't symmetrical enough to cancel it.",
        ],
      },
    },
    {
      title: "Properties of Substances and Mixtures",
      weight: "18–22%",
      tldr: "Intermolecular forces (IMFs) control boiling points, solubility and whether something is a solid, liquid or gas. Gases follow PV = nRT. Solutions are described by concentration, and light interacting with matter lets us measure concentration.",
      concepts: [
        {
          title: "Intermolecular forces",
          simple: "Molecules attract their neighbors. Stronger attractions mean it takes more energy to pull them apart, so the boiling point is higher.",
          detail: "London dispersion forces act on all molecules and grow with more electrons (more polarizable). Dipole-dipole forces act between polar molecules. Hydrogen bonds form when H is bonded to N, O or F. Ion-dipole forces hold dissolved ions in solution.",
          example: "H₂O boils far higher than H₂S because of hydrogen bonding.",
        },
        {
          title: "Types of solids",
          simple: "The kind of particle and how it's held together determines the solid's properties.",
          detail: "Ionic solids: high melting point, conduct when melted or dissolved. Molecular solids: low melting point. Covalent network solids (diamond, SiO₂): very high melting point. Metallic solids: conductive and malleable.",
        },
        {
          title: "Gases",
          simple: "Gas particles zoom around and bounce off the walls. Pressure, volume, temperature and amount are all linked.",
          detail: "PV = nRT (T must be in kelvin). Dalton's law: P_total = ΣP_i, and P_i = X_i·P_total. Kinetic molecular theory: average KE ∝ T. Real gases deviate from ideal behavior at HIGH pressure and LOW temperature, where particle volume and attractions start to matter.",
        },
        {
          title: "Solutions, separation and spectroscopy",
          simple: "Concentration measures how much stuff is dissolved. Light absorption lets you measure it.",
          detail: "Molarity M = mol solute / L solution. \"Like dissolves like.\" Chromatography and distillation separate mixtures based on IMFs. Beer–Lambert law: A = εbc, so absorbance is proportional to concentration. E = hν for photons.",
        },
      ],
      terms: [
        ["London dispersion forces", "Temporary-dipole attractions present in all molecules."],
        ["Hydrogen bonding", "A strong dipole attraction involving H bonded to N, O or F."],
        ["Ideal gas law", "PV = nRT"],
        ["Partial pressure", "The pressure one gas in a mixture contributes."],
        ["Molarity", "Moles of solute per liter of solution."],
        ["Beer–Lambert law", "A = εbc. Absorbance is proportional to concentration."],
      ],
      mistakes: [
        "Saying boiling breaks covalent bonds. It overcomes INTERmolecular forces.",
        "Using °C in PV = nRT. Always use kelvin.",
        "Thinking \"hydrogen bond\" means any bond to hydrogen.",
      ],
      questions: [
        { q: "Which has the higher boiling point, and why: H₂O or H₂S?", choices: ["H₂S, because it has more electrons", "H₂O, because of hydrogen bonding", "They're equal", "H₂S, because it's larger"], answer: 1, explain: "H₂O forms hydrogen bonds (H bonded to O). Those are much stronger than H₂S's dipole forces." },
        { q: "A real gas behaves LEAST like an ideal gas at:", choices: ["High T, low P", "Low T, high P", "High T, high P", "Low T, low P"], answer: 1, explain: "Particles are crowded (high P) and slow (low T), so particle volume and attractions matter." },
        { q: "0.50 mol of NaCl dissolved to make 250 mL of solution has a molarity of:", choices: ["0.125 M", "0.50 M", "2.0 M", "125 M"], answer: 2, explain: "0.50 mol / 0.250 L = 2.0 M." },
        { q: "At constant volume and moles, the kelvin temperature of a gas doubles. Its pressure:", choices: ["Halves", "Doubles", "Stays the same", "Quadruples"], answer: 1, explain: "P ∝ T when V and n are constant." },
      ],
      frq: {
        prompt: "2.00 mol of a gas mixture is in a 10.0 L container at 300. K. The mixture is 25% O₂ by moles. (R = 0.08206 L·atm/mol·K)\n(a) Calculate the total pressure.\n(b) Calculate the partial pressure of O₂.\n(c) Would the gas behave more or less ideally if it were compressed to 0.500 L? Explain at the particle level.",
        points: [
          "(a) P = nRT/V = 2.00·0.08206·300./10.0 ≈ 4.92 atm.",
          "(b) P_O₂ = 0.25 × 4.92 ≈ 1.23 atm.",
          "(c) Less ideally: the particles are closer together, so their own volume and the attractions between them become significant.",
        ],
      },
    },
    {
      title: "Chemical Reactions",
      weight: "7–9%",
      tldr: "Balanced equations show the mole ratios between reactants and products, and stoichiometry uses those ratios. The main reaction types are precipitation, acid–base and redox.",
      concepts: [
        {
          title: "Physical vs. chemical change",
          simple: "A chemical change makes new substances. A physical change doesn't.",
          detail: "Chemical changes break and form bonds (for example, combustion). Physical changes include phase changes and dissolving. Dissolving an ionic compound is a gray area on the exam: explain your reasoning either way.",
        },
        {
          title: "Net ionic equations",
          simple: "Show only the particles that actually react. Leave out the \"spectator\" ions.",
          detail: "Split strong electrolytes (aqueous salts, strong acids and bases) into ions and cancel the spectators. Keep solids, liquids, gases and weak electrolytes written together as compounds.",
          example: "AgNO₃(aq) + NaCl(aq) → Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
        },
        {
          title: "Stoichiometry and limiting reactant",
          simple: "Follow the recipe: the ingredient that runs out first limits how much product you can make.",
          detail: "Grams → moles → mole ratio from the balanced equation → moles → grams. Find the limiting reactant by seeing which one produces LESS product.",
        },
        {
          title: "Titration, acid–base and redox",
          simple: "Titration finds an unknown concentration by adding a known solution until it exactly reacts.",
          detail: "At the equivalence point, moles of acid = moles of base (by the reaction ratio). Redox: oxidation is losing electrons (oxidation number goes up), reduction is gaining electrons (oxidation number goes down).",
          hook: "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).",
        },
      ],
      terms: [
        ["Spectator ion", "An ion that appears unchanged on both sides of the equation."],
        ["Limiting reactant", "The reactant that runs out first and limits the product."],
        ["Equivalence point", "The point in a titration where the reactants are in exact stoichiometric amounts."],
        ["Oxidation number", "The charge an atom would have if every bond were ionic."],
        ["Precipitate", "An insoluble solid that forms from a solution."],
      ],
      mistakes: [
        "Splitting solids or weak acids into ions in net ionic equations.",
        "Using grams in the mole ratio. Convert to moles first.",
      ],
      questions: [
        { q: "2H₂ + O₂ → 2H₂O. How many moles of H₂O form from 4 mol H₂ and excess O₂?", choices: ["2 mol", "4 mol", "6 mol", "8 mol"], answer: 1, explain: "The ratio of H₂ to H₂O is 2:2 = 1:1, so 4 mol H₂O." },
        { q: "What is the net ionic equation for mixing AgNO₃(aq) and NaCl(aq)?", choices: ["Na⁺ + NO₃⁻ → NaNO₃", "Ag⁺ + Cl⁻ → AgCl(s)", "AgNO₃ + NaCl → AgCl + NaNO₃", "Ag + Cl → AgCl"], answer: 1, explain: "Na⁺ and NO₃⁻ are spectators. Only the solid precipitate forms." },
        { q: "What is the oxidation number of S in H₂SO₄?", choices: ["+2", "+4", "+6", "−2"], answer: 2, explain: "2(+1) + S + 4(−2) = 0, so S = +6." },
        { q: "N₂ + 3H₂ → 2NH₃. With 2 mol N₂ and 3 mol H₂, how many moles of NH₃ can form?", choices: ["1 mol", "2 mol", "3 mol", "4 mol"], answer: 1, explain: "3 mol H₂ is enough for only 1 mol N₂, so H₂ is limiting. 3 mol H₂ → 2 mol NH₃." },
      ],
      frq: {
        prompt: "25.0 mL of HCl is titrated with 0.100 M NaOH. The equivalence point is reached after adding 20.0 mL of NaOH.\n(a) Write the net ionic equation.\n(b) Calculate the concentration of the HCl.\n(c) Describe how the endpoint could be detected.",
        points: [
          "(a) H⁺(aq) + OH⁻(aq) → H₂O(l).",
          "(b) mol OH⁻ = 0.0200 L × 0.100 M = 0.00200 mol = mol HCl. [HCl] = 0.00200/0.0250 = 0.0800 M.",
          "(c) Use an indicator that changes color near pH 7 (like bromothymol blue or phenolphthalein), or a pH meter.",
        ],
      },
    },
    {
      title: "Kinetics",
      weight: "7–9%",
      tldr: "Kinetics is about how fast reactions happen. Rate laws come from experimental data, integrated rate laws track concentration over time, and reaction mechanisms explain what's happening at the molecular level.",
      concepts: [
        {
          title: "Rate laws from data",
          simple: "Change one reactant's concentration and watch what happens to the rate. That tells you the order for that reactant.",
          detail: "Rate = k[A]^m[B]^n. Double [A]: if the rate stays the same, m = 0. If the rate doubles, m = 1. If it quadruples, m = 2. The orders come from EXPERIMENTS, not from the balanced equation's coefficients.",
        },
        {
          title: "Integrated rate laws and half-life",
          simple: "Plot concentration data three ways. Whichever graph is a straight line tells you the reaction order.",
          detail: "Zero order: [A] vs t is linear. First order: ln[A] vs t is linear. Second order: 1/[A] vs t is linear. First-order half-life: t½ = 0.693/k, which is constant.",
          example: "t½ = 10 min. After 30 min (3 half-lives), 1/8 remains.",
        },
        {
          title: "Collision model and energy profiles",
          simple: "Molecules must collide hard enough, and facing the right way, to react.",
          detail: "Rate depends on collision frequency, energy ≥ Ea, and orientation. Raising the temperature means more collisions with enough energy. A catalyst provides a new pathway with a lower Ea. It does not change ΔH.",
        },
        {
          title: "Mechanisms",
          simple: "Most reactions happen in several small steps. The slowest step sets the overall pace.",
          detail: "Elementary steps have rate laws that come straight from their coefficients. The rate-determining step is the slow one. An intermediate is made in one step and used up in a later step. A catalyst is used up in one step and regenerated in a later one.",
        },
      ],
      terms: [
        ["Rate law", "Rate = k[A]^m[B]^n, determined experimentally."],
        ["Rate constant (k)", "The proportionality constant. It depends on temperature."],
        ["Half-life", "The time for a reactant's concentration to fall by half."],
        ["Activation energy", "The minimum energy needed for a reaction to occur."],
        ["Catalyst", "Speeds up a reaction by lowering Ea, and is not consumed."],
        ["Intermediate", "Formed in one step of a mechanism and consumed in a later step."],
      ],
      mistakes: [
        "Using balanced-equation coefficients as orders for overall reactions. That's only valid for elementary steps.",
        "Saying catalysts change ΔH or the equilibrium constant K.",
      ],
      questions: [
        { q: "Doubling [A] quadruples the reaction rate. The reaction is ___ order in A.", choices: ["Zero", "First", "Second", "Third"], answer: 2, explain: "2^m = 4, so m = 2." },
        { q: "Which plot gives a straight line for a first-order reaction?", choices: ["[A] vs t", "ln[A] vs t", "1/[A] vs t", "[A]² vs t"], answer: 1, explain: "First-order integrated rate law: ln[A] = −kt + ln[A]₀." },
        { q: "A catalyst increases reaction rate by:", choices: ["Increasing ΔH", "Lowering the activation energy", "Increasing temperature", "Shifting equilibrium toward products"], answer: 1, explain: "It provides a lower-energy pathway. ΔH and K are unchanged." },
        { q: "A first-order reaction has t½ = 10 min. What fraction remains after 30 min?", choices: ["1/3", "1/4", "1/8", "1/16"], answer: 2, explain: "30 min is 3 half-lives: (1/2)³ = 1/8." },
      ],
      frq: {
        prompt: "For A + B → C:\n Exp 1: [A] = 0.10, [B] = 0.10, rate = 2.0 × 10⁻³ M/s\n Exp 2: [A] = 0.20, [B] = 0.10, rate = 4.0 × 10⁻³ M/s\n Exp 3: [A] = 0.10, [B] = 0.20, rate = 2.0 × 10⁻³ M/s\n(a) Determine the order with respect to A and to B.\n(b) Write the rate law and calculate k with units.\n(c) Is the reaction likely a single elementary step? Explain.",
        points: [
          "(a) Doubling A doubles the rate, so first order in A. Doubling B doesn't change the rate, so zero order in B.",
          "(b) Rate = k[A]. k = 2.0 × 10⁻³ / 0.10 = 0.020 s⁻¹.",
          "(c) No. A single elementary step between A and B would have a rate law of k[A][B]. Since B doesn't appear, B must react after the rate-determining step.",
        ],
      },
    },
    {
      title: "Thermochemistry",
      weight: "7–9%",
      tldr: "Reactions absorb or release heat. Calorimetry measures that heat, and ΔH can also be calculated from bond enthalpies, enthalpies of formation or Hess's law.",
      concepts: [
        {
          title: "Endothermic vs. exothermic",
          simple: "Exothermic reactions release heat (the surroundings warm up). Endothermic reactions absorb heat (the surroundings cool down).",
          detail: "Exothermic: ΔH < 0. Endothermic: ΔH > 0. Breaking bonds always absorbs energy, and forming bonds always releases it.",
        },
        {
          title: "Calorimetry",
          simple: "Measure how much the water's temperature changes to figure out how much heat moved.",
          detail: "q = mcΔT (c for water = 4.18 J/g·°C). q_reaction = −q_water. ΔH = q_reaction / mol reacted.",
          example: "100 g of water warms by 5.0 °C: q = 100 × 4.18 × 5.0 = 2090 J absorbed by the water.",
        },
        {
          title: "Calculating ΔH",
          simple: "Three ways to get ΔH without doing the experiment.",
          detail: "Bond enthalpies: ΔH = Σ(bonds broken) − Σ(bonds formed). Formation: ΔH° = ΣΔH_f°(products) − ΣΔH_f°(reactants). Hess's law: add up reaction steps. If you reverse a reaction, flip the sign of ΔH. If you multiply a reaction, multiply ΔH too.",
        },
        {
          title: "Heat during phase changes",
          simple: "While a substance melts or boils, its temperature doesn't change. The energy goes into overcoming attractions between particles.",
          detail: "q = n·ΔH_fus or n·ΔH_vap. On a heating curve, the flat sections are phase changes.",
        },
      ],
      terms: [
        ["Enthalpy (ΔH)", "Heat change at constant pressure."],
        ["Specific heat (c)", "The energy needed to raise 1 g of a substance by 1 °C."],
        ["Calorimeter", "A device for measuring heat flow."],
        ["Hess's law", "ΔH for a reaction is the sum of ΔH for its steps."],
        ["Standard enthalpy of formation", "ΔH to form 1 mol of a compound from its elements in their standard states."],
      ],
      mistakes: [
        "Mixing up signs: if the water gets hotter, the REACTION released heat (ΔH_rxn < 0).",
        "Writing \"bonds formed − bonds broken\" for bond enthalpy calculations. It's broken minus formed.",
      ],
      questions: [
        { q: "How much heat is absorbed when 100 g of water warms by 5.0 °C? (c = 4.18 J/g·°C)", choices: ["418 J", "2090 J", "20.9 J", "4180 J"], answer: 1, explain: "q = mcΔT = 100 × 4.18 × 5.0 = 2090 J." },
        { q: "Breaking a chemical bond:", choices: ["Releases energy", "Absorbs energy", "Involves no energy change", "Is always exothermic"], answer: 1, explain: "Energy must be added to separate bonded atoms." },
        { q: "A reaction has ΔH = −200 kJ. For the reverse reaction with all coefficients doubled, ΔH is:", choices: ["−400 kJ", "+200 kJ", "+400 kJ", "−100 kJ"], answer: 2, explain: "Reversing flips the sign (+200) and doubling multiplies it by 2 (+400)." },
        { q: "The water in a calorimeter warms up during a reaction. The reaction is:", choices: ["Endothermic", "Exothermic", "Neither", "Not enough information"], answer: 1, explain: "The water gained heat, so the reaction released heat." },
      ],
      frq: {
        prompt: "When 8.0 g of NH₄NO₃ (molar mass 80.0 g/mol) dissolves in 100.0 g of water, the temperature drops from 25.0 °C to 19.0 °C. (Assume c = 4.18 J/g·°C and use the water's mass.)\n(a) Is dissolving endothermic or exothermic? Justify.\n(b) Calculate q absorbed by the dissolving process.\n(c) Calculate ΔH_solution in kJ/mol.",
        points: [
          "(a) Endothermic: the solution's temperature dropped, so the process absorbed heat from the water.",
          "(b) q_water = 100.0 × 4.18 × (−6.0) = −2508 J, so q_dissolution = +2508 J ≈ +2.5 kJ.",
          "(c) mol = 8.0/80.0 = 0.10 mol. ΔH = +2.5 kJ / 0.10 mol ≈ +25 kJ/mol.",
        ],
      },
    },
    {
      title: "Equilibrium",
      weight: "7–9%",
      tldr: "At equilibrium, the forward and reverse reactions happen at equal rates, so concentrations stay constant. K describes where equilibrium lies, Q tells you which way a reaction will shift, and Le Châtelier's principle predicts how a system responds to a disturbance.",
      concepts: [
        {
          title: "The equilibrium constant K",
          simple: "K is the ratio of products to reactants once everything settles. A big K means mostly products.",
          detail: "For aA + bB ⇌ cC + dD: K = [C]^c[D]^d / [A]^a[B]^b. Leave out pure solids and liquids. K >> 1 favors products, and K << 1 favors reactants. K changes only with temperature.",
        },
        {
          title: "Q vs. K",
          simple: "Q is the same ratio as K, but calculated right now. Comparing them tells you which way the reaction will go.",
          detail: "Q < K: shifts forward (toward products). Q > K: shifts in reverse. Q = K: at equilibrium.",
        },
        {
          title: "Le Châtelier's principle",
          simple: "Disturb a system at equilibrium and it shifts to partly undo the disturbance.",
          detail: "Add a reactant → shifts right. Decrease volume (increase pressure) → shifts toward fewer moles of gas. Raise the temperature → shifts in the endothermic direction, and this is the ONLY change that changes K.",
        },
        {
          title: "Solubility equilibria",
          simple: "\"Insoluble\" salts dissolve a tiny bit. Ksp measures how much.",
          detail: "AgCl(s) ⇌ Ag⁺ + Cl⁻, so Ksp = [Ag⁺][Cl⁻] = s². Common-ion effect: adding Cl⁻ lowers the solubility of AgCl.",
        },
      ],
      terms: [
        ["Dynamic equilibrium", "Forward rate = reverse rate. Concentrations are constant but not necessarily equal."],
        ["Equilibrium constant (K)", "The ratio of products to reactants at equilibrium."],
        ["Reaction quotient (Q)", "The same ratio as K, at any moment."],
        ["Le Châtelier's principle", "A system at equilibrium shifts to counteract a stress."],
        ["Ksp", "The solubility product constant."],
        ["Common-ion effect", "Reduced solubility when one of the ions is already present."],
      ],
      mistakes: [
        "Thinking equilibrium means equal concentrations. It means equal RATES.",
        "Saying adding reactant changes K. Only temperature changes K.",
        "Putting solids or liquids in the K expression.",
      ],
      questions: [
        { q: "A reaction has K = 1 × 10⁸. At equilibrium the mixture is:", choices: ["Mostly reactants", "Mostly products", "Equal amounts of each", "Impossible to tell"], answer: 1, explain: "A very large K means the product concentrations dominate." },
        { q: "Q < K for a reaction mixture. The reaction will:", choices: ["Shift toward reactants", "Shift toward products", "Stay the same", "Stop"], answer: 1, explain: "The ratio needs to grow to reach K, so more products form." },
        { q: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), decreasing the volume shifts equilibrium:", choices: ["Left", "Right", "Not at all", "K increases"], answer: 1, explain: "4 moles of gas on the left vs 2 on the right. Higher pressure favors fewer gas moles." },
        { q: "For AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), the Ksp expression is:", choices: ["[Ag⁺][Cl⁻]/[AgCl]", "[Ag⁺][Cl⁻]", "[AgCl]", "[Ag⁺] + [Cl⁻]"], answer: 1, explain: "The solid is left out of the expression." },
      ],
      frq: {
        prompt: "N₂O₄(g) ⇌ 2NO₂(g), ΔH > 0.\n(a) Write the expression for K_c.\n(b) Predict how raising the temperature affects [NO₂] and the value of K. Justify.\n(c) At one moment, [N₂O₄] = 0.50 M and [NO₂] = 0.10 M. K_c = 0.20. Which direction will the reaction proceed?",
        points: [
          "(a) K_c = [NO₂]²/[N₂O₄].",
          "(b) Endothermic forward reaction: higher T shifts it right, so [NO₂] increases and K increases.",
          "(c) Q = 0.10²/0.50 = 0.020 < 0.20, so it proceeds forward (toward NO₂).",
        ],
      },
    },
    {
      title: "Acids and Bases",
      weight: "11–15%",
      tldr: "pH measures [H⁺]. Strong acids ionize completely and weak acids only partly (described by Ka). Buffers resist changes in pH, and titration curves show how pH changes as base is added.",
      concepts: [
        {
          title: "pH and pOH",
          simple: "pH is a scale for acidity. Each whole number is a 10× change in H⁺.",
          detail: "pH = −log[H₃O⁺]. pOH = −log[OH⁻]. pH + pOH = 14 at 25 °C. Kw = 1.0 × 10⁻¹⁴.",
          example: "0.010 M HCl (a strong acid): [H⁺] = 0.010, so pH = 2.",
        },
        {
          title: "Strong vs. weak acids",
          simple: "Strong acids fully break apart in water. Weak acids only partly do.",
          detail: "The strong acids are HCl, HBr, HI, HNO₃, H₂SO₄ and HClO₄. Weak acid: Ka = [H⁺][A⁻]/[HA], and [H⁺] ≈ √(Ka·C). Conjugate pairs differ by one H⁺. A larger Ka (smaller pKa) means a stronger acid.",
        },
        {
          title: "Buffers",
          simple: "A buffer is a weak acid mixed with its partner base. It absorbs added acid or base and keeps the pH steady.",
          detail: "Henderson–Hasselbalch: pH = pKa + log([A⁻]/[HA]). When [A⁻] = [HA], pH = pKa. Buffer capacity grows with the concentrations of both parts.",
        },
        {
          title: "Titration curves",
          simple: "As you add base to an acid, pH rises slowly, then jumps at the equivalence point.",
          detail: "Weak acid + strong base: the equivalence pH is above 7, and at the half-equivalence point pH = pKa. Strong acid + strong base: the equivalence pH is 7. Choose an indicator whose color change happens near the equivalence pH.",
          hook: "Half-equivalence: pH = pKa. This is a favorite exam question.",
        },
      ],
      terms: [
        ["pH", "−log[H₃O⁺]"],
        ["Ka", "The acid dissociation constant for a weak acid."],
        ["Conjugate base", "What's left after an acid donates H⁺."],
        ["Buffer", "A solution that resists changes in pH."],
        ["Equivalence point", "Moles of added base = moles of acid originally present."],
        ["Half-equivalence point", "Half of the acid has been neutralized, so pH = pKa."],
      ],
      mistakes: [
        "Treating weak acids as if they ionize fully.",
        "Forgetting pH is logarithmic: 2 pH units means 100 times the [H⁺].",
      ],
      questions: [
        { q: "What is the pH of 0.010 M HCl?", choices: ["1", "2", "12", "0.01"], answer: 1, explain: "Strong acid, so [H⁺] = 0.010 = 10⁻², and pH = 2." },
        { q: "During the titration of a weak acid with NaOH, at the half-equivalence point:", choices: ["pH = 7", "pH = pKa", "pH = 14", "[HA] = 0"], answer: 1, explain: "[HA] = [A⁻], so log(1) = 0 and pH = pKa." },
        { q: "Which mixture makes a buffer?", choices: ["HCl and NaCl", "CH₃COOH and CH₃COONa", "NaOH and water", "HNO₃ and KNO₃"], answer: 1, explain: "A buffer needs a weak acid and its conjugate base. Strong acid mixtures don't work." },
        { q: "A solution at pH 3 has how many times more H⁺ than one at pH 5?", choices: ["2", "20", "100", "1000"], answer: 2, explain: "Each pH unit is a factor of 10, so 10² = 100." },
      ],
      frq: {
        prompt: "Acetic acid, CH₃COOH, has Ka = 1.8 × 10⁻⁵.\n(a) Calculate the pH of 0.10 M acetic acid.\n(b) Equal moles of CH₃COONa are added to make a buffer. What is its pH?\n(c) Explain how this buffer resists a pH change when a small amount of HCl is added.",
        points: [
          "(a) [H⁺] = √(1.8 × 10⁻⁵ × 0.10) = 1.3 × 10⁻³, so pH ≈ 2.87.",
          "(b) [A⁻] = [HA], so pH = pKa = −log(1.8 × 10⁻⁵) ≈ 4.74.",
          "(c) The added H⁺ reacts with the conjugate base: CH₃COO⁻ + H⁺ → CH₃COOH. This uses up the H⁺, so the pH barely changes.",
        ],
      },
    },
    {
      title: "Thermodynamics and Electrochemistry",
      weight: "7–9%",
      tldr: "Whether a reaction is thermodynamically favored depends on ΔG = ΔH − TΔS. Electrochemical cells turn favorable redox reactions into electricity. E°, ΔG° and K are all connected.",
      concepts: [
        {
          title: "Entropy",
          simple: "Entropy measures how spread out the energy and matter are. Gases are more spread out than liquids, and liquids more than solids.",
          detail: "ΔS > 0 for melting, boiling, dissolving, or reactions that produce more moles of gas.",
        },
        {
          title: "Gibbs free energy",
          simple: "ΔG tells you whether a reaction \"wants\" to happen. Negative means thermodynamically favored.",
          detail: "ΔG = ΔH − TΔS. If ΔH < 0 and ΔS > 0, it's favored at all T. If ΔH > 0 and ΔS < 0, it's never favored. With mixed signs, temperature decides. ΔG° = −RT ln K, so ΔG° < 0 means K > 1. A reaction can be favored but still slow (that's kinetics).",
        },
        {
          title: "Galvanic (voltaic) cells",
          simple: "A battery separates oxidation and reduction, so the electrons have to travel through a wire.",
          detail: "Oxidation at the anode, reduction at the cathode. Electrons flow from anode to cathode through the wire, and the salt bridge maintains charge balance. E°cell = E°cathode − E°anode. ΔG° = −nFE°.",
          hook: "AN OX and a RED CAT: ANode = OXidation, REDuction = CAThode.",
        },
        {
          title: "Electrolytic cells",
          simple: "Plugging in a power source forces a non-favorable reaction to happen, like recharging a battery.",
          detail: "Faraday's law: charge q = It. Moles of e⁻ = q/F. Use the mole ratio to find the mass of metal plated out.",
        },
      ],
      terms: [
        ["Entropy (S)", "A measure of the dispersal of matter and energy."],
        ["Gibbs free energy (ΔG)", "ΔH − TΔS. It's negative for thermodynamically favored processes."],
        ["Anode", "The electrode where oxidation occurs."],
        ["Cathode", "The electrode where reduction occurs."],
        ["Salt bridge", "Allows ions to flow and keeps each half-cell electrically neutral."],
        ["Faraday constant", "96,485 C per mole of electrons."],
      ],
      mistakes: [
        "Multiplying E° by coefficients. Cell potential is intensive: don't scale it.",
        "Saying a favored reaction must be fast. ΔG says nothing about rate.",
      ],
      questions: [
        { q: "A reaction has ΔH < 0 and ΔS > 0. It is thermodynamically favored:", choices: ["At all temperatures", "Only at high T", "Only at low T", "Never"], answer: 0, explain: "ΔG = (−) − T(+) is negative at every temperature." },
        { q: "CaCO₃(s) → CaO(s) + CO₂(g). The sign of ΔS is:", choices: ["Positive", "Negative", "Zero", "Can't tell"], answer: 0, explain: "A gas is produced from solids, so entropy increases." },
        { q: "In a galvanic cell, oxidation occurs at the:", choices: ["Cathode", "Anode", "Salt bridge", "Wire"], answer: 1, explain: "AN OX: the anode is where oxidation happens." },
        { q: "A cell has E°cell > 0. Which is true?", choices: ["ΔG° > 0 and K < 1", "ΔG° < 0 and K > 1", "ΔG° = 0", "ΔG° < 0 and K < 1"], answer: 1, explain: "ΔG° = −nFE° < 0, and ΔG° = −RT ln K < 0 means K > 1." },
      ],
      frq: {
        prompt: "A galvanic cell uses Zn/Zn²⁺ (E° = −0.76 V) and Cu/Cu²⁺ (E° = +0.34 V).\n(a) Identify the anode and write the overall reaction.\n(b) Calculate E°cell.\n(c) Calculate ΔG° in kJ/mol (F = 96,485 C/mol e⁻).",
        points: [
          "(a) The anode is Zn (it's oxidized). Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s).",
          "(b) E°cell = 0.34 − (−0.76) = 1.10 V.",
          "(c) ΔG° = −nFE° = −2(96,485)(1.10) ≈ −212 kJ/mol, so the reaction is thermodynamically favored.",
        ],
      },
    },
  ],
};
