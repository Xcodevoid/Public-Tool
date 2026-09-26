// More key concepts for the BC-only units in content/calculus-bc.js ("u<unit>" keys).
// The shared AB units get their extra concepts from content/deep/calculus-ab.js.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["calculus-bc"] = {
  u0: [
    {
      title: "Second derivatives of parametric equations",
      simple: "For parametric curves, the second derivative is the derivative of dy/dx, divided by dx/dt again.",
      detail: "dy/dx = (dy/dt)/(dx/dt). d²y/dx² = [d/dt (dy/dx)] / (dx/dt). Use it to find concavity of parametric curves. Horizontal tangents occur where dy/dt = 0 (dx/dt ≠ 0); vertical tangents where dx/dt = 0 (dy/dt ≠ 0).",
      trap: "d²y/dx² is NOT (d²y/dt²)/(d²x/dt²). Differentiate dy/dx with respect to t, then divide by dx/dt.",
      terms: [
        ["d²y/dx² (parametric)", "[d/dt (dy/dx)] ÷ (dx/dt)"],
        ["Vertical tangent (parametric)", "Occurs where dx/dt = 0 and dy/dt ≠ 0."],
      ],
    },
    {
      title: "Slopes of polar curves",
      simple: "To find a slope on a polar curve, convert to x and y using θ as the parameter.",
      detail: "x = r cos θ, y = r sin θ. dy/dx = (dy/dθ)/(dx/dθ), where dy/dθ = r′ sin θ + r cos θ and dx/dθ = r′ cos θ − r sin θ. dr/dθ tells whether the curve moves toward or away from the origin; it is not the slope.",
      trap: "dr/dθ is NOT the slope of the curve. The slope is dy/dx, found through x = r cos θ and y = r sin θ.",
      terms: [
        ["dy/dx for polar curves", "(dy/dθ)/(dx/dθ) using x = r cos θ, y = r sin θ."],
        ["dr/dθ", "Rate the distance from the origin changes with θ."],
      ],
    },
    {
      title: "Area between polar curves",
      simple: "Area between two polar curves is ½∫(R² − r²) dθ over the angles where one is outside the other.",
      detail: "Find intersection angles by setting r₁ = r₂. Area = ½∫(r_outer² − r_inner²) dθ. Watch for curves that pass through the origin or that trace a region twice over a full 2π interval. Symmetry can halve the work.",
      trap: "It's ½∫(R² − r²), NOT ½∫(R − r)². Square each radius separately.",
      terms: [
        ["Polar area formula", "A = ½∫ r² dθ"],
        ["Area between polar curves", "½∫(R² − r²) dθ between intersection angles."],
      ],
    },
    {
      title: "Integrating vector-valued functions",
      simple: "Integrate velocity components to get position, adding the starting position.",
      detail: "Position: x(t) = x(0) + ∫₀ᵗ x′(s) ds and y(t) = y(0) + ∫₀ᵗ y′(s) ds. Total distance traveled along the path = ∫√[(x′)² + (y′)²] dt. Acceleration is the derivative of velocity, component by component.",
      trap: "Distance traveled uses SPEED (the magnitude), not the separate integrals of x′ and y′.",
      terms: [
        ["Position vector", "⟨x(t), y(t)⟩, found by integrating velocity plus initial position."],
        ["Distance traveled (parametric)", "∫√[(dx/dt)² + (dy/dt)²] dt"],
      ],
    },
  ],
  u1: [
    {
      title: "The integral test and p-series",
      simple: "A series with positive, decreasing terms converges exactly when the matching improper integral does.",
      detail: "If f is positive, continuous and decreasing, Σf(n) and ∫₁^∞ f(x) dx both converge or both diverge. p-series Σ1/nᵖ converge if p > 1 and diverge if p ≤ 1. The harmonic series Σ1/n diverges even though its terms go to 0.",
      trap: "The integral's VALUE is not the series' sum. The test only tells you whether the series converges.",
      terms: [
        ["Integral test", "Compares a series to an improper integral with the same behavior."],
        ["Harmonic series", "Σ1/n, which diverges."],
      ],
    },
    {
      title: "Comparison and limit comparison tests",
      simple: "Compare a series to a known one: smaller than a convergent series converges, bigger than a divergent series diverges.",
      detail: "Direct comparison: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, so does Σaₙ; if aₙ ≥ bₙ ≥ 0 and Σbₙ diverges, so does Σaₙ. Limit comparison: if lim aₙ/bₙ = c with 0 < c < ∞, both series share behavior. Compare with p-series or geometric series.",
      trap: "Being smaller than a DIVERGENT series proves nothing. The inequality has to point the right way.",
      terms: [
        ["Direct comparison test", "Bounds a series term by term with a known series."],
        ["Limit comparison test", "If lim aₙ/bₙ is positive and finite, both series behave the same."],
      ],
    },
    {
      title: "Alternating series and their error bound",
      simple: "An alternating series converges if its terms shrink to zero, and the error is less than the next term.",
      detail: "Alternating series test: if |aₙ| decreases and lim aₙ = 0, Σ(−1)ⁿaₙ converges. The error after n terms is at most the first omitted term's absolute value. Conditional convergence: converges, but Σ|aₙ| diverges (e.g., the alternating harmonic series).",
      trap: "The alternating series error bound only works for alternating series meeting the test's conditions. Use Lagrange for Taylor polynomials in general.",
      terms: [
        ["Alternating series test", "Converges if terms decrease in absolute value and go to 0."],
        ["Alternating series error bound", "Error ≤ the absolute value of the first omitted term."],
      ],
    },
    {
      title: "The ratio test",
      simple: "The ratio test compares each term to the one before; if the ratio settles below 1, the series converges.",
      detail: "L = lim |aₙ₊₁/aₙ|. L < 1: absolutely convergent. L > 1: diverges. L = 1: inconclusive. It's the main tool for finding the radius of convergence of power series, especially with factorials and exponentials.",
      trap: "L = 1 tells you NOTHING. Check endpoints of a power series separately with another test.",
      terms: [
        ["Ratio test", "Uses lim |aₙ₊₁/aₙ| to test convergence."],
        ["Absolute convergence", "Σ|aₙ| converges, so Σaₙ converges too."],
      ],
    },
    {
      title: "Known Maclaurin series and building new ones",
      simple: "Memorize a few key series, then substitute, differentiate or integrate to get others.",
      detail: "eˣ = Σxⁿ/n!; sin x = Σ(−1)ⁿx²ⁿ⁺¹/(2n+1)!; cos x = Σ(−1)ⁿx²ⁿ/(2n)!; 1/(1 − x) = Σxⁿ for |x| < 1. Substitute (e^(−x²) replaces x with −x²), differentiate or integrate term by term; the radius of convergence stays the same (endpoints may change).",
      trap: "Differentiating or integrating a power series keeps the RADIUS but can change convergence at the ENDPOINTS. Recheck them.",
      terms: [
        ["Maclaurin series for eˣ", "1 + x + x²/2! + x³/3! + …"],
        ["Maclaurin series for 1/(1 − x)", "1 + x + x² + x³ + …, for |x| < 1"],
      ],
    },
  ],
};
