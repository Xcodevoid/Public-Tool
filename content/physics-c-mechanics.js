window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["physics-c-mechanics"] = {
  intro: "Calculus-based mechanics: the same topics as Physics 1 (minus fluids), but with derivatives and integrals for non-constant forces and accelerations. Each unit's exam weighting is listed in the official CED.",
  tips: [
    "Expect calculus: v = dx/dt, a = dv/dt, W = ∫F dx, J = ∫F dt, I = ∫r² dm. Set up the integral clearly, since the setup earns points on its own.",
    "Free-body diagrams are still worth points. Draw forces as arrows starting on the object, with no components mixed in.",
    "Differential equations appear: drag (m dv/dt = mg − bv) and SHM (d²x/dt² = −(k/m)x). Know their solutions and what they mean.",
    "Justify with principles (\"angular momentum is conserved because the net external torque is zero\") before calculating.",
    "Answer \"derive an expression\" questions in terms of the given symbols, not numbers.",
  ],
  units: [
    {
      title: "Kinematics",
      weightLabel: "CED Unit 1",
      tldr: "Position, velocity and acceleration are linked by derivatives and integrals. Constant-acceleration equations are a special case. Projectiles combine independent horizontal and vertical motion.",
      concepts: [
        {
          title: "Derivatives: from position to acceleration",
          simple: "Velocity is how fast position changes, and acceleration is how fast velocity changes.",
          detail: "v(t) = dx/dt and a(t) = dv/dt = d²x/dt². Example: x = 3t² − 2t gives v = 6t − 2 and a = 6.",
        },
        {
          title: "Integrals: from acceleration to position",
          simple: "Add up acceleration over time to get velocity, and add up velocity to get position.",
          detail: "v(t) = v₀ + ∫a dt and x(t) = x₀ + ∫v dt. The area under a v–t graph is displacement. Use the initial conditions to find the constants.",
          example: "a = 6t from rest: v = 3t², x = t³.",
        },
        {
          title: "Constant acceleration",
          simple: "When acceleration doesn't change, a few standard equations cover everything.",
          detail: "v = v₀ + at, x = x₀ + v₀t + ½at², v² = v₀² + 2aΔx. These are only valid for CONSTANT a.",
        },
        {
          title: "Projectile motion",
          simple: "Sideways and up-and-down motion happen independently. Gravity only affects the vertical part.",
          detail: "vₓ is constant and v_y = v₀ sin θ − gt. Time of flight on level ground: T = 2v₀ sin θ/g. Range R = v₀² sin 2θ/g, maximized at 45°.",
        },
      ],
      terms: [
        ["Instantaneous velocity", "v = dx/dt"],
        ["Instantaneous acceleration", "a = dv/dt = d²x/dt²"],
        ["Displacement", "∫v dt, the net change in position."],
        ["Range", "The horizontal distance a projectile travels."],
        ["Reference frame", "The coordinate system motion is measured in."],
      ],
      mistakes: [
        "Using constant-acceleration equations when a depends on time.",
        "Forgetting the initial conditions (+C) when integrating.",
      ],
      questions: [
        { q: "x(t) = 3t² − 2t (meters). What is the velocity at t = 2 s?", choices: ["8 m/s", "10 m/s", "12 m/s", "6 m/s"], answer: 1, explain: "v = dx/dt = 6t − 2 = 12 − 2 = 10 m/s." },
        { q: "An object starts from rest at x = 0 with v(t) = 4t³. What is its position at t = 1 s?", choices: ["1 m", "4 m", "12 m", "0.25 m"], answer: 0, explain: "x = ∫4t³ dt = t⁴, and 1⁴ = 1 m." },
        { q: "a(t) = 6t, and the object starts from rest. What is v(t)?", choices: ["6", "3t²", "6t²", "t³"], answer: 1, explain: "v = ∫6t dt = 3t² + C, and C = 0 because it starts at rest." },
        { q: "On level ground, which launch angle gives the maximum range (no air resistance)?", choices: ["30°", "45°", "60°", "90°"], answer: 1, explain: "R ∝ sin 2θ, which is maximized when 2θ = 90°." },
      ],
      frq: {
        prompt: "A particle moves along the x-axis with a(t) = 12t − 6 (m/s²). At t = 0, v = 2 m/s and x = 1 m.\n(a) Find v(t).\n(b) Find x(t).\n(c) When is the particle momentarily at rest?",
        points: [
          "(a) v = ∫(12t − 6) dt = 6t² − 6t + 2.",
          "(b) x = ∫v dt = 2t³ − 3t² + 2t + 1.",
          "(c) Solve 6t² − 6t + 2 = 0. The discriminant 36 − 48 < 0, so there are no real roots: the particle is never at rest.",
        ],
      },
    },
    {
      title: "Force and Translational Dynamics",
      weightLabel: "CED Unit 2",
      tldr: "Newton's laws connect forces to acceleration. Calculus handles forces that change, like drag that depends on velocity. Circular motion and gravitation are applications.",
      concepts: [
        {
          title: "Newton's laws and free-body diagrams",
          simple: "The net force on an object sets its acceleration. Equal and opposite forces come in pairs acting on different objects.",
          detail: "ΣF = ma, or more generally F = dp/dt. Third-law pairs act on DIFFERENT objects. On a frictionless incline, a = g sin θ. Connected systems (Atwood machines) can be treated as one system for acceleration.",
        },
        {
          title: "Velocity-dependent forces (drag)",
          simple: "Air resistance grows as you go faster, until it balances gravity and speed stops increasing.",
          detail: "Linear drag: m dv/dt = mg − bv. Terminal velocity: v_t = mg/b. The solution is v(t) = v_t(1 − e^(−bt/m)). Speed approaches v_t exponentially.",
        },
        {
          title: "Circular motion",
          simple: "Moving in a circle needs a net inward force.",
          detail: "a_c = v²/r toward the center. At the top of a vertical circle on a string, the minimum speed is √(gr) (tension = 0). Banked curves use the normal force's horizontal component.",
        },
        {
          title: "Gravitation",
          simple: "Every mass attracts every other mass, and the pull weakens with distance squared.",
          detail: "F = Gm₁m₂/r². Orbits: GM/r² = v²/r gives v = √(GM/r). g at the surface is GM/R².",
        },
      ],
      terms: [
        ["Net force", "The vector sum of all forces: ΣF = ma."],
        ["Terminal velocity", "The constant speed reached when drag balances weight: v_t = mg/b."],
        ["Centripetal acceleration", "v²/r, directed toward the center."],
        ["Normal force", "The perpendicular contact force from a surface."],
        ["Universal gravitation", "F = Gm₁m₂/r²"],
      ],
      mistakes: [
        "Treating \"centripetal force\" as an extra force on the diagram. It's the net inward force.",
        "Assuming drag makes velocity decrease forever. It approaches terminal velocity.",
      ],
      questions: [
        { q: "An object falls with linear drag F = −bv. What is its terminal velocity?", choices: ["mg", "mg/b", "b/mg", "√(mg/b)"], answer: 1, explain: "At terminal velocity the net force is 0: mg = bv, so v = mg/b." },
        { q: "What is the acceleration of a block sliding down a frictionless incline of angle θ?", choices: ["g", "g cos θ", "g sin θ", "g tan θ"], answer: 2, explain: "The component of gravity along the incline is mg sin θ." },
        { q: "A ball on a string moves in a vertical circle of radius r. What is the minimum speed at the top?", choices: ["0", "√(gr)", "√(2gr)", "gr"], answer: 1, explain: "At the minimum, gravity alone provides the centripetal force: mg = mv²/r." },
        { q: "A satellite's orbital radius quadruples. Its orbital speed:", choices: ["Quadruples", "Doubles", "Halves", "Stays the same"], answer: 2, explain: "v = √(GM/r), so v ∝ 1/√r, and 1/√4 = 1/2." },
      ],
      frq: {
        prompt: "A ball of mass m is dropped from rest and experiences drag F = −bv.\n(a) Write Newton's second law as a differential equation.\n(b) Derive an expression for the terminal speed.\n(c) Solve for v(t) and sketch it.",
        points: [
          "(a) m dv/dt = mg − bv.",
          "(b) At terminal speed dv/dt = 0, so v_t = mg/b.",
          "(c) v(t) = (mg/b)(1 − e^(−bt/m)). The graph starts at 0 and rises toward the asymptote v_t, concave down.",
        ],
      },
    },
    {
      title: "Work, Energy, and Power",
      weightLabel: "CED Unit 3",
      tldr: "Work is the integral of force over distance. Conservative forces have potential energy functions, and F = −dU/dx connects the two. Mechanical energy is conserved when only conservative forces do work.",
      concepts: [
        {
          title: "Work as an integral",
          simple: "When the force changes along the path, add up force times each small step.",
          detail: "W = ∫F·dx. For a spring, W = ½kx². Work-energy theorem: W_net = ΔK.",
          example: "F = 3x² from 0 to 2 m: W = [x³] = 8 J.",
        },
        {
          title: "Potential energy and force",
          simple: "A potential energy graph tells you which way the force pushes: downhill.",
          detail: "F = −dU/dx. Equilibrium is where dU/dx = 0: stable at a minimum of U, unstable at a maximum. Gravity near Earth: U = mgh. General gravity: U = −GMm/r.",
        },
        {
          title: "Conservation of energy",
          simple: "When only conservative forces act, kinetic plus potential energy stays constant.",
          detail: "K₁ + U₁ = K₂ + U₂. Friction and other nonconservative forces change mechanical energy: ΔE = W_nc. Always define the system.",
        },
        {
          title: "Power",
          simple: "Power is how fast energy is transferred.",
          detail: "P = dW/dt = F·v. Average power = W/Δt.",
        },
      ],
      terms: [
        ["Work", "W = ∫F·dx"],
        ["Conservative force", "A force whose work is independent of path, so it has a potential energy."],
        ["F = −dU/dx", "Force is the negative slope of potential energy."],
        ["Stable equilibrium", "A minimum of U, where the object returns after a small push."],
        ["Power", "P = dW/dt = F·v"],
      ],
      mistakes: [
        "Forgetting the negative sign in F = −dU/dx.",
        "Using W = Fd when the force varies with position. Integrate.",
      ],
      questions: [
        { q: "A force F(x) = 3x² (N) acts from x = 0 to x = 2 m. What is the work done?", choices: ["6 J", "8 J", "12 J", "24 J"], answer: 1, explain: "W = ∫₀² 3x² dx = [x³]₀² = 8 J." },
        { q: "U(x) = 4x² (J). What is the force at x?", choices: ["8x", "−8x", "4x", "−4x³/3"], answer: 1, explain: "F = −dU/dx = −8x." },
        { q: "On a U(x) graph, a stable equilibrium point is located at:", choices: ["A maximum of U", "A minimum of U", "Where U = 0", "Where U is steepest"], answer: 1, explain: "At a minimum, the force points back toward equilibrium on both sides." },
        { q: "A 500 N force pushes a car at a constant 20 m/s in the direction of motion. What is the power delivered?", choices: ["25 W", "10,000 W", "520 W", "480 W"], answer: 1, explain: "P = Fv = 500 × 20 = 10,000 W." },
      ],
      frq: {
        prompt: "A particle moves in a potential U(x) = x³ − 3x (J).\n(a) Find F(x).\n(b) Find the equilibrium positions and classify each.\n(c) The particle has total energy E = 1 J. Can it reach x = 2? Explain.",
        points: [
          "(a) F = −dU/dx = −(3x² − 3) = 3 − 3x².",
          "(b) F = 0 at x = ±1. U″ = 6x: at x = 1, U is a minimum (stable). At x = −1, U is a maximum (unstable).",
          "(c) U(2) = 8 − 6 = 2 J > E = 1 J, so K would be negative there. It can't reach x = 2.",
        ],
      },
    },
    {
      title: "Linear Momentum",
      weightLabel: "CED Unit 4",
      tldr: "Impulse (the integral of force over time) changes momentum. Momentum is conserved for an isolated system, and the center of mass moves as if all the mass and external force were concentrated there.",
      concepts: [
        {
          title: "Impulse as an integral",
          simple: "Impulse is the total push over time: the area under a force–time graph.",
          detail: "J = ∫F dt = Δp. Also F = dp/dt.",
          example: "F = 6t (N) from 0 to 2 s: J = [3t²] = 12 N·s.",
        },
        {
          title: "Conservation of momentum",
          simple: "In an isolated system, total momentum stays constant.",
          detail: "If ΣF_ext = 0, then Σp is conserved, component by component. This applies to collisions and explosions.",
        },
        {
          title: "Collisions",
          simple: "Momentum is conserved in every collision. Kinetic energy is conserved only in elastic ones.",
          detail: "Elastic: KE is conserved. A 1-D elastic collision between equal masses swaps their velocities. Perfectly inelastic: the objects stick together and the most KE is lost.",
        },
        {
          title: "Center of mass",
          simple: "The center of mass is the average position of the mass, and it moves smoothly even when the parts don't.",
          detail: "x_cm = Σmᵢxᵢ/M, or (1/M)∫x dm for continuous objects. M·a_cm = ΣF_ext. With no external force, v_cm is constant.",
        },
      ],
      terms: [
        ["Impulse", "J = ∫F dt = Δp"],
        ["Isolated system", "No net external force, so momentum is conserved."],
        ["Elastic collision", "A collision where total kinetic energy is conserved."],
        ["Center of mass", "The mass-weighted average position, x_cm = Σmx/M."],
        ["Linear mass density", "λ = dm/dx, used in center-of-mass integrals."],
      ],
      mistakes: [
        "Assuming kinetic energy is conserved in all collisions.",
        "Forgetting that momentum is a vector. Use signs for direction.",
      ],
      questions: [
        { q: "F(t) = 6t (N) acts from t = 0 to t = 2 s. What is the impulse?", choices: ["6 N·s", "12 N·s", "24 N·s", "3 N·s"], answer: 1, explain: "J = ∫₀² 6t dt = [3t²]₀² = 12 N·s." },
        { q: "A 2 kg mass is at x = 0 and a 6 kg mass is at x = 4 m. Where is the center of mass?", choices: ["x = 1 m", "x = 2 m", "x = 3 m", "x = 4 m"], answer: 2, explain: "x_cm = (2·0 + 6·4)/8 = 24/8 = 3 m." },
        { q: "Two equal masses collide elastically head-on. One was at rest. After the collision:", choices: ["They stick together", "The moving one stops and the other moves off with its velocity", "Both move at half speed", "Both reverse"], answer: 1, explain: "For an elastic collision of equal masses in 1-D, the velocities are exchanged." },
        { q: "A bomb at rest explodes into pieces. The velocity of the center of mass afterward is:", choices: ["Zero", "Upward", "Equal to the fastest piece's velocity", "Impossible to determine"], answer: 0, explain: "The explosion forces are internal, so v_cm stays 0 (ignoring gravity during the instant of explosion)." },
      ],
      frq: {
        prompt: "A thin rod of length L lies along the x-axis from 0 to L, with linear density λ(x) = αx.\n(a) Find the rod's total mass.\n(b) Find the x-coordinate of its center of mass.\n(c) Explain why the center of mass isn't at L/2.",
        points: [
          "(a) M = ∫₀ᴸ αx dx = αL²/2.",
          "(b) x_cm = (1/M)∫₀ᴸ x·αx dx = (αL³/3)/(αL²/2) = 2L/3.",
          "(c) The density increases with x, so more mass is near the far end, which pulls the center of mass past the midpoint.",
        ],
      },
    },
    {
      title: "Torque and Rotational Dynamics",
      weightLabel: "CED Unit 5",
      tldr: "Rotation mirrors linear motion. Torque causes angular acceleration, and rotational inertia (I = ∫r² dm) plays the role of mass. The parallel-axis theorem shifts I to a new axis.",
      concepts: [
        {
          title: "Rotational kinematics",
          simple: "Spinning motion uses angles, angular velocity and angular acceleration.",
          detail: "ω = dθ/dt and α = dω/dt. The constant-α equations mirror the linear ones. Tangential velocity v = rω, and tangential acceleration a_t = rα.",
        },
        {
          title: "Torque",
          simple: "Torque is how strongly a force twists something around an axis.",
          detail: "τ = r × F, with magnitude rF sin θ. Only the perpendicular component of the force (or the lever arm) matters.",
        },
        {
          title: "Rotational inertia",
          simple: "How hard it is to spin something depends on how far its mass is from the axis.",
          detail: "I = Σmr² = ∫r² dm. Rod about its center: ML²/12. Rod about its end: ML²/3. Parallel-axis theorem: I = I_cm + Md².",
        },
        {
          title: "Newton's second law for rotation and equilibrium",
          simple: "Net torque causes angular acceleration. Balance forces and torques for equilibrium.",
          detail: "τ_net = Iα. Static equilibrium needs ΣF = 0 and Στ = 0 about ANY axis.",
        },
      ],
      terms: [
        ["Angular velocity", "ω = dθ/dt (rad/s)."],
        ["Torque", "τ = rF sin θ, the rotational effect of a force."],
        ["Rotational inertia", "I = ∫r² dm, resistance to angular acceleration."],
        ["Parallel-axis theorem", "I = I_cm + Md²"],
        ["Static equilibrium", "ΣF = 0 and Στ = 0."],
      ],
      mistakes: [
        "Using I = ML²/12 when the axis is at the end (ML²/3).",
        "Forgetting that Md² in the parallel-axis theorem is added to I about the CENTER OF MASS.",
      ],
      questions: [
        { q: "A uniform rod has I_cm = ML²/12. What is I about one end?", choices: ["ML²/12", "ML²/6", "ML²/3", "ML²"], answer: 2, explain: "Parallel axis: ML²/12 + M(L/2)² = ML²/12 + ML²/4 = ML²/3." },
        { q: "A wheel with I = 2 kg·m² has a net torque of 10 N·m. What is its angular acceleration?", choices: ["20 rad/s²", "5 rad/s²", "0.2 rad/s²", "12 rad/s²"], answer: 1, explain: "α = τ/I = 10/2 = 5 rad/s²." },
        { q: "A force is applied along a line passing through the pivot. The torque is:", choices: ["Maximum", "Zero", "Equal to the force", "Negative"], answer: 1, explain: "The lever arm is zero (sin θ = 0), so τ = 0." },
        { q: "For static equilibrium, torques must sum to zero about:", choices: ["Only the center of mass", "Only the pivot", "Any axis", "The point of largest force"], answer: 2, explain: "If ΣF = 0 and Στ = 0 about one point, Στ = 0 about every point." },
      ],
      frq: {
        prompt: "A uniform rod of mass M and length L is pivoted at one end and released from rest in a horizontal position.\n(a) Find the torque about the pivot just after release.\n(b) Find the initial angular acceleration.\n(c) Find the linear acceleration of the free end, and compare it to g.",
        points: [
          "(a) The weight acts at L/2: τ = Mg(L/2).",
          "(b) α = τ/I = (MgL/2)/(ML²/3) = 3g/(2L).",
          "(c) a_end = Lα = 3g/2, which is GREATER than g.",
        ],
      },
    },
    {
      title: "Energy and Momentum of Rotating Systems",
      weightLabel: "CED Unit 6",
      tldr: "Rotating objects carry rotational kinetic energy (½Iω²) and angular momentum (L = Iω). Rolling combines translation and rotation. Angular momentum is conserved when the net external torque is zero.",
      concepts: [
        {
          title: "Rotational kinetic energy and rolling",
          simple: "A rolling object has energy from moving forward and from spinning.",
          detail: "K = ½Mv² + ½Iω², with v = ωR for rolling without slipping. Energy conservation down a ramp: a smaller I/(MR²) means faster.",
          example: "Rolling solid disk (I = ½MR²): rotational KE is 1/3 of the total KE.",
        },
        {
          title: "Angular momentum",
          simple: "Spinning objects keep spinning unless an outside twist acts on them.",
          detail: "Rigid body: L = Iω. Point particle: L = r × p, with magnitude mvr sin θ. τ_net = dL/dt.",
        },
        {
          title: "Conservation of angular momentum",
          simple: "If no outside torque acts, a spinning system keeps the same angular momentum.",
          detail: "If τ_ext = 0, then I₁ω₁ = I₂ω₂. Examples: a skater pulling their arms in, a clay ball sticking to a rotating rod, orbits. KE may change even though L is conserved.",
        },
        {
          title: "Work and power in rotation",
          simple: "Torque does work when it turns something through an angle.",
          detail: "W = ∫τ dθ and P = τω. W_net = ΔK_rot.",
        },
      ],
      terms: [
        ["Rotational kinetic energy", "½Iω²"],
        ["Rolling without slipping", "v_cm = ωR"],
        ["Angular momentum", "L = Iω, or r × p for a particle."],
        ["Angular impulse", "∫τ dt = ΔL"],
        ["Rotational power", "P = τω"],
      ],
      mistakes: [
        "Assuming kinetic energy is conserved whenever angular momentum is.",
        "Forgetting a point particle can have angular momentum (mvr) about an axis even while moving in a straight line.",
      ],
      questions: [
        { q: "A solid disk (I = ½MR²) rolls without slipping. What fraction of its kinetic energy is rotational?", choices: ["1/4", "1/3", "1/2", "2/3"], answer: 1, explain: "K_rot = ½(½MR²)(v/R)² = ¼Mv². Total = ½Mv² + ¼Mv² = ¾Mv². Ratio = 1/3." },
        { q: "A 2 kg particle moves at 3 m/s in a straight line whose closest distance to a point is 4 m. What is its angular momentum about that point?", choices: ["6 kg·m²/s", "24 kg·m²/s", "12 kg·m²/s", "0"], answer: 1, explain: "L = mvr⊥ = 2 × 3 × 4 = 24." },
        { q: "A spinning skater pulls her arms in (no external torque). Her rotational kinetic energy:", choices: ["Decreases", "Stays the same", "Increases", "Becomes zero"], answer: 2, explain: "L is constant, and K = L²/(2I), so a smaller I means larger K. Her muscles do the work." },
        { q: "A motor applies 50 N·m of torque to a wheel spinning at 10 rad/s. What is the power?", choices: ["5 W", "60 W", "500 W", "0.2 W"], answer: 2, explain: "P = τω = 50 × 10 = 500 W." },
      ],
      frq: {
        prompt: "A solid sphere (I = (2/5)MR²) rolls without slipping from rest down a ramp of height h.\n(a) Write the energy conservation equation.\n(b) Derive the speed at the bottom.\n(c) Compare with a hoop of the same mass and radius. Which arrives first, and why?",
        points: [
          "(a) Mgh = ½Mv² + ½(2/5 MR²)(v/R)².",
          "(b) Mgh = (7/10)Mv², so v = √(10gh/7).",
          "(c) The sphere arrives first. The hoop's I = MR² puts more energy into rotation, leaving less for translation (v = √(gh)).",
        ],
      },
    },
    {
      title: "Oscillations",
      weightLabel: "CED Unit 7",
      tldr: "Simple harmonic motion comes from a restoring force proportional to displacement, which gives the differential equation d²x/dt² = −ω²x. Its solution is sinusoidal, and the period depends on the system's properties, not the amplitude.",
      concepts: [
        {
          title: "The SHM differential equation",
          simple: "When the restoring force is proportional to displacement, the motion is a perfect sine wave.",
          detail: "m d²x/dt² = −kx, so d²x/dt² = −(k/m)x. The solution is x(t) = A cos(ωt + φ) with ω = √(k/m). Period T = 2π/ω.",
        },
        {
          title: "Velocity and acceleration in SHM",
          simple: "Speed is fastest at the center, and acceleration is largest at the ends.",
          detail: "v(t) = −Aω sin(ωt + φ), so v_max = Aω. a(t) = −Aω² cos(ωt + φ), so a_max = Aω².",
        },
        {
          title: "Pendulums",
          simple: "A swinging pendulum is approximately SHM for small angles.",
          detail: "Simple pendulum: T = 2π√(L/g). Physical pendulum: T = 2π√(I/(mgd)), where d is the distance from the pivot to the center of mass.",
        },
        {
          title: "Energy in SHM",
          simple: "Energy moves back and forth between motion and storage, but the total stays constant.",
          detail: "E = ½kA² = ½mv² + ½kx². KE is maximum at x = 0, and PE is maximum at x = ±A.",
        },
      ],
      terms: [
        ["Angular frequency", "ω = √(k/m) for a spring."],
        ["Amplitude", "The maximum displacement, A."],
        ["Phase constant", "φ, which sets the starting point in the cycle."],
        ["Physical pendulum", "A rigid body swinging about a pivot: T = 2π√(I/mgd)."],
        ["Simple harmonic motion", "Motion satisfying d²x/dt² = −ω²x."],
      ],
      mistakes: [
        "Thinking amplitude changes the period. For ideal SHM it doesn't.",
        "Mixing up ω (rad/s) and f (Hz): ω = 2πf.",
      ],
      questions: [
        { q: "A mass on a spring obeys d²x/dt² = −25x. What is its angular frequency?", choices: ["25 rad/s", "5 rad/s", "625 rad/s", "2π/5 rad/s"], answer: 1, explain: "ω² = 25, so ω = 5 rad/s." },
        { q: "x(t) = 0.2 cos(10t) (m). What is the maximum speed?", choices: ["0.2 m/s", "2 m/s", "10 m/s", "20 m/s"], answer: 1, explain: "v_max = Aω = 0.2 × 10 = 2 m/s." },
        { q: "The amplitude of a spring oscillator doubles. Its period:", choices: ["Doubles", "Halves", "Stays the same", "Increases by √2"], answer: 2, explain: "T = 2π√(m/k) doesn't depend on amplitude." },
        { q: "Where is the kinetic energy of a mass in SHM greatest?", choices: ["At maximum displacement", "At equilibrium (x = 0)", "Halfway to maximum", "It's constant"], answer: 1, explain: "At x = 0 the potential energy is zero, so all the energy is kinetic." },
      ],
      frq: {
        prompt: "A uniform rod of mass M and length L swings as a physical pendulum from one end.\n(a) Write I about the pivot.\n(b) Derive the period for small oscillations.\n(c) Compare it with a simple pendulum of length L.",
        points: [
          "(a) I = ML²/3.",
          "(b) T = 2π√(I/(Mgd)) with d = L/2: T = 2π√((ML²/3)/(MgL/2)) = 2π√(2L/(3g)).",
          "(c) It's shorter than a simple pendulum's 2π√(L/g), because the rod's mass is distributed closer to the pivot.",
        ],
      },
    },
  ],
};
