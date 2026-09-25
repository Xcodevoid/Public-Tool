window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["physics-1"] = {
  tips: [
    "Start every force problem with a free-body diagram. Draw only forces that act ON the object, each starting at the object.",
    "Choose your system on purpose. Momentum and energy are conserved only for the system you define, and only when no outside forces or work change it.",
    "Free-response questions reward reasoning. Say which principle you're using (\"energy is conserved because only gravity does work\") before doing the math.",
    "Check units and do a quick sanity check. A car moving at 400 m/s means something went wrong.",
    "You get an equation sheet and a calculator, so don't memorize formulas. Practice knowing WHEN each one applies.",
    "These examples use g ≈ 10 m/s² to keep the numbers clean. The exam accepts 9.8 or 10.",
  ],
  units: [
    {
      title: "Kinematics",
      weight: "10–15%",
      tldr: "Kinematics describes motion (position, velocity and acceleration) without asking what causes it. Graphs and a few equations for constant acceleration handle nearly every problem, including projectiles.",
      concepts: [
        {
          title: "Position, velocity and acceleration",
          simple: "Velocity is how fast your position changes (and in which direction). Acceleration is how fast your velocity changes.",
          detail: "Displacement Δx is a vector: the change in position. Distance is the total path length. Average velocity = Δx/Δt. Acceleration = Δv/Δt. An object slows down when its velocity and acceleration point in opposite directions.",
        },
        {
          title: "Reading motion graphs",
          simple: "Graphs tell the story of the motion: the slope of one graph is the height of the next.",
          detail: "Slope of x–t = velocity. Slope of v–t = acceleration. Area under v–t = displacement. Area under a–t = change in velocity.",
          hook: "Slope goes DOWN the chain (x → v → a). Area goes back UP (a → v → x).",
        },
        {
          title: "The constant-acceleration equations",
          simple: "When acceleration is steady, three equations connect time, speed and distance. Pick the one that has the quantities you know.",
          detail: "v = v₀ + at\nx = x₀ + v₀t + ½at²\nv² = v₀² + 2aΔx\nThey only work when acceleration is constant.",
          example: "A car speeds up from 10 m/s to 30 m/s in 4 s: a = (30 − 10)/4 = 5 m/s².",
        },
        {
          title: "Projectile motion",
          simple: "Sideways and up-and-down motion happen independently. Gravity only affects the up-and-down part.",
          detail: "Horizontal: constant velocity (a = 0). Vertical: a = −g. Time links the two directions. At the top of the path, vertical velocity = 0 but horizontal velocity is unchanged and acceleration is still g downward.",
          example: "A ball dropped and a ball thrown sideways from the same height hit the ground at the same time.",
        },
      ],
      terms: [
        ["Displacement", "Change in position, a vector: Δx = x_f − x_i."],
        ["Velocity", "Rate of change of position, with direction."],
        ["Acceleration", "Rate of change of velocity."],
        ["Free fall", "Motion under gravity alone: a = g ≈ 10 m/s² downward."],
        ["Projectile", "An object moving under gravity alone after launch."],
        ["Reference frame", "The viewpoint from which motion is measured. Velocities depend on it."],
      ],
      mistakes: [
        "Saying acceleration is zero at the top of a throw. Velocity is zero there; acceleration is still g downward.",
        "Using the constant-acceleration equations when acceleration changes.",
        "Mixing horizontal and vertical quantities in the same equation.",
      ],
      questions: [
        { q: "A ball is dropped from rest. Ignoring air resistance, what is its speed after 2 s? (g = 10 m/s²)", choices: ["5 m/s", "10 m/s", "20 m/s", "40 m/s"], answer: 2, explain: "v = v₀ + gt = 0 + 10(2) = 20 m/s." },
        { q: "On a velocity–time graph, what does the area between the line and the time axis represent?", choices: ["Acceleration", "Displacement", "Force", "Speed at the end"], answer: 1, explain: "Area under v–t = velocity × time = displacement. The slope would give acceleration." },
        { q: "At the highest point of a projectile's path, which is true?", choices: ["Velocity and acceleration are both zero", "Vertical velocity is zero; acceleration is g downward", "Horizontal velocity is zero", "Acceleration is zero; velocity is horizontal"], answer: 1, explain: "Only the vertical part of velocity is zero at the top. Gravity never switches off, so a = g downward the entire time." },
        { q: "Ball A is dropped and ball B is thrown horizontally from the same height at the same moment. Which lands first?", choices: ["A", "B", "They land together", "It depends on B's speed"], answer: 2, explain: "Both start with zero vertical velocity and have the same vertical acceleration, so their fall times are equal." },
      ],
      frq: {
        prompt: "A ball is thrown horizontally at 15 m/s from the top of a 20 m cliff. Use g = 10 m/s².\n(a) How long is the ball in the air?\n(b) How far from the base of the cliff does it land?\n(c) What is its speed just before it hits the ground?",
        points: [
          "(a) Vertical: 20 = ½(10)t², so t = 2 s. States that the horizontal speed doesn't affect fall time.",
          "(b) Horizontal: x = v·t = 15 × 2 = 30 m.",
          "(c) v_y = gt = 20 m/s and v_x = 15 m/s, so speed = √(15² + 20²) = 25 m/s.",
        ],
      },
    },
    {
      title: "Force and Translational Dynamics",
      weight: "18–23%",
      tldr: "Forces cause changes in motion. Newton's laws, together with free-body diagrams, connect the net force on an object to its acceleration. Friction, gravity, springs and circular motion are all applications.",
      concepts: [
        {
          title: "Newton's three laws",
          simple: "Things keep doing what they're doing unless pushed. A bigger net push gives more acceleration. Every push comes with an equal push back.",
          detail: "1st law: net force = 0 means constant velocity (possibly zero). 2nd law: a = F_net/m. 3rd law: if A pushes B, B pushes A with a force of equal size in the opposite direction. The two forces act on DIFFERENT objects, so they never cancel each other.",
        },
        {
          title: "Free-body diagrams",
          simple: "Draw a dot for the object and an arrow for every force acting on it. Then add them up.",
          detail: "Common forces: weight mg (down), normal force (perpendicular to the surface), tension (along the rope), friction (parallel to the surface, opposing sliding). Resolve forces into components and write ΣF = ma for each axis.",
        },
        {
          title: "Friction and springs",
          simple: "Friction resists sliding. A spring pushes back harder the more you stretch or squeeze it.",
          detail: "Static friction: f_s ≤ μ_s·N, with whatever size is needed to prevent sliding. Kinetic friction: f_k = μ_k·N. Spring (Hooke's law): F = −kx.",
        },
        {
          title: "Gravity and circular motion",
          simple: "Gravity pulls every mass toward every other mass. Moving in a circle requires a net force pointing toward the center.",
          detail: "F_g = Gm₁m₂/r², an inverse-square law. Near Earth, F = mg. Circular motion: a_c = v²/r toward the center, so F_net = mv²/r. \"Centripetal force\" is not a new force. It's whatever real force (tension, friction, gravity) points toward the center.",
          example: "A car rounding a flat curve: static friction provides the centripetal force.",
        },
      ],
      terms: [
        ["Net force", "The vector sum of all forces on an object."],
        ["Inertia", "An object's resistance to changes in its motion. It depends on mass."],
        ["Normal force", "The contact force perpendicular to a surface."],
        ["Coefficient of friction (μ)", "The ratio of friction force to normal force."],
        ["Centripetal acceleration", "a = v²/r, directed toward the center of the circle."],
        ["Newton's third-law pair", "Equal and opposite forces that act on two different objects."],
      ],
      mistakes: [
        "Drawing a \"force of motion\" in the direction of travel. Moving objects don't need a forward force.",
        "Assuming the normal force always equals mg. It doesn't on ramps, in accelerating elevators, or when other vertical forces act.",
        "Thinking third-law pairs cancel. They act on different objects.",
      ],
      questions: [
        { q: "An object moves at constant velocity. What is the net force on it?", choices: ["Zero", "In the direction of motion", "Opposite the motion", "Equal to its weight"], answer: 0, explain: "Newton's 1st law: constant velocity means zero acceleration, so the net force is zero." },
        { q: "A truck collides with a small car. How does the force on the car compare to the force on the truck?", choices: ["Larger", "Smaller", "Equal in size", "Zero"], answer: 2, explain: "Newton's 3rd law: the forces are equal and opposite. The car accelerates more because it has less mass." },
        { q: "A 2 kg block is pushed with 10 N across a floor with 4 N of kinetic friction. What is its acceleration?", choices: ["2 m/s²", "3 m/s²", "5 m/s²", "7 m/s²"], answer: 1, explain: "F_net = 10 − 4 = 6 N, so a = 6/2 = 3 m/s²." },
        { q: "The distance between two masses doubles. The gravitational force between them becomes:", choices: ["2 times larger", "1/2 as large", "1/4 as large", "4 times larger"], answer: 2, explain: "Inverse-square law: F ∝ 1/r². Doubling r divides F by 2² = 4." },
        { q: "You stand on a scale in an elevator that is accelerating upward. The scale reads:", choices: ["More than your weight", "Less than your weight", "Exactly your weight", "Zero"], answer: 0, explain: "N − mg = ma with a > 0, so N = m(g + a), which is greater than mg." },
      ],
      frq: {
        prompt: "A 5 kg box on a horizontal floor is pulled by a horizontal 30 N rope. The coefficient of kinetic friction is 0.2 (g = 10 m/s²).\n(a) Draw and label a free-body diagram.\n(b) Calculate the friction force.\n(c) Calculate the box's acceleration.",
        points: [
          "(a) Four forces: weight (down), normal (up), tension (horizontal, 30 N), kinetic friction (opposite the motion).",
          "(b) N = mg = 50 N, so f = μN = 0.2 × 50 = 10 N.",
          "(c) a = (30 − 10)/5 = 4 m/s² in the direction of the pull.",
        ],
      },
    },
    {
      title: "Work, Energy, and Power",
      weight: "18–23%",
      tldr: "Energy is a quantity that is conserved: it changes form but the total stays constant. Work is how forces transfer energy into or out of a system. Power is how fast that transfer happens.",
      concepts: [
        {
          title: "Work",
          simple: "A force does work when it pushes something along the direction it moves.",
          detail: "W = Fd·cos θ, where θ is the angle between the force and the displacement. A force perpendicular to the motion (like the normal force on a level floor) does zero work. Negative work removes energy.",
        },
        {
          title: "Kinetic and potential energy",
          simple: "Moving things have kinetic energy. Raised or stretched things have stored (potential) energy.",
          detail: "KE = ½mv². Gravitational PE = mgh. Spring PE = ½kx². Work-energy theorem: W_net = ΔKE.",
          hook: "Double the speed means FOUR times the kinetic energy, because v is squared.",
        },
        {
          title: "Conservation of energy",
          simple: "Energy isn't created or destroyed. It moves between forms: height turns into speed, speed turns into heat.",
          detail: "If only conservative forces (gravity, springs) do work, KE + PE stays constant. Friction converts mechanical energy into thermal energy: E_initial + W_external = E_final. Always define your system first.",
          example: "Dropped from 5 m: mgh = ½mv², so v = √(2gh) = √100 = 10 m/s.",
        },
        {
          title: "Power",
          simple: "Power measures how quickly work gets done.",
          detail: "P = W/t = ΔE/t, and also P = Fv. Units: watts (J/s).",
        },
      ],
      terms: [
        ["Work", "Energy transferred by a force: W = Fd cos θ."],
        ["Kinetic energy", "Energy of motion: ½mv²."],
        ["Potential energy", "Energy stored by position or configuration."],
        ["Conservative force", "A force whose work doesn't depend on the path, such as gravity or a spring."],
        ["Mechanical energy", "KE + PE."],
        ["Power", "The rate of doing work, in watts (J/s)."],
      ],
      mistakes: [
        "Thinking that holding something heavy still counts as work. No displacement means no work.",
        "Forgetting that friction removes mechanical energy (turning it into heat).",
        "Using h as total path length instead of vertical height.",
      ],
      questions: [
        { q: "A ball is dropped from 5 m. What is its speed just before it lands? (g = 10 m/s², no air resistance)", choices: ["5 m/s", "7 m/s", "10 m/s", "50 m/s"], answer: 2, explain: "mgh = ½mv², so v = √(2gh) = √(2·10·5) = 10 m/s. Mass cancels out." },
        { q: "A box slides across a level floor. How much work does the normal force do?", choices: ["Positive work", "Negative work", "Zero work", "Work equal to mgh"], answer: 2, explain: "The normal force is perpendicular to the displacement, and cos 90° = 0." },
        { q: "If a cart's speed doubles, its kinetic energy:", choices: ["Doubles", "Triples", "Quadruples", "Stays the same"], answer: 2, explain: "KE ∝ v², and 2² = 4." },
        { q: "A crane lifts 50 kg up 2 m in 4 s at constant speed. What is its power output? (g = 10 m/s²)", choices: ["25 W", "100 W", "250 W", "1000 W"], answer: 2, explain: "W = mgh = 50·10·2 = 1000 J, so P = 1000/4 = 250 W." },
      ],
      frq: {
        prompt: "A 2 kg block slides from rest down a frictionless ramp from a height of 5 m. At the bottom it slides onto a rough horizontal floor (μ_k = 0.25) and comes to a stop. Use g = 10 m/s².\n(a) What is the block's speed at the bottom of the ramp?\n(b) How far does it slide on the rough floor?\n(c) Where did the block's original energy go?",
        points: [
          "(a) mgh = ½mv², so v = √(2·10·5) = 10 m/s (KE = 100 J).",
          "(b) Friction = 0.25 × 20 = 5 N. Using friction's work: 5·d = 100 J, so d = 20 m.",
          "(c) Gravitational PE became KE on the ramp, then friction converted it into thermal energy of the block and floor.",
        ],
      },
    },
    {
      title: "Linear Momentum",
      weight: "10–15%",
      tldr: "Momentum is mass times velocity. Impulse (force × time) changes momentum. In any collision, if no outside forces act on the system, its total momentum stays the same.",
      concepts: [
        {
          title: "Momentum and impulse",
          simple: "Momentum is \"mass in motion.\" To change it, you need a force applied for some amount of time.",
          detail: "p = mv (a vector). Impulse J = F·Δt = Δp, which equals the area under a force–time graph.",
          example: "Airbags increase the stopping time Δt, which reduces the force F needed for the same change in momentum.",
        },
        {
          title: "Conservation of momentum",
          simple: "When objects push on each other, whatever momentum one gains, the other loses.",
          detail: "If the net external force on a system is zero, total momentum before = total momentum after: m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′. This applies to collisions AND explosions or recoil.",
        },
        {
          title: "Elastic vs. inelastic collisions",
          simple: "Momentum is conserved in every collision. Kinetic energy is conserved only in perfectly bouncy (elastic) ones.",
          detail: "Elastic: KE conserved. Inelastic: some KE turns into heat, sound or deformation. Perfectly inelastic: the objects stick together, which loses the most KE.",
        },
        {
          title: "Center of mass",
          simple: "A system's average position, weighted by mass.",
          detail: "If there's no external force, the center of mass moves at constant velocity, even when the objects in the system collide or explode.",
        },
      ],
      terms: [
        ["Momentum", "p = mv, measured in kg·m/s."],
        ["Impulse", "J = FΔt = change in momentum."],
        ["Isolated system", "A system with no net external force, so its momentum is conserved."],
        ["Elastic collision", "A collision where kinetic energy is conserved."],
        ["Perfectly inelastic collision", "Objects stick together, and the most kinetic energy is lost."],
      ],
      mistakes: [
        "Thinking KE is conserved in all collisions. Only momentum always is (for an isolated system).",
        "Forgetting momentum is a vector. Motion to the left needs a negative sign.",
      ],
      questions: [
        { q: "An airbag reduces injury mainly because it:", choices: ["Reduces the change in momentum", "Increases the collision time, reducing the force", "Increases the passenger's mass", "Removes the passenger's kinetic energy instantly"], answer: 1, explain: "Δp is fixed (from moving to stopped). A larger Δt means a smaller F, since FΔt = Δp." },
        { q: "A 2 kg cart at 3 m/s hits and sticks to a 1 kg cart at rest. What is their final speed?", choices: ["1 m/s", "1.5 m/s", "2 m/s", "3 m/s"], answer: 2, explain: "Momentum: 2·3 = 3·v, so v = 2 m/s." },
        { q: "A 60 kg skater at rest throws a 2 kg ball forward at 6 m/s. What is the skater's recoil speed?", choices: ["0.1 m/s", "0.2 m/s", "2 m/s", "6 m/s"], answer: 1, explain: "Total momentum stays 0: 60v = 2·6, so v = 0.2 m/s backward." },
        { q: "A force–time graph is a triangle with a peak of 10 N lasting 0.4 s. What is the impulse?", choices: ["2 N·s", "4 N·s", "10 N·s", "25 N·s"], answer: 0, explain: "Area = ½ × 0.4 × 10 = 2 N·s." },
      ],
      frq: {
        prompt: "A 1 kg cart moving at 4 m/s collides with a 3 kg cart at rest. They stick together.\n(a) Find their velocity after the collision.\n(b) Compare the total kinetic energy before and after.\n(c) Classify the collision and explain where the energy went.",
        points: [
          "(a) 1·4 = 4·v, so v = 1 m/s.",
          "(b) Before: ½·1·16 = 8 J. After: ½·4·1 = 2 J. So 6 J of KE was lost.",
          "(c) Perfectly inelastic (they stuck together). The lost KE became thermal energy, sound and deformation.",
        ],
      },
    },
    {
      title: "Torque and Rotational Dynamics",
      weight: "10–15%",
      tldr: "Rotation has its own version of each linear quantity. Torque plays the role of force, rotational inertia plays the role of mass, and angular acceleration plays the role of acceleration. Objects in equilibrium have zero net force AND zero net torque.",
      concepts: [
        {
          title: "Rotational kinematics",
          simple: "Spinning motion uses angles instead of distances, but the equations look the same.",
          detail: "θ (rad), ω (rad/s), α (rad/s²). The linear equations carry over with x→θ, v→ω, a→α. A point at radius r has speed v = rω.",
        },
        {
          title: "Torque",
          simple: "Torque is a force's ability to twist something. Pushing farther from the pivot twists more.",
          detail: "τ = rF sin θ, where r is the distance from the axis and θ is the angle between r and F. Longer lever arm → more torque.",
          example: "Door handles are placed far from the hinges so a small push gives a large torque.",
        },
        {
          title: "Rotational inertia and Newton's 2nd law for rotation",
          simple: "Mass far from the axis is harder to spin up or slow down.",
          detail: "I = Σmr². A hoop has a larger I than a solid disk of the same mass and radius. α = τ_net/I.",
        },
        {
          title: "Static equilibrium",
          simple: "Something perfectly balanced doesn't slide and doesn't rotate.",
          detail: "ΣF = 0 AND Στ = 0 about ANY point. Choose the pivot where an unknown force acts, which removes that unknown from the torque equation.",
          example: "Seesaw: 30 kg at 2 m balances 40 kg at 1.5 m (30·2 = 40·1.5).",
        },
      ],
      terms: [
        ["Torque (τ)", "A force's rotational effect: τ = rF sin θ."],
        ["Lever arm", "The perpendicular distance from the axis to the force's line of action."],
        ["Rotational inertia (I)", "Resistance to angular acceleration. It depends on mass AND how that mass is distributed."],
        ["Angular velocity (ω)", "The rate of rotation, in rad/s."],
        ["Static equilibrium", "Net force and net torque both zero."],
      ],
      mistakes: [
        "Thinking I depends only on mass. Where the mass sits relative to the axis matters just as much.",
        "Forgetting torque direction (clockwise vs. counterclockwise) when adding torques.",
      ],
      questions: [
        { q: "Why is a longer wrench better for loosening a tight bolt?", choices: ["It increases the force", "It increases the lever arm, which increases torque", "It reduces friction", "It decreases rotational inertia"], answer: 1, explain: "τ = rF. A bigger r gives more torque for the same force." },
        { q: "A 30 kg child sits 2 m from a seesaw's pivot. Where must a 40 kg child sit on the other side to balance?", choices: ["1.0 m", "1.5 m", "2.0 m", "2.7 m"], answer: 1, explain: "30·2 = 40·d, so d = 1.5 m." },
        { q: "A hoop and a solid disk have the same mass and radius. Which has the greater rotational inertia about its center?", choices: ["The hoop", "The disk", "They're equal", "It depends on their speed"], answer: 0, explain: "All of the hoop's mass is at the maximum radius, so its I = MR², while the disk's I = ½MR²." },
        { q: "If the net torque on a wheel doubles, its angular acceleration:", choices: ["Halves", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "α = τ/I, so it's proportional to torque." },
      ],
      frq: {
        prompt: "A light meter stick is balanced on a pivot at its center. A 2 kg mass hangs 0.30 m to the left of the pivot.\n(a) Where must a 3 kg mass hang to balance the stick?\n(b) State the two conditions for static equilibrium.\n(c) What force does the pivot exert? (g = 10 m/s²)",
        points: [
          "(a) Torques balance: 2·0.30 = 3·d, so d = 0.20 m to the right of the pivot.",
          "(b) Net force = 0 and net torque = 0.",
          "(c) Pivot force = total weight = (2 + 3)·10 = 50 N upward.",
        ],
      },
    },
    {
      title: "Energy and Momentum of Rotating Systems",
      weight: "5–8%",
      tldr: "Spinning objects carry rotational kinetic energy and angular momentum. When there's no external torque, angular momentum is conserved. That's why a skater spins faster after pulling their arms in.",
      concepts: [
        {
          title: "Rotational kinetic energy and rolling",
          simple: "A spinning object has energy from spinning. A rolling ball has energy from both moving forward and spinning.",
          detail: "KE_rot = ½Iω². Rolling without slipping: v = ωR, and KE_total = ½mv² + ½Iω². Objects with a smaller I (relative to mR²) put less energy into spinning, so they roll downhill faster.",
          example: "A solid sphere beats a hoop in a race down a ramp.",
        },
        {
          title: "Angular momentum",
          simple: "Spinning objects keep spinning unless an outside twist (torque) acts on them.",
          detail: "L = Iω. Angular impulse: τΔt = ΔL. If the net external torque is 0, L is conserved: I₁ω₁ = I₂ω₂.",
          hook: "Arms in → I decreases → ω increases.",
        },
        {
          title: "Orbits",
          simple: "Planets speed up when they're closer to the Sun.",
          detail: "Gravity from the Sun exerts no torque about the Sun, so a planet's angular momentum is conserved. A smaller r means a larger speed. In a circular orbit, gravity provides the centripetal force.",
        },
      ],
      terms: [
        ["Rotational kinetic energy", "½Iω²"],
        ["Angular momentum", "L = Iω"],
        ["Rolling without slipping", "v = ωR. The contact point is momentarily at rest."],
        ["Angular impulse", "τΔt, which equals the change in angular momentum."],
      ],
      mistakes: [
        "Assuming kinetic energy is conserved when a skater pulls their arms in. KE increases, because muscles do work.",
        "Ignoring rotational KE for rolling objects.",
      ],
      questions: [
        { q: "A spinning skater pulls her arms in. Her angular velocity:", choices: ["Decreases", "Increases", "Stays the same", "Becomes zero"], answer: 1, explain: "L = Iω is conserved. When I decreases, ω must increase." },
        { q: "A solid sphere and a hoop of equal mass and radius roll from rest down the same ramp. Which reaches the bottom first?", choices: ["The sphere", "The hoop", "They tie", "It depends on the mass"], answer: 0, explain: "The sphere has a smaller I, so more of its energy goes into forward motion." },
        { q: "If a flywheel's angular speed doubles, its rotational KE:", choices: ["Doubles", "Quadruples", "Halves", "Stays the same"], answer: 1, explain: "KE_rot ∝ ω²." },
        { q: "A comet moves fastest when it is:", choices: ["Farthest from the Sun", "Closest to the Sun", "Moving perpendicular to the Sun", "Always at the same speed"], answer: 1, explain: "Angular momentum is conserved. A smaller distance requires a larger speed." },
      ],
      frq: {
        prompt: "A skater spins with rotational inertia 4.0 kg·m² at 2.0 rad/s. She pulls her arms in, reducing her rotational inertia to 1.6 kg·m².\n(a) Find her new angular speed.\n(b) Compare her rotational kinetic energy before and after.\n(c) Explain the change in energy.",
        points: [
          "(a) 4.0·2.0 = 1.6·ω, so ω = 5.0 rad/s.",
          "(b) Before: ½·4·4 = 8 J. After: ½·1.6·25 = 20 J.",
          "(c) KE increased because her muscles did work pulling her arms inward. Angular momentum was conserved, but kinetic energy was not.",
        ],
      },
    },
    {
      title: "Oscillations",
      weight: "5–8%",
      tldr: "Simple harmonic motion happens when a restoring force pulls an object back toward equilibrium in proportion to how far it has been displaced. Springs and pendulums both do this. Their period depends on the setup, not on how far you pull them.",
      concepts: [
        {
          title: "Simple harmonic motion",
          simple: "Pull it back, let go, and it swings back and forth in a steady rhythm.",
          detail: "The restoring force is proportional to displacement: F = −kx. The position graph is a sine or cosine curve. Period T = time for one cycle. Frequency f = 1/T.",
        },
        {
          title: "Period of springs and pendulums",
          simple: "A heavier mass on a spring swings slower. A longer pendulum swings slower. How far you pull it doesn't matter.",
          detail: "Spring: T = 2π√(m/k). Pendulum (small angles): T = 2π√(L/g). Neither depends on amplitude, and a pendulum's period doesn't depend on its mass.",
        },
        {
          title: "Energy in SHM",
          simple: "Energy sloshes back and forth between motion and storage.",
          detail: "At the extremes: v = 0, all energy is PE. At equilibrium: maximum speed, all energy is KE. Total E = ½kA².",
        },
      ],
      terms: [
        ["Simple harmonic motion", "Oscillation caused by a restoring force proportional to displacement."],
        ["Amplitude (A)", "The maximum displacement from equilibrium."],
        ["Period (T)", "The time for one full cycle."],
        ["Frequency (f)", "Cycles per second: f = 1/T."],
        ["Restoring force", "A force directed back toward equilibrium."],
      ],
      mistakes: [
        "Thinking a bigger amplitude means a longer period. For SHM, the period is independent of amplitude.",
        "Thinking a pendulum's period depends on its mass.",
      ],
      questions: [
        { q: "The mass on a spring is quadrupled. Its period:", choices: ["Is halved", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "T ∝ √m, and √4 = 2." },
        { q: "On the Moon (lower g), a pendulum's period compared to Earth is:", choices: ["Longer", "Shorter", "The same", "Zero"], answer: 0, explain: "T = 2π√(L/g). A smaller g gives a larger T." },
        { q: "Where is a mass on a spring moving fastest?", choices: ["At maximum stretch", "At maximum compression", "At the equilibrium position", "Its speed is constant"], answer: 2, explain: "All the energy is kinetic at equilibrium." },
        { q: "The amplitude of a pendulum's (small) swing doubles. Its period:", choices: ["Doubles", "Halves", "Stays the same", "Quadruples"], answer: 2, explain: "For small angles, the period doesn't depend on amplitude." },
      ],
      frq: {
        prompt: "A 0.5 kg mass on a spring (k = 50 N/m) oscillates with an amplitude of 0.10 m on a frictionless surface.\n(a) Find the period.\n(b) Find the total mechanical energy.\n(c) Find the maximum speed.",
        points: [
          "(a) T = 2π√(0.5/50) = 2π(0.1) ≈ 0.63 s.",
          "(b) E = ½kA² = ½·50·0.01 = 0.25 J.",
          "(c) At equilibrium all the energy is kinetic: ½(0.5)v² = 0.25, so v² = 1 and v = 1.0 m/s.",
        ],
      },
    },
    {
      title: "Fluids",
      weight: "10–15%",
      tldr: "Fluids push with pressure that increases with depth. The buoyant force equals the weight of the fluid an object displaces. Moving fluids speed up in narrow spots, and faster flow means lower pressure (Bernoulli).",
      concepts: [
        {
          title: "Density and pressure",
          simple: "Pressure is force spread over area. The deeper you go in a fluid, the more fluid is pressing down on you.",
          detail: "ρ = m/V. P = F/A. With depth: P = P₀ + ρgh. Gauge pressure = ρgh (the pressure above atmospheric).",
          example: "10 m below the surface of water: ρgh = 1000·10·10 = 100,000 Pa, about 1 extra atmosphere.",
        },
        {
          title: "Buoyancy (Archimedes' principle)",
          simple: "Water pushes up on anything in it with a force equal to the weight of the water it moved aside.",
          detail: "F_b = ρ_fluid·V_submerged·g. A floating object has F_b = its weight. Fraction submerged = ρ_object/ρ_fluid.",
        },
        {
          title: "Continuity and Bernoulli's equation",
          simple: "Squeeze a hose and the water shoots out faster. Where fluid moves faster, its pressure is lower.",
          detail: "Continuity: A₁v₁ = A₂v₂. Bernoulli: P + ½ρv² + ρgh = constant along a streamline. This is conservation of energy applied to fluids.",
        },
      ],
      terms: [
        ["Density", "Mass per volume: ρ = m/V."],
        ["Pressure", "Force per area, in pascals (N/m²)."],
        ["Buoyant force", "The upward force equal to the weight of the displaced fluid."],
        ["Continuity equation", "A₁v₁ = A₂v₂ for an incompressible fluid."],
        ["Bernoulli's principle", "Faster-moving fluid has lower pressure."],
      ],
      mistakes: [
        "Using the object's density in the buoyant force formula. Use the FLUID's density.",
        "Using the object's total volume when it's only partly submerged.",
      ],
      questions: [
        { q: "What is the gauge pressure 10 m below the surface of water? (ρ = 1000 kg/m³, g = 10 m/s²)", choices: ["1,000 Pa", "10,000 Pa", "100,000 Pa", "1,000,000 Pa"], answer: 2, explain: "ρgh = 1000 × 10 × 10 = 100,000 Pa." },
        { q: "A block floats at rest in water. The buoyant force on it is:", choices: ["Greater than its weight", "Equal to its weight", "Less than its weight", "Zero"], answer: 1, explain: "It's in equilibrium, so the upward buoyant force balances the weight." },
        { q: "Water flows from a wide pipe into a section with half the cross-sectional area. Its speed:", choices: ["Halves", "Stays the same", "Doubles", "Quadruples"], answer: 2, explain: "A₁v₁ = A₂v₂. Half the area means twice the speed." },
        { q: "Air flows faster over the top of a wing than under it. Compared to the bottom, the pressure on top is:", choices: ["Higher", "Lower", "Equal", "Zero"], answer: 1, explain: "Bernoulli: faster flow means lower pressure, which contributes to lift." },
      ],
      frq: {
        prompt: "A 1.5 kg block has a volume of 0.0020 m³. It is placed in water (ρ = 1000 kg/m³, g = 10 m/s²).\n(a) Calculate the buoyant force if the block were fully submerged.\n(b) Will the block float or sink? Justify.\n(c) What volume of the block is underwater when it floats at rest?",
        points: [
          "(a) F_b = 1000·0.0020·10 = 20 N.",
          "(b) It floats: its weight (15 N) is less than the maximum buoyant force (20 N). Equivalently, its density (750 kg/m³) is less than water's.",
          "(c) F_b = weight: 1000·V·10 = 15, so V = 0.0015 m³ (75% of the block).",
        ],
      },
    },
  ],
};
