window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["biology"] = {
  tips: [
    "Most multiple-choice questions give you a graph, table or experiment. Read the axes and labels before you read the answer choices.",
    "On free response, answer with the exact task verb. \"Identify\" needs a short answer, \"describe\" needs detail, and \"explain\" needs a how or why.",
    "Know experimental design cold: independent and dependent variables, controls, constants, and writing a testable hypothesis.",
    "Bring a calculator and know the formula sheet: Hardy-Weinberg, chi-square, water potential, and rate calculations.",
    "Use error bars: if the ±2 SE error bars overlap, the difference is probably not statistically significant.",
  ],
  units: [
    {
      title: "Chemistry of Life",
      weight: "8–11%",
      tldr: "Life is built from a few elements arranged into four kinds of large molecules: carbohydrates, lipids, proteins and nucleic acids. Water's hydrogen bonds make life possible.",
      concepts: [
        {
          title: "Why water is special",
          simple: "Water molecules are slightly magnetic-like: one end is a bit positive and the other a bit negative. So they stick to each other and to other things.",
          detail: "Water is polar, so hydrogen bonds form between molecules. That gives it cohesion (surface tension, water pulled up plants), adhesion, a high specific heat (stable temperatures), and makes it an excellent solvent for polar and ionic substances.",
        },
        {
          title: "Building and breaking macromolecules",
          simple: "Big molecules are chains of small building blocks. Snapping a block on releases water. Breaking one off uses water.",
          detail: "Dehydration synthesis joins monomers by removing H₂O. Hydrolysis breaks polymers by adding H₂O. Carbohydrates are made of monosaccharides, proteins of amino acids, and nucleic acids of nucleotides. Lipids aren't true polymers.",
          hook: "Hydro-LYSIS = water-SPLITTING.",
        },
        {
          title: "Protein structure determines function",
          simple: "A protein is a chain of amino acids that folds into a specific 3-D shape. If the shape changes, the job usually fails.",
          detail: "Primary structure is the amino acid sequence. Secondary is α-helices and β-sheets held by H-bonds in the backbone. Tertiary is the 3-D fold driven by R-group interactions (hydrophobic, ionic, disulfide). Quaternary is several polypeptides joined together.",
          example: "Swapping a nonpolar amino acid in a protein's interior for a charged one can disrupt the fold and ruin the protein's function.",
        },
        {
          title: "Nucleic acids",
          simple: "DNA and RNA store and carry genetic instructions using a four-letter code.",
          detail: "A nucleotide is a phosphate, a 5-carbon sugar and a nitrogenous base. DNA is double-stranded and antiparallel, uses deoxyribose, and has bases A, T, C, G. RNA is usually single-stranded, uses ribose, and has U instead of T. Strands are built 5′ → 3′.",
        },
      ],
      terms: [
        ["Hydrogen bond", "A weak attraction between a slightly positive H and a slightly negative atom (O or N) of another molecule."],
        ["Dehydration synthesis", "Joining monomers by removing water."],
        ["Hydrolysis", "Breaking polymers by adding water."],
        ["Monomer", "A small building-block molecule."],
        ["R group", "The variable side chain that gives each amino acid its properties."],
        ["Antiparallel", "The two DNA strands run in opposite 5′ → 3′ directions."],
      ],
      mistakes: [
        "Mixing up the bonds: hydrogen bonds form BETWEEN water molecules, while covalent bonds hold atoms together WITHIN a molecule.",
        "Forgetting which elements are where: nitrogen is in proteins and nucleic acids, and phosphorus is in nucleic acids and phospholipids.",
        "Saying RNA contains thymine. It has uracil.",
      ],
      questions: [
        { q: "Water's high specific heat is mainly due to:", choices: ["Covalent bonds within each molecule", "Hydrogen bonds between molecules", "Water being nonpolar", "Ionic bonds between H and O"], answer: 1, explain: "Energy has to break hydrogen bonds between molecules before the molecules can move faster, so water resists temperature change." },
        { q: "The hydrolysis of a polysaccharide:", choices: ["Releases water and forms glycosidic bonds", "Uses water and breaks glycosidic bonds", "Uses ATP to join amino acids", "Forms peptide bonds"], answer: 1, explain: "Hydrolysis means splitting with water. It consumes H₂O to break the bonds between sugar monomers." },
        { q: "A mutation replaces a nonpolar amino acid in the interior of a folded protein with a charged amino acid. What is the most likely effect?", choices: ["No change, because only surface amino acids matter", "The protein's tertiary structure is disrupted", "The protein becomes a carbohydrate", "The primary structure stays the same"], answer: 1, explain: "Nonpolar R groups cluster inside, away from water. A charged R group there disrupts the hydrophobic interactions that hold the 3-D fold." },
        { q: "Which element is found in nucleic acids but NOT in carbohydrates?", choices: ["Carbon", "Oxygen", "Phosphorus", "Hydrogen"], answer: 2, explain: "Nucleotides contain phosphate groups (and nitrogen). Carbohydrates contain only C, H and O." },
      ],
      frq: {
        prompt: "Phospholipids spontaneously form a bilayer when placed in water.\n(a) Describe the structure of a phospholipid.\n(b) Explain why phospholipids form a bilayer in water.",
        points: [
          "(a) Describes a hydrophilic (polar) phosphate head and two hydrophobic (nonpolar) fatty-acid tails.",
          "(b) Explains that the heads face the water on both sides while the tails cluster inside, away from water.",
          "Connects this to hydrophobic interactions and water's polarity.",
        ],
      },
    },
    {
      title: "Cell Structure and Function",
      weight: "10–13%",
      tldr: "Cells are organized into compartments, each with a job. The plasma membrane controls what enters and leaves. Small cells exchange materials more efficiently because they have more surface area per unit of volume.",
      concepts: [
        {
          title: "Organelles and compartmentalization",
          simple: "A cell is like a factory with departments. Membranes keep each department's chemistry separate so reactions don't interfere with each other.",
          detail: "Ribosomes make proteins. The rough ER makes proteins for secretion or for membranes, and the Golgi modifies and ships them. Mitochondria run cellular respiration, chloroplasts run photosynthesis, lysosomes digest, and the vacuole stores material. Prokaryotes lack membrane-bound organelles.",
        },
        {
          title: "Surface area to volume ratio",
          simple: "As a cell grows, its inside grows faster than its outside, so a big cell can't move materials in and out fast enough.",
          detail: "SA:V decreases as size increases. That's why cells stay small and why some tissues have folds or microvilli (root hairs, intestinal villi) to increase surface area.",
        },
        {
          title: "Membrane transport",
          simple: "Some things slip through the membrane for free, going from crowded to less crowded. Others need a pump and energy to go the other way.",
          detail: "Passive transport (no ATP, moves down a gradient): diffusion, facilitated diffusion through channels or carriers, and osmosis. Active transport (needs ATP, moves against a gradient): pumps such as the Na⁺/K⁺ pump, plus endocytosis and exocytosis.",
        },
        {
          title: "Tonicity and water potential",
          simple: "Water moves toward the side with more dissolved stuff.",
          detail: "In a hypertonic solution a cell loses water and shrinks (plasmolysis in plants). In a hypotonic solution it gains water (animal cells may burst, plant cells become turgid). Water moves from high Ψ to low Ψ, where Ψ = Ψs + Ψp and Ψs = −iCRT.",
          hook: "Water follows solute.",
        },
      ],
      terms: [
        ["Fluid mosaic model", "The membrane is a fluid phospholipid bilayer with proteins embedded in it."],
        ["Facilitated diffusion", "Passive movement through a channel or carrier protein."],
        ["Active transport", "Moving a substance against its gradient using energy, usually ATP."],
        ["Hypertonic", "Having a higher solute concentration than the cell."],
        ["Water potential (Ψ)", "A measure of water's tendency to move. Water flows from high Ψ to low Ψ."],
        ["Endosymbiotic theory", "Mitochondria and chloroplasts were once free-living prokaryotes."],
      ],
      mistakes: [
        "Saying water moves toward LOW solute. It moves toward HIGH solute, which means lower water potential.",
        "Thinking bigger cells are more efficient. A smaller SA:V makes exchange slower.",
        "Calling facilitated diffusion active transport. It uses a protein but no energy.",
      ],
      questions: [
        { q: "As a cube-shaped cell doubles in side length, its surface area-to-volume ratio:", choices: ["Doubles", "Stays the same", "Is cut in half", "Quadruples"], answer: 2, explain: "SA scales with s² and V with s³, so SA:V = 6/s. Doubling s halves the ratio." },
        { q: "A red blood cell is placed in a hypertonic salt solution. It will:", choices: ["Swell and burst", "Shrink as water leaves", "Stay the same", "Actively pump in salt"], answer: 1, explain: "Hypertonic means more solute outside, so water leaves the cell by osmosis." },
        { q: "The Na⁺/K⁺ pump moves ions against their concentration gradients. This is:", choices: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"], answer: 2, explain: "Moving against a gradient requires energy. This pump uses ATP." },
        { q: "Which observation BEST supports the endosymbiotic theory?", choices: ["Mitochondria have their own circular DNA and a double membrane", "All cells have ribosomes", "The nucleus contains DNA", "Plant cells have cell walls"], answer: 0, explain: "Circular DNA, their own ribosomes and a double membrane all resemble a prokaryote that was engulfed by another cell." },
      ],
      frq: {
        prompt: "A student places equal-mass potato cores into sucrose solutions of 0.0, 0.2, 0.4 and 0.6 M for 24 hours, then measures the percent change in mass.\n(a) Identify the independent and dependent variables.\n(b) Predict the result for the 0.0 M and 0.6 M cores and explain it in terms of water potential.",
        points: [
          "(a) Independent variable: sucrose concentration. Dependent variable: percent change in mass.",
          "(b) The 0.0 M core gains mass: water moves in because the solution's Ψ is higher than the cell's.",
          "(b) The 0.6 M core loses mass: water moves out because the solution's Ψ is lower than the cell's.",
        ],
      },
    },
    {
      title: "Cellular Energetics",
      weight: "12–16%",
      tldr: "Enzymes speed up reactions. Photosynthesis captures light energy in sugar, and cellular respiration releases that energy as ATP. Both rely on electron transport chains that pump protons to power ATP synthase.",
      concepts: [
        {
          title: "Enzymes",
          simple: "Enzymes are like matchmakers: they bring molecules together so reactions happen faster, without being used up.",
          detail: "Enzymes lower activation energy. The substrate binds at the active site, which has a specific shape. Extreme temperature or pH can denature an enzyme. A competitive inhibitor blocks the active site and can be overcome with more substrate. A noncompetitive inhibitor binds elsewhere and changes the enzyme's shape.",
        },
        {
          title: "Photosynthesis",
          simple: "Plants use sunlight to split water, then use that captured energy to turn CO₂ into sugar.",
          detail: "The light reactions happen in the thylakoid membranes: water is split (releasing O₂) and ATP and NADPH are made. The Calvin cycle happens in the stroma: it uses ATP and NADPH to fix CO₂ into sugar.",
          hook: "The oxygen we breathe comes from WATER, not CO₂.",
        },
        {
          title: "Cellular respiration",
          simple: "Cells slowly \"burn\" glucose and save the released energy as ATP, the cell's rechargeable battery.",
          detail: "Glycolysis (in the cytosol) turns glucose into 2 pyruvate and makes a little ATP. The Krebs cycle (mitochondrial matrix) releases CO₂ and loads NADH and FADH₂. The electron transport chain (inner membrane) pumps H⁺, and O₂ is the final electron acceptor. Chemiosmosis: H⁺ flows back through ATP synthase, which makes most of the ATP.",
        },
        {
          title: "Fermentation",
          simple: "Without oxygen, cells use a backup plan that makes much less ATP.",
          detail: "Fermentation regenerates NAD⁺ so glycolysis can keep going. It produces lactic acid (in animals) or ethanol and CO₂ (in yeast).",
        },
      ],
      terms: [
        ["Activation energy", "The energy needed to start a reaction. Enzymes lower it."],
        ["Active site", "The region of an enzyme where the substrate binds."],
        ["Denaturation", "Loss of a protein's shape, and therefore its function."],
        ["Chemiosmosis", "ATP made by H⁺ flowing through ATP synthase down its gradient."],
        ["Calvin cycle", "The light-independent reactions that fix CO₂ into sugar."],
        ["Final electron acceptor", "O₂ in aerobic respiration. It is reduced to water."],
      ],
      mistakes: [
        "Saying enzymes are used up in reactions. They are reused.",
        "Saying the Calvin cycle happens \"at night\". It needs ATP and NADPH from the light reactions.",
        "Forgetting that the proton gradient, not the electrons themselves, directly drives ATP synthase.",
      ],
      questions: [
        { q: "The effect of a competitive inhibitor can be reduced by:", choices: ["Adding more substrate", "Raising the temperature a lot", "Adding more inhibitor", "Lowering the enzyme concentration"], answer: 0, explain: "Competitive inhibitors compete for the active site. More substrate outcompetes them." },
        { q: "The O₂ released during photosynthesis comes from:", choices: ["CO₂", "Glucose", "H₂O", "ATP"], answer: 2, explain: "Water is split in the light reactions (photolysis), which releases O₂." },
        { q: "A chemical makes the inner mitochondrial membrane leaky to H⁺. What happens to ATP production?", choices: ["It increases", "It decreases", "It stays the same", "Only glycolysis stops"], answer: 1, explain: "Without an H⁺ gradient, ATP synthase has no proton flow to power it, so ATP production drops." },
        { q: "Why does an enzyme's reaction rate drop sharply at very high temperatures?", choices: ["The substrate is used up", "The enzyme denatures and its active site changes shape", "Molecules move more slowly", "The inhibitor is activated"], answer: 1, explain: "Heat breaks the bonds that hold the enzyme's 3-D shape, so the substrate no longer fits." },
      ],
      frq: {
        prompt: "An enzyme's reaction rate rises from 10°C to 37°C, then falls sharply above 45°C.\n(a) Explain the increase in rate from 10°C to 37°C.\n(b) Explain the decrease above 45°C.\n(c) Predict the effect of adding a noncompetitive inhibitor at 37°C and justify your prediction.",
        points: [
          "(a) Molecules move faster, so there are more frequent collisions between the enzyme and substrate.",
          "(b) High temperature denatures the enzyme, changing the active site so substrate can't bind.",
          "(c) The rate decreases because the inhibitor binds an allosteric site and changes the enzyme's shape. Adding substrate won't fix it.",
        ],
      },
    },
    {
      title: "Cell Communication and Cell Cycle",
      weight: "10–15%",
      tldr: "Cells send and receive chemical signals through a reception → transduction → response pathway. The cell cycle is tightly controlled by checkpoints, and cancer is what happens when that control fails.",
      concepts: [
        {
          title: "Signal transduction",
          simple: "A message (a ligand) arrives at the cell's door (a receptor), gets passed along a relay team inside, and finally the cell does something.",
          detail: "Reception: the ligand binds a receptor, such as a G protein-coupled receptor. Transduction: second messengers (like cAMP) and phosphorylation cascades by kinases amplify the signal. Response: gene expression, enzyme activity or other changes.",
        },
        {
          title: "Feedback",
          simple: "Negative feedback is like a thermostat that keeps things steady. Positive feedback is a snowball that keeps getting bigger.",
          detail: "Negative feedback maintains homeostasis, for example insulin and glucagon regulating blood glucose. Positive feedback amplifies a change until some endpoint, for example oxytocin during childbirth or ethylene in fruit ripening.",
        },
        {
          title: "The cell cycle",
          simple: "A cell grows, copies its DNA, checks its work, then divides into two identical cells.",
          detail: "Interphase is G₁ (growth), S (DNA replication) and G₂ (preparation). Mitosis runs prophase → metaphase → anaphase → telophase, followed by cytokinesis. Checkpoints at G₁, G₂ and M are controlled by cyclins and CDKs.",
          hook: "PMAT: Please Make Another Twin.",
        },
        {
          title: "When regulation fails",
          simple: "If the brakes on cell division break, cells divide out of control. That's cancer.",
          detail: "Mutations in proto-oncogenes (the accelerators) or tumor suppressors such as p53 (the brakes) cause uncontrolled division. Apoptosis is programmed cell death, which removes damaged cells.",
        },
      ],
      terms: [
        ["Ligand", "A signaling molecule that binds a receptor."],
        ["Second messenger", "A small molecule, such as cAMP or Ca²⁺, that relays a signal inside the cell."],
        ["Phosphorylation cascade", "A chain of kinases, each activating the next, which amplifies the signal."],
        ["Negative feedback", "A response that reverses a change, keeping conditions stable."],
        ["Cyclin/CDK", "Proteins that drive the cell cycle forward past its checkpoints."],
        ["Apoptosis", "Programmed cell death."],
      ],
      mistakes: [
        "Mixing up where DNA is replicated. It happens in S phase, not during mitosis.",
        "Saying a ligand enters the cell. Many ligands bind surface receptors and never enter.",
        "Mixing up positive and negative feedback. \"Negative\" doesn't mean bad.",
      ],
      questions: [
        { q: "Which is an example of negative feedback?", choices: ["Oxytocin increasing contractions during labor", "Insulin lowering blood glucose after a meal", "Ethylene speeding fruit ripening", "Blood clotting factors activating more factors"], answer: 1, explain: "High glucose triggers insulin, which lowers glucose back toward the set point. That reverses the change." },
        { q: "A drug blocks a cell's receptor for hormone X. When hormone X is added:", choices: ["The cell responds normally", "The cell does not respond", "The hormone enters the nucleus instead", "The response is amplified"], answer: 1, explain: "Without reception, the pathway never starts." },
        { q: "During which phase is DNA replicated?", choices: ["G₁", "S", "G₂", "Metaphase"], answer: 1, explain: "S stands for synthesis, the phase when DNA is copied." },
        { q: "A mutation makes a CDK permanently active. The most likely result is:", choices: ["The cell stops dividing", "The cell divides without regulation", "The cell undergoes meiosis", "DNA is never replicated"], answer: 1, explain: "Active CDKs push the cell past its checkpoints. Constant activity means uncontrolled division." },
      ],
      frq: {
        prompt: "A single epinephrine molecule binding to a liver cell can release millions of glucose molecules.\n(a) Identify the three stages of cell signaling.\n(b) Explain how one signal can cause such a large response.",
        points: [
          "(a) Reception, transduction and response.",
          "(b) Describes amplification: one receptor activates many second messengers (like cAMP), and each kinase in a phosphorylation cascade activates many of the next.",
          "Links the final step to many enzymes breaking down glycogen into glucose.",
        ],
      },
    },
    {
      title: "Heredity",
      weight: "8–11%",
      tldr: "Meiosis shuffles and halves chromosomes to make genetically unique gametes. Mendel's laws predict how traits are inherited, and many real traits follow more complex patterns.",
      concepts: [
        {
          title: "Meiosis creates variation",
          simple: "Meiosis makes sex cells with half the chromosomes, and every one is a different mix.",
          detail: "One diploid cell → 4 haploid cells. Variation comes from crossing over (prophase I), independent assortment (metaphase I) and random fertilization.",
        },
        {
          title: "Mendelian genetics and probability",
          simple: "Each parent passes on one of their two copies of a gene, like a coin flip.",
          detail: "Law of segregation: alleles separate into gametes. Law of independent assortment: genes on different chromosomes sort independently. Multiply probabilities for \"and\" and add them for \"or\".",
          example: "AaBb × AaBb → P(aabb) = 1/4 × 1/4 = 1/16.",
        },
        {
          title: "Non-Mendelian inheritance",
          simple: "Not every trait is simply dominant or recessive.",
          detail: "Incomplete dominance: a blend (red × white → pink). Codominance: both are shown (AB blood type). Sex-linked: genes on the X chromosome, so males show recessive traits more often. Linked genes are inherited together unless crossing over separates them. Other patterns: polygenic traits, and mitochondrial DNA inherited from the mother.",
        },
        {
          title: "Chi-square test",
          simple: "A math check on whether your results are close enough to what you predicted.",
          detail: "χ² = Σ (O − E)²/E. Degrees of freedom = number of categories − 1. If χ² is below the critical value (3.84 for df = 1 at p = 0.05), fail to reject the null hypothesis. The difference is due to chance.",
        },
      ],
      terms: [
        ["Allele", "A version of a gene."],
        ["Homozygous / heterozygous", "Two identical alleles / two different alleles."],
        ["Crossing over", "Exchange of DNA between homologous chromosomes in prophase I."],
        ["Independent assortment", "Homologous pairs line up randomly in metaphase I."],
        ["Sex-linked trait", "A gene located on a sex chromosome, usually the X."],
        ["Null hypothesis", "The prediction that there's no real difference, and any deviation is due to chance."],
      ],
      mistakes: [
        "Adding probabilities when you should multiply them (for \"this AND that\").",
        "Saying chi-square \"proves\" a hypothesis. You only reject or fail to reject the null.",
        "Forgetting that sons get their X chromosome from their mother.",
      ],
      questions: [
        { q: "Aa × Aa. What fraction of offspring are heterozygous?", choices: ["1/4", "1/2", "3/4", "1"], answer: 1, explain: "The Punnett square gives AA, Aa, Aa, aa. 2 out of 4 are heterozygous, so 1/2." },
        { q: "AaBb × AaBb. What is the probability of aabb offspring?", choices: ["1/4", "1/8", "1/16", "9/16"], answer: 2, explain: "P(aa) = 1/4 and P(bb) = 1/4. Multiply: 1/16." },
        { q: "A carrier mother (XᴴXʰ) and an unaffected father (XᴴY) have a son. What is the probability he has the X-linked recessive disorder?", choices: ["0", "1/4", "1/2", "1"], answer: 2, explain: "A son gets Y from dad and one of mom's two X's. Half of the time it's Xʰ." },
        { q: "Two genes are close together on the same chromosome. Compared to unlinked genes, the offspring will show:", choices: ["More recombinant phenotypes", "More parental phenotypes", "A 9:3:3:1 ratio", "No variation"], answer: 1, explain: "Linked genes tend to be inherited together. Crossing over rarely separates them." },
      ],
      frq: {
        prompt: "A cross is expected to produce a 3:1 ratio. Out of 400 offspring, 290 are purple and 110 are white.\n(a) State the null hypothesis.\n(b) Calculate χ².\n(c) With df = 1 and a critical value of 3.84, what do you conclude?",
        points: [
          "(a) There's no significant difference between the observed and expected (3:1) results. Any difference is due to chance.",
          "(b) Expected is 300 and 100. χ² = (290 − 300)²/300 + (110 − 100)²/100 = 0.33 + 1.00 = 1.33.",
          "(c) 1.33 < 3.84, so we fail to reject the null. The data support a 3:1 ratio.",
        ],
      },
    },
    {
      title: "Gene Expression and Regulation",
      weight: "12–16%",
      tldr: "DNA is copied (replication), read into RNA (transcription), and translated into protein (translation). Cells control which genes are turned on, which is how cells with the same DNA become different.",
      concepts: [
        {
          title: "DNA replication",
          simple: "The double helix unzips, and each side serves as a template for a new partner strand.",
          detail: "Replication is semiconservative. Helicase unwinds the DNA and primase lays down an RNA primer. DNA polymerase adds nucleotides 5′ → 3′ only, so the leading strand is continuous and the lagging strand is built in Okazaki fragments. Ligase seals the gaps.",
        },
        {
          title: "Transcription and RNA processing",
          simple: "The cell makes a working copy (mRNA) of one gene and edits it before sending it out of the nucleus.",
          detail: "RNA polymerase reads the template strand 3′ → 5′ and builds mRNA 5′ → 3′. In eukaryotes the mRNA gets a 5′ cap and a poly-A tail, and splicing removes introns so the exons remain. Alternative splicing lets one gene make several proteins.",
        },
        {
          title: "Translation",
          simple: "Ribosomes read the mRNA three letters at a time and link the matching amino acids together.",
          detail: "Each codon (3 bases) specifies an amino acid. tRNA anticodons pair with codons, and the ribosome forms peptide bonds. It starts at AUG and ends at a stop codon.",
        },
        {
          title: "Gene regulation and mutations",
          simple: "Every cell has the full instruction manual but reads only certain pages.",
          detail: "Prokaryotic operons: the lac operon is inducible (on when lactose is present) and the trp operon is repressible. Eukaryotes use transcription factors and epigenetics (DNA methylation, histone acetylation). Mutation types: substitution, insertion and deletion, where the last two can cause frameshifts.",
        },
      ],
      terms: [
        ["Semiconservative", "Each new DNA molecule keeps one original strand."],
        ["Okazaki fragments", "Short DNA pieces on the lagging strand."],
        ["Intron / exon", "Intron: removed from mRNA. Exon: expressed (kept)."],
        ["Codon", "A 3-base mRNA sequence that codes for one amino acid."],
        ["Operon", "A cluster of prokaryotic genes controlled by a single promoter and operator."],
        ["Transcription factor", "A protein that controls whether a gene is transcribed."],
      ],
      mistakes: [
        "Pairing A with T in RNA. RNA pairs A with U.",
        "Forgetting that DNA polymerase only builds 5′ → 3′, which is why there's a lagging strand.",
        "Saying different cells have different DNA. Same DNA, different gene expression.",
      ],
      questions: [
        { q: "A DNA template strand reads 3′-TAC-5′. The mRNA codon is:", choices: ["5′-ATG-3′", "5′-AUG-3′", "5′-UAC-3′", "3′-AUG-5′"], answer: 1, explain: "Pair T→A, A→U, C→G to get AUG, written 5′ to 3′. There's no T in RNA." },
        { q: "In the lac operon, when lactose is present:", choices: ["The repressor binds the operator", "The repressor is inactivated and the genes are transcribed", "RNA polymerase is destroyed", "Lactose is made"], answer: 1, explain: "Allolactose binds the repressor and changes its shape, so it releases the operator and transcription proceeds." },
        { q: "In gel electrophoresis, the fragments that travel the farthest are:", choices: ["The largest", "The smallest", "Positively charged", "Uncut plasmids"], answer: 1, explain: "Small DNA fragments move through the gel more easily toward the positive electrode." },
        { q: "Why is a single-base insertion usually more harmful than a single-base substitution?", choices: ["It changes only one amino acid", "It shifts the reading frame for every codon after it", "It is never repaired", "It only affects introns"], answer: 1, explain: "A frameshift changes every codon downstream, often creating an early stop codon." },
      ],
      frq: {
        prompt: "Nerve cells and muscle cells in the same person contain identical DNA but make very different proteins.\n(a) Explain how this is possible.\n(b) Describe one mechanism that regulates eukaryotic gene expression.",
        points: [
          "(a) Differential gene expression: different genes are turned on or off in different cell types.",
          "(b) Describes a mechanism, e.g. transcription factors binding enhancers or promoters, DNA methylation silencing genes, histone acetylation opening chromatin, or alternative splicing.",
        ],
      },
    },
    {
      title: "Natural Selection",
      weight: "13–20%",
      tldr: "Populations evolve when heritable traits that improve survival and reproduction become more common. Genetic drift, migration and mutation also change allele frequencies. Many kinds of evidence support common ancestry.",
      concepts: [
        {
          title: "How natural selection works",
          simple: "Individuals differ. The ones better suited to their environment tend to leave more offspring, so their traits spread.",
          detail: "Requirements: variation, heritability, more offspring than can survive, and differential reproductive success. Selection acts on phenotypes, but populations (not individuals) evolve.",
        },
        {
          title: "Hardy-Weinberg equilibrium",
          simple: "A math baseline for a population that is NOT evolving. If real data differ from it, evolution is happening.",
          detail: "p + q = 1 and p² + 2pq + q² = 1. The conditions are a large population, no migration, no mutation, random mating, and no selection.",
          example: "If q² = 0.16, then q = 0.4 and p = 0.6, so carriers (2pq) = 0.48.",
        },
        {
          title: "Genetic drift",
          simple: "Random chance changes allele frequencies, and it has a much bigger effect in small populations.",
          detail: "Bottleneck effect: a disaster shrinks the population. Founder effect: a small group starts a new population. Both reduce genetic diversity.",
        },
        {
          title: "Evidence and phylogeny",
          simple: "Fossils, anatomy and DNA all tell the same story of shared ancestors.",
          detail: "Homologous structures show common ancestry. Analogous structures show convergent evolution. Molecular evidence includes shared DNA and protein sequences. Cladograms group organisms by shared derived characters. Speciation requires reproductive isolation (allopatric or sympatric).",
        },
      ],
      terms: [
        ["Fitness", "Reproductive success: how many genes an individual passes on."],
        ["Allele frequency", "How common an allele is in a population's gene pool."],
        ["Genetic drift", "Random changes in allele frequency."],
        ["Homologous structures", "Structures that share ancestry but may have different functions."],
        ["Shared derived character", "A trait that defines a clade on a cladogram."],
        ["Reproductive isolation", "A barrier that prevents interbreeding between populations."],
      ],
      mistakes: [
        "Saying organisms evolve because they \"need\" to. Variation exists first, then selection acts on it.",
        "Saying individuals evolve. Populations evolve over generations.",
        "Using p² for carriers. Carriers are 2pq.",
      ],
      questions: [
        { q: "In a population at Hardy-Weinberg equilibrium, 16% show the recessive phenotype. What fraction are heterozygous?", choices: ["0.16", "0.24", "0.48", "0.60"], answer: 2, explain: "q² = 0.16, so q = 0.4 and p = 0.6. Then 2pq = 2(0.6)(0.4) = 0.48." },
        { q: "Which statement about natural selection is correct?", choices: ["Individuals evolve during their lifetimes", "Populations evolve over generations", "Organisms develop traits they need", "Selection creates new mutations"], answer: 1, explain: "Selection changes allele frequencies in populations. Mutations arise randomly and aren't created by need." },
        { q: "A bat wing and a human arm have the same bone arrangement. These are:", choices: ["Analogous structures", "Homologous structures", "Vestigial structures", "Convergent structures"], answer: 1, explain: "Same underlying structure from a common ancestor, even though the functions differ." },
        { q: "A few birds colonize a remote island, and the new population has low genetic diversity. This is an example of:", choices: ["Bottleneck effect", "Founder effect", "Gene flow", "Directional selection"], answer: 1, explain: "A small group founding a new population carries only a sample of the original alleles." },
      ],
      frq: {
        prompt: "After a pesticide is used for several years, most insects in a population are resistant to it.\n(a) Explain how the population became resistant.\n(b) Explain why stopping pesticide use might make resistance decline.",
        points: [
          "(a) Resistance alleles already existed as random variation before the pesticide was used.",
          "(a) The pesticide killed susceptible insects. Resistant ones survived and reproduced more, so the resistance allele increased over generations.",
          "(b) Without the pesticide, resistance may carry a cost, so non-resistant insects may reproduce more and the allele frequency could decrease.",
        ],
      },
    },
    {
      title: "Ecology",
      weight: "10–15%",
      tldr: "Energy flows through ecosystems and is lost at every step, while matter cycles. Populations grow until resources limit them, and species interactions shape entire communities.",
      concepts: [
        {
          title: "Energy flow and trophic levels",
          simple: "Only about 10% of the energy at one level of a food chain makes it to the next. The rest is mostly lost as heat.",
          detail: "Producers → primary consumers → secondary consumers → tertiary consumers. This 10% rule explains why food chains are short and why there are fewer top predators.",
          example: "10,000 kcal in producers → about 1,000 → about 100 → about 10 kcal for tertiary consumers.",
        },
        {
          title: "Population growth",
          simple: "With unlimited resources, populations explode. Real populations level off at what the environment can support.",
          detail: "Exponential growth: dN/dt = rN (a J-curve). Logistic growth: dN/dt = rN(K − N)/K (an S-curve), which levels off at carrying capacity K. Growth is fastest at N = K/2.",
        },
        {
          title: "Community interactions",
          simple: "Species compete, eat each other, or team up, and those relationships shape the whole community.",
          detail: "Competition (−/−), predation and herbivory (+/−), mutualism (+/+), commensalism (+/0), parasitism (+/−). A keystone species has an outsized effect on its community compared to how abundant it is.",
        },
        {
          title: "Disruptions and biodiversity",
          simple: "More diverse ecosystems bounce back better after disruptions.",
          detail: "Invasive species, habitat loss and climate change reduce biodiversity. Higher diversity increases resilience.",
        },
      ],
      terms: [
        ["Trophic level", "A feeding position in a food chain."],
        ["Carrying capacity (K)", "The maximum population size an environment can sustain."],
        ["Logistic growth", "Growth that slows as the population approaches K."],
        ["Keystone species", "A species whose removal greatly changes the community."],
        ["Mutualism", "An interaction where both species benefit."],
        ["Invasive species", "A non-native species that spreads and causes harm."],
      ],
      mistakes: [
        "Saying energy cycles. Energy FLOWS (and is lost as heat), while matter CYCLES.",
        "Saying logistic growth is fastest at K. It's fastest at K/2.",
        "Drawing food-web arrows backward. Arrows point in the direction energy flows: from what is eaten to what eats it.",
      ],
      questions: [
        { q: "Producers capture 10,000 kcal. About how much reaches tertiary consumers?", choices: ["1,000 kcal", "100 kcal", "10 kcal", "1 kcal"], answer: 2, explain: "About 10% passes to each level: 10,000 → 1,000 → 100 → 10." },
        { q: "In logistic growth, population growth rate (dN/dt) is highest when N equals:", choices: ["0", "K/2", "K", "2K"], answer: 1, explain: "At K/2 there are enough individuals to reproduce and still plenty of resources." },
        { q: "Removing a sea star from a tide pool causes mussels to take over and diversity to drop. The sea star is a:", choices: ["Producer", "Keystone species", "Invasive species", "Mutualist"], answer: 1, explain: "The large effect of removing it shows that it's a keystone predator." },
        { q: "r = 0.1, N = 500, K = 1000. What is dN/dt?", choices: ["25", "50", "100", "500"], answer: 0, explain: "dN/dt = 0.1 × 500 × (1000 − 500)/1000 = 50 × 0.5 = 25." },
      ],
      frq: {
        prompt: "An invasive fish that eats native minnows is introduced to a lake. The minnows eat zooplankton, and zooplankton eat algae.\n(a) Predict the effect on the zooplankton population.\n(b) Predict the effect on algae and justify your prediction.\n(c) Explain why invasive species often grow rapidly in new habitats.",
        points: [
          "(a) Minnows decline, so zooplankton INCREASE because they have fewer predators.",
          "(b) More zooplankton eat more algae, so algae DECREASE (a trophic cascade).",
          "(c) Invasive species often have no natural predators, competitors or diseases in the new habitat, so population growth isn't held back.",
        ],
      },
    },
  ],
};
