window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["physics-2"] = {
  intro: "The official course numbers these units 9–15, continuing from Physics 1. Each unit's exam weighting is listed in the official CED.",
  tips: [
    "Start with a diagram: PV diagrams, circuit sketches, field lines, ray diagrams. Many points are awarded for correct representations.",
    "Explain with principles: \"energy is conserved,\" \"charge is conserved,\" \"flux is changing so an emf is induced.\" Name the law before doing algebra.",
    "Watch signs and directions. AP Physics defines W as the work done ON the gas, and direction questions (fields, currents, forces) are common traps.",
    "Scaling questions (\"if r doubles, what happens to F?\") are everywhere. Know which quantities are squared or inverse.",
    "You get an equation sheet and a calculator. Practice deciding WHICH equation applies, not memorizing them.",
  ],
  units: [
    {
      title: "Thermodynamics",
      weightLabel: "CED Unit 9",
      tldr: "Temperature measures the average kinetic energy of particles. Energy moves as heat and work, following the first law (energy conservation), and PV diagrams show those exchanges. The second law says entropy tends to increase.",
      concepts: [
        {
          title: "Temperature, kinetic theory and ideal gases",
          simple: "Hotter means the particles are moving faster on average.",
          detail: "Average KE ∝ absolute temperature (K). Ideal gas law: PV = nRT = NkT. Pressure comes from particles colliding with the walls. Temperatures must be in kelvin.",
          example: "Doubling the Kelvin temperature doubles the average kinetic energy.",
        },
        {
          title: "The first law of thermodynamics",
          simple: "A gas's internal energy changes by the heat added plus the work done on it.",
          detail: "ΔU = Q + W, where W is the work done ON the gas (the AP convention). Isothermal: ΔU = 0. Isochoric (constant volume): W = 0. Adiabatic: Q = 0.",
          hook: "Compress the gas and W is positive (work done ON it). Let it expand and W is negative.",
        },
        {
          title: "PV diagrams",
          simple: "A pressure–volume graph shows a gas's process, and the area under the curve is the work.",
          detail: "|Work| = area under the P–V curve. Expansion means the gas does work, so W on the gas is negative. In a closed cycle, the net work equals the enclosed area.",
        },
        {
          title: "Heat transfer and entropy",
          simple: "Heat flows from hot to cold, and disorder tends to increase.",
          detail: "Conduction rate: Q/Δt = kAΔT/L. Heat also moves by convection and radiation. The second law: the entropy of an isolated system never decreases, and heat flows naturally from hot to cold.",
        },
      ],
      terms: [
        ["Internal energy", "The total kinetic and potential energy of a system's particles."],
        ["First law of thermodynamics", "ΔU = Q + W (W = work done ON the system)."],
        ["Isothermal process", "A process at constant temperature (ΔU = 0 for an ideal gas)."],
        ["Adiabatic process", "A process with no heat exchange (Q = 0)."],
        ["Entropy", "A measure of disorder. It increases in isolated systems."],
        ["Thermal conductivity", "How easily a material conducts heat (k)."],
      ],
      mistakes: [
        "Using Celsius in PV = nRT or kinetic energy relations. Use kelvin.",
        "Mixing up sign conventions: AP's W is work done ON the gas.",
      ],
      questions: [
        { q: "An ideal gas is compressed at constant temperature. Which is true?", choices: ["ΔU > 0 and heat enters the gas", "ΔU = 0 and heat leaves the gas", "ΔU = 0 and no heat flows", "ΔU < 0 and work is done by the gas"], answer: 1, explain: "Isothermal means ΔU = 0. Compression does positive work ON the gas, so Q = −W < 0: heat leaves." },
        { q: "The Kelvin temperature of a gas doubles. The average kinetic energy of its molecules:", choices: ["Halves", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "Average KE is proportional to absolute temperature." },
        { q: "On a PV diagram, the magnitude of the work done in a process equals:", choices: ["The slope of the curve", "The area under the curve", "The pressure at the end", "The volume change only"], answer: 1, explain: "W = ∫P dV, which is the area under the P–V curve." },
        { q: "A gas is heated in a sealed rigid container (constant volume). Which is true?", choices: ["W = 0, so ΔU = Q", "Q = 0", "ΔU = 0", "The gas does positive work"], answer: 0, explain: "No volume change means no work, so all the heat goes into internal energy." },
      ],
      frq: {
        prompt: "An ideal gas expands at constant pressure 2.0 × 10⁵ Pa from 0.010 m³ to 0.030 m³, and 9,000 J of heat is added.\n(a) Calculate the work done ON the gas.\n(b) Calculate the change in internal energy.\n(c) Did the gas's temperature rise, fall or stay the same? Justify.",
        points: [
          "(a) W = −PΔV = −(2.0 × 10⁵)(0.020) = −4,000 J (the gas does 4,000 J of work).",
          "(b) ΔU = Q + W = 9,000 − 4,000 = 5,000 J.",
          "(c) It rose: ΔU > 0, and an ideal gas's internal energy is proportional to temperature.",
        ],
      },
    },
    {
      title: "Electric Force, Field, and Potential",
      weightLabel: "CED Unit 10",
      tldr: "Charges exert forces on each other according to Coulomb's law. An electric field describes the force per unit charge at each point, and electric potential describes energy per unit charge. Conductors let charge move freely.",
      concepts: [
        {
          title: "Coulomb's law",
          simple: "Like charges repel and opposite charges attract, and the force weakens quickly with distance.",
          detail: "F = k|q₁q₂|/r². It's an inverse-square law. Forces add as vectors (superposition). Charge is conserved and quantized (in multiples of e).",
          example: "Double both charges and halve the distance: F × 2 × 2 × 4 = 16F.",
        },
        {
          title: "Electric fields",
          simple: "An electric field is the \"push per unit charge\" at each point in space.",
          detail: "E = F/q. Field lines point away from + and toward −. A positive charge feels a force along E; a negative charge (like an electron) feels a force opposite to E. The field between parallel plates is uniform.",
        },
        {
          title: "Electric potential and energy",
          simple: "Potential is energy per unit charge. Charges \"roll\" from high to low potential energy.",
          detail: "V = kq/r is a scalar, so add potentials without directions. ΔU = qΔV. For uniform fields, E = ΔV/d. Moving a charge along an equipotential takes no work. Field lines are perpendicular to equipotentials.",
        },
        {
          title: "Conductors and charging",
          simple: "In a conductor, charges move freely and spread out on the surface.",
          detail: "Charging happens by friction, conduction or induction (polarization). In electrostatic equilibrium, E = 0 inside a conductor and excess charge sits on the outer surface.",
        },
      ],
      terms: [
        ["Coulomb's law", "F = k|q₁q₂|/r², the force between point charges."],
        ["Electric field", "Force per unit charge, E = F/q (N/C)."],
        ["Electric potential", "Potential energy per unit charge, V (volts)."],
        ["Equipotential", "A surface of constant potential. Moving along it takes no work."],
        ["Induction (charging)", "Charging by rearranging charges without contact."],
        ["Superposition", "The net field or force is the vector sum of the individual ones."],
      ],
      mistakes: [
        "Adding potentials as vectors. Potential is a SCALAR.",
        "Forgetting that electrons accelerate OPPOSITE to the field direction.",
      ],
      questions: [
        { q: "Both charges double and the distance between them halves. The electric force becomes:", choices: ["2F", "4F", "8F", "16F"], answer: 3, explain: "F ∝ q₁q₂/r²: 2 × 2 × (1/(½)²) = 4 × 4 = 16." },
        { q: "An electron is released from rest in a uniform electric field pointing east. It accelerates:", choices: ["East", "West", "North", "It doesn't move"], answer: 1, explain: "Negative charges feel a force opposite to E." },
        { q: "How much work does it take to move a charge along an equipotential surface?", choices: ["Positive work", "Negative work", "Zero work", "It depends on the charge"], answer: 2, explain: "ΔV = 0 along an equipotential, so W = qΔV = 0." },
        { q: "Excess charge placed on a solid metal sphere ends up:", choices: ["Evenly spread through the volume", "On the outer surface", "At the center", "It leaks out immediately"], answer: 1, explain: "Charges repel each other to the surface, and E = 0 inside the conductor." },
      ],
      frq: {
        prompt: "Two parallel plates 0.020 m apart have a potential difference of 100 V.\n(a) Find the electric field between the plates.\n(b) Find the force on a proton between the plates (e = 1.6 × 10⁻¹⁹ C).\n(c) How much kinetic energy does a proton gain moving from the positive plate to the negative plate?",
        points: [
          "(a) E = ΔV/d = 100/0.020 = 5,000 V/m (N/C).",
          "(b) F = qE = (1.6 × 10⁻¹⁹)(5,000) = 8.0 × 10⁻¹⁶ N, toward the negative plate.",
          "(c) ΔK = qΔV = (1.6 × 10⁻¹⁹)(100) = 1.6 × 10⁻¹⁷ J.",
        ],
      },
    },
    {
      title: "Electric Circuits",
      weightLabel: "CED Unit 11",
      tldr: "Current is the flow of charge, driven by a potential difference and limited by resistance. Resistors combine in series or parallel. Kirchhoff's rules (conservation of energy and charge) analyze any circuit. Capacitors store charge.",
      concepts: [
        {
          title: "Current, resistance and Ohm's law",
          simple: "Voltage pushes charge, resistance limits it, and current is how much charge flows per second.",
          detail: "I = ΔQ/Δt, V = IR, and R = ρL/A (longer and thinner wires mean more resistance). Power: P = IV = I²R = V²/R.",
        },
        {
          title: "Series and parallel",
          simple: "In series, everything shares one path. In parallel, the current splits into branches.",
          detail: "Series: R_eq = R₁ + R₂, with the same current everywhere. Parallel: 1/R_eq = 1/R₁ + 1/R₂, with the same voltage across each branch. Adding a parallel branch LOWERS total resistance and raises total current.",
        },
        {
          title: "Kirchhoff's rules",
          simple: "Charge doesn't pile up at junctions, and the voltage around any loop adds to zero.",
          detail: "Junction rule: current in = current out (conservation of charge). Loop rule: ΣΔV = 0 around a loop (conservation of energy).",
        },
        {
          title: "Capacitors in circuits",
          simple: "A capacitor stores charge. Once it's full, current stops flowing through its branch.",
          detail: "C = Q/V, and C = κε₀A/d for parallel plates. Energy U = ½CV². In a DC circuit at steady state, a fully charged capacitor acts like an open switch (no current).",
        },
      ],
      terms: [
        ["Current", "The rate of charge flow, I = ΔQ/Δt (amperes)."],
        ["Resistivity", "A material property ρ that determines resistance: R = ρL/A."],
        ["Equivalent resistance", "The single resistance that could replace a combination."],
        ["Junction rule", "Total current into a junction equals total current out."],
        ["Loop rule", "The sum of potential changes around a closed loop is zero."],
        ["Capacitance", "Charge stored per volt, C = Q/V."],
      ],
      mistakes: [
        "Thinking current gets \"used up\" in resistors. It's the same all around a series loop.",
        "Adding parallel resistors directly. Use reciprocals, and remember the result is smaller than the smallest resistor.",
      ],
      questions: [
        { q: "Two 6 Ω resistors are connected in parallel. The equivalent resistance is:", choices: ["12 Ω", "6 Ω", "3 Ω", "1/3 Ω"], answer: 2, explain: "1/R = 1/6 + 1/6 = 1/3, so R = 3 Ω." },
        { q: "A wire's length doubles (same material and thickness). Its resistance:", choices: ["Halves", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "R = ρL/A is proportional to L." },
        { q: "Another bulb is added in parallel to a battery that already powers one bulb. The total current from the battery:", choices: ["Decreases", "Stays the same", "Increases", "Becomes zero"], answer: 2, explain: "Adding a parallel branch lowers total resistance, so more current flows." },
        { q: "In a DC circuit long after the switch closes, the current through a capacitor's branch is:", choices: ["Maximum", "Zero", "Equal to the total current", "Increasing"], answer: 1, explain: "A fully charged capacitor blocks steady current, acting like an open circuit." },
      ],
      frq: {
        prompt: "A 12 V battery is connected to R₁ = 2 Ω in series with a parallel pair: R₂ = 6 Ω and R₃ = 3 Ω.\n(a) Find the equivalent resistance.\n(b) Find the current through R₁.\n(c) Find the current through R₂.",
        points: [
          "(a) Parallel: 1/(1/6 + 1/3) = 2 Ω. Total = 2 + 2 = 4 Ω.",
          "(b) I = V/R = 12/4 = 3 A through R₁.",
          "(c) The voltage across the parallel pair is 3 A × 2 Ω = 6 V, so I₂ = 6/6 = 1 A.",
        ],
      },
    },
    {
      title: "Magnetism and Electromagnetism",
      weightLabel: "CED Unit 12",
      tldr: "Moving charges create magnetic fields and feel magnetic forces. A changing magnetic flux induces an emf (Faraday's law), and the induced current opposes the change (Lenz's law). That principle is behind generators and transformers.",
      concepts: [
        {
          title: "Magnetic force on moving charges",
          simple: "A magnetic field pushes sideways on a moving charge, but does nothing to a charge at rest.",
          detail: "F = qvB sin θ, with direction from the right-hand rule (reversed for negative charges). Charges moving PARALLEL to B feel no force. The force is perpendicular to the velocity, so it does NO work, which leads to circular motion.",
        },
        {
          title: "Force on current-carrying wires",
          simple: "A wire carrying current in a magnetic field gets pushed, which is how motors work.",
          detail: "F = ILB sin θ, with direction from the right-hand rule. Parallel currents in the same direction attract; opposite directions repel.",
        },
        {
          title: "Magnetic fields from currents",
          simple: "Current in a wire creates circular magnetic field loops around it.",
          detail: "Long straight wire: B = μ₀I/(2πr), with direction from the right-hand grip rule. Field lines form closed loops, and magnets have north and south poles (no isolated poles).",
        },
        {
          title: "Electromagnetic induction",
          simple: "Changing the magnetic field through a loop creates a voltage that drives current.",
          detail: "Flux Φ = BA cos θ. Faraday: ε = −ΔΦ/Δt. Lenz's law: the induced current creates a field that OPPOSES the change in flux. You can change flux by changing B, the area or the orientation.",
          hook: "Lenz's law: nature resists change. The induced current fights whatever is changing the flux.",
        },
      ],
      terms: [
        ["Magnetic field", "A field (B, in teslas) that exerts forces on moving charges."],
        ["Right-hand rule", "A method for finding the direction of magnetic forces and fields."],
        ["Magnetic flux", "Φ = BA cos θ, the field through an area."],
        ["Faraday's law", "Induced emf = the rate of change of magnetic flux."],
        ["Lenz's law", "The induced current opposes the change in flux that caused it."],
        ["Generator", "A device that converts mechanical energy to electrical energy by induction."],
      ],
      mistakes: [
        "Thinking a steady (unchanging) magnetic field induces current. Only CHANGING flux does.",
        "Saying magnetic forces do work on charges. The force is perpendicular to the motion, so it doesn't.",
      ],
      questions: [
        { q: "A charged particle moves parallel to a uniform magnetic field. The magnetic force on it is:", choices: ["Maximum", "Zero", "Along the field", "Opposite the velocity"], answer: 1, explain: "F = qvB sin θ, and θ = 0 gives F = 0." },
        { q: "How much work does a magnetic force do on a moving charged particle?", choices: ["Positive work", "Negative work", "Zero work", "Work equal to qvB"], answer: 2, explain: "The force is always perpendicular to the velocity, so it changes direction but not speed." },
        { q: "Two long parallel wires carry current in the SAME direction. The wires:", choices: ["Attract", "Repel", "Feel no force", "Rotate"], answer: 0, explain: "Parallel currents in the same direction attract." },
        { q: "A bar magnet is held motionless inside a coil. The induced current is:", choices: ["Large and steady", "Zero", "Alternating", "Increasing"], answer: 1, explain: "No change in flux means no induced emf." },
      ],
      frq: {
        prompt: "A square loop (side 0.10 m) sits in a uniform magnetic field perpendicular to its plane. The field increases from 0.20 T to 0.60 T in 0.50 s.\n(a) Find the change in magnetic flux.\n(b) Find the magnitude of the induced emf.\n(c) State the direction of the induced current's magnetic field relative to the external field, and justify with Lenz's law.",
        points: [
          "(a) ΔΦ = ΔB·A = (0.40)(0.010) = 4.0 × 10⁻³ Wb.",
          "(b) ε = ΔΦ/Δt = 4.0 × 10⁻³/0.50 = 8.0 × 10⁻³ V.",
          "(c) Opposite to the external field. The flux is increasing, so the induced current creates a field that opposes the increase.",
        ],
      },
    },
    {
      title: "Geometric Optics",
      weightLabel: "CED Unit 13",
      tldr: "Light travels in straight lines as rays that reflect and refract. Snell's law describes bending between materials, and total internal reflection traps light inside higher-index materials. Lenses and mirrors form images you can predict with ray diagrams and the thin-lens equation.",
      concepts: [
        {
          title: "Reflection",
          simple: "Light bounces off a surface at the same angle it arrived.",
          detail: "Angle of incidence = angle of reflection, measured from the NORMAL. Plane mirrors form virtual, upright, same-size images.",
        },
        {
          title: "Refraction and Snell's law",
          simple: "Light bends when it changes speed going from one material into another.",
          detail: "n = c/v. Snell's law: n₁ sin θ₁ = n₂ sin θ₂. Going into a higher n, light slows and bends TOWARD the normal. The frequency stays the same; the wavelength changes.",
        },
        {
          title: "Total internal reflection",
          simple: "Light can get trapped inside glass or water if it hits the surface at a steep enough angle.",
          detail: "This happens only going from HIGHER n to LOWER n, when θ exceeds the critical angle θc = sin⁻¹(n₂/n₁). It's the principle behind fiber optics.",
        },
        {
          title: "Lenses and mirrors",
          simple: "Curved lenses and mirrors focus light to form images, which can be real (projectable) or virtual.",
          detail: "1/f = 1/d₀ + 1/dᵢ, and magnification M = −dᵢ/d₀. A converging lens with the object beyond f makes a real, inverted image. With the object inside f it makes a virtual, upright, larger image. Diverging lenses always make virtual, upright, smaller images.",
        },
      ],
      terms: [
        ["Normal", "The line perpendicular to a surface at the point of incidence."],
        ["Index of refraction", "n = c/v, how much a material slows light."],
        ["Snell's law", "n₁ sin θ₁ = n₂ sin θ₂"],
        ["Critical angle", "The minimum incident angle for total internal reflection."],
        ["Real image", "An image formed where light actually converges, which can be projected."],
        ["Focal length", "The distance from a lens or mirror to its focal point."],
      ],
      mistakes: [
        "Measuring angles from the surface instead of the normal.",
        "Thinking total internal reflection can happen going into a denser medium. It can't.",
      ],
      questions: [
        { q: "Light passes from air into glass at an angle. Compared to the incident ray, the refracted ray:", choices: ["Bends away from the normal and speeds up", "Bends toward the normal and slows down", "Doesn't bend", "Reflects completely"], answer: 1, explain: "Glass has a higher n, so light slows and bends toward the normal." },
        { q: "Total internal reflection can occur when light travels:", choices: ["From air into water", "From water into air at a large angle", "From air into glass", "Along the normal"], answer: 1, explain: "It requires going from higher n to lower n, above the critical angle." },
        { q: "An object is placed at 2f in front of a converging lens. The image is:", choices: ["Virtual, upright, larger", "Real, inverted, same size, at 2f", "Real, upright, smaller", "No image forms"], answer: 1, explain: "1/f = 1/(2f) + 1/dᵢ gives dᵢ = 2f, and M = −1." },
        { q: "A diverging lens always produces an image that is:", choices: ["Real and inverted", "Virtual, upright and smaller", "Real and larger", "Virtual and inverted"], answer: 1, explain: "Diverging lenses spread light out, so the image is virtual, upright and reduced." },
      ],
      frq: {
        prompt: "An object is 30 cm from a converging lens with a focal length of 10 cm.\n(a) Find the image distance.\n(b) Find the magnification and describe the image.\n(c) The object is moved to 5 cm from the lens. Describe the new image.",
        points: [
          "(a) 1/dᵢ = 1/10 − 1/30 = 2/30, so dᵢ = 15 cm.",
          "(b) M = −15/30 = −0.5: a real, inverted image half the object's size.",
          "(c) The object is inside f: 1/dᵢ = 1/10 − 1/5 = −1/10, so dᵢ = −10 cm. The image is virtual, upright and magnified (M = +2).",
        ],
      },
    },
    {
      title: "Waves, Sound, and Physical Optics",
      weightLabel: "CED Unit 14",
      tldr: "Waves carry energy without carrying matter. Their speed depends on the medium, and v = fλ links speed, frequency and wavelength. Sound shows the Doppler effect, and light's wave nature appears in interference and diffraction.",
      concepts: [
        {
          title: "Wave properties",
          simple: "A wave's speed equals how often it oscillates times how long each wave is.",
          detail: "v = fλ. The medium sets the speed. Frequency is set by the source and stays the same across boundaries. Transverse waves (light, waves on a string) vs. longitudinal waves (sound). Amplitude relates to energy and intensity.",
        },
        {
          title: "Sound and the Doppler effect",
          simple: "A siren sounds higher as it approaches you and lower as it moves away.",
          detail: "Sound is a longitudinal pressure wave. Intensity falls with distance (∝ 1/r²). Doppler effect: relative motion toward each other raises the observed frequency; motion apart lowers it.",
        },
        {
          title: "Standing waves",
          simple: "Waves bouncing back and forth can form fixed patterns with nodes that don't move.",
          detail: "A string fixed at both ends: λₙ = 2L/n and fₙ = nv/(2L). The fundamental is n = 1. Open and closed pipes follow similar patterns. These patterns come from interference.",
        },
        {
          title: "Interference and diffraction of light",
          simple: "Light waves can add up or cancel out, making bright and dark bands.",
          detail: "Double slit: d sin θ = mλ for bright fringes. A longer λ or a smaller d spreads the fringes apart. Diffraction is spreading around edges or through openings. Thin-film interference produces soap-bubble colors.",
        },
      ],
      terms: [
        ["Wavelength", "The distance between repeating points of a wave (λ)."],
        ["Frequency", "Oscillations per second (Hz), set by the source."],
        ["Doppler effect", "A change in observed frequency due to relative motion."],
        ["Node", "A point of zero amplitude in a standing wave."],
        ["Constructive interference", "Waves in phase add together to a larger amplitude."],
        ["Diffraction", "Waves spreading as they pass edges or openings."],
      ],
      mistakes: [
        "Thinking frequency changes when a wave enters a new medium. Speed and wavelength change; frequency doesn't.",
        "Saying a louder sound travels faster. The medium sets the speed.",
      ],
      questions: [
        { q: "In the same medium, a wave's frequency doubles. Its wavelength:", choices: ["Doubles", "Halves", "Stays the same", "Quadruples"], answer: 1, explain: "v = fλ with v fixed by the medium, so λ ∝ 1/f." },
        { q: "An ambulance approaches you. The siren sounds:", choices: ["Lower in pitch", "Higher in pitch", "The same pitch", "Silent"], answer: 1, explain: "Approaching sources compress the waves, raising the observed frequency." },
        { q: "In a double-slit experiment, the light's wavelength increases. The bright fringes:", choices: ["Move closer together", "Spread farther apart", "Disappear", "Stay the same"], answer: 1, explain: "d sin θ = mλ: a larger λ gives larger angles between fringes." },
        { q: "A string fixed at both ends has length L. The wavelength of its fundamental is:", choices: ["L/2", "L", "2L", "4L"], answer: 2, explain: "The fundamental is half a wavelength fitting between the two fixed ends, so λ = 2L." },
      ],
      frq: {
        prompt: "A guitar string is 0.65 m long, and waves travel along it at 260 m/s.\n(a) Find the wavelength of the fundamental.\n(b) Find the fundamental frequency.\n(c) Find the frequency of the second harmonic, and sketch or describe its standing-wave pattern.",
        points: [
          "(a) λ₁ = 2L = 1.30 m.",
          "(b) f₁ = v/λ₁ = 260/1.30 = 200 Hz.",
          "(c) f₂ = 2f₁ = 400 Hz. The pattern has nodes at both ends and at the center, with two antinodes (two loops).",
        ],
      },
    },
    {
      title: "Modern Physics",
      weightLabel: "CED Unit 15",
      tldr: "At small scales, energy comes in packets (photons), matter behaves like waves, and atoms only have certain energy levels. Nuclei can decay, and mass converts to energy (E = mc²).",
      concepts: [
        {
          title: "Photons and the photoelectric effect",
          simple: "Light comes in energy packets called photons. Only photons with enough energy can knock electrons loose.",
          detail: "E = hf. Photoelectric effect: K_max = hf − φ, where φ is the work function. Below the threshold frequency, NO electrons are emitted, no matter how intense the light. Intensity changes the NUMBER of electrons, not their energy.",
          hook: "Frequency sets the energy of each photon. Intensity sets how many photons there are.",
        },
        {
          title: "Atomic energy levels and spectra",
          simple: "Electrons in atoms can only have certain energies. Jumping between levels emits or absorbs specific colors of light.",
          detail: "A photon's energy = the difference between levels (hf = E_upper − E_lower). Each element has its own emission or absorption line spectrum.",
        },
        {
          title: "Wave-particle duality",
          simple: "Particles like electrons can act like waves.",
          detail: "de Broglie wavelength λ = h/p = h/(mv). Electron diffraction shows wave behavior. Faster particles (larger p) have shorter wavelengths.",
        },
        {
          title: "Nuclear physics",
          simple: "Unstable nuclei decay into other nuclei, and a little mass turns into a lot of energy.",
          detail: "Alpha decay (−2 protons, −4 mass number), beta decay (a neutron → a proton + an electron), gamma decay (energy only). Half-life: after n half-lives, (½)ⁿ remains. E = mc² (mass defect, fission and fusion). Charge and nucleon number are conserved.",
        },
      ],
      terms: [
        ["Photon", "A quantum of light energy, E = hf."],
        ["Work function", "The minimum energy needed to free an electron from a metal."],
        ["Threshold frequency", "The minimum light frequency needed for the photoelectric effect."],
        ["de Broglie wavelength", "λ = h/p, the wavelength of a moving particle."],
        ["Half-life", "The time for half of a radioactive sample to decay."],
        ["Alpha particle", "A helium nucleus (2 protons, 2 neutrons)."],
      ],
      mistakes: [
        "Thinking brighter light below the threshold frequency will eventually eject electrons. It won't.",
        "Forgetting that alpha decay lowers the mass number by 4 AND the atomic number by 2.",
      ],
      questions: [
        { q: "Light below a metal's threshold frequency shines on it. Increasing the intensity:", choices: ["Ejects more electrons", "Ejects faster electrons", "Still ejects no electrons", "Lowers the work function"], answer: 2, explain: "Each photon still has too little energy. Intensity only adds more such photons." },
        { q: "An electron drops from −3.4 eV to −13.6 eV. The emitted photon's energy is:", choices: ["3.4 eV", "10.2 eV", "13.6 eV", "17.0 eV"], answer: 1, explain: "The photon energy is the difference between levels: −3.4 − (−13.6) = 10.2 eV." },
        { q: "A sample goes through 3 half-lives. What fraction remains?", choices: ["1/3", "1/6", "1/8", "1/9"], answer: 2, explain: "(½)³ = 1/8." },
        { q: "In alpha decay, the parent nucleus's mass number and atomic number change by:", choices: ["−4 and −2", "−2 and −4", "0 and +1", "−1 and 0"], answer: 0, explain: "An alpha particle carries 4 nucleons, 2 of them protons." },
      ],
      frq: {
        prompt: "Light of frequency 1.5 × 10¹⁵ Hz shines on a metal with a work function of 4.0 eV (h = 4.14 × 10⁻¹⁵ eV·s).\n(a) Find the photon energy in eV.\n(b) Find the maximum kinetic energy of the ejected electrons.\n(c) The intensity doubles. What happens to the number of electrons and to K_max? Explain.",
        points: [
          "(a) E = hf = (4.14 × 10⁻¹⁵)(1.5 × 10¹⁵) ≈ 6.2 eV.",
          "(b) K_max = 6.2 − 4.0 = 2.2 eV.",
          "(c) Twice as many electrons are ejected (more photons), but K_max is unchanged because each photon has the same energy.",
        ],
      },
    },
  ],
};
