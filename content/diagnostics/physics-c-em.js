// Concept tags and wrong-answer diagnoses for content/physics-c-em.js.
window.AP_DIAG = window.AP_DIAG || {};
window.AP_DIAG["physics-c-em"] = {
  "0.0": [0, { 0: "E isn't just 1/r. It's inverse SQUARE, so tripling r divides it by 9.", 2: "The field gets WEAKER farther away, not stronger.", 3: "The factor of 9 is right, but E falls with distance. It's 1/9, not 9×." }],
  "0.1": [1, { 0: "kQ/R² would be the field of a point charge. Around the ring, opposite pieces cancel at the center.", 2: "kQ/R is the POTENTIAL at the center, not the field.", 3: "No charge sits at the center, so nothing blows up. By symmetry E = 0." }],
  "0.2": [2, { 0: "q/ε₀ would need q INSIDE the surface. Outside charge adds zero net flux.", 2: "The sign doesn't flip for outside charge. Its lines enter and leave, so the net is zero.", 3: "Half the flux would still count an outside charge. Only enclosed charge matters." }],
  "0.3": [3, { 0: "1/d² is a point charge. An infinite sheet's field doesn't spread out with distance.", 1: "1/d is a long LINE of charge. A sheet gives a constant field.", 3: "The field doesn't grow with distance. σ/(2ε₀) is constant." }],
  "1.0": [2, { 0: "You forgot the minus sign: E = −dV/dx.", 2: "10 V/m is dV/dx at x = 1. Evaluate at x = 2 and include the minus sign.", 3: "The sign is right but check the value: −10x at x = 2 is −20." }],
  "1.1": [1, { 0: "Potential is a SCALAR. The −q contributes a negative potential that cancels.", 1: "Signs matter: +kq/(d/2) and −kq/(d/2) add to zero.", 3: "The two contributions cancel exactly, since they're equal size and opposite sign." }],
  "1.2": [3, { 0: "Positive charges move DOWNHILL in potential, along the field.", 2: "Moving along E always lowers V, so V doesn't stay constant.", 3: "In a uniform field the field is the same everywhere. The charge follows E toward lower V." }],
  "1.3": [3, { 1: "1 eV would be for 1 V. Across 100 V the electron gains 100 eV.", 2: "1.6 × 10⁻¹⁹ J is 1 eV. Multiply by 100.", 3: "The field does work on the electron, so it gains kinetic energy." }],
  "2.0": [0, { 0: "σ/ε₀ is the field just OUTSIDE the surface, not inside.", 2: "kQ/r² applies outside a spherical charge, not inside a conductor.", 3: "For any conductor shape, the field inside at equilibrium is zero." }],
  "2.1": [1, { 0: "C = ε₀A/d, so a bigger gap LOWERS capacitance.", 2: "Separation d is in the formula, so C must change.", 3: "C depends on 1/d, not 1/d². Doubling d halves C." }],
  "2.2": [2, { 0: "V would be constant only if the battery were connected. Here Q is fixed.", 1: "Pulling the plates apart takes work, which becomes stored energy.", 3: "U = Q²/(2C): C halves, so U doubles, not quadruples." }],
  "2.3": [3, { 0: "12 μF is the PARALLEL rule. Capacitors in series combine like resistors in parallel.", 1: "Adding a capacitor in series lowers the total, so it can't stay 6.", 3: "Multiplying doesn't give an equivalent. Use 1/C = 1/C₁ + 1/C₂." }],
  "3.0": [0, { 0: "3 W is V/R, which is current (3 A), not power.", 1: "48 W is IV with I = 4 A. The current is 12/4 = 3 A, so P = 36 W.", 3: "16 W doesn't come from any power formula here. Use P = V²/R." }],
  "3.1": [1, { 0: "18 Ω is the SERIES sum. Parallel resistance is smaller than any branch.", 1: "Adding parallel paths lowers the resistance below 6 Ω.", 3: "3 Ω is two 6 Ω resistors in parallel. With three it's 2 Ω." }],
  "3.2": [2, { 1: "Check the units: 5 μF is 5 × 10⁻⁶ F, not 5 × 10⁻⁴.", 2: "2.5 ms divides R by C. τ = RC, a product.", 3: "10 s forgets the micro prefix on the capacitance." }],
  "3.3": [2, { 0: "An EMPTY capacitor acts like a wire at first. Current starts at its maximum.", 2: "The capacitor has no voltage at t = 0, so the full ε is across R.", 3: "The initial current is set by ε and R alone. C only sets how fast it decays." }],
  "4.0": [0, { 0: "qvB needs v perpendicular to B. Parallel motion gives sin 0° = 0.", 2: "Parallel to B there's no perpendicular component, so no force at all.", 3: "Magnetic forces are never along B. Here the force is zero." }],
  "4.1": [3, { 0: "1/r² is a point charge's electric field. A long wire's B falls as 1/r.", 2: "B gets WEAKER farther from the wire.", 3: "B depends on distance: μ₀I/(2πr)." }],
  "4.2": [1, { 0: "Repulsion is for OPPOSITE currents. Same-direction currents attract.", 2: "Each wire is in the other's field, so they feel a force.", 3: "The force is along the line between the wires, so it doesn't twist them." }],
  "4.3": [3, { 0: "More turns per length means a STRONGER field.", 1: "B = μ₀nI depends on n, so it must change.", 3: "B is linear in n, so doubling n doubles B." }],
  "5.0": [0, { 1: "10 V divides instead of multiplying. Use ε = BLv = 0.2 × 0.5 × 4.", 2: "1.6 V drops the 0.5 m length. ε = BLv needs all three.", 3: "0.1 V leaves out the speed. Include v: ε = BLv." }],
  "5.1": [1, { 0: "Clockwise makes field INTO the page, adding to the increase. Lenz's law opposes it.", 2: "The flux is changing, so an emf and current are induced.", 3: "The flux is increasing steadily, so the current flows one way." }],
  "5.2": [2, { 0: "8 s multiplies L × R. τ = L/R.", 1: "0.5 s is R/L, upside down. τ = L/R.", 3: "Adding L and R mixes units. τ = L/R = 2 s." }],
  "5.3": [2, { 0: "Frequency goes DOWN when C goes up: ω = 1/√(LC).", 1: "A bigger C slows the oscillation, so frequency drops.", 3: "ω depends on C, so it must change." }]
};
