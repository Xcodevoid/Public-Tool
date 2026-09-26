// Concept tags and wrong-answer diagnoses for content/calculus-bc.js.
// Units 1–8 reuse content/diagnostics/calculus-ab.js. Keys here:
//   "p<unit>.<q>" -> BC-only questions patched into AB units (concept index is within the patch's concepts)
//   "u<unit>.<q>" -> BC-only units (0 = Unit 9, 1 = Unit 10)
window.AP_DIAG = window.AP_DIAG || {};
window.AP_DIAG["calculus-bc"] = {
  "p5.0": [0, { 0: "Integration by parts has a second term: uv − ∫v du = x·eˣ − ∫eˣ dx.", 2: "You can't integrate a product by integrating each factor separately.", 3: "This drops the x·eˣ term from uv." }],
  "p5.1": [0, { 0: "The area under 1/x² is positive. Evaluate lim(b→∞) [−1/x] from 1 to b = 0 + 1.", 2: "Recheck the antiderivative: ∫x⁻² dx = −x⁻¹.", 3: "p = 2 > 1, so this improper integral converges." }],
  "p6.0": [0, { 0: "That's y(0), with no step taken. Add Δx·(slope) = 0.1 × 1.", 2: "The slope at (0, 1) is 0 + 1 = 1, so the step is 0.1, not 0.2.", 3: "The step size is 0.1 and the slope is 1, so the change is 0.1, not 0.01." }],
  "p6.1": [0, { 0: "50 is the starting value. Logistic growth approaches the carrying capacity.", 1: "250 = L/2 is where growth is FASTEST, not the long-run limit.", 3: "Logistic growth levels off at L = 500. It doesn't grow forever." }],
  "p7.0": [0, { 0: "Arc length uses (f′)², and f′ = 2x, so (f′)² = 4x², not x².", 2: "Arc length needs the square root: √(1 + (f′)²).", 3: "That's a VOLUME formula (the disc method), not arc length." }],
  "u0.0": [0, { 0: "Compute both rates at t = 2: dy/dt = 3t² = 12 and dx/dt = 2t = 4, so dy/dx = 12/4 = 3.", 2: "6 is 3t, which misses a factor: dy/dx = 3t²/(2t) = 3t/2, which equals 3 at t = 2.", 3: "12 is dy/dt at t = 2. You still divide by dx/dt = 4." }],
  "u0.1": [1, { 0: "Speed is the magnitude of the whole vector, not one component.", 1: "Speed is the magnitude of the whole vector, not one component.", 3: "Don't add the components. Speed = √(3² + 4²)." }],
  "u0.2": [3, { 0: "You're missing the square: A = ½∫r² dθ, and r² = 4.", 2: "Don't forget the ½ in ½∫r² dθ.", 3: "Recheck: ½ · 4 · 2π = 4π." }],
  "u0.3": [1, { 1: "The derivative of t² is 2t, not t.", 2: "The derivative of sin t is +cos t.", 3: "Differentiate once, not twice. 2 and −sin t come from the second derivative." }],
  "u1.0": [0, { 0: "3 is the first term. The sum is a/(1 − r) = 3/(1/2).", 2: "Divide by (1 − r), don't multiply: 3/(1 − ½) = 6.", 3: "|r| = ½ < 1, so the geometric series converges." }],
  "u1.1": [1, { 0: "The terms go to 0, and the nth-term test can only show DIVERGENCE.", 2: "The harmonic series is Σ1/n. This one is 1/n², a p-series with p = 2.", 3: "It converges, but to π²/6 ≈ 1.645, not 2." }],
  "u1.2": [1, { 0: "Σ|(−1)ⁿ/n| = Σ1/n (harmonic) diverges, so the convergence is not absolute.", 2: "The alternating series test shows it CONVERGES.", 3: "The ratio of consecutive terms isn't constant, so it's not geometric." }],
  "u1.3": [3, { 0: "It's the reciprocal: |x/3| < 1 means |x| < 3.", 1: "The ratio is x/3, not x. Solve |x/3| < 1.", 3: "The series is geometric in x/3, so it needs |x/3| < 1." }],
  "u1.4": [3, { 0: "Taylor coefficients divide by n!: f⁽³⁾(0)/3!.", 1: "Divide by 3! = 6, not by 3.", 3: "Divide by 3! only once." }],
};
