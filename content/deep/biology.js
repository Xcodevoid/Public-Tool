// More key concepts for content/biology.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["biology"] = {
  0: [
    {
      title: "Elements of life",
      simple: "Living things are built mostly from carbon, hydrogen, oxygen, nitrogen, phosphorus and sulfur.",
      detail: "Organisms take in these elements to build macromolecules. Carbon forms the backbone of organic molecules; nitrogen is in proteins and nucleic acids; phosphorus is in nucleic acids and phospholipids; sulfur is in some amino acids (cysteine, methionine). Carbohydrates and lipids contain C, H, O (phospholipids add P).",
      hook: "CHNOPS: the six key elements of life.",
      trap: "Know which elements identify which molecule: phosphorus → nucleic acids and phospholipids, sulfur → proteins. A classic radioactive-labeling question (Hershey-Chase) depends on it.",
      terms: [
        ["CHNOPS", "Carbon, hydrogen, nitrogen, oxygen, phosphorus, sulfur: the main elements of life."],
        ["Organic molecule", "A carbon-based compound, usually with C–H bonds."],
      ],
    },
    {
      title: "Carbohydrates",
      simple: "Carbohydrates store energy and build structures, and their linkage decides which.",
      detail: "Monosaccharides (glucose) join by glycosidic linkages into disaccharides (sucrose) and polysaccharides. Starch (plants) and glycogen (animals) store energy with α-linkages. Cellulose (plant cell walls) and chitin (fungi, arthropods) are structural, with β-linkages that most animals can't digest.",
      trap: "Starch and cellulose are BOTH glucose polymers. The difference is the linkage (α vs. β), which changes shape and function.",
      terms: [
        ["Glycosidic linkage", "Covalent bond joining two monosaccharides."],
        ["Glycogen", "Highly branched glucose storage polysaccharide in animals."],
        ["Cellulose", "Structural glucose polymer with β-linkages in plant cell walls."],
      ],
    },
    {
      title: "Lipids",
      simple: "Lipids are hydrophobic molecules that store energy, build membranes, and act as signals.",
      detail: "Triglycerides: glycerol + three fatty acids (ester linkages). Saturated fatty acids have no C=C double bonds and pack tightly (solid); unsaturated fats have kinks from double bonds (liquid). Phospholipids have a hydrophilic phosphate head and hydrophobic tails, forming bilayers. Steroids (cholesterol, hormones) have four fused rings.",
      trap: "Lipids aren't true polymers: they're not built from repeating monomers the way carbohydrates, proteins and nucleic acids are.",
      terms: [
        ["Saturated fatty acid", "Fatty acid with no double bonds; straight chains pack tightly."],
        ["Phospholipid", "Lipid with a hydrophilic head and two hydrophobic tails; forms membranes."],
        ["Amphipathic", "Having both hydrophilic and hydrophobic regions."],
      ],
    },
    {
      title: "Amino acids and properties of R groups",
      simple: "An amino acid's R group decides whether it's polar, nonpolar or charged, which shapes how a protein folds.",
      detail: "Each amino acid has an amino group, a carboxyl group, and a variable R group. Nonpolar R groups cluster in the protein's interior, away from water; polar and charged ones face the watery outside. Peptide bonds join amino acids by dehydration synthesis. A protein has a directionality: N-terminus to C-terminus.",
      trap: "Changing ONE amino acid can change folding and function if its R group has very different properties (sickle-cell hemoglobin: a charged amino acid replaced by a nonpolar one).",
      terms: [
        ["Peptide bond", "Covalent bond linking amino acids in a polypeptide."],
        ["Nonpolar R group", "A hydrophobic side chain; these cluster in a protein's interior, away from water."],
        ["N-terminus", "The amino end where a polypeptide chain begins."],
      ],
    },
  ],
  1: [
    {
      title: "Ribosomes and the endomembrane system",
      simple: "Ribosomes make proteins, and the ER and Golgi process and ship them.",
      detail: "All cells have ribosomes (rRNA + protein), evidence of common ancestry. Proteins made on rough ER ribosomes are folded and modified, then sent in vesicles to the Golgi for further modification and sorting, and then to the membrane, secretion, or lysosomes. Smooth ER makes lipids and detoxifies. Lysosomes digest with hydrolytic enzymes; vacuoles store water and materials.",
      trap: "Trace the secretory pathway in order: rough ER → vesicle → Golgi → vesicle → plasma membrane (exocytosis). Order questions are common.",
      terms: [
        ["Rough ER", "ER studded with ribosomes; makes secreted and membrane proteins."],
        ["Golgi complex", "Modifies, sorts and packages proteins for their destinations."],
        ["Lysosome", "Membrane sac of hydrolytic enzymes that break down materials."],
      ],
    },
    {
      title: "Mitochondria and chloroplasts",
      simple: "These energy organelles have folded membranes that increase surface area for making ATP.",
      detail: "Mitochondria: the inner membrane folds into cristae, where the electron transport chain and ATP synthase sit; the matrix hosts the Krebs cycle. Chloroplasts: thylakoid membranes (stacked into grana) host the light reactions; the stroma hosts the Calvin cycle. Both have their own circular DNA, ribosomes, and double membranes, which supports endosymbiotic theory.",
      trap: "Folding (cristae, thylakoids) increases SURFACE AREA for membrane-bound reactions. Link structure to function in every answer.",
      terms: [
        ["Cristae", "Folds of the inner mitochondrial membrane that increase surface area."],
        ["Thylakoid", "Membrane sac in chloroplasts where the light reactions occur."],
        ["Stroma", "Fluid inside the chloroplast where the Calvin cycle occurs."],
      ],
    },
    {
      title: "Membrane structure and permeability",
      simple: "The membrane lets small nonpolar molecules through easily, but blocks ions and large polar molecules.",
      detail: "The fluid mosaic model: a phospholipid bilayer with embedded proteins, cholesterol (regulates fluidity) and glycoproteins (cell recognition). Small nonpolar molecules (O₂, CO₂) diffuse freely. Water passes slowly through the bilayer and quickly through aquaporins. Ions and large polar molecules need channels or carriers. Plant cell walls (cellulose) and fungal walls (chitin) add structure.",
      trap: "Selective permeability comes from the HYDROPHOBIC interior of the bilayer. Charged ions can't cross it without proteins, however small they are.",
      terms: [
        ["Aquaporin", "Channel protein that speeds water across membranes."],
        ["Selective permeability", "A membrane lets some substances cross more easily than others."],
        ["Glycoprotein", "Membrane protein with carbohydrate chains used in cell recognition."],
      ],
    },
    {
      title: "Bulk transport and cotransport",
      simple: "Cells move large materials in vesicles and use one gradient to power moving another substance.",
      detail: "Endocytosis (phagocytosis, pinocytosis, receptor-mediated) brings materials in; exocytosis releases them. The sodium-potassium pump uses ATP to move 3 Na⁺ out and 2 K⁺ in, creating a membrane potential. Cotransport uses the energy of one gradient (like H⁺ or Na⁺) to move another molecule (like sucrose or glucose) against its gradient.",
      trap: "Cotransport is still active transport: it uses energy stored in a gradient that was built by ATP-powered pumps.",
      terms: [
        ["Endocytosis", "Taking in materials by engulfing them in membrane vesicles."],
        ["Sodium-potassium pump", "ATP-powered pump moving 3 Na⁺ out and 2 K⁺ in."],
        ["Cotransport", "Using one substance's gradient to move another against its gradient."],
      ],
    },
  ],
  2: [
    {
      title: "Environmental effects on enzymes",
      simple: "Temperature, pH and inhibitors change how fast enzymes work.",
      detail: "Rates rise with temperature until the optimum, then drop sharply as the enzyme denatures. Each enzyme has an optimal pH. Competitive inhibitors bind the active site (overcome by adding more substrate). Noncompetitive (allosteric) inhibitors bind elsewhere and change the enzyme's shape. Rates level off when all active sites are saturated.",
      trap: "Adding more substrate overcomes COMPETITIVE inhibition, but not noncompetitive inhibition. Graph questions test exactly this.",
      terms: [
        ["Competitive inhibitor", "Binds the active site and competes with the substrate."],
        ["Allosteric site", "A site other than the active site where a regulator binds."],
        ["Optimal temperature", "The temperature at which an enzyme works fastest."],
      ],
    },
    {
      title: "Cellular energy and coupled reactions",
      simple: "Cells use ATP to power reactions that wouldn't happen on their own.",
      detail: "Exergonic reactions release free energy; endergonic reactions require it. Cells couple ATP hydrolysis (exergonic) to endergonic reactions. Metabolic pathways are sequences of enzyme-catalyzed steps, often regulated by feedback inhibition. Energy flows through organisms but must be constantly replenished, following the laws of thermodynamics.",
      trap: "Enzymes lower activation energy, but they DON'T change ΔG or make an endergonic reaction exergonic. Coupling to ATP does that.",
      terms: [
        ["Exergonic reaction", "Reaction that releases free energy (negative ΔG)."],
        ["Energy coupling", "Using an exergonic process to drive an endergonic one."],
        ["Feedback inhibition", "A pathway's end product inhibits an earlier enzyme."],
      ],
    },
    {
      title: "The light reactions",
      simple: "Light energy splits water, releases oxygen, and makes ATP and NADPH for the Calvin cycle.",
      detail: "In the thylakoid membrane, photosystems II and I absorb light and excite electrons. Water is split (photolysis) to replace electrons, releasing O₂. Electrons pass along an electron transport chain, pumping H⁺ into the thylakoid space; ATP synthase uses the gradient to make ATP (chemiosmosis). NADP⁺ is reduced to NADPH.",
      trap: "The O₂ released in photosynthesis comes from WATER, not from CO₂.",
      terms: [
        ["Photosystem", "Cluster of pigments and proteins that absorbs light energy."],
        ["Photolysis", "Splitting of water in the light reactions, releasing O₂."],
        ["NADPH", "Electron carrier made in the light reactions, used in the Calvin cycle."],
      ],
    },
    {
      title: "Stages of cellular respiration",
      simple: "Glucose is broken down in stages, and most ATP comes from the electron transport chain at the end.",
      detail: "Glycolysis (cytosol): glucose → 2 pyruvate, net 2 ATP, 2 NADH. Pyruvate oxidation and the Krebs cycle (mitochondrial matrix) release CO₂ and load NADH and FADH₂. The electron transport chain (inner membrane) passes electrons to O₂, pumping H⁺; ATP synthase makes most ATP by oxidative phosphorylation. Without O₂, the chain stops.",
      trap: "CO₂ is released during pyruvate oxidation and the Krebs cycle, not at the electron transport chain. O₂ is used at the END of the chain.",
      terms: [
        ["Glycolysis", "Breakdown of glucose to pyruvate in the cytosol; net 2 ATP."],
        ["Krebs cycle", "Cycle in the mitochondrial matrix producing NADH, FADH₂ and CO₂."],
        ["Oxidative phosphorylation", "ATP production powered by the electron transport chain and chemiosmosis."],
      ],
    },
  ],
  3: [
    {
      title: "Types of cell communication",
      simple: "Cells signal by direct contact, to nearby cells, or to distant cells through hormones.",
      detail: "Direct contact: gap junctions (animals), plasmodesmata (plants), and cell-surface recognition (immune cells). Local signaling: paracrine signals and synaptic signaling (neurotransmitters). Long-distance: endocrine hormones in the blood. Quorum sensing lets bacteria coordinate behavior based on population density.",
      trap: "Match the signal to its distance: synaptic and paracrine = local, endocrine = long distance. Don't call a neurotransmitter a hormone.",
      terms: [
        ["Paracrine signaling", "A cell releases signals that affect nearby cells."],
        ["Endocrine signaling", "Hormones travel through the bloodstream to distant target cells."],
        ["Quorum sensing", "Bacteria detect population density and coordinate gene expression."],
      ],
    },
    {
      title: "Receptors and responses",
      simple: "Where a receptor sits depends on the signal: at the surface for polar signals, inside for nonpolar ones.",
      detail: "Polar or large ligands (peptide hormones) bind membrane receptors: G protein–coupled receptors, receptor tyrosine kinases, and ligand-gated ion channels. Nonpolar ligands (steroid hormones) cross the membrane and bind intracellular receptors that act as transcription factors. The same signal can cause different responses in different cells, depending on their receptors and relay proteins.",
      trap: "Steroid hormones (like testosterone) bind INSIDE the cell because they're lipid-soluble. Their effect is usually changed gene expression.",
      terms: [
        ["G protein–coupled receptor", "Membrane receptor that activates a G protein when a ligand binds."],
        ["Ligand-gated ion channel", "Receptor that opens a channel when a ligand binds."],
        ["Intracellular receptor", "Receptor inside the cell that binds lipid-soluble signals."],
      ],
    },
    {
      title: "Mitosis",
      simple: "Mitosis divides duplicated chromosomes evenly into two identical nuclei.",
      detail: "Interphase (G1, S, G2) takes most of the cycle; DNA replicates in S. Mitosis: prophase (chromosomes condense, spindle forms), metaphase (chromosomes line up at the middle), anaphase (sister chromatids separate), telophase (nuclei reform). Cytokinesis divides the cytoplasm: a cleavage furrow in animals, a cell plate in plants. Result: two genetically identical diploid cells.",
      hook: "PMAT: Prophase, Metaphase, Anaphase, Telophase.",
      trap: "After S phase, a cell has twice the DNA but the SAME number of chromosomes. Each chromosome now has two sister chromatids.",
      terms: [
        ["Sister chromatids", "Identical copies of a chromosome joined at the centromere."],
        ["Anaphase", "Mitosis stage when sister chromatids separate to opposite poles."],
        ["Cytokinesis", "Division of the cytoplasm after mitosis."],
      ],
    },
    {
      title: "Cell cycle checkpoints",
      simple: "Checkpoints stop the cycle if something is wrong, such as damaged DNA or unattached chromosomes.",
      detail: "The G1 checkpoint decides whether to divide or enter G0 (non-dividing). The G2 checkpoint checks DNA replication. The M checkpoint (spindle checkpoint) ensures all chromosomes are attached before anaphase. Growth factors and cyclin–CDK complexes drive progress; tumor suppressors (p53) halt the cycle for repair or trigger apoptosis.",
      trap: "Proto-oncogenes are like an accelerator (mutation = stuck on); tumor suppressors are like brakes (mutation = brakes fail). Both can lead to cancer.",
      terms: [
        ["G0 phase", "Non-dividing state that cells enter from G1."],
        ["p53", "Tumor-suppressor protein that halts the cycle when DNA is damaged."],
        ["Proto-oncogene", "Normal gene promoting division; a mutated form (oncogene) can cause cancer."],
      ],
    },
  ],
  4: [
    {
      title: "Stages of meiosis",
      simple: "Meiosis has two divisions: the first separates homologous pairs and the second separates sister chromatids.",
      detail: "Meiosis I: homologous chromosomes pair (synapsis) and cross over in prophase I, line up as pairs in metaphase I, and separate in anaphase I, halving the chromosome number (diploid → haploid). Meiosis II resembles mitosis, separating sister chromatids. Result: four genetically different haploid gametes.",
      trap: "The chromosome number is halved in meiosis I, not meiosis II. Meiosis II only separates sister chromatids.",
      terms: [
        ["Homologous chromosomes", "Pair of chromosomes, one from each parent, with the same genes."],
        ["Synapsis", "Pairing of homologous chromosomes in prophase I."],
        ["Haploid", "Having one set of chromosomes (n)."],
      ],
    },
    {
      title: "Errors in meiosis",
      simple: "When chromosomes fail to separate properly, gametes get the wrong number of chromosomes.",
      detail: "Nondisjunction in meiosis I or II produces gametes with an extra or missing chromosome (aneuploidy). Examples: trisomy 21 (Down syndrome), Turner syndrome (XO), Klinefelter syndrome (XXY). Karyotypes reveal chromosome number and large changes. Some changes (polyploidy) are common in plants and can create new species.",
      trap: "Nondisjunction in meiosis I affects ALL four gametes; in meiosis II it affects only two.",
      terms: [
        ["Nondisjunction", "Failure of chromosomes to separate properly during meiosis."],
        ["Aneuploidy", "Having an abnormal number of chromosomes."],
        ["Karyotype", "Image of a cell's chromosomes arranged in pairs."],
      ],
    },
    {
      title: "Linked genes and mapping",
      simple: "Genes close together on a chromosome tend to be inherited together unless crossing over separates them.",
      detail: "Linked genes don't assort independently, so offspring ratios differ from Mendel's predictions. Recombination frequency = recombinant offspring ÷ total offspring. A 1% frequency = 1 map unit (centimorgan). The farther apart two genes are, the more often they recombine (up to 50%, which looks unlinked).",
      trap: "If most offspring look like the PARENTS and few are recombinant, the genes are linked. A 9:3:3:1 ratio means they aren't.",
      terms: [
        ["Linked genes", "Genes near each other on the same chromosome, inherited together."],
        ["Recombination frequency", "Percentage of recombinant offspring; used to map genes."],
        ["Map unit", "1% recombination frequency between two genes."],
      ],
    },
    {
      title: "Environmental effects on phenotype",
      simple: "The same genotype can produce different phenotypes in different environments.",
      detail: "Phenotypic plasticity: hydrangea flower color depends on soil pH; Himalayan rabbit and Siamese cat fur is darker in cold body regions (temperature-sensitive enzyme); some reptiles' sex is set by incubation temperature. Human traits like height reflect genes and nutrition. Polygenic traits show continuous variation.",
      trap: "Environment changes the PHENOTYPE, not the genotype. The rabbit's genes stay the same when its fur changes color.",
      terms: [
        ["Phenotypic plasticity", "One genotype producing different phenotypes in different environments."],
        ["Polygenic inheritance", "A trait controlled by many genes, with continuous variation."],
      ],
    },
  ],
  5: [
    {
      title: "DNA and RNA structure",
      simple: "DNA stores information in a double helix, while RNA is single-stranded and has several jobs.",
      detail: "DNA: deoxyribose sugar, bases A, T, G, C, double-stranded and antiparallel, with purines (A, G) pairing with pyrimidines (T, C). RNA: ribose sugar, uracil instead of thymine, usually single-stranded. Types: mRNA (message), tRNA (carries amino acids), rRNA (part of ribosomes). Prokaryotes have circular chromosomes and plasmids; eukaryotes have linear chromosomes.",
      trap: "G–C pairs have three hydrogen bonds and A–T have two, so DNA richer in G–C needs more heat to separate.",
      terms: [
        ["Purine", "Double-ring base: adenine or guanine."],
        ["Plasmid", "Small circular DNA in bacteria, separate from the chromosome."],
        ["tRNA", "RNA that carries a specific amino acid and matches codons with its anticodon."],
      ],
    },
    {
      title: "Gene expression in prokaryotes vs. eukaryotes",
      simple: "Bacteria transcribe and translate at the same time; eukaryotes process RNA in the nucleus first.",
      detail: "Prokaryotes have no nucleus, so translation begins while transcription continues. Eukaryotic pre-mRNA gets a 5′ cap, a poly-A tail, and splicing (introns removed, exons joined). Alternative splicing lets one gene produce multiple proteins. Operons (lac, trp) regulate groups of prokaryotic genes together.",
      trap: "The lac operon is INDUCIBLE (turned on when lactose is present); the trp operon is REPRESSIBLE (turned off when tryptophan is plentiful).",
      terms: [
        ["Alternative splicing", "Joining different combinations of exons to make different proteins from one gene."],
        ["5′ cap", "Modified guanine added to the start of eukaryotic mRNA."],
        ["Inducible operon", "Operon normally off, turned on by an inducer (e.g., lac)."],
      ],
    },
    {
      title: "Cell specialization and epigenetics",
      simple: "All your cells have the same DNA, but they express different genes.",
      detail: "Differentiation depends on which genes are expressed. Transcription factors, enhancers and silencers control expression. Epigenetic changes (DNA methylation silences genes; histone acetylation opens chromatin and activates them) can be inherited by daughter cells without changing the DNA sequence. Small RNAs (miRNA) can block translation.",
      trap: "Muscle and nerve cells have the SAME genes. They differ in gene EXPRESSION, not in which genes they carry.",
      terms: [
        ["DNA methylation", "Adding methyl groups to DNA, usually silencing genes."],
        ["Histone acetylation", "Loosens chromatin, making genes easier to transcribe."],
        ["Enhancer", "DNA region that increases transcription when activators bind."],
      ],
    },
    {
      title: "Biotechnology",
      simple: "Scientists can copy, cut, sort and move DNA to study and change genes.",
      detail: "PCR amplifies DNA (denature, anneal primers, extend). Gel electrophoresis separates DNA fragments by size (smaller fragments travel farther toward the positive end, since DNA is negative). Restriction enzymes cut at specific sequences; DNA ligase joins fragments. Bacterial transformation inserts plasmids into bacteria. DNA sequencing reads the base order.",
      trap: "In gel electrophoresis, SMALLER fragments travel farther. DNA moves toward the positive electrode because of its negatively charged phosphates.",
      terms: [
        ["PCR", "Polymerase chain reaction: makes many copies of a DNA segment."],
        ["Gel electrophoresis", "Separates DNA fragments by size using an electric field."],
        ["Transformation", "A cell takes up foreign DNA, such as a plasmid."],
      ],
    },
  ],
  6: [
    {
      title: "Natural vs. artificial selection and variation",
      simple: "Selection needs variation, and humans can drive selection just like the environment.",
      detail: "Artificial selection (dog breeds, crops) shows how selection changes populations. Variation comes from mutation, and in sexually reproducing organisms from crossing over, independent assortment, and random fertilization. Types of selection: directional (one extreme favored), stabilizing (average favored), disruptive (both extremes favored).",
      trap: "Individuals don't evolve. POPULATIONS evolve as allele frequencies change over generations.",
      terms: [
        ["Artificial selection", "Humans breeding organisms for desired traits."],
        ["Stabilizing selection", "Selection favoring the average phenotype."],
        ["Disruptive selection", "Selection favoring both extremes over the middle."],
      ],
    },
    {
      title: "Speciation",
      simple: "New species form when populations stop interbreeding and diverge.",
      detail: "Allopatric speciation: a geographic barrier splits a population. Sympatric speciation: happens in the same area (polyploidy in plants, habitat or behavioral isolation). Prezygotic barriers (habitat, temporal, behavioral, mechanical, gametic isolation) prevent mating or fertilization; postzygotic barriers (hybrid inviability, sterility such as mules) act after. Rates: gradualism vs. punctuated equilibrium.",
      trap: "A mule shows a POSTZYGOTIC barrier: the hybrid forms but is sterile. Don't classify it as prezygotic.",
      terms: [
        ["Allopatric speciation", "Speciation caused by geographic separation."],
        ["Prezygotic barrier", "Prevents mating or fertilization between species."],
        ["Punctuated equilibrium", "Long periods of stability interrupted by rapid change."],
      ],
    },
    {
      title: "Extinction and adaptive radiation",
      simple: "Extinctions open up opportunities, and surviving groups can rapidly diversify to fill them.",
      detail: "Extinction rates rise with environmental change, and mass extinctions have happened several times (e.g., the end of the dinosaurs). Human activity is increasing extinction rates now. Afterward, adaptive radiation lets survivors diversify into open niches (mammals after the dinosaurs; Darwin's finches on islands).",
      trap: "Genetic diversity helps populations survive change. Small, low-diversity populations are more vulnerable to extinction.",
      terms: [
        ["Adaptive radiation", "Rapid diversification of a lineage into many species filling different niches."],
        ["Mass extinction", "Loss of a large share of species in a geologically short time."],
      ],
    },
    {
      title: "Origins of life",
      simple: "Evidence suggests life arose from simple chemicals through a series of steps.",
      detail: "Earth formed about 4.6 billion years ago; the earliest fossils are about 3.5 billion years old. Miller-Urey experiments showed organic molecules can form under simulated early-Earth conditions. The RNA world hypothesis proposes RNA came first because it can both store information and catalyze reactions (ribozymes). Protocells may have formed from lipid vesicles.",
      trap: "The RNA world hypothesis rests on RNA doing BOTH jobs, information and catalysis. That's the detail exams ask for.",
      terms: [
        ["Miller-Urey experiment", "Showed organic molecules can form from simple inorganic ones."],
        ["RNA world hypothesis", "Early life may have used RNA for both heredity and catalysis."],
        ["Ribozyme", "An RNA molecule that acts as an enzyme."],
      ],
    },
  ],
  7: [
    {
      title: "Responses to the environment",
      simple: "Organisms respond to changes with behavior and physiology that help them survive and reproduce.",
      detail: "Behaviors include taxis (movement toward/away from a stimulus), kinesis, migration, and communication (visual, audible, chemical, tactile). Plants show phototropism and photoperiodism. Cooperative behavior can increase fitness (kin selection). Endotherms generate heat metabolically; ectotherms rely on the environment.",
      trap: "Explain behaviors in terms of FITNESS: how the behavior increases survival or reproductive success.",
      terms: [
        ["Photoperiodism", "Response to day length, such as flowering in plants."],
        ["Kin selection", "Helping relatives increases shared genes in the next generation."],
        ["Endotherm", "Animal that generates its own body heat through metabolism."],
      ],
    },
    {
      title: "Energy use and body size",
      simple: "Smaller animals burn energy faster per gram of body mass than larger ones.",
      detail: "Metabolic rate per unit body mass decreases as size increases, partly because smaller organisms have more surface area relative to volume and lose heat faster. Organisms need energy to grow, reproduce and maintain organization; an energy deficit leads to weight loss and eventually death, and a surplus is stored or used for growth.",
      trap: "A mouse uses more energy PER GRAM than an elephant, even though the elephant uses more energy in total.",
      terms: [
        ["Metabolic rate", "The total energy an animal uses per unit time."],
        ["Surface area-to-volume ratio", "Smaller organisms have more surface per unit volume, losing heat faster."],
      ],
    },
    {
      title: "Biogeochemical cycles",
      simple: "Matter cycles through ecosystems, while energy flows through and is lost as heat.",
      detail: "Carbon cycle: photosynthesis removes CO₂; respiration, decomposition and burning fossil fuels release it. Nitrogen cycle: nitrogen fixation by bacteria (N₂ → NH₃), nitrification, assimilation, denitrification. Water cycle: evaporation, transpiration, precipitation. Phosphorus cycle has no major atmospheric component (weathering of rock).",
      trap: "Matter CYCLES; energy FLOWS one way. Never say energy is recycled in an ecosystem.",
      terms: [
        ["Nitrogen fixation", "Conversion of atmospheric N₂ into usable ammonia by bacteria."],
        ["Decomposer", "Organism that breaks down dead matter, returning nutrients to the ecosystem."],
        ["Transpiration", "Evaporation of water from plant leaves."],
      ],
    },
    {
      title: "Community structure and succession",
      simple: "Communities change over time after disturbances, following predictable stages.",
      detail: "Community structure depends on species richness and relative abundance (species diversity). Ecological niches and competitive exclusion shape who coexists. Primary succession begins on bare rock (pioneer species like lichens); secondary succession follows a disturbance that leaves soil (after a fire). Trophic cascades occur when top predators change lower levels.",
      trap: "Primary succession starts WITHOUT soil; secondary succession starts WITH soil already present. Look for that detail in the scenario.",
      terms: [
        ["Species diversity", "Combines species richness and relative abundance."],
        ["Primary succession", "Community development on newly exposed land without soil."],
        ["Competitive exclusion", "Two species can't share the exact same niche indefinitely."],
      ],
    },
  ],
};
