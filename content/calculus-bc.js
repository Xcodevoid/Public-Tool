window.AP_CONTENT = window.AP_CONTENT || {};
// Calculus BC = all of Calculus AB (Units 1–8, with BC's exam weights and a few
// BC-only topics added) plus Units 9 and 10. The app merges this with content/calculus-ab.js.
window.AP_CONTENT["calculus-bc"] = {
  extends: "calculus-ab",
  intro: "Units 1–8 match Calculus AB, with BC-only topics added to Units 6–8. Units 9 and 10 are BC only. About 60% of the BC exam covers AB material, so don't skip it.",
  tips: [
    "Series (Unit 10) is about 17–18% of the exam and nearly always appears in the free-response section, so master the convergence tests and Taylor polynomials.",
    "For every series question, name the test you're using and check its conditions. \"By the ratio test…\" earns points; a bare answer doesn't.",
    "Parametric and polar questions usually appear in the calculator free-response section. Know the speed, distance and polar-area formulas cold.",
    "Justify, don't just state: all of the AB justification rules (sign changes, the MVT, IVT conditions) still apply.",
    "The alternating series error bound and the Lagrange error bound are popular free-response parts. Learn which one applies when.",
  ],
  weights: ["4–7%", "4–7%", "4–7%", "6–9%", "8–11%", "17–20%", "6–9%", "6–9%"],
  patches: {
    5: {
      concepts: [
        {
          title: "BC only: integration by parts, partial fractions and improper integrals",
          simple: "More ways to undo derivatives: one for products of functions, one for splitting fractions apart, and a way to handle integrals that run to infinity.",
          detail: "Integration by parts: ∫u dv = uv − ∫v du (choose u as the part that gets simpler when you differentiate it). Partial fractions: split a rational function with distinct linear factors, like 1/((x−1)(x+2)), into A/(x−1) + B/(x+2). Improper integrals: write them as limits, e.g. ∫(1 to ∞) f(x) dx = lim(b→∞) ∫(1 to b) f(x) dx.",
          example: "∫x·eˣ dx: u = x, dv = eˣ dx, which gives x·eˣ − eˣ + C.",
          hook: "Choosing u, LIATE: Logs, Inverse trig, Algebraic, Trig, Exponential.",
        },
      ],
      terms: [["Integration by parts", "∫u dv = uv − ∫v du"], ["Improper integral", "An integral with an infinite limit or an infinite discontinuity, evaluated as a limit."]],
      questions: [
        { q: "BC: ∫x·eˣ dx = ?", choices: ["x·eˣ + C", "x·eˣ − eˣ + C", "½x²·eˣ + C", "eˣ + C"], answer: 1, explain: "Parts with u = x, dv = eˣ dx: x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C." },
        { q: "BC: ∫(1 to ∞) 1/x² dx = ?", choices: ["0", "1", "2", "Diverges"], answer: 1, explain: "lim(b→∞) [−1/x] from 1 to b = lim (−1/b + 1) = 1." },
      ],
    },
    6: {
      concepts: [
        {
          title: "BC only: Euler's method and logistic growth",
          simple: "Euler's method approximates a solution by taking small steps along tangent lines. Logistic growth is growth that levels off at a maximum.",
          detail: "Euler's method: y_new = y_old + (dy/dx)·Δx, repeated step by step. Logistic model: dP/dt = kP(1 − P/L). The carrying capacity is L, so lim P(t) = L when P₀ > 0, and P grows fastest when P = L/2.",
          example: "dy/dx = x + y, y(0) = 1, step 0.1: y(0.1) ≈ 1 + 0.1(0 + 1) = 1.1.",
        },
      ],
      terms: [["Euler's method", "A step-by-step tangent-line approximation of a solution to a differential equation."], ["Logistic differential equation", "dP/dt = kP(1 − P/L), whose solutions level off at L."]],
      questions: [
        { q: "BC: For dy/dx = x + y with y(0) = 1, one Euler step of size 0.1 estimates y(0.1) as:", choices: ["1.0", "1.1", "1.2", "1.01"], answer: 1, explain: "The slope at (0, 1) is 1, so y ≈ 1 + 0.1·1 = 1.1." },
        { q: "BC: P satisfies dP/dt = 0.2P(1 − P/500) with P(0) = 50. What is lim(t→∞) P(t)?", choices: ["50", "250", "500", "∞"], answer: 2, explain: "Logistic growth approaches its carrying capacity, L = 500." },
      ],
    },
    7: {
      concepts: [
        {
          title: "BC only: arc length",
          simple: "Measure the length of a curvy path by adding up many tiny straight segments.",
          detail: "For y = f(x) on [a, b]: L = ∫√(1 + (f′(x))²) dx. For parametric curves, see Unit 9.",
        },
      ],
      terms: [["Arc length", "L = ∫√(1 + (dy/dx)²) dx"]],
      questions: [
        { q: "BC: Which integral gives the arc length of y = x² from x = 0 to x = 1?", choices: ["∫(0 to 1) √(1 + x²) dx", "∫(0 to 1) √(1 + 4x²) dx", "∫(0 to 1) (1 + 2x) dx", "∫(0 to 1) π(x²)² dx"], answer: 1, explain: "f′(x) = 2x, so (f′)² = 4x²." },
      ],
    },
  },
  units: [
    {
      title: "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
      weight: "11–12%",
      tldr: "Some curves are easier to describe with a third variable, like time (parametric and vector functions), or with angle and distance (polar). Calculus works on these too: slopes, speed, distance traveled, and area.",
      concepts: [
        {
          title: "Parametric derivatives",
          simple: "When x and y both depend on time t, the slope dy/dx is how fast y changes divided by how fast x changes.",
          detail: "dy/dx = (dy/dt)/(dx/dt). Second derivative: d²y/dx² = [d/dt(dy/dx)] / (dx/dt). Don't just differentiate dy/dx with respect to t and stop; you still divide by dx/dt.",
          example: "x = t², y = t³: dy/dx = 3t²/(2t) = 3t/2. At t = 2, the slope is 3.",
        },
        {
          title: "Motion with vectors",
          simple: "A position vector ⟨x(t), y(t)⟩ tells you where a particle is. Differentiate each part to get velocity.",
          detail: "Velocity = ⟨x′(t), y′(t)⟩. Speed = √((x′)² + (y′)²). Distance traveled = ∫ speed dt. Position at time b = starting position + ∫(a to b) velocity dt, done for each component separately.",
        },
        {
          title: "Parametric arc length",
          simple: "Total distance along a parametric path is the integral of speed.",
          detail: "L = ∫(a to b) √((dx/dt)² + (dy/dt)²) dt",
        },
        {
          title: "Polar curves",
          simple: "Polar coordinates describe a point by how far it is from the origin (r) and its angle (θ).",
          detail: "x = r cos θ, y = r sin θ. Slope: dy/dx = (dy/dθ)/(dx/dθ). Area enclosed = ½∫r² dθ. Area between two polar curves = ½∫(R² − r²) dθ.",
          example: "Area inside r = 2: ½∫(0 to 2π) 4 dθ = 4π, which checks out for a circle of radius 2.",
        },
      ],
      terms: [
        ["Parametric equations", "x and y each written as functions of a parameter t."],
        ["Velocity vector", "⟨x′(t), y′(t)⟩"],
        ["Speed", "The magnitude of the velocity vector: √((x′)² + (y′)²)."],
        ["Polar coordinates", "(r, θ): distance from the origin and angle."],
        ["Polar area", "A = ½∫r² dθ"],
      ],
      mistakes: [
        "Forgetting to divide by dx/dt when finding d²y/dx² for parametric curves.",
        "Forgetting the ½ in the polar area formula, or squaring r incorrectly.",
        "Using the wrong θ bounds for one loop of a polar curve. Find where r = 0.",
      ],
      questions: [
        { q: "x = t², y = t³. What is dy/dx at t = 2?", choices: ["2", "3", "6", "12"], answer: 1, explain: "dy/dx = 3t²/(2t) = 3t/2 = 3 at t = 2." },
        { q: "A particle has velocity ⟨3, 4⟩. What is its speed?", choices: ["3", "4", "5", "7"], answer: 2, explain: "√(3² + 4²) = 5." },
        { q: "What area is enclosed by the polar curve r = 2?", choices: ["2π", "4π", "8π", "π"], answer: 1, explain: "½∫(0 to 2π) 2² dθ = ½ · 4 · 2π = 4π." },
        { q: "Position ⟨t², sin t⟩. What is the velocity vector?", choices: ["⟨2t, cos t⟩", "⟨t, cos t⟩", "⟨2t, −cos t⟩", "⟨2, −sin t⟩"], answer: 0, explain: "Differentiate each component separately." },
      ],
      frq: {
        prompt: "A particle moves with x(t) = t² − 4t and y(t) = 2t for 0 ≤ t ≤ 2.\n(a) Find the velocity vector and the speed at t = 1.\n(b) Find dy/dx at t = 1.\n(c) Set up (and, with a calculator, evaluate) the total distance traveled from t = 0 to t = 2.",
        points: [
          "(a) v(1) = ⟨2(1) − 4, 2⟩ = ⟨−2, 2⟩, so speed = √8 = 2√2 ≈ 2.828.",
          "(b) dy/dx = (dy/dt)/(dx/dt) = 2/(−2) = −1.",
          "(c) Distance = ∫(0 to 2) √((2t − 4)² + 4) dt ≈ 5.916.",
        ],
      },
    },
    {
      title: "Infinite Sequences and Series",
      weight: "17–18%",
      tldr: "Can you add infinitely many numbers and get a finite answer? Sometimes. Convergence tests tell you when. Taylor series then rewrite functions like eˣ and sin x as infinite polynomials, and error bounds tell you how accurate a truncated version is.",
      concepts: [
        {
          title: "Geometric series and the nth-term test",
          simple: "If the terms don't shrink to zero, the sum can't settle down. Geometric series have a simple formula when they do converge.",
          detail: "nth-term test: if lim aₙ ≠ 0, the series diverges. (If lim aₙ = 0, the test tells you nothing.) Geometric series Σarⁿ converges to a/(1 − r) if |r| < 1, where a is the first term.",
          example: "Σ(n=0 to ∞) 3(½)ⁿ = 3/(1 − ½) = 6.",
        },
        {
          title: "The convergence tests",
          simple: "Different series need different tools. Learn to spot which test fits.",
          detail: "p-series Σ1/nᵖ: converges if p > 1 (the harmonic series, p = 1, diverges). Integral test. Direct comparison and limit comparison. Alternating series test: terms decrease to 0 → converges. Ratio test: lim |aₙ₊₁/aₙ| < 1 → converges absolutely. Absolute convergence: Σ|aₙ| converges. Conditional convergence: Σaₙ converges but Σ|aₙ| doesn't.",
          hook: "Test order: nth term → geometric or p-series → alternating → ratio (factorials or powers) → comparison.",
        },
        {
          title: "Taylor and Maclaurin polynomials",
          simple: "Build a polynomial that matches a function's value, slope, concavity and so on at one point. More terms gives a better approximation.",
          detail: "Pₙ(x) = Σ f⁽ᵏ⁾(a)(x − a)ᵏ/k!. Know these by heart: eˣ = Σxⁿ/n!, sin x = x − x³/3! + x⁵/5! − …, cos x = 1 − x²/2! + x⁴/4! − …, 1/(1 − x) = Σxⁿ for |x| < 1. You can build new series by substituting, differentiating or integrating these.",
        },
        {
          title: "Error bounds and intervals of convergence",
          simple: "When you stop adding terms, how far off are you? And for which x-values does the series work at all?",
          detail: "Alternating series error bound: |error| ≤ the first omitted term. Lagrange error bound: |Rₙ| ≤ max|f⁽ⁿ⁺¹⁾|·|x − a|ⁿ⁺¹/(n + 1)!. Radius of convergence: use the ratio test. Check the endpoints separately.",
        },
      ],
      terms: [
        ["Convergent series", "A series whose partial sums approach a finite limit."],
        ["Geometric series", "Σarⁿ. Its sum is a/(1 − r) when |r| < 1."],
        ["p-series", "Σ1/nᵖ, which converges only if p > 1."],
        ["Conditional convergence", "Σaₙ converges but Σ|aₙ| diverges."],
        ["Maclaurin series", "A Taylor series centered at x = 0."],
        ["Radius of convergence", "R: the series converges for |x − a| < R."],
        ["Lagrange error bound", "The maximum possible error of a Taylor polynomial approximation."],
      ],
      mistakes: [
        "Concluding convergence because lim aₙ = 0. The harmonic series is the counterexample.",
        "Forgetting to test the endpoints of the interval of convergence.",
        "Dropping the factorials in Taylor coefficients: the coefficient is f⁽ⁿ⁾(a)/n!, not f⁽ⁿ⁾(a).",
      ],
      questions: [
        { q: "Σ(n=0 to ∞) 3(½)ⁿ = ?", choices: ["3", "6", "1.5", "Diverges"], answer: 1, explain: "Geometric series with a = 3 and r = ½: 3/(1 − ½) = 6." },
        { q: "Σ(n=1 to ∞) 1/n²:", choices: ["Diverges by the nth-term test", "Converges (p-series, p = 2 > 1)", "Diverges (harmonic)", "Converges to 2 exactly"], answer: 1, explain: "It's a p-series with p = 2 > 1. (Its sum is π²/6, not 2.)" },
        { q: "Σ(n=1 to ∞) (−1)ⁿ/n is:", choices: ["Absolutely convergent", "Conditionally convergent", "Divergent", "Geometric"], answer: 1, explain: "It converges by the alternating series test, but Σ1/n (the harmonic series) diverges." },
        { q: "What is the radius of convergence of Σxⁿ/3ⁿ?", choices: ["1/3", "1", "3", "∞"], answer: 2, explain: "It's geometric with ratio x/3, which needs |x/3| < 1, so |x| < 3." },
        { q: "The coefficient of x³ in the Maclaurin series of f is:", choices: ["f‴(0)", "f‴(0)/3", "f‴(0)/6", "f‴(0)/3!³"], answer: 2, explain: "The coefficient is f⁽³⁾(0)/3! = f‴(0)/6." },
      ],
      frq: {
        prompt: "(a) Write the first four nonzero terms of the Maclaurin series for sin x.\n(b) Use your answer to write the first three nonzero terms of the Maclaurin series for sin(x²).\n(c) The approximation sin(0.5) ≈ 0.5 − 0.5³/6 is used. Use the alternating series error bound to show the error is less than 0.001.",
        points: [
          "(a) x − x³/3! + x⁵/5! − x⁷/7!",
          "(b) Substitute x² for x: x² − x⁶/6 + x¹⁰/120.",
          "(c) The first omitted term is 0.5⁵/5! = 0.03125/120 ≈ 0.00026 < 0.001. The series alternates with terms decreasing to 0, so |error| ≤ that term.",
        ],
      },
    },
  ],
};
