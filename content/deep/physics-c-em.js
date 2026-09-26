// More key concepts for content/physics-c-em.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["physics-c-em"] = {
  0: [
    {
      title: "Superposition of point-charge fields",
      simple: "The total field from several charges is the vector sum of each charge's field.",
      detail: "Find each field's magnitude with kq/r², draw its direction (away from +, toward −), break into components, and add. Symmetry often cancels components. Somewhere between two like charges the field is zero; for unlike charges, the zero point lies outside, nearer the smaller charge.",
      trap: "Add fields as VECTORS by component. Adding magnitudes directly is only valid when they point the same way.",
      terms: [
        ["Superposition", "The net field is the vector sum of individual fields."],
        ["Null point", "A location where the net electric field is zero."],
      ],
    },
    {
      title: "Electric dipoles",
      simple: "A dipole is a pair of equal and opposite charges; in a field, it feels torque but no net force.",
      detail: "Dipole moment p = qd, pointing from − to +. In a uniform field: net force = 0, torque τ = p × E (magnitude pE sin θ), which aligns the dipole with the field. Potential energy U = −p·E is lowest when aligned. Far from a dipole, its field falls off as 1/r³.",
      trap: "In a UNIFORM field, a dipole feels zero net force. It only rotates. A nonuniform field can pull it.",
      terms: [
        ["Dipole moment", "p = qd, pointing from the negative to the positive charge."],
        ["Torque on a dipole", "τ = p × E"],
      ],
    },
    {
      title: "Field lines",
      simple: "Field lines show the direction of the field, and their density shows its strength.",
      detail: "Lines start on positive charges and end on negative charges (or infinity), never cross, and are perpendicular to conductor surfaces. The number of lines is proportional to the charge. Closer lines mean a stronger field.",
      trap: "A charge released from rest does NOT generally follow a curved field line. Its velocity and the field direction can differ.",
      terms: [
        ["Field line density", "Closer lines indicate a stronger field."],
        ["Field line rule", "Field lines never cross each other."],
      ],
    },
  ],
  1: [
    {
      title: "Potential of continuous charge distributions",
      simple: "Add up the potential from every small piece of charge, which is easier than adding fields because potential is a scalar.",
      detail: "V = ∫k dq/r. On the axis of a ring: V = kQ/√(x² + R²). For a uniformly charged rod, integrate along its length. Once V is known as a function of position, find E = −dV/dx.",
      trap: "No vector components needed for V: it's a scalar. That's why finding V first and then E = −dV/dx is often easier.",
      terms: [
        ["Potential from continuous charge", "V = ∫k dq/r"],
        ["Potential on a ring's axis", "V = kQ/√(x² + R²)"],
      ],
    },
    {
      title: "Equipotential surfaces",
      simple: "Equipotentials are surfaces of constant voltage, always perpendicular to field lines.",
      detail: "Moving a charge along an equipotential takes no work. Closely spaced equipotentials mean a strong field (E ≈ ΔV/Δs). Around a point charge, equipotentials are spheres; between parallel plates, they are flat planes parallel to the plates.",
      trap: "Equipotentials and field lines are always PERPENDICULAR. Drawing them any other way loses points.",
      terms: [
        ["Equipotential surface", "A surface where the potential is the same everywhere."],
        ["Field from equipotential spacing", "E ≈ ΔV/Δs, stronger where equipotentials are closer."],
      ],
    },
    {
      title: "Potential of spheres and conductors",
      simple: "Outside a charged sphere, V looks like a point charge; inside a conductor, V is constant.",
      detail: "For a charged conducting sphere: V = kQ/r outside, and V = kQ/R (constant) everywhere inside. For a uniformly charged insulating sphere, V keeps increasing toward the center. Connecting two conducting spheres by a wire makes them the same potential, so the smaller sphere has a higher surface charge density.",
      trap: "E = 0 inside a conductor but V is NOT zero. It equals the surface value.",
      terms: [
        ["Potential inside a conductor", "Constant, equal to its surface potential."],
        ["Charge sharing", "Connected conductors reach the same potential."],
      ],
    },
  ],
  2: [
    {
      title: "Induced charges and shielding",
      simple: "A conductor rearranges its charges to cancel fields inside, which shields its interior.",
      detail: "A charge placed inside a cavity of a neutral conductor induces an equal and opposite charge on the cavity wall and an equal charge on the outer surface. A closed conducting shell with no charge inside has zero field in its cavity, regardless of outside fields (a Faraday cage).",
      trap: "Charge inside a cavity still shows up on the OUTER surface of the conductor. The outside field isn't blocked.",
      terms: [
        ["Faraday cage", "A conducting enclosure that blocks external electric fields."],
        ["Induced charge", "Charge redistributed in a conductor by a nearby field."],
      ],
    },
    {
      title: "Capacitance of cylinders and spheres",
      simple: "Use Gauss's law to find the field, integrate to find ΔV, then C = Q/ΔV.",
      detail: "Steps: assume charge ±Q, find E between the conductors with Gauss's law, compute ΔV = −∫E·dr, and divide. Cylindrical: C = 2πε₀L/ln(b/a). Spherical: C = 4πε₀ab/(b − a). An isolated sphere: C = 4πε₀R.",
      trap: "Capacitance depends only on GEOMETRY. The Q you assumed cancels out at the end.",
      terms: [
        ["Cylindrical capacitor", "C = 2πε₀L/ln(b/a)"],
        ["Isolated sphere capacitance", "C = 4πε₀R"],
      ],
    },
    {
      title: "How dielectrics work",
      simple: "A dielectric's molecules line up in the field, weakening it and letting the capacitor store more charge.",
      detail: "Polarized molecules create an opposing internal field, so the net field is reduced by a factor κ. With the battery disconnected (Q fixed), V drops and C rises by κ. With the battery connected (V fixed), Q rises by κ. Every dielectric has a breakdown field beyond which it conducts.",
      trap: "Decide first whether Q or V is fixed. The effects of inserting a dielectric depend on it.",
      terms: [
        ["Polarization", "Alignment of molecular dipoles in an electric field."],
        ["Dielectric strength", "The maximum field a material can withstand before breaking down."],
      ],
    },
  ],
  3: [
    {
      title: "Multi-loop circuits with Kirchhoff's rules",
      simple: "For circuits that can't be simplified, write junction and loop equations and solve them together.",
      detail: "Assign a current (with a guessed direction) to each branch. Junction rule at nodes: ΣI_in = ΣI_out. Loop rule around independent loops: ΣΔV = 0 (−IR going with the current, +ε going from − to + through a battery). A negative answer means the current actually flows the other way.",
      trap: "A negative current isn't wrong. It means your guessed direction was backward. Keep the sign when using it.",
      terms: [
        ["Branch current", "The current in one path of a circuit."],
        ["Independent loops", "Loops giving new equations; you need as many as unknown currents minus junction equations."],
      ],
    },
    {
      title: "Current density and resistivity",
      simple: "Current comes from charges drifting slowly through a wire, and resistivity depends on the material.",
      detail: "I = nqv_dA, where v_d is the drift velocity (typically under a millimeter per second). Current density J = I/A = σE, and resistivity ρ = 1/σ. R = ρL/A. Resistivity of metals rises with temperature.",
      trap: "Drift velocity is SLOW even though signals travel near light speed. The field sets all charges moving almost instantly.",
      terms: [
        ["Drift velocity", "The average velocity of charge carriers in a conductor."],
        ["Current density", "J = I/A, current per unit cross-sectional area."],
      ],
    },
    {
      title: "Discharging RC circuits",
      simple: "A discharging capacitor loses charge exponentially through the resistor.",
      detail: "q(t) = Q₀e^(−t/RC), I(t) = (Q₀/RC)e^(−t/RC), V(t) = V₀e^(−t/RC). After one time constant, 37% remains. The energy stored in the capacitor is dissipated in the resistor. With several resistors, use the equivalent resistance the capacitor sees.",
      trap: "During discharge, the current flows OPPOSITE to its charging direction. Watch the direction in circuit questions.",
      terms: [
        ["Discharging capacitor", "q(t) = Q₀e^(−t/RC)"],
        ["37% rule", "After one time constant, a discharging capacitor keeps about 37% of its charge."],
      ],
    },
  ],
  4: [
    {
      title: "Magnetic dipole moment and torque on loops",
      simple: "A current loop in a magnetic field feels a torque that turns it to line up with the field.",
      detail: "Magnetic moment μ = NIA, perpendicular to the loop (right-hand rule). Torque τ = μ × B, magnitude NIAB sin θ. In a uniform field, the net force on a closed loop is zero. This torque powers electric motors.",
      trap: "The torque is MAXIMUM when the plane of the loop is parallel to B (μ perpendicular to B), and zero when the loop faces the field.",
      terms: [
        ["Magnetic moment", "μ = NIA for a current loop."],
        ["Torque on a current loop", "τ = μ × B"],
      ],
    },
    {
      title: "Velocity selectors and combined fields",
      simple: "Crossed electric and magnetic fields let only particles of one speed pass straight through.",
      detail: "The Lorentz force F = q(E + v × B). When qE = qvB, the forces cancel: v = E/B. Faster particles curve one way and slower ones the other. Mass spectrometers pair a velocity selector with a magnetic field to measure mass.",
      trap: "The selected speed v = E/B is the same for ANY charge or mass. Only speed matters.",
      terms: [
        ["Lorentz force", "F = q(E + v × B)"],
        ["Velocity selector", "Crossed E and B fields passing only particles with v = E/B."],
      ],
    },
    {
      title: "Using the Biot–Savart law for arcs and segments",
      simple: "For curved or finite wires, add up the field contributions from each small piece.",
      detail: "Arc of angle θ (radians) and radius R, at its center: B = μ₀Iθ/(4πR). A full loop (θ = 2π) gives μ₀I/(2R). Straight segments pointing directly at the point contribute nothing. Combine contributions from arcs and segments with their directions.",
      trap: "Straight wire segments aimed at the point contribute ZERO field, because dl × r̂ = 0 for them.",
      terms: [
        ["Field at the center of an arc", "B = μ₀Iθ/(4πR)"],
        ["Field at the center of a loop", "B = μ₀I/(2R)"],
      ],
    },
  ],
  5: [
    {
      title: "Rotating loops and generators",
      simple: "A coil spinning in a magnetic field produces an alternating emf.",
      detail: "Φ = NBA cos(ωt), so ε = NBAω sin(ωt). The emf is greatest when the flux is changing fastest, which happens when the flux itself is zero (the loop's plane is parallel to B). Generators convert mechanical work into electrical energy; motors do the reverse.",
      trap: "Maximum emf occurs at ZERO flux, not maximum flux. The emf depends on the rate of change.",
      terms: [
        ["AC generator", "A rotating coil in a magnetic field that produces alternating emf."],
        ["Peak emf of a generator", "ε_max = NBAω"],
      ],
    },
    {
      title: "Self-inductance of a solenoid",
      simple: "A coil's inductance depends on its turns, area and length.",
      detail: "For a long solenoid: L = μ₀N²A/ℓ. The induced emf ε = −L dI/dt opposes changes in current. Inductors smooth current changes, so a sudden break in a circuit with an inductor can cause a large voltage spike.",
      trap: "Inductance scales with N², so doubling the number of turns (same length) quadruples L.",
      terms: [
        ["Inductance of a solenoid", "L = μ₀N²A/ℓ"],
        ["Back emf", "The emf induced in an inductor opposing changes in current."],
      ],
    },
    {
      title: "Energy in inductors and magnetic fields",
      simple: "An inductor stores energy in its magnetic field, just as a capacitor stores it in an electric field.",
      detail: "U = ½LI². Magnetic energy density u = B²/(2μ₀). In an LR circuit, the energy stored at steady state is ½L(ε/R)². When the circuit is opened through a resistor, that energy is dissipated as heat.",
      trap: "At steady state, the inductor acts like a wire (no voltage across it) but STILL stores energy ½LI².",
      terms: [
        ["Energy in an inductor", "U = ½LI²"],
        ["Magnetic energy density", "u = B²/(2μ₀)"],
      ],
    },
  ],
};
