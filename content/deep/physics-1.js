// More key concepts for content/physics-1.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["physics-1"] = {
  0: [
    {
      title: "Scalars, vectors and components",
      simple: "Some quantities have only size, while vectors also have direction and can be split into parts.",
      detail: "Scalars: distance, speed, time, mass, energy. Vectors: displacement, velocity, acceleration, force, momentum. A vector at angle θ from the x-axis has components Aₓ = A cos θ and A_y = A sin θ. Add vectors by adding components.",
      trap: "Distance and speed are scalars; displacement and velocity are vectors. A round trip has zero displacement but nonzero distance.",
      terms: [
        ["Scalar", "A quantity with magnitude only, like speed or mass."],
        ["Vector components", "Perpendicular parts of a vector, e.g., A cos θ and A sin θ."],
      ],
    },
    {
      title: "Relative motion and reference frames",
      simple: "How fast something moves depends on who is watching.",
      detail: "Velocities add as vectors: v(object relative to ground) = v(object relative to train) + v(train relative to ground). All inertial frames see the same accelerations and the same physics. A boat crossing a river moves at its own velocity plus the current's.",
      trap: "Velocities relative to different frames are VECTORS. Walking backward on a moving train means subtracting speeds.",
      terms: [
        ["Relative velocity", "Velocity measured with respect to a particular reference frame."],
        ["Inertial reference frame", "A frame that isn't accelerating, where Newton's laws hold."],
      ],
    },
    {
      title: "Free fall",
      simple: "Without air resistance, everything falls with the same acceleration, about 10 m/s² downward.",
      detail: "a = −g ≈ −9.8 m/s² (AP allows 10 m/s²) throughout the flight, including at the top. A ball thrown up takes the same time to rise and fall back to launch height and returns with the same speed. Mass doesn't affect free-fall acceleration.",
      trap: "At the TOP of a toss, velocity is zero but acceleration is still g downward.",
      terms: [
        ["Acceleration due to gravity (g)", "About 9.8 m/s² downward near Earth's surface."],
        ["Symmetry of free fall", "Rising and falling to the same height take equal times."],
      ],
    },
  ],
  1: [
    {
      title: "Systems and internal vs. external forces",
      simple: "Choosing a system decides which forces count: only outside forces change the system's motion.",
      detail: "Internal forces between parts of a system cancel in pairs (Newton's third law). Only external forces change the velocity of the system's center of mass: ΣF_ext = M a_cm. Treating connected blocks as one system often gives the acceleration quickly; then isolate one block to find tension.",
      trap: "Tension between two blocks is INTERNAL if both are in your system. It won't appear in the system's force equation.",
      terms: [
        ["System", "The object or group of objects chosen for analysis."],
        ["External force", "A force exerted on the system by something outside it."],
      ],
    },
    {
      title: "Translational equilibrium and tension",
      simple: "When the net force is zero, an object stays at rest or keeps moving at constant velocity.",
      detail: "Equilibrium: ΣFₓ = 0 and ΣF_y = 0. Ropes (ideal, massless) pull along their length with the same tension throughout. For hanging masses with angled ropes, balance vertical components against weight and horizontal components against each other.",
      trap: "Constant velocity is equilibrium too. A car cruising at a steady 30 m/s has zero net force.",
      terms: [
        ["Translational equilibrium", "State where the net force is zero."],
        ["Tension", "The pulling force exerted by a rope or string."],
      ],
    },
    {
      title: "Apparent weight and elevators",
      simple: "The scale reading equals the normal force, which changes when you accelerate up or down.",
      detail: "In an elevator: N = m(g + a) accelerating upward, N = m(g − a) accelerating downward. In free fall, N = 0 (weightlessness). Your true weight mg never changes; apparent weight does.",
      trap: "Direction of ACCELERATION matters, not direction of motion. Slowing down while moving upward is accelerating downward, so the scale reads less.",
      terms: [
        ["Apparent weight", "The normal force supporting an object; what a scale reads."],
        ["Weightlessness", "Apparent weight of zero, as in free fall."],
      ],
    },
    {
      title: "Inclined planes",
      simple: "On a ramp, split gravity into parts along and perpendicular to the surface.",
      detail: "Parallel component: mg sin θ (down the slope). Perpendicular component: mg cos θ, balanced by the normal force (N = mg cos θ with no other perpendicular forces). Friction: f = μN = μmg cos θ, opposite the motion or the tendency to slide.",
      trap: "The normal force on an incline is mg cos θ, NOT mg. Using mg overestimates friction.",
      terms: [
        ["Parallel component of weight", "mg sin θ, pulling an object down an incline."],
        ["Static friction", "Friction that prevents motion, up to a maximum μₛN."],
      ],
    },
    {
      title: "Gravitational field strength",
      simple: "Gravity weakens with distance squared, and g is the gravitational field at a location.",
      detail: "g = GM/r², measured from the planet's CENTER. Doubling the distance from the center gives 1/4 the field. An object's weight on another planet is m × (that planet's g). Gravitational and inertial mass are equivalent.",
      trap: "Measure r from the CENTER of the planet. A satellite 1 Earth radius above the surface is 2 radii from the center, so g is 1/4.",
      terms: [
        ["Gravitational field", "Gravitational force per unit mass, g = GM/r²."],
        ["Inverse-square law", "A quantity that varies as 1/r²."],
      ],
    },
  ],
  2: [
    {
      title: "The work-energy theorem",
      simple: "The net work done on an object equals its change in kinetic energy.",
      detail: "W_net = ΔK = ½mv_f² − ½mv_i². Positive net work speeds an object up; negative net work slows it down. Work by a force at angle θ to the displacement: W = Fd cos θ. The area under an F-vs-x graph is work.",
      trap: "Only the NET work equals ΔK. The work done by one force alone doesn't tell you the speed change.",
      terms: [
        ["Work-energy theorem", "Net work equals the change in kinetic energy."],
        ["Area under F-x graph", "Work done by the force."],
      ],
    },
    {
      title: "Spring potential energy",
      simple: "A stretched or compressed spring stores energy that grows with the square of the stretch.",
      detail: "Hooke's law: F = −kx. Spring potential energy: U = ½kx². Doubling the compression quadruples the stored energy. The area under the F-vs-x graph for a spring is ½kx².",
      trap: "U_spring ∝ x². Compressing a spring twice as far stores FOUR times the energy, not twice.",
      terms: [
        ["Hooke's law", "F = −kx; spring force is proportional to displacement."],
        ["Spring constant (k)", "Stiffness of a spring, in N/m."],
      ],
    },
    {
      title: "Energy bar charts and choosing systems",
      simple: "Bar charts track how energy moves between kinds and in or out of a system.",
      detail: "Bars show K, U_g, U_s, and internal (thermal) energy at the start and end, with work done by external forces in between. If Earth is in the system, gravitational PE is included; if not, gravity does external work. The totals must balance.",
      trap: "Gravitational PE belongs to the object–Earth SYSTEM. A single object alone can't have gravitational potential energy.",
      terms: [
        ["Energy bar chart", "A diagram showing the amounts of energy types before and after a process."],
        ["Closed system", "A system with no energy transferred in or out by external work."],
      ],
    },
    {
      title: "Work done by friction",
      simple: "Friction turns mechanical energy into thermal energy, so K + U decreases.",
      detail: "Kinetic friction does negative work: W_f = −f_k d. The lost mechanical energy becomes internal energy of the surfaces: ΔE_mech = −f_k d. The work depends on the path length, which makes friction a nonconservative force.",
      trap: "With friction, mechanical energy is NOT conserved, but total energy still is. Say where the energy went.",
      terms: [
        ["Nonconservative force", "A force whose work depends on the path, like friction."],
        ["Thermal energy", "Internal energy from random motion of particles."],
      ],
    },
  ],
  3: [
    {
      title: "Force–time graphs",
      simple: "The area under a force–time graph is the impulse, which equals the change in momentum.",
      detail: "J = ∫F dt = area under F(t). A longer collision time means a smaller average force for the same change in momentum; that's how airbags, helmets and bent knees protect you. F_avg = Δp/Δt.",
      trap: "Airbags reduce FORCE, not impulse. The momentum change is the same; it's spread over more time.",
      terms: [
        ["Average force", "F_avg = Δp/Δt."],
        ["Collision time", "Longer contact time lowers the average force for the same Δp."],
      ],
    },
    {
      title: "Explosions and recoil",
      simple: "When something at rest breaks apart, the pieces fly off with equal and opposite momenta.",
      detail: "Total momentum before = 0, so after, m₁v₁ = −m₂v₂. The lighter piece moves faster. A gun recoils; a rocket expels gas backward to move forward. Kinetic energy increases in explosions (from stored chemical or spring energy).",
      trap: "Momentum is conserved in explosions, but kinetic energy is NOT: it increases from stored energy.",
      terms: [
        ["Recoil", "Backward motion of an object when it ejects mass forward."],
        ["Explosion", "An internal force splitting a system; total momentum is unchanged."],
      ],
    },
    {
      title: "Energy in collisions",
      simple: "Collisions always conserve momentum, but some kinetic energy is often turned into heat or deformation.",
      detail: "Elastic: K conserved (billiard balls, approximately). Inelastic: some K lost. Perfectly inelastic: objects stick and the maximum K is lost (still conserving momentum). Compare K before and after to classify a collision.",
      trap: "\"Perfectly inelastic\" doesn't mean ALL kinetic energy is lost. It means the objects stick together.",
      terms: [
        ["Inelastic collision", "A collision in which kinetic energy is not conserved."],
        ["Coefficient of restitution", "Ratio of relative speeds after and before a collision (1 = elastic)."],
      ],
    },
  ],
  4: [
    {
      title: "Connecting linear and rotational motion",
      simple: "A point on a spinning object moves faster the farther it is from the axis.",
      detail: "Arc length s = rθ, tangential speed v = rω, tangential acceleration a_t = rα (θ in radians). All points on a rigid object share the same ω and α but have different v. Centripetal acceleration ω²r points inward.",
      trap: "Every point on a rigid wheel has the SAME angular velocity, but points on the rim have greater linear speed.",
      terms: [
        ["Tangential speed", "v = rω, the linear speed of a point on a rotating object."],
        ["Radian", "Angle for which the arc length equals the radius."],
      ],
    },
    {
      title: "How mass distribution affects rotational inertia",
      simple: "Mass farther from the axis makes an object harder to spin.",
      detail: "I = Σmr² for point masses. A hoop (MR²) has more rotational inertia than a solid disk (½MR²) of the same mass and radius. The parallel-axis theorem: I = I_cm + Md². Moving mass outward (a skater extending arms) increases I.",
      trap: "Rotational inertia depends on the AXIS. The same rod is much harder to spin about its end than about its center.",
      terms: [
        ["Parallel-axis theorem", "I = I_cm + Md² for an axis a distance d from the center of mass."],
        ["Rotational inertia of a point mass", "I = mr²"],
      ],
    },
    {
      title: "Rotational equilibrium in practice",
      simple: "To solve balance problems, set net force and net torque to zero, picking a smart pivot.",
      detail: "Choose the pivot where an unknown force acts so its torque is zero. Sum clockwise and counterclockwise torques. A uniform beam's weight acts at its center. Typical problems: seesaws, shelves on brackets, ladders against walls.",
      trap: "Pick a pivot that eliminates an unknown. You can choose ANY point for the torque sum in equilibrium.",
      terms: [
        ["Rotational equilibrium", "Net torque is zero."],
        ["Center of gravity", "Point where the weight of an object effectively acts."],
      ],
    },
  ],
  5: [
    {
      title: "Conservation of angular momentum",
      simple: "With no outside torque, spinning objects keep their angular momentum, so they speed up when they pull in.",
      detail: "L = Iω stays constant if the net external torque is zero. I₁ω₁ = I₂ω₂. A skater pulling in her arms decreases I and increases ω. Collisions of a particle with a rotating object conserve angular momentum about the pivot.",
      trap: "Angular momentum is conserved, but rotational KE (½Iω² = L²/2I) INCREASES when I decreases. The skater does work.",
      terms: [
        ["Conservation of angular momentum", "L stays constant when the net external torque is zero."],
        ["Angular momentum of a rigid body", "L = Iω"],
      ],
    },
    {
      title: "Work done by torque",
      simple: "A torque acting through an angle does work that changes rotational kinetic energy.",
      detail: "W = τΔθ (constant torque, θ in radians). Net work by torques = ΔK_rot = ½Iω_f² − ½Iω_i². Power in rotation: P = τω.",
      trap: "Use RADIANS for Δθ. One revolution is 2π rad, not 360.",
      terms: [
        ["Rotational work", "W = τΔθ"],
        ["Rotational power", "P = τω"],
      ],
    },
    {
      title: "Energy of orbiting satellites",
      simple: "A satellite's orbit is a balance of speed and gravity, and its energy depends on its distance.",
      detail: "For circular orbits: v = √(GM/r), so higher orbits are slower. Gravitational PE = −GMm/r (zero at infinity). Total energy of a bound orbit is negative. In elliptical orbits, the satellite moves fastest closest to the planet (angular momentum is conserved).",
      trap: "A satellite in a higher orbit moves SLOWER but has MORE total energy. It needs energy to get there.",
      terms: [
        ["Orbital speed", "v = √(GM/r) for a circular orbit."],
        ["Escape velocity", "Minimum speed to escape a planet's gravity: √(2GM/r)."],
      ],
    },
  ],
  6: [
    {
      title: "Graphs of simple harmonic motion",
      simple: "Position, velocity and acceleration in SHM are sine or cosine curves shifted from each other.",
      detail: "If x = A cos(2πft), velocity is zero at the extremes and largest at equilibrium; acceleration is always opposite the displacement (a = −(k/m)x). On graphs, where x is maximum, a is maximum in the opposite direction and v is zero.",
      trap: "Acceleration is greatest at the ENDPOINTS of motion, where the object is momentarily at rest.",
      terms: [
        ["Equilibrium position", "The position where the net force is zero; speed is maximum there."],
        ["Phase", "Where an oscillating object is in its cycle."],
      ],
    },
    {
      title: "What changes the period",
      simple: "A spring's period depends on mass and stiffness; a pendulum's depends on length and g.",
      detail: "Spring: T = 2π√(m/k), independent of amplitude and g. Pendulum: T = 2π√(L/g), independent of mass and amplitude (for small angles). A pendulum on the Moon swings more slowly; a spring's period stays the same.",
      trap: "Mass affects a SPRING's period but not a PENDULUM's. Mixing these up is a favorite exam trick.",
      terms: [
        ["Period of a spring", "T = 2π√(m/k)"],
        ["Period of a pendulum", "T = 2π√(L/g) for small angles."],
      ],
    },
    {
      title: "Restoring forces",
      simple: "SHM happens whenever the force pulling back is proportional to the displacement.",
      detail: "Restoring force F = −kx always points toward equilibrium. For a pendulum, the restoring force is mg sin θ ≈ mgθ for small angles, which is why the small-angle approximation gives SHM. Vertical springs oscillate about the new stretched equilibrium with the same period.",
      trap: "A vertical spring oscillates around its STRETCHED equilibrium position, not its natural length, but with the same period.",
      terms: [
        ["Vertical spring equilibrium", "The position where kx = mg; a vertical spring oscillates about it."],
        ["Small-angle approximation", "sin θ ≈ θ for small θ (in radians)."],
      ],
    },
  ],
  7: [
    {
      title: "Hydrostatic pressure and Pascal's principle",
      simple: "Pressure in a fluid grows with depth, and pressure applied to an enclosed fluid spreads everywhere.",
      detail: "P = P₀ + ρgh. Pressure depends on depth, not container shape. Gauge pressure = P − P_atm. Pascal's principle: a pressure change is transmitted equally throughout an enclosed fluid, so hydraulic lifts multiply force (F₁/A₁ = F₂/A₂).",
      trap: "Pressure at a given depth is the same regardless of container SHAPE. A narrow tube and a wide tank at the same depth have equal pressure.",
      terms: [
        ["Gauge pressure", "Pressure above atmospheric pressure."],
        ["Pascal's principle", "Pressure applied to an enclosed fluid is transmitted undiminished."],
      ],
    },
    {
      title: "Fluids and Newton's laws",
      simple: "Floating and sinking come from comparing weight with the buoyant force.",
      detail: "An object floats when its average density is less than the fluid's; the fraction submerged = ρ_object/ρ_fluid. For a submerged object, apparent weight = mg − ρ_fluid V g. Buoyant force depends on the displaced volume, not the object's mass.",
      trap: "A steel block and a wood block of the SAME volume, fully submerged, feel the SAME buoyant force.",
      terms: [
        ["Apparent weight in fluid", "True weight minus buoyant force."],
        ["Fraction submerged", "For a floating object, ρ_object/ρ_fluid."],
      ],
    },
    {
      title: "Applying Bernoulli's equation",
      simple: "Where a fluid moves faster, its pressure is lower.",
      detail: "P + ½ρv² + ρgh is constant along a streamline (energy conservation per volume). Torricelli's theorem: fluid leaves a hole at depth h with speed √(2gh). Combine with continuity (A₁v₁ = A₂v₂) to solve for flow in pipes.",
      trap: "Use continuity FIRST to find how speed changes with area, then Bernoulli to find pressure.",
      terms: [
        ["Torricelli's theorem", "Speed of fluid from a hole at depth h is √(2gh)."],
        ["Streamline", "The path followed by a small bit of fluid in steady flow."],
      ],
    },
  ],
};
