window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["physics-c-em"] = {
  intro: "Calculus-based electricity and magnetism. The official course numbers these units 8–13, continuing from Physics C: Mechanics. Each unit's exam weighting is listed in the official CED.",
  tips: [
    "Symmetry is your best tool. Gauss's law and Ampère's law only make problems easy when you pick a surface or loop that matches the symmetry.",
    "Expect calculus: E from integrating dq, V = −∫E·dr, E = −dV/dr, and RC/RL circuits as differential equations. The setup earns points on its own.",
    "Directions are graded. Use the right-hand rule carefully and state directions explicitly (\"into the page,\" \"toward the wire\").",
    "Lenz's law questions ask WHY: the induced current opposes the CHANGE in flux. Say that sentence.",
    "Answer \"derive an expression\" questions in terms of the given symbols and fundamental constants like ε₀ and μ₀.",
  ],
  units: [
    {
      title: "Electric Charges, Fields, and Gauss's Law",
      weightLabel: "CED Unit 8",
      tldr: "Charges exert forces through electric fields. For continuous charge, you add up the field from each small piece with an integral. Gauss's law links the flux through a closed surface to the charge inside, which makes symmetric problems fast.",
      concepts: [
        {
          title: "Coulomb's law and the electric field",
          simple: "Charges push or pull on each other, and the field tells you the force per unit charge at each point.",
          detail: "F = kq₁q₂/r², with k = 1/(4πε₀). E = F/q, and a point charge makes E = kq/r² pointing away from positive charge. Fields from several charges add as vectors.",
          example: "Doubling the distance from a point charge cuts the field to 1/4.",
        },
        {
          title: "Fields from continuous charge distributions",
          simple: "Break a charged object into tiny pieces, find each piece's field, and add them with an integral.",
          detail: "dE = k dq/r². Use λ = dq/dx for lines, σ for surfaces and ρ for volumes. Use symmetry to cancel components before integrating. On the axis of a ring, E = kQx/(x² + R²)^(3/2).",
        },
        {
          title: "Electric flux and Gauss's law",
          simple: "The field lines poking out of a closed surface count the charge inside it.",
          detail: "Φ_E = ∮E·dA = Q_enc/ε₀. Only charge INSIDE the surface counts. Choose spheres, cylinders or pillboxes so E is constant and parallel to dA.",
          hook: "A charge outside the surface sends as many field lines in as out, so its net flux is zero.",
        },
        {
          title: "Applying Gauss's law to symmetric shapes",
          simple: "For spheres, long lines and big sheets, Gauss's law gives the field in one line.",
          detail: "Outside a sphere: E = kQ/r². Infinite line: E = λ/(2πε₀r). Infinite sheet: E = σ/(2ε₀), independent of distance. Inside a uniformly charged solid sphere: E grows linearly with r.",
        },
      ],
      terms: [
        ["Electric field", "Force per unit charge: E = F/q, in N/C."],
        ["Linear charge density (λ)", "Charge per unit length, dq/dx."],
        ["Electric flux", "Φ_E = ∮E·dA, the field passing through a surface."],
        ["Gaussian surface", "An imaginary closed surface chosen to use Gauss's law."],
        ["Permittivity of free space (ε₀)", "8.85 × 10⁻¹² C²/(N·m²)."],
      ],
      mistakes: [
        "Counting charge outside the Gaussian surface as if it contributed net flux.",
        "Integrating the magnitude of dE without first canceling components by symmetry.",
      ],
      questions: [
        { q: "The distance from a point charge triples. The electric field becomes:", choices: ["1/3 as large", "1/9 as large", "3 times as large", "9 times as large"], answer: 1, explain: "E = kq/r², so tripling r divides E by 3² = 9." },
        { q: "A uniformly charged ring lies in the yz-plane, centered at the origin. What is the electric field at its center?", choices: ["kQ/R²", "Zero", "kQ/R", "Infinite"], answer: 1, explain: "Every piece of the ring has an opposite piece whose field cancels it at the center." },
        { q: "A closed surface encloses no charge, but a charge +q sits just outside it. What is the net flux through the surface?", choices: ["q/ε₀", "Zero", "−q/ε₀", "q/(2ε₀)"], answer: 1, explain: "Gauss's law counts only enclosed charge. Field lines from outside enter and leave, giving zero net flux." },
        { q: "How does the field of a very large, uniformly charged sheet depend on the distance d from it?", choices: ["E ∝ 1/d²", "E ∝ 1/d", "E is independent of d", "E ∝ d"], answer: 2, explain: "E = σ/(2ε₀) for an infinite sheet, the same at any distance." },
      ],
      frq: {
        prompt: "A long, solid, nonconducting cylinder of radius R has uniform charge density ρ.\n(a) Use Gauss's law to find E for r < R.\n(b) Find E for r > R.\n(c) Sketch E versus r.",
        points: [
          "(a) Use a coaxial cylinder of radius r and length L: E(2πrL) = ρπr²L/ε₀, so E = ρr/(2ε₀).",
          "(b) All the charge is enclosed: E(2πrL) = ρπR²L/ε₀, so E = ρR²/(2ε₀r).",
          "(c) E rises linearly from 0 at r = 0 to its maximum at r = R, then falls off as 1/r.",
        ],
      },
    },
    {
      title: "Electric Potential",
      weightLabel: "CED Unit 9",
      tldr: "Electric potential is potential energy per unit charge. It's a scalar, so potentials from several charges simply add. The field points downhill in potential, and E is the negative gradient of V.",
      concepts: [
        {
          title: "Electric potential energy",
          simple: "Pushing like charges together stores energy, just like lifting a weight.",
          detail: "U = kq₁q₂/r for two point charges, with U = 0 at infinity. For a group of charges, add U for every pair. Work done by the field: W = −ΔU.",
        },
        {
          title: "Electric potential",
          simple: "Potential is energy per charge. It tells you how much energy a charge would gain or lose at each point.",
          detail: "V = U/q, in volts. Point charge: V = kq/r. Potentials are SCALARS, so they add without directions. ΔU = qΔV.",
          example: "Midway between +q and −q the potential is zero, even though the field there is not.",
        },
        {
          title: "Relating field and potential",
          simple: "The field points from high potential to low potential, and it's strongest where potential changes fastest.",
          detail: "ΔV = −∫E·dr and E_x = −dV/dx. In a uniform field, ΔV = −Ed. Equipotential surfaces are perpendicular to field lines.",
        },
        {
          title: "Motion of charges and conservation of energy",
          simple: "A charge moving through a potential difference trades potential energy for kinetic energy.",
          detail: "K_i + qV_i = K_f + qV_f. A positive charge speeds up moving to LOWER V, and a negative charge speeds up moving to HIGHER V. 1 eV = 1.6 × 10⁻¹⁹ J.",
        },
      ],
      terms: [
        ["Volt", "One joule per coulomb."],
        ["Equipotential", "A surface of constant V. No work is done moving along it."],
        ["Electron-volt (eV)", "The energy an electron gains across 1 V: 1.6 × 10⁻¹⁹ J."],
        ["Potential gradient", "The rate V changes with position. E = −dV/dx."],
        ["Reference point", "Where V = 0 is chosen, usually at infinity."],
      ],
      mistakes: [
        "Adding potentials as vectors instead of scalars.",
        "Assuming zero potential means zero field, or zero field means zero potential.",
      ],
      questions: [
        { q: "V(x) = 5x² (volts, x in meters). What is E_x at x = 2 m?", choices: ["20 V/m", "−20 V/m", "10 V/m", "−10 V/m"], answer: 1, explain: "E_x = −dV/dx = −10x = −20 V/m." },
        { q: "Charges +q and −q are separated by a distance d. What is the potential at the midpoint?", choices: ["2kq/d", "4kq/d", "Zero", "kq/d"], answer: 2, explain: "V is a scalar: kq/(d/2) + k(−q)/(d/2) = 0." },
        { q: "A proton is released from rest in a uniform electric field. It moves toward:", choices: ["Higher potential", "Lower potential", "Constant potential", "Wherever the field is weakest"], answer: 1, explain: "A positive charge moves along E, which points from high V to low V." },
        { q: "An electron accelerates from rest through a potential difference of 100 V. What kinetic energy does it gain?", choices: ["100 eV", "1 eV", "1.6 × 10⁻¹⁹ J", "0"], answer: 0, explain: "ΔK = |q|ΔV = e × 100 V = 100 eV." },
      ],
      frq: {
        prompt: "Two point charges, +Q at x = −a and +Q at x = +a, lie on the x-axis.\n(a) Find the potential at the origin.\n(b) Find the electric field at the origin.\n(c) A small charge +q is released from rest just off the origin along the y-axis. Describe its motion and justify.",
        points: [
          "(a) V = kQ/a + kQ/a = 2kQ/a.",
          "(b) The fields from the two charges are equal and opposite, so E = 0.",
          "(c) Along the y-axis the x-components cancel and the y-components point away from the origin, so +q is pushed away along the y-axis and speeds up, approaching a final kinetic energy of q(2kQ/a) far away.",
        ],
      },
    },
    {
      title: "Conductors and Capacitors",
      weightLabel: "CED Unit 10",
      tldr: "In a conductor at equilibrium, charge sits on the surface and the field inside is zero. Capacitors store charge and energy in the field between their plates. Dielectrics raise capacitance.",
      concepts: [
        {
          title: "Conductors in electrostatic equilibrium",
          simple: "Charges in a conductor move until they stop feeling any push, which leaves zero field inside.",
          detail: "E = 0 inside the conductor, excess charge lives on the surface, the whole conductor is one equipotential, and E just outside is perpendicular to the surface with magnitude σ/ε₀.",
        },
        {
          title: "Capacitance",
          simple: "A capacitor's capacitance says how much charge it holds per volt.",
          detail: "C = Q/ΔV. Parallel plates: C = ε₀A/d. C depends only on geometry (and any dielectric), not on Q or V.",
          example: "Doubling the plate separation halves the capacitance.",
        },
        {
          title: "Energy stored in capacitors",
          simple: "Charging a capacitor stores energy in the electric field between its plates.",
          detail: "U = ½QV = ½CV² = Q²/(2C). Energy density in a field: u = ½ε₀E².",
          hook: "Connected to a battery, V stays fixed. Disconnected, Q stays fixed. Decide which is constant first.",
        },
        {
          title: "Dielectrics and capacitor combinations",
          simple: "Insulating material between the plates lets the capacitor hold more charge.",
          detail: "With dielectric constant κ: C = κε₀A/d. Parallel: C_eq = C₁ + C₂. Series: 1/C_eq = 1/C₁ + 1/C₂ (the opposite of resistors).",
        },
      ],
      terms: [
        ["Capacitance", "C = Q/ΔV, measured in farads."],
        ["Dielectric", "An insulator that raises capacitance by a factor κ."],
        ["Electrostatic equilibrium", "When no charges in a conductor are moving."],
        ["Surface charge density (σ)", "Charge per unit area."],
        ["Energy density", "u = ½ε₀E², the energy per volume in a field."],
      ],
      mistakes: [
        "Combining capacitors with the resistor rules.",
        "Forgetting whether Q or V is held constant when a capacitor changes.",
      ],
      questions: [
        { q: "What is the electric field inside a solid conductor in electrostatic equilibrium?", choices: ["σ/ε₀", "Zero", "kQ/r²", "It depends on the conductor's shape"], answer: 1, explain: "Any field inside would move charges, so at equilibrium E = 0 inside." },
        { q: "The plate separation of a parallel-plate capacitor is doubled. Its capacitance:", choices: ["Doubles", "Halves", "Stays the same", "Quadruples"], answer: 1, explain: "C = ε₀A/d, so doubling d halves C." },
        { q: "A charged capacitor is disconnected from the battery, then its plate separation is doubled. The stored energy:", choices: ["Halves", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "Q is fixed and C halves, so U = Q²/(2C) doubles." },
        { q: "Two 6 μF capacitors are connected in series. What is the equivalent capacitance?", choices: ["12 μF", "6 μF", "3 μF", "36 μF"], answer: 2, explain: "Series: 1/C = 1/6 + 1/6 = 1/3, so C = 3 μF." },
      ],
      frq: {
        prompt: "A parallel-plate capacitor with plate area A and separation d is charged by a battery of voltage V₀ and stays connected. A dielectric slab of constant κ is then inserted, filling the gap.\n(a) Find the new capacitance.\n(b) Find the new charge.\n(c) Does the stored energy increase or decrease? Justify.",
        points: [
          "(a) C = κε₀A/d.",
          "(b) V stays V₀ because the battery is connected, so Q = κε₀AV₀/d, κ times the original.",
          "(c) U = ½CV₀² and C rose by κ with V fixed, so the energy INCREASES (the battery supplies the extra).",
        ],
      },
    },
    {
      title: "Electric Circuits",
      weightLabel: "CED Unit 11",
      tldr: "Current flows through resistors according to Ohm's law, and Kirchhoff's rules handle any circuit. With capacitors, current changes exponentially with time constant RC.",
      concepts: [
        {
          title: "Current, resistance and Ohm's law",
          simple: "Voltage pushes charge through a circuit, and resistance holds it back.",
          detail: "I = dQ/dt. ΔV = IR. R = ρL/A, so resistance rises with length and falls with cross-sectional area. Power: P = IV = I²R = V²/R.",
        },
        {
          title: "Kirchhoff's rules and combinations",
          simple: "Charge isn't lost at junctions, and the voltage changes around any loop add up to zero.",
          detail: "Junction rule: ΣI_in = ΣI_out. Loop rule: ΣΔV = 0. Series: R_eq = R₁ + R₂. Parallel: 1/R_eq = 1/R₁ + 1/R₂. A real battery's terminal voltage is ε − Ir.",
        },
        {
          title: "RC circuits",
          simple: "A capacitor fills up quickly at first, then more and more slowly.",
          detail: "Charging: q(t) = Cε(1 − e^(−t/RC)), I(t) = (ε/R)e^(−t/RC). Time constant τ = RC. Right after closing the switch an uncharged capacitor acts like a wire. At steady state it acts like a break.",
          hook: "After one time constant, a charging capacitor is about 63% full.",
        },
        {
          title: "Power and energy in circuits",
          simple: "Resistors turn electrical energy into heat, and the battery supplies it.",
          detail: "P = I²R in a resistor. While a capacitor charges, the battery supplies Qε, half is stored (½Qε) and half is dissipated in the resistor.",
        },
      ],
      terms: [
        ["Current", "Rate of charge flow: I = dQ/dt, in amperes."],
        ["Resistivity (ρ)", "A material property. R = ρL/A."],
        ["Time constant", "τ = RC, the time scale of charging and discharging."],
        ["EMF", "The energy per charge a source supplies (ε)."],
        ["Internal resistance", "Resistance inside a real battery, lowering its terminal voltage."],
      ],
      mistakes: [
        "Treating a capacitor as a wire at steady state (it's a break then).",
        "Forgetting the minus sign convention when walking a loop through a resistor with the current.",
      ],
      questions: [
        { q: "A 12 V battery drives current through a 4 Ω resistor. What power is dissipated?", choices: ["3 W", "48 W", "36 W", "16 W"], answer: 2, explain: "P = V²/R = 144/4 = 36 W." },
        { q: "Three 6 Ω resistors are in parallel. What is the equivalent resistance?", choices: ["18 Ω", "6 Ω", "2 Ω", "3 Ω"], answer: 2, explain: "1/R = 3 × (1/6) = 1/2, so R = 2 Ω." },
        { q: "What is the time constant of an RC circuit with R = 2 kΩ and C = 5 μF?", choices: ["10 ms", "0.4 s", "2.5 ms", "10 s"], answer: 0, explain: "τ = RC = 2000 × 5 × 10⁻⁶ = 0.01 s = 10 ms." },
        { q: "An uncharged capacitor is in series with a resistor and a battery. Immediately after the switch closes, the current is:", choices: ["Zero", "ε/R", "ε/(2R)", "It depends on C"], answer: 1, explain: "An empty capacitor has no voltage across it, so the full ε is across R: I = ε/R." },
      ],
      frq: {
        prompt: "A battery of emf ε, a resistor R and an uncharged capacitor C are connected in series. The switch closes at t = 0.\n(a) Write the loop equation as a differential equation for q(t).\n(b) Solve for q(t).\n(c) Find the current at t = RC.",
        points: [
          "(a) ε − IR − q/C = 0 with I = dq/dt, so R dq/dt = ε − q/C.",
          "(b) Separate variables with q(0) = 0: q(t) = Cε(1 − e^(−t/RC)).",
          "(c) I = dq/dt = (ε/R)e^(−t/RC). At t = RC, I = (ε/R)e^(−1) ≈ 0.37ε/R.",
        ],
      },
    },
    {
      title: "Magnetic Fields and Electromagnetism",
      weightLabel: "CED Unit 12",
      tldr: "Moving charges and currents feel magnetic forces and also create magnetic fields. The Biot–Savart law gives the field from any current, and Ampère's law makes symmetric cases fast.",
      concepts: [
        {
          title: "Magnetic force on moving charges",
          simple: "A magnetic field pushes sideways on a moving charge, so it curves without speeding up.",
          detail: "F = qv × B, magnitude qvB sin θ. The force is perpendicular to v, so it does no work. In a uniform field, a charge moving perpendicular to B circles with r = mv/(qB).",
        },
        {
          title: "Magnetic force on currents",
          simple: "A current-carrying wire in a magnetic field feels a push, like the moving charges inside it.",
          detail: "F = IL × B. Parallel currents in the same direction ATTRACT, opposite directions repel. A current loop in a field feels a torque, the principle behind motors.",
        },
        {
          title: "The Biot–Savart law",
          simple: "Each small piece of current makes a little magnetic field, and you add them all up.",
          detail: "dB = (μ₀/4π) I dl × r̂ / r². Center of a circular loop: B = μ₀I/(2R). Field lines around a wire form circles (right-hand rule).",
        },
        {
          title: "Ampère's law",
          simple: "The magnetic field around a closed loop counts the current passing through it.",
          detail: "∮B·dl = μ₀I_enc. Long straight wire: B = μ₀I/(2πr). Inside a long solenoid: B = μ₀nI, uniform, and nearly zero outside.",
          hook: "Like Gauss's law, Ampère's law only saves work when symmetry makes B constant along the loop.",
        },
      ],
      terms: [
        ["Tesla", "The SI unit of magnetic field: N/(A·m)."],
        ["Right-hand rule", "Finds the direction of v × B, or of B around a current."],
        ["Permeability of free space (μ₀)", "4π × 10⁻⁷ T·m/A."],
        ["Solenoid", "A long coil of wire. Its inside field is μ₀nI."],
        ["Cyclotron radius", "r = mv/(qB) for circular motion in a magnetic field."],
      ],
      mistakes: [
        "Forgetting to flip the right-hand-rule direction for negative charges.",
        "Saying a magnetic force changes a charge's speed. It only changes direction.",
      ],
      questions: [
        { q: "A charged particle moves parallel to a uniform magnetic field. The magnetic force on it is:", choices: ["qvB", "Zero", "Perpendicular to both, qvB/2", "Along the field"], answer: 1, explain: "F = qvB sin θ and θ = 0, so the force is zero." },
        { q: "A long straight wire carries current I. The magnetic field at distance r is proportional to:", choices: ["1/r²", "1/r", "r", "It's constant"], answer: 1, explain: "Ampère's law gives B = μ₀I/(2πr)." },
        { q: "Two parallel wires carry currents in the SAME direction. The wires:", choices: ["Repel", "Attract", "Feel no force", "Twist"], answer: 1, explain: "Each wire sits in the other's field, and same-direction currents attract." },
        { q: "The number of turns per meter of a long solenoid doubles, and the current is unchanged. The field inside:", choices: ["Halves", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "B = μ₀nI, so doubling n doubles B." },
      ],
      frq: {
        prompt: "A long cylindrical wire of radius R carries current I, spread uniformly over its cross-section.\n(a) Use Ampère's law to find B for r > R.\n(b) Find B for r < R.\n(c) Where is B largest?",
        points: [
          "(a) Circular loop of radius r: B(2πr) = μ₀I, so B = μ₀I/(2πr).",
          "(b) Enclosed current is I(r²/R²): B(2πr) = μ₀Ir²/R², so B = μ₀Ir/(2πR²).",
          "(c) B grows linearly inside and falls as 1/r outside, so it's largest at the surface, r = R.",
        ],
      },
    },
    {
      title: "Electromagnetic Induction",
      weightLabel: "CED Unit 13",
      tldr: "A changing magnetic flux induces an emf (Faraday's law), and the induced current opposes the change (Lenz's law). Inductors resist changes in current, which gives LR and LC circuits their behavior.",
      concepts: [
        {
          title: "Magnetic flux and Faraday's law",
          simple: "Change the magnetic field through a loop, and a voltage appears around the loop.",
          detail: "Φ_B = ∫B·dA. ε = −N dΦ_B/dt. The flux can change through B, the area, or the angle. A rod sliding on rails: ε = BLv.",
        },
        {
          title: "Lenz's law",
          simple: "The induced current always fights the change that caused it.",
          detail: "The induced current makes its own field to oppose the CHANGE in flux (not the flux itself). Increasing flux into the page produces a counterclockwise current (field out of the page).",
          hook: "Lenz's law is why a magnet falls slowly through a copper pipe.",
        },
        {
          title: "Inductance and LR circuits",
          simple: "An inductor resists changes in current, like inertia for electricity.",
          detail: "ε_L = −L dI/dt. Energy: U = ½LI². In an LR circuit, current rises as I = (ε/R)(1 − e^(−t/τ)) with τ = L/R. Right after switching, an inductor acts like a break. At steady state it acts like a wire.",
        },
        {
          title: "LC circuits",
          simple: "Energy sloshes back and forth between a capacitor's field and an inductor's field.",
          detail: "q(t) = Q_max cos(ωt) with ω = 1/√(LC). This is the electrical version of a mass on a spring. Total energy Q²/(2C) + ½LI² stays constant.",
        },
      ],
      terms: [
        ["Magnetic flux", "Φ_B = ∫B·dA, in webers."],
        ["Induced emf", "The voltage produced by changing flux."],
        ["Inductance (L)", "How strongly a coil opposes changes in current, in henries."],
        ["Time constant (LR)", "τ = L/R."],
        ["Eddy currents", "Loops of induced current in bulk conductors."],
      ],
      mistakes: [
        "Thinking a large but steady flux induces an emf. Only CHANGING flux does.",
        "Mixing up the RC and LR rules for what acts like a wire right after switching.",
      ],
      questions: [
        { q: "A metal rod of length 0.5 m slides at 4 m/s on rails in a 0.2 T field perpendicular to the circuit. What is the induced emf?", choices: ["0.4 V", "10 V", "1.6 V", "0.1 V"], answer: 0, explain: "ε = BLv = 0.2 × 0.5 × 4 = 0.4 V." },
        { q: "The magnetic field into the page through a loop is increasing. The induced current flows:", choices: ["Clockwise", "Counterclockwise", "There is no current", "Back and forth"], answer: 1, explain: "The current opposes the increase by making a field OUT of the page, which is counterclockwise." },
        { q: "What is the time constant of an LR circuit with L = 4 H and R = 2 Ω?", choices: ["8 s", "0.5 s", "2 s", "6 s"], answer: 2, explain: "τ = L/R = 4/2 = 2 s." },
        { q: "In an LC circuit, the capacitance is quadrupled. The oscillation frequency:", choices: ["Quadruples", "Doubles", "Halves", "Stays the same"], answer: 2, explain: "ω = 1/√(LC), so quadrupling C halves ω." },
      ],
      frq: {
        prompt: "A square loop of side s and resistance R is pulled at constant speed v out of a region of uniform magnetic field B directed into the page.\n(a) Find the induced emf while the loop is leaving the field.\n(b) Find the induced current and its direction.\n(c) What external force is needed to keep v constant?",
        points: [
          "(a) The area inside the field shrinks at rate sv, so ε = Bsv.",
          "(b) I = Bsv/R. The inward flux is decreasing, so the current is CLOCKWISE (making field into the page to oppose the decrease).",
          "(c) The magnetic force on the side still in the field is IsB = B²s²v/R, opposing the motion, so the external force must equal B²s²v/R in the direction of motion.",
        ],
      },
    },
  ],
};
