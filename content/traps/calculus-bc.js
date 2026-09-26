// "AP Trap" for Calculus BC-only concepts. Units 1–8 reuse content/traps/calculus-ab.js.
// Keys: "p<unit>.<concept>" for BC topics added to AB units, "u<unit>.<concept>" for Units 9–10.
window.AP_TRAPS = window.AP_TRAPS || {};
window.AP_TRAPS["calculus-bc"] = {
  "p5.0": "Integration by parts has a second term: uv − ∫v du. Improper integrals must be written as LIMITS to earn credit.",
  "p6.0": "Euler's method uses the slope at the CURRENT point for each step. Logistic growth approaches L and is fastest at L/2.",
  "p7.0": "Arc length is ∫√(1 + (f′)²) dx. Square the DERIVATIVE, not the function.",
  "u0.0": "Parametric d²y/dx² = [d/dt(dy/dx)] ÷ (dx/dt). Forgetting to divide by dx/dt is the classic mistake.",
  "u0.1": "Speed is the MAGNITUDE of velocity, √((x′)² + (y′)²). Position = starting position + ∫velocity, done for EACH component.",
  "u0.2": "Parametric arc length = ∫ speed dt. This is the same integral as total distance traveled.",
  "u0.3": "Polar area = ½∫r² dθ. Don't forget the ½, and find bounds where r = 0 for one loop.",
  "u1.0": "lim aₙ = 0 does NOT prove convergence (the harmonic series). The nth-term test can only prove DIVERGENCE.",
  "u1.1": "Name the test AND check its conditions. \"Converges by the ratio test since L = ½ < 1\" earns the point; a bare answer doesn't.",
  "u1.2": "The Taylor coefficient is f⁽ⁿ⁾(a)/n!. Dropping the factorial is the most common error.",
  "u1.3": "Always test the ENDPOINTS of the interval of convergence separately. Alternating error ≤ the first omitted term.",
};
