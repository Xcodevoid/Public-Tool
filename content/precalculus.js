window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["precalculus"] = {
  intro: "Units 1–3 are on the AP exam. Unit 4 is part of the course but not assessed on the exam. It's included here for your class and for calculus readiness.",
  tips: [
    "Part of the exam allows a graphing calculator and part doesn't. Practice both ways, including reading values off graphs and tables.",
    "Free-response questions ask you to model real situations. Always state what your function's input and output represent, with units.",
    "Justify with rates of change: \"f is increasing and concave down because the rate of change is positive and decreasing.\"",
    "Know the parent functions (polynomial, rational, exponential, logarithmic, sine, cosine, tangent) by their graphs, not just their formulas.",
    "Give answers in exact form (π/3, ln 5) unless a decimal is asked for. A calculator decimal can lose points on no-calculator parts.",
  ],
  units: [
    {
      title: "Polynomial and Rational Functions",
      weight: "30–40%",
      tldr: "Functions describe how one quantity changes with another. Polynomials are built from powers of x and have predictable zeros and end behavior. Rational functions (a ratio of polynomials) add asymptotes and holes.",
      concepts: [
        {
          title: "Rates of change",
          simple: "Rate of change is how fast the output changes as the input changes. It can itself speed up or slow down.",
          detail: "Average rate of change on [a, b] = (f(b) − f(a))/(b − a), the slope of the secant line. If the rate of change is increasing, the graph is concave up. If it's decreasing, the graph is concave down.",
          example: "f(x) = x² on [1, 3]: (9 − 1)/(3 − 1) = 4.",
        },
        {
          title: "Polynomial functions: zeros and end behavior",
          simple: "A polynomial's highest power controls what happens at the far ends of the graph. Its zeros are where it crosses or touches the x-axis.",
          detail: "End behavior comes from the leading term. An even degree means both ends go the same way; an odd degree means opposite ways, and a negative leading coefficient flips them. A zero with odd multiplicity CROSSES the axis; even multiplicity TOUCHES and turns. A degree-n polynomial has at most n real zeros and at most n − 1 turning points.",
          hook: "Odd multiplicity crosses; even multiplicity bounces.",
        },
        {
          title: "Rational functions: asymptotes and holes",
          simple: "Dividing by zero breaks a rational function. If the factor cancels you get a hole; if it doesn't, you get a vertical asymptote.",
          detail: "Factor the top and bottom. A common factor gives a hole. A remaining zero of the denominator gives a vertical asymptote. Horizontal asymptote: compare degrees. If the bottom's degree is larger, y = 0. If equal, the ratio of leading coefficients. If the top's is larger, there's none (a slant asymptote when it's larger by exactly 1).",
          example: "(x − 2)(x + 1)/((x − 2)(x − 3)): hole at x = 2, vertical asymptote at x = 3, horizontal asymptote y = 1.",
        },
        {
          title: "Transformations and function models",
          simple: "Shifting, stretching and flipping a basic graph creates new functions, and those functions can model data.",
          detail: "g(x) = a·f(b(x − h)) + k. h shifts right, k shifts up, a stretches vertically (and flips if negative), b compresses horizontally. Choose a model (linear, quadratic, cubic, piecewise) based on how the rate of change behaves, and use regression to fit data.",
          hook: "Inside the parentheses does the OPPOSITE of what you'd expect: f(x − 3) moves RIGHT.",
        },
      ],
      terms: [
        ["Average rate of change", "(f(b) − f(a))/(b − a), the slope of the secant line."],
        ["End behavior", "What f(x) does as x → ∞ and x → −∞."],
        ["Multiplicity", "How many times a factor repeats. It decides whether the graph crosses or bounces."],
        ["Vertical asymptote", "A line x = a that the graph approaches but never reaches, from a non-canceling zero of the denominator."],
        ["Hole (removable discontinuity)", "A missing point caused by a factor that cancels."],
        ["Horizontal asymptote", "The value f(x) approaches as x → ±∞."],
      ],
      mistakes: [
        "Calling every zero of the denominator a vertical asymptote. Factor first: canceled factors are holes.",
        "Shifting the wrong way. f(x − 3) moves RIGHT 3, not left.",
        "Reading end behavior from the constant term instead of the leading term.",
      ],
      questions: [
        { q: "What is the average rate of change of f(x) = x² on [1, 3]?", choices: ["2", "4", "8", "9"], answer: 1, explain: "(f(3) − f(1))/(3 − 1) = (9 − 1)/2 = 4." },
        { q: "As x → ∞, what happens to f(x) = −2x⁵ + 3x²?", choices: ["f(x) → ∞", "f(x) → −∞", "f(x) → 0", "f(x) → −2"], answer: 1, explain: "The leading term −2x⁵ dominates. For large positive x it is very negative." },
        { q: "The graph of a polynomial touches the x-axis at x = 4 without crossing it. The factor (x − 4) has:", choices: ["Multiplicity 1", "Even multiplicity", "Odd multiplicity of at least 3", "No relation to the graph"], answer: 1, explain: "Even multiplicity means the sign doesn't change, so the graph touches and turns around." },
        { q: "r(x) = (x − 2)(x + 1)/((x − 2)(x − 3)) has:", choices: ["Vertical asymptotes at x = 2 and x = 3", "A hole at x = 2 and a vertical asymptote at x = 3", "A hole at x = 3 and a vertical asymptote at x = 2", "No vertical asymptotes"], answer: 1, explain: "The (x − 2) factor cancels, leaving a hole. (x − 3) remains in the denominator, giving an asymptote." },
        { q: "g(x) = f(x − 3) + 2. Compared to f, the graph of g is shifted:", choices: ["Left 3, up 2", "Right 3, up 2", "Right 3, down 2", "Left 3, down 2"], answer: 1, explain: "Subtracting inside the parentheses shifts RIGHT. Adding outside shifts up." },
      ],
      frq: {
        prompt: "Let r(x) = (x² − 4)/(x² − x − 6).\n(a) Factor r and find any holes.\n(b) Find the vertical and horizontal asymptotes.\n(c) Describe the behavior of r as x → 3 from the right.",
        points: [
          "(a) (x − 2)(x + 2)/((x − 3)(x + 2)), so there's a hole at x = −2 (at y = (−4)/(−5) = 4/5).",
          "(b) Vertical asymptote x = 3. The degrees are equal, so the horizontal asymptote is y = 1.",
          "(c) For x slightly above 3, the numerator (x − 2) is about 1 > 0 and the denominator (x − 3) is a small positive number, so r(x) → +∞.",
        ],
      },
    },
    {
      title: "Exponential and Logarithmic Functions",
      weight: "27–40%",
      tldr: "Linear functions add the same amount each step. Exponential functions MULTIPLY by the same factor. Logarithms undo exponentials, which makes them the tool for solving for an exponent.",
      concepts: [
        {
          title: "Arithmetic vs. geometric sequences",
          simple: "Arithmetic sequences add the same number each time. Geometric sequences multiply by the same number each time.",
          detail: "Arithmetic: aₙ = a₀ + dn (linear, constant differences). Geometric: aₙ = a₀·rⁿ (exponential, constant ratios). Over equal input intervals, linear functions change by equal DIFFERENCES and exponential functions by equal RATIOS.",
          example: "3, 6, 12, 24 is geometric with r = 2, so aₙ = 3·2ⁿ⁻¹ starting at n = 1.",
        },
        {
          title: "Exponential functions and models",
          simple: "Exponential growth speeds up over time because each step builds on the last one.",
          detail: "f(x) = a·bˣ with a > 0. If b > 1 it's growth; if 0 < b < 1 it's decay. A percent change r gives the factor b = 1 + r (for example, −20% gives 0.8). Doubling or half-life models: a·2^(t/T) or a·(½)^(t/T).",
          hook: "Decreasing by 20% means KEEPING 80%, so multiply by 0.8.",
        },
        {
          title: "Logarithms and their properties",
          simple: "A logarithm answers: \"what exponent do I need?\"",
          detail: "log_b(x) = y means b^y = x. Properties: log(ab) = log a + log b, log(a/b) = log a − log b, log(aⁿ) = n·log a. Change of base: log_b(x) = ln x / ln b. The domain is x > 0.",
          example: "log₂(8) = 3 because 2³ = 8.",
        },
        {
          title: "Inverses, equations and semi-log plots",
          simple: "Exponential and log functions undo each other, so you can use one to solve equations involving the other.",
          detail: "f(x) = bˣ and f⁻¹(x) = log_b(x) are reflections over y = x. Solve 5·2ˣ = 40 → 2ˣ = 8 → x = 3. On a semi-log plot (log of y against x), exponential data looks LINEAR.",
        },
      ],
      terms: [
        ["Geometric sequence", "A sequence with a constant ratio between terms."],
        ["Growth factor", "The b in a·bˣ. It equals 1 + the percent change."],
        ["Logarithm", "The exponent that produces a given number: log_b(x) = y ⇔ b^y = x."],
        ["Natural log (ln)", "A logarithm with base e ≈ 2.718."],
        ["Inverse function", "A function that undoes another. Its graph is the reflection over y = x."],
        ["Semi-log plot", "A graph using log(y). Exponential data appears linear on it."],
      ],
      mistakes: [
        "Writing log(a + b) = log a + log b. The product rule is log(ab), not a sum.",
        "Using 0.2 for a 20% decrease. The factor is 0.8.",
        "Forgetting the domain: log(x) needs x > 0.",
      ],
      questions: [
        { q: "What is the nth term of the sequence 3, 6, 12, 24, … (starting at n = 1)?", choices: ["aₙ = 3n", "aₙ = 3 + 3(n − 1)", "aₙ = 3·2ⁿ⁻¹", "aₙ = 2·3ⁿ⁻¹"], answer: 2, explain: "Each term doubles (ratio 2) starting from 3, so aₙ = 3·2ⁿ⁻¹." },
        { q: "A car loses 20% of its value each year. Which is its growth factor?", choices: ["0.2", "0.8", "1.2", "−0.2"], answer: 1, explain: "It keeps 80% of its value each year, so it's multiplied by 0.8." },
        { q: "log₂(8) = ?", choices: ["3", "4", "16", "2.08"], answer: 0, explain: "2³ = 8." },
        { q: "log(x) + log(y) equals:", choices: ["log(x + y)", "log(xy)", "log(x)·log(y)", "log(x/y)"], answer: 1, explain: "The product property: log a + log b = log(ab)." },
        { q: "On a semi-log plot (log y against x), a data set appears linear. The best model is:", choices: ["Linear", "Quadratic", "Exponential", "Logarithmic"], answer: 2, explain: "Taking a log of exponential data straightens it, so a linear semi-log plot means exponential data." },
      ],
      frq: {
        prompt: "A bacteria culture has 500 cells at t = 0 hours and 2,000 cells at t = 4 hours. Assume exponential growth.\n(a) Write a model P(t) = a·bᵗ.\n(b) Find the doubling time.\n(c) Use logarithms to find when the population reaches 10,000.",
        points: [
          "(a) a = 500. b⁴ = 4, so b = 4^(1/4) = √2 ≈ 1.414. P(t) = 500(√2)ᵗ.",
          "(b) (√2)ᵗ = 2 when t = 2, so the population doubles every 2 hours.",
          "(c) 500·2^(t/2) = 10,000 → 2^(t/2) = 20 → t = 2·log₂(20) ≈ 8.64 hours.",
        ],
      },
    },
    {
      title: "Trigonometric and Polar Functions",
      weight: "30–35%",
      tldr: "Trigonometric functions describe things that repeat, like tides, sound and circular motion. Their shape is set by amplitude, period, midline and phase shift. Polar coordinates describe points by distance and angle instead of x and y.",
      concepts: [
        {
          title: "The unit circle and radians",
          simple: "On a circle of radius 1, cosine is the x-coordinate and sine is the y-coordinate of a point at a given angle.",
          detail: "Radians measure an angle by arc length: 2π radians = 360°. Key values: sin(π/6) = ½, cos(π/3) = ½, sin(π/4) = cos(π/4) = √2/2, sin(π/2) = 1. tan θ = sin θ / cos θ.",
        },
        {
          title: "Sinusoidal functions",
          simple: "A sine wave has a height (amplitude), a center line (midline), a length before it repeats (period) and a starting shift.",
          detail: "f(x) = a·sin(b(x − h)) + k. Amplitude = |a|, period = 2π/|b|, midline y = k, phase shift h. Use them to model periodic data: find the max and min, then amplitude = (max − min)/2 and midline = (max + min)/2.",
          example: "4cos(x) − 1: amplitude 4, midline y = −1, period 2π.",
        },
        {
          title: "Tangent and inverse trig functions",
          simple: "Tangent is sine divided by cosine, so it breaks wherever cosine is zero. Inverse trig functions give back an angle.",
          detail: "tan x has period π and vertical asymptotes at x = π/2 + kπ. Inverses: arcsin and arccos output angles from restricted ranges (arcsin: [−π/2, π/2], arccos: [0, π]).",
        },
        {
          title: "Polar coordinates and graphs",
          simple: "Polar coordinates give a point by how far it is from the origin (r) and in which direction (θ).",
          detail: "x = r cos θ, y = r sin θ, r² = x² + y². Graph r = f(θ) by tracking how r changes as θ sweeps. For example, r = 2cos θ is a circle, and r = 1 + cos θ is a cardioid. When r is increasing, the point moves away from the origin.",
          example: "(r, θ) = (2, π/2) → (x, y) = (2·0, 2·1) = (0, 2).",
        },
      ],
      terms: [
        ["Radian", "The angle whose arc length equals the radius. 2π rad = 360°."],
        ["Amplitude", "Half the distance from the maximum to the minimum of a periodic function."],
        ["Period", "The input length of one full cycle: 2π/|b| for sin(bx)."],
        ["Midline", "The horizontal center line of a sinusoid, y = (max + min)/2."],
        ["Phase shift", "A horizontal shift of a periodic function."],
        ["Polar coordinates", "(r, θ): distance from the origin and angle."],
      ],
      mistakes: [
        "Using b as the period. The period is 2π/b.",
        "Forgetting that tangent is undefined where cos x = 0.",
        "Mixing up which coordinate is sine and which is cosine on the unit circle (x = cos, y = sin).",
      ],
      questions: [
        { q: "What is the period of f(x) = sin(3x)?", choices: ["3", "3π", "2π/3", "6π"], answer: 2, explain: "Period = 2π/|b| = 2π/3." },
        { q: "For g(x) = 4cos(x) − 1, what are the amplitude and midline?", choices: ["Amplitude 4, midline y = −1", "Amplitude −1, midline y = 4", "Amplitude 4, midline y = 0", "Amplitude 3, midline y = −1"], answer: 0, explain: "Amplitude = |a| = 4, and the vertical shift −1 is the midline." },
        { q: "sin(π/6) = ?", choices: ["√3/2", "½", "√2/2", "1"], answer: 1, explain: "π/6 = 30°, and sin 30° = ½." },
        { q: "Convert the polar point (2, π/2) to rectangular coordinates.", choices: ["(2, 0)", "(0, 2)", "(−2, 0)", "(0, −2)"], answer: 1, explain: "x = 2cos(π/2) = 0 and y = 2sin(π/2) = 2." },
        { q: "Where is tan x undefined?", choices: ["x = 0", "x = π", "x = π/2", "x = π/4"], answer: 2, explain: "tan x = sin x/cos x, and cos(π/2) = 0." },
      ],
      frq: {
        prompt: "The water depth in a harbor varies sinusoidally. High tide is 12 m at t = 0 hours, and the next low tide is 4 m at t = 6 hours.\n(a) Find the amplitude, midline and period.\n(b) Write a model D(t).\n(c) Is the depth increasing or decreasing at t = 8? Explain.",
        points: [
          "(a) Amplitude = (12 − 4)/2 = 4 m. Midline = (12 + 4)/2 = 8 m. High to low is half a cycle, so the period is 12 hours.",
          "(b) D(t) = 4cos(πt/6) + 8, because b = 2π/12 = π/6 and the maximum is at t = 0.",
          "(c) Increasing: the low tide is at t = 6 and the next high is at t = 12, so from 6 to 12 the depth is rising.",
        ],
      },
    },
    {
      title: "Functions Involving Parameters, Vectors, and Matrices",
      weightLabel: "Not assessed on the AP exam",
      tldr: "This unit extends functions to new forms (parametric equations, vectors and matrices) that prepare you for calculus and linear algebra. It's part of the course, but the AP exam doesn't test it.",
      concepts: [
        {
          title: "Parametric functions",
          simple: "Instead of y depending on x, both x and y depend on a third variable, often time.",
          detail: "(x(t), y(t)) traces a path. Eliminate the parameter by solving one equation for t and substituting. For example, x = t, y = t² gives y = x².",
        },
        {
          title: "Vectors",
          simple: "A vector has both a size and a direction, like a velocity.",
          detail: "⟨a, b⟩ has magnitude √(a² + b²). Add vectors component-wise. The dot product u·v = u₁v₁ + u₂v₂, and u·v = 0 means the vectors are perpendicular.",
          example: "⟨3, 4⟩ has magnitude 5.",
        },
        {
          title: "Matrices and linear transformations",
          simple: "A matrix is a grid of numbers that can transform points, for example rotating or stretching a shape.",
          detail: "For [[a, b], [c, d]], the determinant is ad − bc. The matrix has an inverse only if the determinant ≠ 0. Multiplying a vector by a matrix applies a linear transformation. The determinant's absolute value scales area.",
        },
      ],
      terms: [
        ["Parameter", "The third variable (often t) that both x and y depend on."],
        ["Magnitude", "A vector's length: √(a² + b²)."],
        ["Dot product", "u₁v₁ + u₂v₂. It's zero for perpendicular vectors."],
        ["Determinant", "ad − bc for a 2×2 matrix. It's zero when the matrix has no inverse."],
      ],
      mistakes: [
        "Multiplying matrices entry by entry. Use row-times-column.",
        "Forgetting that a zero determinant means there's no inverse.",
      ],
      questions: [
        { q: "What is the magnitude of the vector ⟨3, 4⟩?", choices: ["5", "7", "12", "25"], answer: 0, explain: "√(3² + 4²) = √25 = 5." },
        { q: "x = t and y = t². Eliminating t gives:", choices: ["y = x", "y = x²", "x = y²", "y = 2x"], answer: 1, explain: "Substitute t = x into y = t²." },
        { q: "What is the determinant of [[2, 3], [1, 4]]?", choices: ["5", "8", "11", "−5"], answer: 0, explain: "ad − bc = 2·4 − 3·1 = 5." },
      ],
      frq: {
        prompt: "Let u = ⟨2, −1⟩ and v = ⟨1, 2⟩.\n(a) Find u + v and |u|.\n(b) Compute u·v and state what it tells you.\n(c) Find the determinant of the matrix with rows u and v, and say whether the matrix is invertible.",
        points: [
          "(a) u + v = ⟨3, 1⟩ and |u| = √5.",
          "(b) u·v = 2 − 2 = 0, so the vectors are perpendicular.",
          "(c) det = 2·2 − (−1)(1) = 5 ≠ 0, so the matrix is invertible.",
        ],
      },
    },
  ],
};
