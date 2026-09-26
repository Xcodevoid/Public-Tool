// More key concepts for content/physics-c-mechanics.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["physics-c-mechanics"] = {
  0: [
    {
      title: "Vectors in two dimensions",
      simple: "Break two-dimensional motion into independent x and y components.",
      detail: "Position, velocity and acceleration are vectors: r = xî + yĵ, v = dr/dt, a = dv/dt. Treat each component separately with its own equations, then combine: speed = √(vₓ² + v_y²). The dot product finds components along a direction; unit vectors î and ĵ mark directions.",
      trap: "Each direction has its OWN acceleration. Don't use a vertical acceleration in horizontal equations.",
      terms: [
        ["Unit vector", "A vector of length 1 marking a direction, like î or ĵ."],
        ["Position vector", "r(t) = x(t)î + y(t)ĵ"],
      ],
    },
    {
      title: "Relative motion",
      simple: "Velocity depends on the reference frame, and velocities in different frames add as vectors.",
      detail: "v_A relative to ground = v_A relative to B + v_B relative to ground. Accelerations are the same in all inertial frames. Classic problems: boats crossing rivers and planes in wind, where the heading and actual path differ.",
      trap: "For a boat to go straight across a river, it must point UPSTREAM, so its crossing speed is less than its speed in still water.",
      terms: [
        ["Relative velocity", "Velocity measured with respect to a chosen reference frame."],
        ["Galilean transformation", "Adding velocities between frames: v = v′ + u."],
      ],
    },
    {
      title: "Kinematics graphs with calculus",
      simple: "Slopes of graphs give derivatives, and areas under graphs give integrals.",
      detail: "Slope of x–t = velocity; slope of v–t = acceleration. Area under v–t = displacement; area under a–t = change in velocity. Curved graphs need instantaneous slopes (tangent lines) and integrals rather than simple triangles and rectangles.",
      trap: "Area under an a–t graph gives CHANGE in velocity, not the velocity itself. Add the initial velocity.",
      terms: [
        ["Slope of a v–t graph", "Instantaneous acceleration."],
        ["Area under an a–t graph", "Change in velocity."],
      ],
    },
  ],
  1: [
    {
      title: "Friction",
      simple: "Friction opposes sliding: static friction adjusts up to a limit, kinetic friction is roughly constant.",
      detail: "Static friction: f_s ≤ μ_sN, only as large as needed to prevent slipping. Kinetic friction: f_k = μ_kN, opposite the relative motion. Usually μ_s > μ_k. On an incline at the verge of slipping, μ_s = tan θ.",
      trap: "Static friction is NOT always μ_sN. That's only its maximum, reached right before slipping.",
      terms: [
        ["Static friction", "Friction preventing motion, up to μ_sN."],
        ["Kinetic friction", "f_k = μ_kN, opposing sliding motion."],
      ],
    },
    {
      title: "Connected systems",
      simple: "Treat connected objects as one system for acceleration, then isolate one object to find tension.",
      detail: "For an Atwood machine (ideal pulley): a = (m₁ − m₂)g/(m₁ + m₂). Write Newton's second law for each object with a consistent sign convention for the direction of motion. Tension is internal to the system and cancels when the objects are combined.",
      trap: "Tension is NOT equal to either hanging weight when the system accelerates. Solve for it.",
      terms: [
        ["Atwood machine", "Two masses connected over a pulley."],
        ["Ideal pulley", "Massless, frictionless pulley; the tension is the same on both sides."],
      ],
    },
    {
      title: "Spring forces",
      simple: "A spring pulls or pushes back in proportion to how far it's stretched or compressed.",
      detail: "F = −kx. Springs in series: 1/k_eq = 1/k₁ + 1/k₂ (softer). Springs in parallel: k_eq = k₁ + k₂ (stiffer). A hanging mass stretches a spring by x = mg/k to its new equilibrium.",
      trap: "Springs combine OPPOSITE to resistors: in series the equivalent spring constant is SMALLER.",
      terms: [
        ["Springs in parallel", "k_eq = k₁ + k₂"],
        ["Springs in series", "1/k_eq = 1/k₁ + 1/k₂"],
      ],
    },
  ],
  2: [
    {
      title: "The work-energy theorem with variable forces",
      simple: "Net work, even from changing forces, equals the change in kinetic energy.",
      detail: "W_net = ∫F_net · dx = ΔK. For a force given as F(x), integrate to find work, then use ΔK to find the speed. Negative net work slows the object down.",
      trap: "Use the NET force for ΔK, or add the work of every force. One force's work alone doesn't give the speed change.",
      terms: [
        ["Work-energy theorem", "W_net = ΔK"],
        ["Work by a variable force", "W = ∫F(x) dx"],
      ],
    },
    {
      title: "Nonconservative work",
      simple: "Friction and other nonconservative forces change a system's mechanical energy.",
      detail: "W_nc = ΔK + ΔU. Kinetic friction removes mechanical energy, converting it to thermal energy; the work depends on the path. With drag forces that vary with speed, the energy lost must be found by integration or from the energy difference.",
      trap: "Conservative forces can be written as potential energy; nonconservative forces CAN'T. Don't give friction a potential energy.",
      terms: [
        ["Nonconservative force", "A force whose work depends on path, like friction."],
        ["Mechanical energy", "K + U"],
      ],
    },
    {
      title: "Energy diagrams and turning points",
      simple: "A U(x) graph shows where an object can go, where it turns around, and where it balances.",
      detail: "Total energy E is a horizontal line. The object can only be where U ≤ E; K = E − U at each point. Turning points occur where U = E (K = 0). The force is F = −dU/dx: it points downhill on the graph. Minima are stable equilibria; maxima are unstable.",
      trap: "The object can't be where U > E. Those regions are classically FORBIDDEN, since K would be negative.",
      terms: [
        ["Turning point", "Where U = E and the object momentarily stops."],
        ["Unstable equilibrium", "A maximum of U(x); a small push sends the object away."],
      ],
    },
  ],
  3: [
    {
      title: "Momentum and Newton's second law",
      simple: "Force equals the rate of change of momentum, which works even when mass changes.",
      detail: "F_net = dp/dt. For constant mass this is ma. It applies directly to changing-mass systems like rockets and conveyor belts (F = v dm/dt when material lands at speed v). A system's total momentum changes only due to external forces.",
      trap: "For changing mass, use F = dp/dt, not F = ma. Mass entering or leaving the system carries momentum.",
      terms: [
        ["Newton's second law (momentum form)", "F_net = dp/dt"],
        ["Rocket propulsion", "Forward force from expelling mass backward at high speed."],
      ],
    },
    {
      title: "Center of mass of continuous objects",
      simple: "For a solid object, find the center of mass by integrating over its mass.",
      detail: "x_cm = (1/M)∫x dm. With linear density λ(x), dm = λ dx. A uniform rod's center of mass is at its middle; if density increases toward one end, the center of mass shifts that way. For systems, v_cm = Σm·v/M and a_cm = F_ext/M.",
      trap: "Set dm correctly: for a rod with λ = kx, dm = kx dx, and the total mass M = ∫λ dx isn't just k × L.",
      terms: [
        ["dm for a rod", "dm = λ dx, where λ may vary with position."],
        ["Center of mass (continuous)", "x_cm = (1/M)∫x dm"],
      ],
    },
    {
      title: "Collisions in two dimensions",
      simple: "In 2D collisions, momentum is conserved separately in the x and y directions.",
      detail: "Σpₓ before = Σpₓ after, and Σp_y before = Σp_y after. Glancing collisions produce objects moving at angles. For an elastic collision between equal masses with one at rest, they move off at 90° to each other.",
      trap: "Conserve each COMPONENT separately. Adding the momentum magnitudes (ignoring direction) gives wrong answers.",
      terms: [
        ["Glancing collision", "A collision where objects move off at angles."],
        ["Momentum components", "pₓ and p_y, each conserved separately with no external force."],
      ],
    },
  ],
  4: [
    {
      title: "Calculating rotational inertia by integration",
      simple: "Rotational inertia adds up r² times each bit of mass across an object.",
      detail: "I = ∫r² dm. For a uniform rod about its center: I = ML²/12; about one end: ML²/3. Thin hoop: MR². Solid disk: ½MR². Solid sphere: ⅖MR². The same mass farther from the axis gives more rotational inertia.",
      trap: "Measure r from the AXIS OF ROTATION, not from the object's center, when setting up the integral.",
      terms: [
        ["Rotational inertia (integral)", "I = ∫r² dm"],
        ["Solid sphere", "I = ⅖MR² about its center."],
      ],
    },
    {
      title: "The parallel-axis theorem",
      simple: "Shift rotational inertia to a new axis by adding Md².",
      detail: "I = I_cm + Md², where d is the distance between the new axis and a parallel axis through the center of mass. The smallest rotational inertia for any direction is about an axis through the center of mass.",
      trap: "Start from the CENTER-OF-MASS axis. You can't use the theorem directly between two off-center axes.",
      terms: [
        ["Distance d in the parallel-axis theorem", "The distance between the new axis and the parallel center-of-mass axis."],
        ["Center-of-mass axis", "Axis through the center of mass; gives the minimum I for that direction."],
      ],
    },
    {
      title: "Torque as a cross product",
      simple: "Torque is a vector: its direction comes from the right-hand rule.",
      detail: "τ = r × F, magnitude rF sin θ, where r goes from the axis to the point where F acts. Curl your fingers from r to F; your thumb points along τ. Counterclockwise torques point out of the page; clockwise into it.",
      trap: "Use the angle BETWEEN r and F. When they are parallel or antiparallel, the torque is zero.",
      terms: [
        ["Torque vector", "τ = r × F"],
        ["Lever arm", "Perpendicular distance from the axis to the line of the force."],
      ],
    },
  ],
  5: [
    {
      title: "Rolling with friction",
      simple: "Static friction makes objects roll without slipping; it adjusts to keep v = Rω.",
      detail: "For rolling without slipping, v = Rω and a = Rα, and static friction does no work. Down an incline, objects with smaller I/(MR²) accelerate faster: a solid sphere beats a disk, which beats a hoop. If an object slips, kinetic friction does work and v ≠ Rω.",
      trap: "In a race down a ramp, MASS and RADIUS don't matter, only the shape (the ratio I/MR²).",
      terms: [
        ["Contact point in rolling", "The point touching the ground is momentarily at rest."],
        ["Shape factor", "The ratio I/(MR²), which determines rolling acceleration."],
      ],
    },
    {
      title: "Angular impulse",
      simple: "A torque acting over time changes angular momentum.",
      detail: "Angular impulse = ∫τ dt = ΔL, the rotational analog of J = Δp. Net external torque τ = dL/dt. A point particle has angular momentum L = r × p about any point, magnitude mvr⊥.",
      trap: "Angular momentum depends on the chosen POINT. State which point you are measuring it about.",
      terms: [
        ["Net torque and angular momentum", "τ_net = dL/dt"],
        ["Angular momentum of a particle", "L = r × p"],
      ],
    },
    {
      title: "Orbits and Kepler's laws",
      simple: "Planets move in ellipses, sweep out equal areas in equal times, and take longer to orbit when farther out.",
      detail: "Kepler's second law follows from conservation of angular momentum: a planet moves fastest at its closest point. Kepler's third law: T² ∝ r³ (T² = 4π²r³/GM for circular orbits). Gravitational PE U = −GMm/r; circular orbit total energy E = −GMm/(2r).",
      trap: "Angular momentum (not speed) is constant in an elliptical orbit, so speed CHANGES around the orbit.",
      terms: [
        ["Kepler's third law", "T² ∝ r³ for orbits around the same body."],
        ["Gravitational potential energy", "U = −GMm/r, zero at infinite separation."],
      ],
    },
  ],
  6: [
    {
      title: "The physical pendulum",
      simple: "Any rigid object swinging about a pivot oscillates with a period set by its inertia and center of mass.",
      detail: "For small angles, τ = −mgd θ, so T = 2π√(I/(mgd)), where d is the distance from pivot to center of mass and I is about the pivot. A simple pendulum is the special case I = mL², d = L, giving T = 2π√(L/g).",
      trap: "Use rotational inertia about the PIVOT, not about the center of mass (use the parallel-axis theorem).",
      terms: [
        ["Period of a physical pendulum", "T = 2π√(I/(mgd)), with I about the pivot."],
        ["Torsion pendulum", "An object twisting on a wire: T = 2π√(I/κ)."],
      ],
    },
    {
      title: "Phase and initial conditions",
      simple: "The general SHM solution has an amplitude and a phase that match where the motion starts.",
      detail: "x(t) = A cos(ωt + φ). Use x(0) and v(0) to find A and φ: A = √(x₀² + (v₀/ω)²). Starting at maximum displacement: φ = 0 (cosine). Starting at equilibrium moving in the positive direction: x = A sin(ωt).",
      trap: "Match BOTH initial position and initial velocity. A cosine starting at x = A only fits if the object starts at rest.",
      terms: [
        ["Phase constant (φ)", "Sets where in the cycle the oscillation starts."],
        ["Amplitude from initial conditions", "A = √(x₀² + (v₀/ω)²)"],
      ],
    },
    {
      title: "Vertical springs and SHM",
      simple: "A mass on a vertical spring oscillates the same way as a horizontal one, around a shifted equilibrium.",
      detail: "The new equilibrium stretch is mg/k. Measured from that point, the motion is SHM with ω = √(k/m) and the same period as horizontally. Gravity only shifts the center of oscillation.",
      trap: "Gravity does NOT change the period of a mass on a spring. It only moves the equilibrium position.",
      terms: [
        ["Equilibrium stretch", "The extension mg/k where a hanging mass is balanced."],
        ["Period of a mass-spring system", "T = 2π√(m/k)"],
      ],
    },
  ],
};
