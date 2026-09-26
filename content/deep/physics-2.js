// More key concepts for content/physics-2.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["physics-2"] = {
  0: [
    {
      title: "Pressure from molecular collisions",
      simple: "Gas pressure comes from countless molecules hitting the container walls.",
      detail: "Each collision transfers momentum to the wall; pressure = average force per area. Faster molecules (higher T) or more molecules per volume raise pressure. The root-mean-square speed v_rms = √(3kT/m), so lighter molecules move faster at the same temperature.",
      trap: "At the same temperature, different gases have the same average KE but NOT the same speed. Lighter molecules are faster.",
      terms: [
        ["Root-mean-square speed", "v_rms = √(3kT/m), a typical molecular speed."],
        ["Boltzmann constant (k)", "1.38 × 10⁻²³ J/K, linking temperature and molecular energy."],
      ],
    },
    {
      title: "Specific heat and thermal equilibrium",
      simple: "Different materials need different amounts of energy to warm up, and objects in contact reach the same temperature.",
      detail: "Q = mcΔT. Materials with high specific heat (like water) change temperature slowly. When objects reach thermal equilibrium, heat lost by the hot object = heat gained by the cold one. Heat flows by conduction, convection and radiation; conduction rate depends on area, thickness and thermal conductivity.",
      trap: "Temperature and heat are different: two objects at the same temperature can hold very different amounts of internal energy.",
      terms: [
        ["Specific heat", "Energy to raise 1 kg of a material by 1 K."],
        ["Thermal equilibrium", "State where objects in contact have the same temperature and no net heat flow."],
      ],
    },
    {
      title: "Comparing thermodynamic processes",
      simple: "Each process holds something constant, which decides which terms in the first law are zero.",
      detail: "Isobaric (constant P): W = −PΔV, horizontal line on a PV diagram. Isochoric (constant V): W = 0, vertical line. Isothermal (constant T): ΔU = 0, curved hyperbola. Adiabatic (Q = 0): steeper curve than isothermal; compression heats the gas. For a closed cycle, ΔU = 0 and net work = enclosed area.",
      trap: "In an ADIABATIC process no heat flows, but temperature still changes, because work changes the internal energy.",
      terms: [
        ["Isobaric process", "A process at constant pressure."],
        ["Isochoric process", "A process at constant volume; no work is done."],
      ],
    },
  ],
  1: [
    {
      title: "Charge conservation and charging",
      simple: "Charge is never created or destroyed; it moves between objects by friction, contact or induction.",
      detail: "Rubbing transfers electrons (friction). Touching a charged conductor shares charge (conduction). Induction uses a nearby charge to separate charges, then grounding removes one kind, leaving the object oppositely charged. Charge is quantized in units of e = 1.6 × 10⁻¹⁹ C.",
      trap: "Only ELECTRONS move in solids. A positively charged object has lost electrons; it didn't gain protons.",
      terms: [
        ["Conservation of charge", "Total charge in an isolated system stays constant."],
        ["Grounding", "Connecting an object to Earth so charge can flow in or out."],
        ["Elementary charge", "e = 1.6 × 10⁻¹⁹ C, the charge of one proton."],
      ],
    },
    {
      title: "Uniform fields and charged particle motion",
      simple: "Between parallel plates, the field is uniform, so charges accelerate steadily like projectiles.",
      detail: "Between parallel plates: E = ΔV/d, pointing from + to −. A charge feels F = qE, with a = qE/m. A charge entering sideways follows a parabolic path, like a projectile in gravity. Positive charges accelerate along E; electrons accelerate opposite to E.",
      trap: "Gravity is usually negligible for electrons and protons in these problems. The electric force is billions of times larger.",
      terms: [
        ["Uniform electric field", "A field with the same magnitude and direction everywhere, as between parallel plates."],
        ["E = ΔV/d", "Field strength between parallel plates."],
      ],
    },
    {
      title: "Electric potential energy of configurations",
      simple: "Bringing like charges together stores energy; letting them fly apart releases it.",
      detail: "For two point charges, U = kq₁q₂/r (positive for like charges, negative for unlike). For several charges, add U for every pair. Conservation of energy: a released charge converts potential energy into kinetic energy (qΔV = −ΔK).",
      trap: "Electric potential (V) is energy PER CHARGE; potential energy (U) is the total. U = qV.",
      terms: [
        ["Electric potential energy", "Energy stored in a configuration of charges: U = kq₁q₂/r."],
        ["Electron volt (eV)", "Energy gained by one electron across 1 volt: 1.6 × 10⁻¹⁹ J."],
      ],
    },
  ],
  2: [
    {
      title: "Electric power",
      simple: "Power tells how fast a circuit element converts electrical energy, and brighter bulbs use more power.",
      detail: "P = IV = I²R = V²/R. In series, the larger resistor gets more power (same I). In parallel, the smaller resistor gets more power (same V). Bulb brightness depends on the power it dissipates.",
      trap: "Which bulb is brighter depends on the connection: in SERIES the bigger resistance glows brighter, in PARALLEL the smaller one does.",
      terms: [
        ["Electric power", "Rate of energy transfer: P = IV."],
        ["Kilowatt-hour", "Unit of energy: 1 kW for 1 hour = 3.6 × 10⁶ J."],
      ],
    },
    {
      title: "Meters and internal resistance",
      simple: "Ammeters go in series, voltmeters go in parallel, and real batteries lose some voltage inside.",
      detail: "An ideal ammeter has zero resistance and is placed in series; an ideal voltmeter has infinite resistance and is placed in parallel. A real battery has internal resistance r: terminal voltage V = ε − Ir, which drops as current rises.",
      trap: "A voltmeter placed in SERIES blocks the current. Meter placement is a frequent lab-design question.",
      terms: [
        ["Ammeter", "Measures current; connected in series."],
        ["Voltmeter", "Measures potential difference; connected in parallel."],
        ["Terminal voltage", "V = ε − Ir for a battery with internal resistance."],
      ],
    },
    {
      title: "Capacitors in series and parallel",
      simple: "Capacitors combine opposite to resistors.",
      detail: "Parallel: C_eq = C₁ + C₂ (same V). Series: 1/C_eq = 1/C₁ + 1/C₂ (same Q). Energy stored U = ½CV². In an RC circuit at steady state, no current flows through a capacitor branch, and the capacitor's voltage equals the voltage across its parallel branch.",
      trap: "Parallel capacitors ADD directly, like series resistors. Don't use the resistor rules.",
      terms: [
        ["Capacitors in parallel", "Capacitances add: C_eq = C₁ + C₂."],
        ["Energy in a capacitor", "U = ½CV²"],
      ],
    },
  ],
  3: [
    {
      title: "Circular motion of charges in magnetic fields",
      simple: "A charge moving perpendicular to a magnetic field travels in a circle.",
      detail: "Magnetic force provides the centripetal force: qvB = mv²/r, so r = mv/(qB). Faster or heavier particles make bigger circles; stronger fields make smaller ones. Mass spectrometers use this to separate isotopes. The magnetic force does no work, so speed stays constant.",
      trap: "The radius is proportional to MOMENTUM (mv). Doubling speed doubles the radius.",
      terms: [
        ["Radius in a magnetic field", "r = mv/(qB)"],
        ["Mass spectrometer", "Device separating particles by mass using magnetic deflection."],
      ],
    },
    {
      title: "Motional emf",
      simple: "A conductor moving through a magnetic field develops a voltage across it.",
      detail: "A rod of length L moving at speed v perpendicular to B has emf ε = BLv. In a circuit, this drives current I = BLv/R. The magnetic force on the induced current opposes the motion (Lenz's law), so an external force is needed to keep the rod moving.",
      trap: "The force on the induced current always OPPOSES the rod's motion. Otherwise energy would come from nothing.",
      terms: [
        ["Motional emf", "ε = BLv for a conductor moving through a magnetic field."],
        ["Eddy currents", "Induced current loops in conductors that oppose motion."],
      ],
    },
    {
      title: "Magnetic dipoles and materials",
      simple: "Magnets always have north and south poles, and some materials become magnetized in a field.",
      detail: "Magnetic field lines leave north and enter south, forming closed loops (no isolated poles). Ferromagnetic materials (iron) have domains that align in a field. A current loop acts like a magnetic dipole. Earth's magnetic field acts like a giant bar magnet.",
      trap: "Cutting a magnet in half gives two smaller magnets, each with N and S poles. Magnetic monopoles don't exist.",
      terms: [
        ["Magnetic dipole", "A pair of north and south poles, like a bar magnet or current loop."],
        ["Ferromagnetism", "Strong magnetization from aligned domains, as in iron."],
      ],
    },
  ],
  4: [
    {
      title: "Plane mirrors and images",
      simple: "A plane mirror makes a virtual image the same size, as far behind the mirror as the object is in front.",
      detail: "Law of reflection: angle of incidence = angle of reflection, measured from the normal. Plane mirror images are virtual, upright, same size, and left-right reversed. Rays appear to come from the image location.",
      trap: "Measure angles from the NORMAL (perpendicular to the surface), not from the surface itself.",
      terms: [
        ["Law of reflection", "Angle of incidence equals angle of reflection."],
        ["Virtual image", "An image where light rays only appear to come from; it can't be projected."],
      ],
    },
    {
      title: "The thin lens and mirror equations",
      simple: "One equation relates object distance, image distance and focal length for lenses and mirrors.",
      detail: "1/f = 1/d_o + 1/d_i. Magnification M = h_i/h_o = −d_i/d_o. Converging lenses and concave mirrors have f > 0; diverging lenses and convex mirrors have f < 0. Positive d_i means a real image; negative means virtual.",
      trap: "Sign conventions matter: a negative image distance means VIRTUAL, and negative magnification means INVERTED.",
      terms: [
        ["Thin lens equation", "1/f = 1/d_o + 1/d_i"],
        ["Magnification", "M = −d_i/d_o = h_i/h_o"],
      ],
    },
    {
      title: "Ray diagrams",
      simple: "Draw two or three special rays to find where an image forms.",
      detail: "For a converging lens: a ray parallel to the axis refracts through the far focal point; a ray through the center goes straight; a ray through the near focal point exits parallel. An object inside the focal length of a converging lens forms a virtual, upright, enlarged image (a magnifying glass). Diverging lenses always form virtual, upright, smaller images.",
      trap: "An object AT the focal point of a converging lens forms no image: the rays exit parallel.",
      terms: [
        ["Principal rays", "Standard rays used to locate images in ray diagrams."],
        ["Converging lens", "A lens that bends parallel rays toward a focal point."],
      ],
    },
  ],
  5: [
    {
      title: "Types of waves and wave speed",
      simple: "Waves carry energy, not matter, and their speed depends on the medium.",
      detail: "Transverse waves oscillate perpendicular to their direction (light, waves on a string); longitudinal waves oscillate parallel (sound). v = fλ. The medium sets wave speed; frequency is set by the source and stays the same when a wave changes medium, so wavelength changes.",
      trap: "When a wave enters a new medium, FREQUENCY stays the same; speed and wavelength change.",
      terms: [
        ["Transverse wave", "A wave whose oscillation is perpendicular to its direction of travel."],
        ["Longitudinal wave", "A wave whose oscillation is parallel to its direction of travel, like sound."],
      ],
    },
    {
      title: "Superposition and beats",
      simple: "Overlapping waves add together, and two slightly different frequencies make a pulsing sound.",
      detail: "Superposition: the displacements of overlapping waves add. Beat frequency = |f₁ − f₂|, heard as loudness rising and falling. Musicians tune instruments by eliminating beats.",
      trap: "Beat frequency is the DIFFERENCE between the two frequencies, not their average or sum.",
      terms: [
        ["Superposition principle", "Overlapping waves' displacements add."],
        ["Beat frequency", "|f₁ − f₂|, the rate of loudness variation."],
      ],
    },
    {
      title: "Double-slit interference and diffraction gratings",
      simple: "Light through two slits makes bright and dark bands, proving it behaves like a wave.",
      detail: "Bright fringes where the path difference is a whole number of wavelengths: d sin θ = mλ. For small angles, fringe spacing Δy = λL/d. Diffraction gratings (many slits) give sharper, brighter maxima. Single-slit diffraction spreads light more for narrower slits.",
      trap: "Fringes spread FARTHER apart with longer wavelength or SMALLER slit spacing.",
      terms: [
        ["Path difference", "Difference in distance traveled by two waves."],
        ["Diffraction grating", "A surface with many slits producing sharp interference maxima."],
      ],
    },
    {
      title: "Thin-film interference",
      simple: "Colors in soap bubbles come from light reflecting off both surfaces of a thin film.",
      detail: "Light reflecting off a medium with a higher index of refraction flips phase by half a wavelength. The extra path through the film (2t) combined with these phase flips determines whether reflected colors interfere constructively or destructively. The wavelength inside the film is λ/n.",
      trap: "Count phase flips at EACH surface. Only reflection from a higher-index medium flips the phase.",
      terms: [
        ["Thin-film interference", "Interference between reflections from the two surfaces of a thin film."],
        ["Phase change on reflection", "A half-wavelength shift when light reflects from a higher-index medium."],
      ],
    },
  ],
  6: [
    {
      title: "Mass–energy equivalence and binding energy",
      simple: "Mass can turn into energy: E = mc².",
      detail: "The mass of a nucleus is less than the total mass of its separate protons and neutrons; this mass defect times c² is the binding energy. Fission of heavy nuclei and fusion of light nuclei both release energy by moving toward the most tightly bound nuclei (around iron).",
      trap: "Both fission AND fusion release energy, because both increase binding energy per nucleon.",
      terms: [
        ["Mass defect", "Difference between the mass of separated nucleons and the nucleus."],
        ["Binding energy", "Energy needed to separate a nucleus into its nucleons."],
      ],
    },
    {
      title: "Types of radioactive decay",
      simple: "Unstable nuclei release alpha particles, beta particles, or gamma rays.",
      detail: "Alpha decay: emits a helium nucleus (mass number −4, atomic number −2). Beta-minus decay: a neutron becomes a proton, emitting an electron (atomic number +1). Beta-plus decay emits a positron. Gamma decay emits a photon with no change in particles. Charge and nucleon number are conserved.",
      trap: "In beta-minus decay, the atomic number INCREASES by 1 while the mass number stays the same.",
      terms: [
        ["Alpha decay", "Emission of a helium nucleus, reducing mass number by 4."],
        ["Beta-minus decay", "A neutron converts to a proton, emitting an electron."],
        ["Gamma ray", "High-energy photon emitted by a nucleus."],
      ],
    },
    {
      title: "Conservation laws in nuclear reactions",
      simple: "Nuclear reactions conserve charge, nucleon number, energy and momentum.",
      detail: "Balance equations so the atomic numbers (charge) and mass numbers (nucleons) are equal on both sides. Energy released (Q) = (mass of reactants − mass of products)c². Momentum is conserved, so decay products recoil in opposite directions.",
      trap: "Balance BOTH the top numbers (mass number) and the bottom numbers (atomic number).",
      terms: [
        ["Nucleon number", "Total number of protons and neutrons (mass number)."],
        ["Q value", "Energy released in a nuclear reaction."],
      ],
    },
  ],
};
