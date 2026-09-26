// More key concepts for content/chemistry.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["chemistry"] = {
  0: [
    {
      title: "Mass spectra and average atomic mass",
      simple: "A mass spectrum shows an element's isotopes and how common each is.",
      detail: "Each peak is an isotope: its position is the mass, its height the relative abundance. Average atomic mass = Σ(isotope mass × fractional abundance). The periodic table mass is this weighted average, which is why it's rarely a whole number.",
      example: "Chlorine: 75.8% ³⁵Cl and 24.2% ³⁷Cl gives about 35.45 amu.",
      trap: "The average atomic mass is closest to the MOST ABUNDANT isotope, not the midpoint between isotopes.",
      terms: [
        ["Mass spectrum", "Graph of isotope masses versus relative abundance."],
        ["Average atomic mass", "Weighted average of an element's isotope masses by abundance."],
      ],
    },
    {
      title: "Mixtures and purity",
      simple: "Mass percent tells you how much of a sample is a given substance, which reveals impurities.",
      detail: "Pure substances have fixed composition (law of definite proportions); mixtures vary. Mass percent = (mass of component ÷ total mass) × 100. Elemental analysis compares measured mass percents to a formula's predicted ones; an impurity shifts the result predictably.",
      trap: "If an impurity has a LOWER percentage of the element than the pure compound, the measured percent comes out lower. Reason it through; don't guess the direction.",
      terms: [
        ["Law of definite proportions", "A pure compound always has the same elements in the same mass ratio."],
        ["Mass percent", "Mass of a component divided by total mass, times 100."],
      ],
    },
    {
      title: "Valence electrons and ion formation",
      simple: "Valence electrons determine how an element reacts and what ions it forms.",
      detail: "Main-group elements lose or gain electrons to reach a noble-gas configuration: group 1 → +1, group 2 → +2, group 17 → −1, group 16 → −2. Transition metals lose their 4s electrons before 3d electrons. Cations are smaller than their parent atoms; anions are larger.",
      trap: "For transition metal ions, remove electrons from the s orbital FIRST. Fe²⁺ is [Ar]3d⁶, not [Ar]4s²3d⁴.",
      terms: [
        ["Valence electrons", "Electrons in the outermost shell, involved in bonding."],
        ["Isoelectronic", "Having the same number of electrons (e.g., Na⁺, Ne, F⁻)."],
        ["Cation", "A positively charged ion, formed by losing electrons."],
      ],
    },
  ],
  1: [
    {
      title: "Bond length, bond energy and potential energy curves",
      simple: "Atoms bond at the distance where potential energy is lowest.",
      detail: "A potential energy vs. internuclear distance graph shows repulsion at short distances and weak attraction at long distances. The minimum gives the bond length; its depth is the bond energy. Triple bonds are shorter and stronger than double bonds, which are shorter and stronger than single bonds. Larger atoms form longer bonds.",
      trap: "On a PE curve, the bond length is the x-value at the MINIMUM, not where the curve crosses zero.",
      terms: [
        ["Bond length", "Distance between nuclei at minimum potential energy."],
        ["Bond energy", "Energy required to break a bond; the depth of the PE well."],
      ],
    },
    {
      title: "Ionic solids and lattice energy",
      simple: "Ionic compounds form lattices held together by strong attractions between opposite charges.",
      detail: "Lattice energy follows Coulomb's law: larger charges and smaller ions give stronger attraction and higher melting points. MgO > NaCl because of +2/−2 charges. Ionic solids are brittle and conduct only when melted or dissolved, when ions can move.",
      trap: "Charge usually matters more than size: compare charges first, then ion size.",
      terms: [
        ["Lattice energy", "Energy released when gaseous ions form an ionic solid."],
        ["Coulomb's law", "Force between charges ∝ (q₁q₂)/r²."],
      ],
    },
    {
      title: "Metallic bonding and alloys",
      simple: "Metals share a sea of electrons, which makes them conductive and malleable.",
      detail: "Metal cations sit in a sea of delocalized valence electrons. Interstitial alloys have small atoms in the gaps (carbon in steel), making the metal harder and less malleable. Substitutional alloys replace atoms with ones of similar size (brass: copper and zinc).",
      trap: "Interstitial = small atoms FILLING GAPS. Substitutional = similar-size atoms SWAPPING places. Match the alloy to its atom sizes.",
      terms: [
        ["Electron sea model", "Metals are cations surrounded by mobile delocalized electrons."],
        ["Interstitial alloy", "Small atoms occupy spaces between larger metal atoms."],
        ["Substitutional alloy", "Atoms of similar size replace host metal atoms."],
      ],
    },
    {
      title: "Sigma and pi bonds",
      simple: "Every single bond is one sigma bond; double and triple bonds add pi bonds.",
      detail: "Single bond: 1 σ. Double bond: 1 σ + 1 π. Triple bond: 1 σ + 2 π. Sigma bonds form from end-to-end overlap (including hybrid orbitals); pi bonds form from side-by-side p orbital overlap and prevent rotation. Resonance delocalizes pi electrons.",
      trap: "Count sigma bonds by counting EVERY bond once, then add one pi per extra bond in doubles and triples.",
      terms: [
        ["Sigma bond", "Head-on orbital overlap; every single bond is a sigma bond."],
        ["Pi bond", "Side-by-side p-orbital overlap in double and triple bonds."],
      ],
    },
  ],
  2: [
    {
      title: "Kinetic molecular theory and real gases",
      simple: "Ideal gases are tiny particles in random motion with no attractions; real gases deviate from that.",
      detail: "KMT: particles have negligible volume, no intermolecular forces, and elastic collisions; average kinetic energy ∝ Kelvin temperature. Maxwell-Boltzmann distributions widen and shift right as temperature rises. Real gases deviate at HIGH pressure (volume matters) and LOW temperature (attractions matter). Polar and large gases deviate more.",
      trap: "At the same temperature, all gases have the same average KINETIC ENERGY, but lighter gases move FASTER.",
      terms: [
        ["Kinetic molecular theory", "Model of gases as small particles in constant random motion."],
        ["Real gas deviation", "Departure from ideal behavior, greatest at high P and low T."],
      ],
    },
    {
      title: "Solubility and \"like dissolves like\"",
      simple: "Substances dissolve best in solvents with similar intermolecular forces.",
      detail: "Polar and ionic solutes dissolve in polar solvents (water); nonpolar solutes dissolve in nonpolar solvents (hexane). Dissolving requires breaking solute–solute and solvent–solvent interactions and forming solute–solvent interactions. Particulate diagrams should show water's partial negative oxygen facing cations and hydrogens facing anions.",
      trap: "In particle drawings of dissolved ions, the OXYGEN end of water points toward cations. Drawing it backwards is a common deduction.",
      terms: [
        ["Like dissolves like", "Solutes dissolve in solvents with similar polarity and forces."],
        ["Ion-dipole force", "Attraction between an ion and a polar molecule."],
      ],
    },
    {
      title: "Photons and the electromagnetic spectrum",
      simple: "Light comes in packets called photons, and each type of radiation causes a different change in molecules.",
      detail: "E = hν and c = λν, so shorter wavelength means higher energy. Microwaves → molecular rotation; infrared → bond vibrations; UV/visible → electronic transitions. Absorption spectra identify substances and concentrations.",
      trap: "Energy is proportional to FREQUENCY and inversely proportional to wavelength. Doubling wavelength halves the energy.",
      terms: [
        ["Photon energy", "E = hν, where h is Planck's constant."],
        ["Infrared radiation", "Causes changes in molecular vibrations."],
      ],
    },
    {
      title: "Vapor pressure and boiling point",
      simple: "Weaker intermolecular forces mean more evaporation, higher vapor pressure, and lower boiling point.",
      detail: "Vapor pressure rises with temperature. A liquid boils when its vapor pressure equals the external pressure. Substances with weak IMFs (like diethyl ether) are volatile. Rank boiling points by IMF strength: London dispersion (larger electron clouds are stronger) < dipole-dipole < hydrogen bonding.",
      trap: "Large nonpolar molecules can beat small polar ones. Dispersion forces grow with molecular size, so compare carefully.",
      terms: [
        ["Vapor pressure", "Pressure of a vapor in equilibrium with its liquid."],
        ["Volatile", "Evaporates easily; has a high vapor pressure."],
      ],
    },
  ],
  3: [
    {
      title: "Types of chemical reactions",
      simple: "Most reactions on the exam are precipitation, acid–base, or redox.",
      detail: "Precipitation: two soluble ionic compounds form an insoluble solid (all Na⁺, K⁺, NH₄⁺ and NO₃⁻ salts are soluble). Acid–base: proton transfer (Brønsted-Lowry). Redox: electron transfer, seen as changes in oxidation numbers. Combustion of hydrocarbons produces CO₂ and H₂O.",
      trap: "Identify redox by checking oxidation numbers. A reaction can form a precipitate AND be a redox reaction, so don't assume the categories are exclusive.",
      terms: [
        ["Precipitation reaction", "Reaction forming an insoluble solid from ions in solution."],
        ["Combustion", "Reaction with O₂, typically producing CO₂ and H₂O."],
      ],
    },
    {
      title: "Brønsted-Lowry acids and bases",
      simple: "An acid donates a proton, a base accepts one, and each forms a conjugate partner.",
      detail: "HA + H₂O ⇌ H₃O⁺ + A⁻. HA and A⁻ are a conjugate acid-base pair. Water is amphoteric: it can act as an acid or a base. The stronger the acid, the weaker its conjugate base.",
      trap: "A conjugate pair differs by exactly ONE H⁺. H₂SO₄ and SO₄²⁻ aren't a conjugate pair; H₂SO₄ and HSO₄⁻ are.",
      terms: [
        ["Brønsted-Lowry acid", "A proton (H⁺) donor."],
        ["Amphoteric", "Able to act as either an acid or a base."],
        ["Conjugate acid-base pair", "Two species differing by one proton."],
      ],
    },
    {
      title: "Gravimetric analysis",
      simple: "Find how much of an ion is in a sample by precipitating it and weighing the solid.",
      detail: "Add excess precipitating agent, filter, wash, dry to constant mass, then use stoichiometry from the precipitate's mass to find the moles of the ion. Errors: incomplete drying (mass too high), loss during filtering (mass too low).",
      trap: "Leftover water in the precipitate makes the calculated amount TOO HIGH. Error-analysis questions ask for this direction.",
      terms: [
        ["Gravimetric analysis", "Determining amount of a substance by measuring the mass of a precipitate."],
        ["Dry to constant mass", "Heating and weighing until the mass stops changing."],
      ],
    },
    {
      title: "Particulate representations of reactions",
      simple: "Particle diagrams must show atoms conserved and the right particles present.",
      detail: "A balanced reaction diagram has the same number of each atom on both sides. Strong electrolytes are shown as separate ions in solution; weak acids mostly as intact molecules; precipitates as clustered solids. Excess reactant particles remain after the reaction.",
      trap: "Strong acids like HCl should appear as separate H₃O⁺ and Cl⁻ in solution, not as HCl molecules.",
      terms: [
        ["Particulate diagram", "A drawing showing atoms, ions and molecules in a sample."],
        ["Strong electrolyte", "A substance that dissociates completely into ions in solution."],
      ],
    },
  ],
  4: [
    {
      title: "Factors that affect reaction rate",
      simple: "Rates increase with more concentration, higher temperature, more surface area, and catalysts.",
      detail: "Higher concentration → more frequent collisions. Higher temperature → more collisions AND a larger fraction with energy ≥ Eₐ (the bigger effect). More surface area of a solid → more collisions. Catalysts provide a lower-Eₐ pathway. Rates are measured by changes in concentration, pressure, color or mass over time.",
      trap: "Temperature speeds up reactions mainly by increasing the fraction of collisions with enough energy, not just the number of collisions.",
      terms: [
        ["Reaction rate", "Change in concentration per unit time."],
        ["Effective collision", "Collision with enough energy and the correct orientation to react."],
      ],
    },
    {
      title: "Elementary reactions and the rate-determining step",
      simple: "Each single step's rate law comes straight from its equation, and the slowest step controls the overall rate.",
      detail: "For an elementary step, the exponents in the rate law equal the coefficients (molecularity): A + B → C has rate = k[A][B]. The overall rate law matches the slow step. Intermediates are produced then consumed; catalysts are consumed then regenerated. If a fast step comes first, substitute to remove intermediates.",
      trap: "You can only read exponents from coefficients for ELEMENTARY steps. For an overall reaction, the rate law must come from experiment.",
      terms: [
        ["Elementary reaction", "A single-step reaction whose rate law follows its coefficients."],
        ["Rate-determining step", "The slowest step in a mechanism, which sets the overall rate."],
        ["Molecularity", "Number of particles colliding in an elementary step."],
      ],
    },
    {
      title: "The Maxwell-Boltzmann distribution",
      simple: "Particles have a range of energies, and only those above the activation energy can react.",
      detail: "The curve shows the number of particles vs. kinetic energy. At higher temperature, it flattens and shifts right, so more particles exceed Eₐ. A catalyst lowers Eₐ, moving the threshold left without changing the curve.",
      trap: "A catalyst doesn't change the Maxwell-Boltzmann curve. Temperature changes the CURVE; a catalyst changes the THRESHOLD.",
      terms: [
        ["Maxwell-Boltzmann distribution", "Distribution of particle kinetic energies at a given temperature."],
        ["Activation energy threshold", "The minimum energy particles need to react."],
      ],
    },
    {
      title: "Catalysis",
      simple: "Catalysts speed up reactions by providing an easier path, without being used up.",
      detail: "Catalysts lower Eₐ by creating a new mechanism. Homogeneous catalysts are in the same phase as the reactants; heterogeneous catalysts (like metal surfaces) provide sites where reactants adsorb. Enzymes are biological catalysts. Catalysts speed up both forward and reverse reactions equally, so they don't change K or ΔH.",
      trap: "A catalyst does NOT shift equilibrium or change ΔH. It only makes equilibrium arrive faster.",
      terms: [
        ["Heterogeneous catalyst", "A catalyst in a different phase from the reactants."],
        ["Enzyme", "A biological protein catalyst."],
      ],
    },
  ],
  5: [
    {
      title: "Heat transfer and thermal equilibrium",
      simple: "Heat flows from hotter to colder objects until they reach the same temperature.",
      detail: "Heat lost by the hot object = heat gained by the cold one (−q_hot = q_cold). Particle collisions transfer kinetic energy. The final temperature lies between the two starting temperatures and closer to the one with the larger heat capacity (m × c).",
      trap: "Use q = mcΔT with ΔT = T_final − T_initial for EACH object. Sign errors come from mixing up which is which.",
      terms: [
        ["Thermal equilibrium", "State where objects in contact reach the same temperature."],
        ["Heat capacity", "Energy needed to raise an object's temperature by 1 °C (m × c)."],
      ],
    },
    {
      title: "Bond enthalpies",
      simple: "Breaking bonds costs energy and forming bonds releases it; the balance gives ΔH.",
      detail: "ΔH ≈ Σ(bond energies broken) − Σ(bond energies formed). A reaction is exothermic if the bonds formed are stronger overall than the bonds broken. Bond enthalpy values are averages, so the result is an estimate.",
      trap: "It's bonds BROKEN minus bonds FORMED, the reverse of the products-minus-reactants rule used with ΔH°f.",
      terms: [
        ["Bond enthalpy", "Average energy needed to break one mole of a given bond."],
        ["Bond breaking", "Always endothermic (requires energy)."],
      ],
    },
    {
      title: "Enthalpy of formation and dissolution",
      simple: "Formation enthalpies let you calculate ΔH for any reaction, and dissolving can absorb or release heat.",
      detail: "ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants). ΔH°f of an element in its standard state is 0. Dissolution involves breaking solute–solute and solvent–solvent interactions (endothermic) and forming solute–solvent interactions (exothermic); the net can be either sign.",
      trap: "Multiply each ΔH°f by its coefficient, and don't forget elements in standard state (like O₂(g)) are ZERO.",
      terms: [
        ["Standard state", "The most stable form of a substance at 1 atm and a specified temperature (usually 25 °C)."],
        ["Enthalpy of solution", "Heat absorbed or released when a solute dissolves."],
      ],
    },
  ],
  6: [
    {
      title: "Magnitude of K",
      simple: "A big K means products are favored at equilibrium; a small K means reactants are.",
      detail: "K ≫ 1: mostly products. K ≪ 1: mostly reactants. K depends only on temperature. Pure solids and liquids are left out of K expressions. Kp uses partial pressures for gases.",
      trap: "K tells you WHERE equilibrium lies, not how fast it gets there. A huge K can still be a very slow reaction.",
      terms: [
        ["Kp", "Equilibrium constant written with partial pressures."],
        ["Heterogeneous equilibrium", "Equilibrium with more than one phase; solids and liquids are omitted from K."],
      ],
    },
    {
      title: "Manipulating K",
      simple: "Changing how you write a reaction changes K in predictable ways.",
      detail: "Reverse the reaction: K becomes 1/K. Multiply coefficients by n: K becomes Kⁿ. Add reactions: multiply their K values. These rules mirror Hess's law for ΔH (where you add instead of multiply).",
      trap: "When you ADD reactions, you MULTIPLY the K values. Adding K values is a common error.",
      terms: [
        ["Reverse reaction K", "K_reverse = 1/K_forward"],
        ["Combined reactions", "K_overall = K₁ × K₂ when reactions are added."],
      ],
    },
    {
      title: "Calculating equilibrium concentrations with ICE tables",
      simple: "An ICE table tracks Initial, Change and Equilibrium amounts to solve for unknowns.",
      detail: "Write initial concentrations, express the change with x using stoichiometric coefficients, write equilibrium values, and substitute into K. If K is very small, x is negligible compared to the initial concentration (check that it's under about 5%).",
      trap: "Use CONCENTRATIONS (or partial pressures) in K, not moles, unless the volume is 1 L.",
      terms: [
        ["ICE table", "Initial–Change–Equilibrium table for equilibrium calculations."],
        ["Small-x approximation", "Ignoring x when K is small relative to initial concentrations."],
      ],
    },
    {
      title: "Molar solubility and factors affecting solubility",
      simple: "Ksp can tell you how much of a salt dissolves, and pH or common ions can change that.",
      detail: "For AB: Ksp = s². For AB₂: Ksp = 4s³. A common ion lowers solubility (Le Châtelier). Salts with basic anions (like OH⁻, F⁻, CO₃²⁻) become MORE soluble in acidic solutions because H⁺ removes the anion. Compare solubilities with s, not directly with Ksp, unless formulas have the same ratio.",
      trap: "Only compare Ksp values directly when the salts have the SAME ion ratio. Otherwise, calculate molar solubility.",
      terms: [
        ["Molar solubility", "Moles of solute that dissolve per liter of saturated solution."],
        ["pH effect on solubility", "Salts of basic anions dissolve more in acidic solution."],
      ],
    },
  ],
  7: [
    {
      title: "Autoionization of water and Kw",
      simple: "Water forms a tiny amount of H₃O⁺ and OH⁻, and their product is always Kw.",
      detail: "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C, so pH + pOH = 14. Kw increases with temperature, so neutral pH is below 7 at higher temperatures (still neutral because [H₃O⁺] = [OH⁻]).",
      trap: "Neutral means [H₃O⁺] = [OH⁻], not necessarily pH = 7. At 50 °C, neutral water has pH below 7.",
      terms: [
        ["Kw", "Ion-product constant of water, 1.0 × 10⁻¹⁴ at 25 °C."],
        ["Neutral solution", "A solution where [H₃O⁺] = [OH⁻]."],
      ],
    },
    {
      title: "Weak acid and base calculations",
      simple: "Weak acids partially ionize, so use Ka and an ICE table to find pH.",
      detail: "For a weak acid: Ka = x²/(C − x), often ≈ x²/C, where x = [H₃O⁺]. For a weak base: Kb = x²/C gives [OH⁻]. Ka × Kb = Kw for a conjugate pair. Percent ionization = (x/C) × 100 and increases when the acid is diluted.",
      trap: "For a weak base, x is [OH⁻], so calculate pOH first, then pH = 14 − pOH.",
      terms: [
        ["Kb", "Base dissociation constant."],
        ["Percent ionization", "Fraction of a weak acid that ionizes, times 100."],
      ],
    },
    {
      title: "pH, pKa and the dominant form",
      simple: "Comparing pH to pKa tells you whether the acid or its conjugate base is the main species.",
      detail: "Henderson–Hasselbalch: pH = pKa + log([A⁻]/[HA]). pH < pKa → HA dominates; pH > pKa → A⁻ dominates; pH = pKa → equal amounts. Indicators change color near their pKa, so choose one with pKa near the equivalence point pH.",
      trap: "Choose an indicator by the EQUIVALENCE point pH, not the half-equivalence point.",
      terms: [
        ["Henderson–Hasselbalch equation", "pH = pKa + log([A⁻]/[HA])"],
        ["Indicator", "A weak acid whose color changes near its pKa."],
      ],
    },
    {
      title: "Buffer capacity and preparation",
      simple: "A buffer resists pH change best when it has large, similar amounts of weak acid and conjugate base.",
      detail: "Buffers are made from a weak acid and its conjugate base (or by partly neutralizing a weak acid with a strong base). Capacity grows with the amounts of both components. The buffer is most effective when pH ≈ pKa (±1). Added H⁺ reacts with A⁻; added OH⁻ reacts with HA.",
      trap: "Diluting a buffer doesn't change its pH (the ratio stays the same), but it DOES lower its capacity.",
      terms: [
        ["Buffer capacity", "The amount of acid or base a buffer can absorb before its pH changes greatly."],
        ["Buffer range", "pH values within about 1 unit of the pKa."],
      ],
    },
    {
      title: "Molecular structure and acid strength",
      simple: "Acids are stronger when their conjugate base is more stable.",
      detail: "Across a period, more electronegative atoms make stronger acids (HF > H₂O). Down a group, weaker, longer H–X bonds make stronger acids (HI > HF). For oxyacids, more oxygen atoms or more electronegative atoms pull electron density and stabilize the anion (HClO₄ > HClO). Resonance stabilizes the conjugate base (carboxylic acids).",
      trap: "HF is a WEAK acid even though F is the most electronegative element. Down a group, bond strength wins.",
      terms: [
        ["Oxyacid", "An acid containing oxygen bonded to the acidic hydrogen, like HClO₄."],
        ["Conjugate base stability", "More stable conjugate bases mean stronger acids."],
      ],
    },
  ],
  8: [
    {
      title: "ΔG° and the equilibrium constant",
      simple: "A negative ΔG° means K > 1, so products are favored at equilibrium.",
      detail: "ΔG° = −RT ln K. ΔG° < 0 → K > 1; ΔG° > 0 → K < 1; ΔG° = 0 → K = 1. Use R = 8.314 J/(mol·K) and match units (ΔG° often given in kJ). ΔG° = ΔH° − TΔS° determines temperature effects.",
      trap: "Convert kJ to J before using R = 8.314 J/(mol·K). The factor of 1000 is the most common mistake.",
      terms: [
        ["ΔG° = −RT ln K", "Relates standard free energy change to the equilibrium constant."],
        ["Thermodynamically favorable", "A process with ΔG° < 0."],
      ],
    },
    {
      title: "Thermodynamic vs. kinetic control",
      simple: "A reaction can be favorable but still happen too slowly to notice.",
      detail: "Thermodynamic favorability (ΔG < 0) says a reaction CAN proceed; kinetics (Eₐ) says how fast. Diamond turning into graphite is favorable but extremely slow, so diamond is kinetically stable. A favorable reaction that doesn't occur is \"under kinetic control.\"",
      trap: "If a question says a favorable reaction isn't observed, the answer is a high ACTIVATION ENERGY, not a mistake in ΔG.",
      terms: [
        ["Kinetic control", "A favorable reaction that doesn't proceed measurably due to high Eₐ."],
        ["Kinetically stable", "Slow to react despite being thermodynamically unstable."],
      ],
    },
    {
      title: "Coupled reactions",
      simple: "An unfavorable reaction can be driven by pairing it with a very favorable one.",
      detail: "Add the reactions and their ΔG° values; if the total is negative, the coupled process is favorable. Examples: ATP hydrolysis drives biological reactions; external current (electrolysis) drives nonspontaneous reactions; light drives photosynthesis.",
      trap: "The coupled reactions must share an intermediate. You can't just add any two unrelated reactions.",
      terms: [
        ["Coupled reaction", "Pairing a favorable and unfavorable reaction so the total ΔG is negative."],
        ["ATP hydrolysis", "Favorable reaction that drives many biological processes."],
      ],
    },
    {
      title: "Cell potential and free energy",
      simple: "A positive cell potential means the reaction is favorable and the cell can do work.",
      detail: "ΔG° = −nFE°. E°cell = E°(cathode) − E°(anode) using reduction potentials. Positive E° → negative ΔG° → K > 1. Nonstandard conditions: E drops as the reaction proceeds (Q increases) and reaches 0 at equilibrium (a dead battery). Changing coefficients doesn't change E°.",
      trap: "Don't multiply E° by stoichiometric coefficients. Cell potential is intensive, unlike ΔG.",
      terms: [
        ["ΔG° = −nFE°", "Relates free energy change to standard cell potential."],
        ["Nonstandard cell potential", "E changes as concentrations change; E = 0 at equilibrium."],
      ],
    },
  ],
};
