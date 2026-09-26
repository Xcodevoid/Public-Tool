// "AP Trap" for every concept in content/physics-c-em.js.
window.AP_TRAPS = window.AP_TRAPS || {};
window.AP_TRAPS["physics-c-em"] = {
  "0.0": "Fields are VECTORS. Add components, not magnitudes. Two equal charges can produce zero net field between them.",
  "0.1": "Cancel components by symmetry BEFORE integrating. Integrating the full magnitude of dE gives an answer that is too large.",
  "0.2": "Gauss's law is always true, but it only gives E easily when symmetry makes E constant on the surface. Zero flux does NOT mean zero field.",
  "0.3": "Inside a uniformly charged solid sphere, only the charge within radius r counts, so E grows as r, not 1/r².",
  "1.0": "U = kq₁q₂/r is positive for like charges and negative for unlike ones. Keep the signs of the charges in the formula.",
  "1.1": "Potential is a SCALAR. Zero potential at a point doesn't mean zero field there, and zero field doesn't mean zero potential.",
  "1.2": "E = −dV/dx. The field points toward DECREASING potential, and it's perpendicular to equipotential surfaces.",
  "1.3": "Negative charges gain kinetic energy moving to HIGHER potential. Track the sign of q in ΔU = qΔV.",
  "2.0": "A conductor's interior field is zero, but its potential is NOT zero. The whole conductor sits at one constant potential.",
  "2.1": "Capacitance depends only on geometry and material. Adding more charge doesn't change C; it raises V.",
  "2.2": "First decide what's constant: connected to a battery means V is fixed, disconnected means Q is fixed. Then pick the matching energy formula.",
  "2.3": "Capacitors combine OPPOSITE to resistors: parallel capacitors add directly, series capacitors add as reciprocals.",
  "3.0": "Current is not \"used up\" by a resistor. The same current flows into and out of it; energy is what's converted.",
  "3.1": "Walking a loop, going through a resistor WITH the current is a voltage DROP (−IR). Mixing signs breaks the loop equation.",
  "3.2": "An uncharged capacitor acts like a WIRE at t = 0 and like a BREAK at steady state. Many questions test just those two moments.",
  "3.3": "While charging a capacitor through a resistor, half the battery's energy is lost as heat, whatever the value of R.",
  "4.0": "For negative charges, the force is OPPOSITE to what the right-hand rule gives for v × B. Flip it.",
  "4.1": "Wires carrying current the SAME way attract. This is the reverse of electric charges, where like charges repel.",
  "4.2": "The Biot–Savart law uses dl × r̂. Wire segments pointing straight at the point (dl parallel to r̂) contribute nothing.",
  "4.3": "Ampère's law counts only current passing THROUGH the loop. Inside a thick wire, the enclosed current is a fraction of I.",
  "5.0": "Only a CHANGING flux induces emf. A strong but steady field through a stationary loop gives nothing.",
  "5.1": "The induced current opposes the CHANGE in flux, not the flux itself. If inward flux is decreasing, the induced field points inward.",
  "5.2": "An inductor acts like a BREAK right after switching and like a WIRE at steady state, the reverse of a capacitor.",
  "5.3": "In an LC circuit, maximum current happens when the capacitor's charge is ZERO, just as max speed in SHM happens at x = 0."
};
