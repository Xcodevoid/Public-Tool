// More key concepts for content/precalculus.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["precalculus"] = {
  0: [
    {
      title: "Complex zeros and the number of zeros",
      simple: "A degree-n polynomial has exactly n complex zeros, counting repeats.",
      detail: "By the Fundamental Theorem of Algebra, a degree-n polynomial has n complex zeros (with multiplicity). Non-real zeros of polynomials with real coefficients come in conjugate pairs (a ± bi). A polynomial of odd degree must have at least one real zero. Even multiplicity: the graph touches the x-axis; odd multiplicity: it crosses.",
      trap: "If 2 + 3i is a zero of a real polynomial, 2 − 3i must be too. Forgetting the conjugate undercounts the degree.",
      terms: [
        ["Fundamental Theorem of Algebra", "A degree-n polynomial has exactly n complex zeros, counting multiplicity."],
        ["Complex conjugate pair", "Zeros a + bi and a − bi, which occur together for real polynomials."],
      ],
    },
    {
      title: "Polynomial and rational inequalities",
      simple: "Solve inequalities by finding where the expression is zero or undefined, then testing the sign in between.",
      detail: "Find zeros (and, for rational functions, where the denominator is zero), mark them on a number line, and test a value in each interval. Include zeros for ≤ or ≥, but never include values that make the denominator zero.",
      trap: "Never multiply both sides by an expression that could be negative. Use a sign chart instead.",
      terms: [
        ["Sign chart", "A number line showing where an expression is positive or negative."],
        ["Critical values", "Zeros and undefined points where an expression can change sign."],
      ],
    },
    {
      title: "Polynomial division and slant asymptotes",
      simple: "Long division rewrites a rational function to show its end behavior.",
      detail: "If the numerator's degree is exactly one more than the denominator's, dividing gives a quotient that is linear: that line is a slant asymptote. The remainder over the denominator goes to 0 as x → ±∞. The Remainder Theorem: p(a) is the remainder when p(x) is divided by (x − a).",
      trap: "A slant asymptote only happens when the numerator's degree is EXACTLY one greater than the denominator's.",
      terms: [
        ["Slant asymptote", "A non-horizontal line a rational function approaches as x → ±∞."],
        ["Remainder Theorem", "p(a) equals the remainder when p(x) is divided by x − a."],
      ],
    },
    {
      title: "The Binomial Theorem",
      simple: "Expand (a + b)ⁿ quickly using coefficients from Pascal's Triangle.",
      detail: "(a + b)ⁿ = Σ C(n, k) aⁿ⁻ᵏ bᵏ, for k = 0 to n. The coefficients are row n of Pascal's Triangle. There are n + 1 terms, and the exponents in each term add to n.",
      example: "(x + 2)³ = x³ + 6x² + 12x + 8.",
      trap: "Include the constants' powers: in (2x − 1)⁴, each term includes powers of 2 and of −1, which affects signs and coefficients.",
      terms: [
        ["Binomial Theorem", "Formula for expanding (a + b)ⁿ using combination coefficients."],
        ["Pascal's Triangle", "Triangle of numbers giving binomial coefficients."],
      ],
    },
    {
      title: "Piecewise-defined functions",
      simple: "A piecewise function uses different rules on different intervals of its domain.",
      detail: "Evaluate by first finding which interval contains the input. Check the boundaries: open or closed endpoints determine which piece applies. Piecewise functions model tax brackets, shipping costs, and other rule changes.",
      trap: "At a boundary, use the piece whose interval INCLUDES that point (≤ vs. <).",
      terms: [
        ["Piecewise-defined function", "A function given by different expressions on different intervals."],
        ["Boundary point", "An x-value where the rule of a piecewise function changes."],
      ],
    },
  ],
  1: [
    {
      title: "Function composition",
      simple: "Composing functions feeds the output of one into another.",
      detail: "(f ∘ g)(x) = f(g(x)): apply g first, then f. Order matters; f(g(x)) usually differs from g(f(x)). The domain of f ∘ g includes only x-values in g's domain whose outputs are in f's domain. Composition can be read from tables and graphs.",
      trap: "Work from the INSIDE out. f(g(2)) means find g(2) first.",
      terms: [
        ["Composition of functions", "Using the output of one function as the input of another."],
        ["Decomposition", "Rewriting a function as a composition of simpler functions."],
      ],
    },
    {
      title: "Exponential function properties",
      simple: "Exponential functions grow or decay by a constant factor over equal intervals.",
      detail: "f(x) = abˣ with b > 0, b ≠ 1: growth if b > 1, decay if 0 < b < 1. Horizontal asymptote y = 0 (shifted by vertical translations). Product property: bᵐbⁿ = bᵐ⁺ⁿ. A horizontal shift is equivalent to a vertical dilation: b^(x+k) = bᵏ·bˣ.",
      trap: "Exponential functions change by equal FACTORS (ratios), not equal differences. Check ratios in tables.",
      terms: [
        ["Growth factor", "The base b in abˣ; the ratio between consecutive outputs."],
        ["Horizontal asymptote of an exponential", "A horizontal line the function approaches, y = 0 for abˣ."],
      ],
    },
    {
      title: "Logarithmic functions and their graphs",
      simple: "A log function undoes an exponential, so its graph is the exponential reflected over y = x.",
      detail: "f(x) = log_b(x) has domain x > 0, a vertical asymptote at x = 0, and passes through (1, 0) and (b, 1). It grows very slowly. Change of base: log_b(x) = ln x / ln b. Properties: log(mn) = log m + log n; log(m/n) = log m − log n; log(mᵖ) = p log m.",
      trap: "log(m + n) is NOT log m + log n. The product rule applies to MULTIPLICATION inside the log.",
      terms: [
        ["Change of base formula", "log_b(x) = ln x / ln b"],
        ["Vertical asymptote of a log", "The line x = 0 for y = log_b(x)."],
      ],
    },
    {
      title: "Solving exponential and logarithmic equations",
      simple: "Use logs to bring down exponents and exponentials to undo logs.",
      detail: "For bˣ = c, take logs: x = log_b c. For log_b(x) = c, rewrite as x = bᶜ. Combine log terms before solving. Check every solution in the original equation, since logs of zero or negative numbers are undefined.",
      trap: "Always check for EXTRANEOUS solutions in log equations. A solution that makes an argument ≤ 0 must be rejected.",
      terms: [
        ["Extraneous solution", "A solution from the algebra that doesn't satisfy the original equation."],
        ["Exponential form", "Rewriting log_b(x) = c as bᶜ = x."],
      ],
    },
    {
      title: "Choosing and validating a model",
      simple: "Pick a model based on how the data changes, then check it with residuals.",
      detail: "Linear: equal differences. Exponential: equal ratios. Quadratic: equal second differences. A residual = actual − predicted. A good model has residuals scattered randomly around 0; a pattern means a different model fits better. Semi-log plots turn exponential data into a line.",
      trap: "A model can fit the data well and still be wrong to extrapolate far beyond it. State the model's limits.",
      terms: [
        ["Residual", "Actual value minus predicted value."],
        ["Residual plot", "Graph of residuals; random scatter suggests a good model."],
      ],
    },
  ],
  2: [
    {
      title: "Periodic phenomena",
      simple: "A periodic function repeats its values in regular cycles.",
      detail: "The period is the length of one full cycle. Real examples: tides, daylight hours, Ferris wheels, sound waves. Once one cycle is known, the rest can be predicted. Features like max, min and midline come from the data.",
      trap: "The period is the horizontal length of ONE full cycle, not the distance between a max and the next min (that's half a period).",
      terms: [
        ["Periodic function", "A function whose values repeat in regular intervals."],
        ["Cycle", "One complete repetition of a periodic pattern."],
      ],
    },
    {
      title: "Sinusoidal modeling",
      simple: "Build a sine or cosine model from a situation's max, min and timing.",
      detail: "For f(x) = a sin(b(x − c)) + d: amplitude a = (max − min)/2, midline d = (max + min)/2, period = 2π/b, and c shifts the graph horizontally. Cosine starts at a max, which is convenient when the data begins at a peak.",
      trap: "b is NOT the period. Period = 2π/b, so a 12-hour period means b = π/6.",
      terms: [
        ["Midline", "The horizontal line halfway between the max and min, y = d."],
        ["Frequency", "Number of cycles per unit, the reciprocal of the period."],
      ],
    },
    {
      title: "Secant, cosecant and cotangent",
      simple: "These are reciprocals of cosine, sine and tangent.",
      detail: "sec θ = 1/cos θ, csc θ = 1/sin θ, cot θ = 1/tan θ = cos θ / sin θ. They have vertical asymptotes wherever the original function equals 0. Their graphs have the same period as the original function.",
      trap: "sec θ is the reciprocal of COSINE (not sine), and csc θ is the reciprocal of SINE.",
      terms: [
        ["Secant", "sec θ = 1/cos θ"],
        ["Cosecant", "csc θ = 1/sin θ"],
      ],
    },
    {
      title: "Trigonometric identities",
      simple: "Identities are equations true for every angle, used to rewrite and simplify expressions.",
      detail: "Pythagorean: sin²θ + cos²θ = 1 (and 1 + tan²θ = sec²θ). Sum formulas: sin(α + β) = sin α cos β + cos α sin β; cos(α + β) = cos α cos β − sin α sin β. Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ − sin²θ.",
      trap: "sin(α + β) is NOT sin α + sin β. Use the sum formula.",
      terms: [
        ["Pythagorean identity", "sin²θ + cos²θ = 1"],
        ["Double-angle identity", "sin 2θ = 2 sin θ cos θ"],
      ],
    },
    {
      title: "Solving trigonometric equations and inequalities",
      simple: "Trig equations usually have many solutions because the functions repeat.",
      detail: "Isolate the trig function, find reference solutions on [0, 2π) using the unit circle or inverse trig, then add multiples of the period for all solutions. Inverse functions return only one value (in a restricted range), so use symmetry to find the others.",
      trap: "arcsin gives only ONE solution. sin θ = 1/2 also has θ = 5π/6 in [0, 2π).",
      terms: [
        ["Reference angle", "The acute angle a terminal side makes with the x-axis."],
        ["General solution", "All solutions, written with + 2πk (or the period) for integers k."],
      ],
    },
    {
      title: "Rates of change in polar functions",
      simple: "In a polar graph, r changing tells you whether points move toward or away from the origin.",
      detail: "If r is positive and increasing, points move away from the origin; if positive and decreasing, they move toward it. If r is negative, the point plots in the opposite direction, so reverse the reasoning using |r|. Average rate of change = Δr/Δθ.",
      trap: "When r is NEGATIVE, increasing r means the point moves CLOSER to the origin. Think about distance |r|.",
      terms: [
        ["Polar function", "r = f(θ), giving distance from the origin at each angle."],
        ["Distance from the origin", "|r| in polar coordinates."],
      ],
    },
  ],
  3: [
    {
      title: "Parametric rates of change",
      simple: "With parametric equations, x and y each change with t, and their rates combine.",
      detail: "Average rate of change of x: Δx/Δt; of y: Δy/Δt. The slope of the path is (Δy/Δt)/(Δx/Δt). A particle moves right when x increases and up when y increases. Parametric functions can trace lines, circles (x = cos t, y = sin t) and more.",
      trap: "Direction depends on the parameter: the same curve can be traced clockwise or counterclockwise.",
      terms: [
        ["Parametric equations", "x and y both expressed as functions of a parameter t."],
        ["Parametric slope", "(Δy/Δt)/(Δx/Δt)"],
      ],
    },
    {
      title: "Implicitly defined functions and conic sections",
      simple: "Some curves are described by equations in x and y together, like circles and ellipses.",
      detail: "Circle: (x − h)² + (y − k)² = r². Ellipse: (x − h)²/a² + (y − k)²/b² = 1. Hyperbola: (x − h)²/a² − (y − k)²/b² = 1. Parabola: y = a(x − h)² + k. Conics can be parametrized (e.g., x = a cos t, y = b sin t for an ellipse).",
      trap: "An ellipse has a PLUS between its terms; a hyperbola has a MINUS.",
      terms: [
        ["Ellipse", "(x − h)²/a² + (y − k)²/b² = 1"],
        ["Hyperbola", "(x − h)²/a² − (y − k)²/b² = 1"],
      ],
    },
    {
      title: "Vector-valued functions",
      simple: "A vector-valued function gives a position vector for each time, describing motion.",
      detail: "p(t) = ⟨x(t), y(t)⟩. Displacement between times is a vector difference. Rates of change of x and y give the velocity components. Its magnitude √(vₓ² + v_y²) is the speed.",
      trap: "Speed is the MAGNITUDE of velocity. Adding the components together doesn't give speed.",
      terms: [
        ["Vector-valued function", "A function outputting a vector, like ⟨x(t), y(t)⟩."],
        ["Unit vector", "A vector with magnitude 1."],
      ],
    },
    {
      title: "Matrix inverses and modeling transitions",
      simple: "Matrices can undo transformations and model how populations shift between states.",
      detail: "A 2×2 matrix [[a, b], [c, d]] has inverse (1/(ad − bc))[[d, −b], [−c, a]] if the determinant ad − bc ≠ 0. Transition matrices model changes between states (e.g., customers switching brands); multiplying by the state vector predicts the next step, and repeated multiplication predicts the long run.",
      trap: "If the determinant is 0, the matrix has NO inverse. The transformation collapses space and can't be undone.",
      terms: [
        ["Inverse matrix", "A matrix that undoes a transformation: A⁻¹A = I."],
        ["Transition matrix", "Matrix giving probabilities of moving between states."],
      ],
    },
  ],
};
