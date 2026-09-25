window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["calculus-ab"] = {
  tips: [
    "Justify, don't just state. \"f has a relative max at x = 2 because f′ changes from positive to negative there\" earns the point. \"Because f′(2) = 0\" does not.",
    "Always include units on context questions, like gallons per minute or feet per second.",
    "On calculator sections, store intermediate values in your calculator instead of rounding them. Give final answers to three decimal places.",
    "You don't need to simplify arithmetic on free-response answers. An unsimplified correct expression still earns full credit.",
    "If you get stuck on part (a), still try (b) and (c). Later parts often use a given value, not your answer to part (a).",
  ],
  units: [
    {
      title: "Limits and Continuity",
      weight: "10–12%",
      tldr: "A limit asks what value f(x) is heading toward as x gets close to a number. That can differ from what f actually equals there. A function is continuous at a point when there's no break: the limit exists and matches the function's value.",
      concepts: [
        {
          title: "What a limit really means",
          simple: "Picture walking toward a door. The limit is where you're heading, even if the door is locked and you never get through. The function doesn't have to be defined at the point for the limit to exist.",
          detail: "lim(x→a) f(x) = L means f(x) gets arbitrarily close to L as x approaches a. The two-sided limit exists only if the left-hand limit equals the right-hand limit.",
          example: "f(x) = (x² − 1)/(x − 1) is undefined at x = 1. For x ≠ 1 it simplifies to x + 1, so lim(x→1) f(x) = 2.",
        },
        {
          title: "Finding limits algebraically",
          simple: "Try plugging in first. If you get 0/0, that isn't the answer. It means rewrite the expression and try again.",
          detail: "Methods for 0/0: factor and cancel, multiply by the conjugate, or use known limits such as lim(x→0) sin(x)/x = 1. The Squeeze Theorem: if g ≤ f ≤ h near a and g and h share limit L, then f's limit is L too.",
          example: "lim(x→0) sin(5x)/x = 5 · lim sin(5x)/(5x) = 5 · 1 = 5.",
        },
        {
          title: "Continuity and its three conditions",
          simple: "A continuous function is one you can draw without lifting your pencil.",
          detail: "f is continuous at x = a if (1) f(a) is defined, (2) lim(x→a) f(x) exists, and (3) the two are equal. The types of discontinuity are removable (a hole), jump, and infinite (a vertical asymptote).",
          hook: "Defined, exists, equal. Check all three, in that order.",
        },
        {
          title: "Intermediate Value Theorem and asymptotes",
          simple: "If you're continuous and you start below a value and end above it, you had to cross it somewhere.",
          detail: "IVT: if f is continuous on [a, b], then f takes every value between f(a) and f(b). Limits at infinity give horizontal asymptotes. For rational functions, compare the degrees of the top and bottom.",
          example: "lim(x→∞) (4x³ − x)/(2x³ + 5) = 4/2 = 2, because the degrees are equal so you take the ratio of the leading coefficients.",
        },
      ],
      terms: [
        ["Limit", "The value f(x) approaches as x approaches a number."],
        ["One-sided limit", "A limit from only the left (x → a⁻) or only the right (x → a⁺)."],
        ["Continuous", "No break at the point: f(a) exists, the limit exists, and they're equal."],
        ["Removable discontinuity", "A hole in the graph. The limit exists but doesn't equal f(a), or f(a) is undefined."],
        ["Vertical asymptote", "A line x = a where f(x) → ±∞ as x → a."],
        ["Horizontal asymptote", "A line y = L where f(x) → L as x → ±∞."],
        ["Intermediate Value Theorem", "A continuous function on [a, b] hits every y-value between f(a) and f(b)."],
      ],
      mistakes: [
        "Saying a limit doesn't exist just because f(a) is undefined. Holes still have limits.",
        "Treating 0/0 as an answer. It's a signal to rewrite the expression, not a result.",
        "Using the IVT without first stating that the function is continuous on the closed interval.",
      ],
      questions: [
        { q: "lim(x→3) (x² − 9)/(x − 3) = ?", choices: ["0", "3", "6", "Does not exist"], answer: 2, explain: "Factor: (x − 3)(x + 3)/(x − 3) = x + 3 for x ≠ 3. Plugging in 3 gives 6. The 0/0 you get at first only means you need to simplify." },
        { q: "lim(x→∞) (4x³ − x)/(2x³ + 5) = ?", choices: ["0", "2", "4", "∞"], answer: 1, explain: "The top and bottom have the same degree (3), so the limit is the ratio of the leading coefficients: 4/2 = 2." },
        { q: "f is continuous on [1, 4] with f(1) = −2 and f(4) = 5. Which must be true?", choices: ["f(c) = 0 for some c in (1, 4)", "f has its maximum at x = 4", "f′(c) = 7/3 for some c in (1, 4)", "f is increasing on [1, 4]"], answer: 0, explain: "By the IVT, a continuous f takes every value between −2 and 5, including 0. The f′ choice needs differentiability (that's the Mean Value Theorem), which we weren't told." },
        { q: "lim(x→0) sin(5x)/x = ?", choices: ["0", "1", "5", "1/5"], answer: 2, explain: "Rewrite as 5 · sin(5x)/(5x). Since lim sin(u)/u = 1 as u → 0, the answer is 5." },
        { q: "f(x) = x + 2 for x < 1, and f(x) = kx² for x ≥ 1. What value of k makes f continuous?", choices: ["1", "2", "3", "4"], answer: 2, explain: "The left side approaches 1 + 2 = 3, and the right side equals k(1)² = k. For continuity they must match, so k = 3." },
      ],
      frq: {
        prompt: "Let g(x) = (x² − 4)/(x − 2) for x ≠ 2, and g(2) = 5.\n(a) Find lim(x→2) g(x).\n(b) Is g continuous at x = 2? Justify your answer.\n(c) What value of g(2) would make g continuous at x = 2?",
        points: [
          "(a) Factors the numerator and simplifies to x + 2, getting a limit of 4.",
          "(b) Says g is NOT continuous, because lim(x→2) g(x) = 4 ≠ g(2) = 5. The answer must compare the limit to the function value.",
          "(c) g(2) = 4, which removes the discontinuity.",
        ],
      },
    },
    {
      title: "Differentiation: Definition and Fundamental Properties",
      weight: "10–12%",
      tldr: "The derivative is the instantaneous rate of change, which is the slope of the tangent line. It's defined as the limit of average rates of change (secant slopes) as the interval shrinks to zero.",
      concepts: [
        {
          title: "The derivative as a limit",
          simple: "Zoom in far enough on a smooth curve and it looks like a straight line. The slope of that line is the derivative.",
          detail: "f′(x) = lim(h→0) [f(x + h) − f(x)]/h. The average rate of change on [a, b] is [f(b) − f(a)]/(b − a), which is the slope of the secant line.",
          example: "lim(h→0) [(2 + h)³ − 8]/h is the definition of the derivative of x³ at x = 2, so it equals 3(2)² = 12.",
        },
        {
          title: "Differentiable vs. continuous",
          simple: "A smooth curve has a derivative. A sharp corner, a jump or a vertical cliff doesn't.",
          detail: "Differentiable implies continuous, but not the other way around. f is not differentiable at corners (like |x| at 0), cusps, vertical tangents and discontinuities.",
          hook: "Smooth ⇒ connected, but connected doesn't mean smooth.",
        },
        {
          title: "Derivative rules",
          simple: "Shortcuts so you never have to use the limit definition again.",
          detail: "Power rule: (xⁿ)′ = nxⁿ⁻¹. (sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x. Product rule: (fg)′ = f′g + fg′. Quotient rule: (f/g)′ = (f′g − fg′)/g².",
          hook: "Quotient rule: \"low d-high minus high d-low, over low squared.\"",
        },
        {
          title: "Tangent lines",
          simple: "The tangent line is the straight line that just touches the curve and has the same slope at that point.",
          detail: "Tangent line at x = a: y − f(a) = f′(a)(x − a). Near a, this line approximates the function (local linearity).",
        },
      ],
      terms: [
        ["Derivative", "Instantaneous rate of change; the slope of the tangent line."],
        ["Average rate of change", "[f(b) − f(a)]/(b − a), the slope of the secant line."],
        ["Secant line", "A line through two points on a curve."],
        ["Tangent line", "A line touching the curve at one point with the same slope as the curve there."],
        ["Differentiable", "The derivative exists at that point: no corner, cusp, vertical tangent or break."],
        ["Product rule", "(fg)′ = f′g + fg′"],
      ],
      mistakes: [
        "Writing (fg)′ = f′·g′. The derivative of a product is NOT the product of derivatives.",
        "Getting the order backward in the quotient rule's numerator (it's f′g − fg′).",
        "Not recognizing a limit like lim(h→0) [sin(π/2 + h) − 1]/h as a derivative in disguise.",
      ],
      questions: [
        { q: "lim(h→0) [(2 + h)³ − 8]/h = ?", choices: ["0", "8", "12", "Does not exist"], answer: 2, explain: "This is the limit definition of f′(2) for f(x) = x³. f′(x) = 3x², so f′(2) = 12." },
        { q: "If f(x) = x² sin x, then f′(x) = ?", choices: ["2x cos x", "2x sin x + x² cos x", "2x sin x − x² cos x", "x² cos x"], answer: 1, explain: "Product rule: (x²)′·sin x + x²·(sin x)′ = 2x sin x + x² cos x." },
        { q: "Using the tangent line to y = √x at x = 4, the best approximation of √4.2 is:", choices: ["2.02", "2.05", "2.10", "2.20"], answer: 1, explain: "f(4) = 2 and f′(x) = 1/(2√x), so f′(4) = 1/4. Then L(4.2) = 2 + (1/4)(0.2) = 2.05." },
        { q: "Which function is continuous at x = 0 but NOT differentiable there?", choices: ["f(x) = x²", "f(x) = |x|", "f(x) = 1/x", "f(x) = sin x"], answer: 1, explain: "|x| has a sharp corner at 0: the slope is −1 on the left and +1 on the right. 1/x isn't even continuous at 0." },
      ],
      frq: {
        prompt: "Water in a tank: A(t) gallons at time t minutes.\n t: 0, 2, 5, 9\n A(t): 120, 132, 141, 159\n(a) Find the average rate of change of A over 2 ≤ t ≤ 9.\n(b) Estimate A′(3.5) using the table.\n(c) Interpret your answer to (b) in context.",
        points: [
          "(a) (159 − 132)/(9 − 2) = 27/7 ≈ 3.857 gallons per minute.",
          "(b) Uses the interval around 3.5: (141 − 132)/(5 − 2) = 3 gallons per minute.",
          "(c) At t = 3.5 minutes, the amount of water is increasing at about 3 gallons per minute. The answer includes the time, the rate and the units.",
        ],
      },
    },
    {
      title: "Differentiation: Composite, Implicit, and Inverse Functions",
      weight: "9–13%",
      tldr: "The chain rule handles functions inside other functions. Implicit differentiation handles equations you can't easily solve for y. Inverse functions have reciprocal slopes at matching points.",
      concepts: [
        {
          title: "The chain rule",
          simple: "Take the derivative of the outside function (leave the inside alone), then multiply by the derivative of the inside.",
          detail: "d/dx f(g(x)) = f′(g(x)) · g′(x).",
          example: "d/dx sin(3x²) = cos(3x²) · 6x",
          hook: "Outside, then inside. Peel it like an onion.",
        },
        {
          title: "Implicit differentiation",
          simple: "When x and y are tangled together, differentiate both sides anyway. Every time you differentiate a y term, attach dy/dx.",
          detail: "Treat y as a function of x. Differentiate term by term (using the product rule where x and y multiply), then solve for dy/dx.",
          example: "x² + y² = 25 → 2x + 2y(dy/dx) = 0 → dy/dx = −x/y.",
        },
        {
          title: "Derivatives of inverse functions",
          simple: "If f is steep at a point, its inverse is shallow at the matching point. The slopes are reciprocals.",
          detail: "If f(a) = b, then (f⁻¹)′(b) = 1/f′(a). Also: (arcsin x)′ = 1/√(1 − x²) and (arctan x)′ = 1/(1 + x²).",
          example: "f(2) = 5 and f′(2) = 3, so (f⁻¹)′(5) = 1/3.",
        },
        {
          title: "Higher-order derivatives",
          simple: "The second derivative is the derivative of the derivative. It tells you how the slope itself is changing.",
          detail: "f″ is written d²y/dx². With implicit differentiation, you can substitute your dy/dx expression back in to simplify.",
        },
      ],
      terms: [
        ["Composite function", "A function inside another function, f(g(x))."],
        ["Chain rule", "d/dx f(g(x)) = f′(g(x))·g′(x)"],
        ["Implicit differentiation", "Differentiating an equation in x and y without solving for y first."],
        ["Inverse function", "f⁻¹ undoes f. Its graph is f's graph reflected over y = x."],
        ["Second derivative", "f″(x), the rate of change of f′(x)."],
      ],
      mistakes: [
        "Forgetting to multiply by the derivative of the inside function.",
        "For inverses, using f′(b) instead of f′(a). The input to f′ is the x-value of the ORIGINAL function.",
        "Forgetting the product rule on terms like xy when differentiating implicitly.",
      ],
      questions: [
        { q: "d/dx [e^(x²)] = ?", choices: ["e^(x²)", "2x·e^(x²)", "x²·e^(x² − 1)", "2e^(x²)"], answer: 1, explain: "Chain rule: the outside function eᵘ stays eᵘ, then multiply by the inside's derivative, (x²)′ = 2x." },
        { q: "For x² + xy + y² = 7, what is dy/dx at the point (1, 2)?", choices: ["−4/5", "−1/2", "4/5", "−2"], answer: 0, explain: "2x + (y + x·y′) + 2y·y′ = 0. At (1, 2): 2 + 2 + y′(1 + 4) = 0, so y′ = −4/5." },
        { q: "f(2) = 5 and f′(2) = 3. If g is the inverse of f, g′(5) = ?", choices: ["3", "1/3", "1/5", "5"], answer: 1, explain: "g′(5) = 1/f′(2) = 1/3, because the point (2, 5) on f corresponds to the point (5, 2) on g." },
        { q: "d/dx [ln(cos x)] = ?", choices: ["1/cos x", "−tan x", "tan x", "−sin x"], answer: 1, explain: "(1/cos x)·(−sin x) = −sin x/cos x = −tan x." },
      ],
      frq: {
        prompt: "Consider the curve y² + xy = 6.\n(a) Find dy/dx.\n(b) Write the equation of the tangent line at (1, 2).\n(c) Is there any point on the curve where the tangent line is horizontal? Explain.",
        points: [
          "(a) 2y·y′ + y + x·y′ = 0, so y′ = −y/(2y + x).",
          "(b) Slope at (1, 2) = −2/5, so y − 2 = −(2/5)(x − 1).",
          "(c) A horizontal tangent needs y′ = 0, which means y = 0. But y = 0 gives 0 + 0 = 6, which is false, so there is no such point.",
        ],
      },
    },
    {
      title: "Contextual Applications of Differentiation",
      weight: "10–15%",
      tldr: "Derivatives in the real world: velocity and acceleration, related rates (quantities changing together), linear approximations, and L'Hôpital's Rule for tricky limits.",
      concepts: [
        {
          title: "Motion along a line",
          simple: "Position tells you where you are. Velocity (its derivative) tells you how fast and which way you're going. Acceleration (the derivative of velocity) tells you how velocity is changing.",
          detail: "v(t) = s′(t) and a(t) = v′(t). The particle is at rest when v = 0 and changes direction when v changes sign. It's speeding up when v and a have the SAME sign, and slowing down when they have opposite signs.",
          hook: "Same signs, speeding up.",
        },
        {
          title: "Related rates",
          simple: "When two things are connected, like the radius and area of a growing circle, their rates of change are connected too.",
          detail: "Steps: (1) Draw and label. (2) Write an equation relating the quantities. (3) Differentiate with respect to t. (4) Only THEN plug in the numbers.",
          example: "A = πr² → dA/dt = 2πr·dr/dt. If r = 5 and dr/dt = 2, then dA/dt = 20π.",
        },
        {
          title: "Linear approximation",
          simple: "Near a known point, the tangent line gives a close estimate of the function.",
          detail: "f(x) ≈ f(a) + f′(a)(x − a). If f is concave up, the tangent line lies below the curve, so the estimate is an underestimate. If concave down, it's an overestimate.",
        },
        {
          title: "L'Hôpital's Rule",
          simple: "If a limit gives 0/0 or ∞/∞, take the derivative of the top and the bottom separately, then try again.",
          detail: "If lim f/g is 0/0 or ±∞/±∞, then lim f/g = lim f′/g′, as long as the new limit exists. You must show that the original limit is indeterminate.",
          example: "lim(x→0) (1 − cos x)/x² → sin x/(2x) → cos x/2 = 1/2.",
        },
      ],
      terms: [
        ["Velocity", "v(t) = s′(t). It has a sign, which shows direction."],
        ["Speed", "|v(t)|, the size of the velocity with no direction."],
        ["Acceleration", "a(t) = v′(t) = s″(t)."],
        ["Related rates", "Finding one rate of change from another rate using an equation that links them."],
        ["Linearization", "L(x) = f(a) + f′(a)(x − a)"],
        ["L'Hôpital's Rule", "For 0/0 or ∞/∞ limits, compare f′/g′."],
      ],
      mistakes: [
        "Plugging in numbers before differentiating in related rates. That turns the variables into constants too early.",
        "Using L'Hôpital when the limit isn't actually 0/0 or ∞/∞.",
        "Deciding \"speeding up\" from velocity alone. You need the signs of both v and a.",
      ],
      questions: [
        { q: "s(t) = t³ − 6t² + 9t. When is the particle at rest?", choices: ["t = 0 only", "t = 1 and t = 3", "t = 2 only", "t = 0 and t = 3"], answer: 1, explain: "v(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3), which is 0 at t = 1 and t = 3." },
        { q: "At t = 2, v(2) = −3 and a(2) = −4. At t = 2, the particle is:", choices: ["Speeding up", "Slowing down", "At rest", "Changing direction"], answer: 0, explain: "Velocity and acceleration have the same sign (both negative), so speed is increasing." },
        { q: "A circle's radius grows at 2 cm/s. How fast is its area growing when r = 5 cm?", choices: ["10π cm²/s", "20π cm²/s", "25π cm²/s", "4π cm²/s"], answer: 1, explain: "dA/dt = 2πr·dr/dt = 2π(5)(2) = 20π." },
        { q: "lim(x→0) (1 − cos x)/x² = ?", choices: ["0", "1/2", "1", "Does not exist"], answer: 1, explain: "The limit is 0/0, so use L'Hôpital: sin x/(2x) is still 0/0, so apply it again: cos x/2 → 1/2." },
      ],
      frq: {
        prompt: "A 10-ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s.\n(a) Write an equation relating x (the bottom's distance from the wall) and y (the top's height).\n(b) How fast is the top sliding down when the bottom is 6 ft from the wall?\n(c) Explain what the sign of your answer means.",
        points: [
          "(a) x² + y² = 100",
          "(b) 2x(dx/dt) + 2y(dy/dt) = 0. With x = 6, y = 8, dx/dt = 2: 24 + 16(dy/dt) = 0, so dy/dt = −1.5 ft/s.",
          "(c) Negative means the height is decreasing: the top of the ladder is sliding down at 1.5 ft/s.",
        ],
      },
    },
    {
      title: "Analytical Applications of Differentiation",
      weight: "15–18%",
      tldr: "Derivatives describe the shape of a graph: where it rises and falls, where it peaks, and which way it bends. This unit also covers the Mean Value Theorem and optimization.",
      concepts: [
        {
          title: "Mean Value Theorem",
          simple: "If your average speed on a trip was 60 mph, then at some moment your speedometer read exactly 60.",
          detail: "If f is continuous on [a, b] and differentiable on (a, b), then there is some c in (a, b) with f′(c) = [f(b) − f(a)]/(b − a). You must state both conditions to use it.",
        },
        {
          title: "Increasing/decreasing and the First Derivative Test",
          simple: "A positive slope means going uphill. When the slope switches from + to −, you've reached a peak.",
          detail: "f′ > 0 means f is increasing and f′ < 0 means decreasing. A relative max is where f′ changes from + to −, and a relative min is where it changes from − to +. Critical points are where f′ = 0 or f′ is undefined.",
        },
        {
          title: "Concavity and the Second Derivative Test",
          simple: "Concave up is shaped like a cup that holds water. Concave down is a cap that spills.",
          detail: "f″ > 0 means concave up (and f′ is increasing). An inflection point is where f″ CHANGES sign. Second Derivative Test: if f′(c) = 0 and f″(c) < 0, there's a relative max at c. If f″(c) > 0, it's a relative min.",
        },
        {
          title: "Absolute extrema and optimization",
          simple: "To find the very highest or lowest value on an interval, check every candidate and compare.",
          detail: "Candidates Test: evaluate f at every critical point AND at both endpoints. The largest value is the absolute max. Optimization: write a function for the quantity, find its critical points, and justify your answer.",
        },
      ],
      terms: [
        ["Critical point", "A point where f′ = 0 or f′ is undefined."],
        ["Relative extremum", "A local max or min, a peak or valley compared to nearby points."],
        ["Absolute extremum", "The highest or lowest value on the whole interval."],
        ["Concave up", "f″ > 0; the graph bends upward and its slopes are increasing."],
        ["Point of inflection", "Where concavity changes, meaning f″ changes sign."],
        ["Extreme Value Theorem", "A continuous function on a closed interval has both an absolute max and an absolute min."],
      ],
      mistakes: [
        "Assuming f′(c) = 0 means there's an extremum. f(x) = x³ has f′(0) = 0 but no max or min there.",
        "Calling a point an inflection point just because f″ = 0. The sign of f″ has to change.",
        "Forgetting to check the endpoints when finding an absolute max or min.",
      ],
      questions: [
        { q: "f′(x) = (x − 2)(x + 1)². Where does f have a relative minimum?", choices: ["x = −1 only", "x = 2 only", "x = −1 and x = 2", "Nowhere"], answer: 1, explain: "f′ changes from − to + at x = 2. At x = −1, the squared factor means f′ touches 0 but doesn't change sign, so there's no extremum there." },
        { q: "What is the absolute maximum of f(x) = x³ − 3x on [0, 3]?", choices: ["−2", "0", "2", "18"], answer: 3, explain: "Candidates: f(0) = 0, f(1) = −2 (the critical point), f(3) = 18. The largest is 18." },
        { q: "For f(x) = x² on [1, 3], what value of c satisfies the Mean Value Theorem?", choices: ["1.5", "2", "2.5", "√5"], answer: 1, explain: "The average rate is (9 − 1)/2 = 4. Setting f′(c) = 2c = 4 gives c = 2." },
        { q: "If f″(x) = x(x − 4), where does f have points of inflection?", choices: ["x = 0 only", "x = 4 only", "x = 0 and x = 4", "x = 2"], answer: 2, explain: "f″ changes sign at both 0 and 4 (it goes + → − → +), so both are inflection points." },
      ],
      frq: {
        prompt: "A function f has derivative f′(x) = x² − 4x.\n(a) On what intervals is f increasing? Justify.\n(b) Find the x-values of all relative extrema and classify each. Justify.\n(c) On what intervals is f concave up? Justify.",
        points: [
          "(a) f′ = x(x − 4) > 0 when x < 0 or x > 4, so f is increasing on (−∞, 0) and (4, ∞) because f′ > 0 there.",
          "(b) Relative max at x = 0 because f′ changes from + to −. Relative min at x = 4 because f′ changes from − to +.",
          "(c) f″(x) = 2x − 4 > 0 when x > 2, so f is concave up on (2, ∞) because f″ > 0 there.",
        ],
      },
    },
    {
      title: "Integration and Accumulation of Change",
      weight: "17–20%",
      tldr: "An integral adds up many tiny pieces. The area under a rate graph is the total change. The Fundamental Theorem of Calculus says integrals and derivatives undo each other.",
      concepts: [
        {
          title: "Riemann sums",
          simple: "Estimate the area under a curve by filling it with thin rectangles and adding up their areas.",
          detail: "Left, right and midpoint sums, plus the trapezoidal sum. For an increasing function, a left sum underestimates and a right sum overestimates. For a concave-up function, the trapezoidal sum overestimates.",
        },
        {
          title: "Accumulation: the integral of a rate is net change",
          simple: "If you know how fast water flows in each minute, adding it all up tells you how much came in.",
          detail: "∫(a to b) f′(x) dx = f(b) − f(a). Area below the x-axis counts as negative. Amount at the end = starting amount + ∫ rate.",
          example: "If r(t) is gallons per minute, ∫(0 to 10) r(t) dt is the total gallons added in the first 10 minutes.",
        },
        {
          title: "Fundamental Theorem of Calculus",
          simple: "The rate at which accumulated area grows is just the height of the curve at that moment.",
          detail: "Part 1: d/dx ∫(a to x) f(t) dt = f(x). With a function in the upper limit, apply the chain rule: d/dx ∫(a to g(x)) f(t) dt = f(g(x))·g′(x). Part 2: ∫(a to b) f(x) dx = F(b) − F(a), where F′ = f.",
        },
        {
          title: "Antiderivatives and u-substitution",
          simple: "Run the derivative rules backwards. u-substitution undoes the chain rule.",
          detail: "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (for n ≠ −1), and ∫1/x dx = ln|x| + C. For u-substitution, pick the inside function as u and swap in du. On definite integrals, change the bounds to u-values.",
          example: "∫2x(x² + 1)⁵ dx: let u = x² + 1, du = 2x dx, which gives (x² + 1)⁶/6 + C.",
        },
      ],
      terms: [
        ["Riemann sum", "An estimate of area made from rectangles."],
        ["Definite integral", "The net signed area between the curve and the x-axis from a to b."],
        ["Antiderivative", "A function F whose derivative is f."],
        ["Accumulation function", "F(x) = ∫(a to x) f(t) dt"],
        ["Fundamental Theorem of Calculus", "Connects derivatives and integrals: differentiating an accumulation function gives back f."],
        ["u-substitution", "A technique for undoing the chain rule by renaming the inside function u."],
      ],
      mistakes: [
        "Forgetting + C on indefinite integrals.",
        "Not changing the bounds (or not switching back to x) in a definite u-substitution.",
        "Forgetting the chain-rule factor g′(x) when the upper limit is a function.",
      ],
      questions: [
        { q: "∫(0 to 2) (3x² + 1) dx = ?", choices: ["8", "10", "12", "14"], answer: 1, explain: "The antiderivative is x³ + x. [8 + 2] − [0] = 10." },
        { q: "d/dx ∫(1 to x²) cos t dt = ?", choices: ["cos(x²)", "2x·cos(x²)", "sin(x²)", "cos(x²) − cos 1"], answer: 1, explain: "FTC Part 1 plus the chain rule: cos(x²)·(x²)′ = 2x cos(x²)." },
        { q: "f is increasing on [a, b]. A right Riemann sum for ∫f dx will be:", choices: ["An overestimate", "An underestimate", "Exact", "Impossible to tell"], answer: 0, explain: "For an increasing function, the right endpoint is the tallest point in each interval, so each rectangle sticks out above the curve." },
        { q: "∫2x(x² + 1)⁵ dx = ?", choices: ["(x² + 1)⁶ + C", "(x² + 1)⁶/6 + C", "x²(x² + 1)⁶/6 + C", "2(x² + 1)⁶ + C"], answer: 1, explain: "Let u = x² + 1, so du = 2x dx. ∫u⁵ du = u⁶/6 + C." },
        { q: "r(t) is the rate water enters a pool in gallons per minute. What does ∫(0 to 10) r(t) dt represent?", choices: ["The rate at t = 10", "The average rate over 10 minutes", "Total gallons added in the first 10 minutes", "Gallons in the pool at t = 10"], answer: 2, explain: "Integrating a rate gives the total change (amount added). It's not the total in the pool unless the pool started empty." },
      ],
      frq: {
        prompt: "Water flows into a tank at rate R(t) gallons/hour. The tank holds 50 gallons at t = 0.\n t: 0, 2, 6, 8\n R(t): 10, 14, 20, 16\n(a) Use a trapezoidal sum with these subintervals to estimate ∫(0 to 8) R(t) dt.\n(b) Explain the meaning of this integral in context.\n(c) Estimate the amount of water in the tank at t = 8.",
        points: [
          "(a) 2(10 + 14)/2 + 4(14 + 20)/2 + 2(20 + 16)/2 = 24 + 68 + 36 = 128.",
          "(b) About 128 gallons of water flow into the tank from t = 0 to t = 8 hours.",
          "(c) 50 + 128 = 178 gallons.",
        ],
      },
    },
    {
      title: "Differential Equations",
      weight: "6–12%",
      tldr: "A differential equation describes how something changes. Solving it means finding the function itself. Slope fields let you see the solutions, and separation of variables lets you solve them exactly.",
      concepts: [
        {
          title: "Slope fields",
          simple: "At each point, draw a tiny line with the slope the equation gives there. Solution curves follow those lines like leaves floating on a stream.",
          detail: "For dy/dx = f(x, y), the segment at (x, y) has slope f(x, y). If the slopes depend only on x, every segment in a column is the same. If they depend only on y, every segment in a row is the same.",
        },
        {
          title: "Separation of variables",
          simple: "Put all the y's on one side and all the x's on the other, then integrate both sides.",
          detail: "dy/dx = g(x)h(y) → ∫(1/h(y)) dy = ∫g(x) dx. Add + C right away, use the initial condition to find C, then solve for y.",
          example: "dy/dx = x/y with y(0) = 3 → y dy = x dx → y²/2 = x²/2 + C → y = √(x² + 9).",
        },
        {
          title: "Exponential growth and decay",
          simple: "When something grows at a rate proportional to its size, like a population or money with interest, it grows exponentially.",
          detail: "dy/dt = ky → y = y₀e^(kt). If k > 0 it's growth, and if k < 0 it's decay.",
          example: "Doubles every 5 years: 2 = e^(5k), so k = ln 2/5.",
        },
      ],
      terms: [
        ["Differential equation", "An equation that involves a function's derivative."],
        ["General solution", "A family of solutions that still contains + C."],
        ["Particular solution", "The single solution that fits a given initial condition."],
        ["Initial condition", "A known point, such as y(0) = 3."],
        ["Slope field", "A grid of short line segments showing the slope at each point."],
      ],
      mistakes: [
        "Leaving out + C, or adding it only after solving for y. Add it right after you integrate.",
        "Mixing up slope fields that depend on x with ones that depend on y.",
        "Algebra slips when exponentiating: e^(A + C) = Ke^A, not e^A + C.",
      ],
      questions: [
        { q: "Which function is a solution to dy/dx = 2y?", choices: ["y = x²", "y = 5e^(2x)", "y = e^x + 2", "y = 2x"], answer: 1, explain: "If y = 5e^(2x), then y′ = 10e^(2x) = 2(5e^(2x)) = 2y. ✓" },
        { q: "What is the solution to dy/dx = x/y with y(0) = 3?", choices: ["y = x + 3", "y = √(x² + 9)", "y = 3e^x", "y = x²/2 + 3"], answer: 1, explain: "Separate: y dy = x dx, so y² = x² + C. y(0) = 3 gives C = 9, so y = √(x² + 9), taking the positive root because y(0) > 0." },
        { q: "A slope field has horizontal segments all along the line y = 2, and the segments don't change as you move left or right. Which equation fits?", choices: ["dy/dx = x − 2", "dy/dx = y − 2", "dy/dx = xy", "dy/dx = x + y"], answer: 1, explain: "The slopes depend only on y, and they're 0 when y = 2." },
        { q: "A population grows in proportion to its size and doubles every 5 years. What is k?", choices: ["2/5", "5 ln 2", "ln 2/5", "ln 5/2"], answer: 2, explain: "2y₀ = y₀e^(5k), so ln 2 = 5k and k = ln 2/5." },
      ],
      frq: {
        prompt: "Consider dy/dx = xy² with y(0) = 1.\n(a) Write the equation of the tangent line to the solution curve at (0, 1).\n(b) Find the particular solution y = f(x).",
        points: [
          "(a) The slope at (0, 1) is 0·1² = 0, so the tangent line is y = 1.",
          "(b) Separates the variables: y⁻² dy = x dx.",
          "Integrates to get −1/y = x²/2 + C, with C included.",
          "Uses the initial condition to get C = −1.",
          "Solves for y = 2/(2 − x²).",
        ],
      },
    },
    {
      title: "Applications of Integration",
      weight: "10–15%",
      tldr: "Integrals find average values, distance traveled, the area between curves, and the volume of 3-D solids built by stacking slices.",
      concepts: [
        {
          title: "Average value of a function",
          simple: "Flatten the area under the curve into a rectangle over the same interval. Its height is the average value.",
          detail: "Average value = (1/(b − a))·∫(a to b) f(x) dx",
        },
        {
          title: "Displacement vs. total distance",
          simple: "Walk 2 miles forward and 2 back: your displacement is 0, but you walked 4 miles.",
          detail: "Displacement = ∫v(t) dt. Total distance = ∫|v(t)| dt. Position at time b = s(a) + ∫(a to b) v(t) dt.",
        },
        {
          title: "Area between curves",
          simple: "Subtract the bottom curve from the top curve and integrate.",
          detail: "A = ∫(top − bottom) dx, or ∫(right − left) dy. Find where the curves intersect to get the bounds.",
          example: "Between y = x and y = x² on [0, 1]: ∫(x − x²) dx = 1/2 − 1/3 = 1/6.",
        },
        {
          title: "Volume: cross sections, discs and washers",
          simple: "Slice the solid thin like bread, find the area of one slice, and add up all the slices.",
          detail: "Known cross sections: V = ∫A(x) dx. Disc: V = π∫R² dx. Washer (a solid with a hole): V = π∫(R² − r²) dx.",
          hook: "Washer: big circle minus small circle, R² − r², NOT (R − r)².",
        },
      ],
      terms: [
        ["Average value", "(1/(b − a))∫f(x) dx"],
        ["Displacement", "Net change in position: ∫v dt."],
        ["Total distance", "∫|v| dt, which always counts as positive."],
        ["Disc method", "V = π∫R² dx for a solid of revolution with no hole."],
        ["Washer method", "V = π∫(R² − r²) dx for a solid with a hole."],
        ["Cross section", "The 2-D shape you get by slicing a solid."],
      ],
      mistakes: [
        "Confusing displacement with total distance. For distance, integrate |v|.",
        "Forgetting π in disc and washer problems. (Cross-section problems usually have no π.)",
        "Writing (R − r)² instead of R² − r².",
      ],
      questions: [
        { q: "What is the average value of f(x) = x² on [0, 3]?", choices: ["3", "4.5", "9", "1"], answer: 0, explain: "(1/3)∫(0 to 3) x² dx = (1/3)(9) = 3." },
        { q: "v(t) = t − 2 on 0 ≤ t ≤ 4. What is the total distance traveled?", choices: ["0", "2", "4", "8"], answer: 2, explain: "∫|t − 2| dt: 2 units on [0, 2] plus 2 units on [2, 4] = 4. The displacement is 0, which is the trap answer." },
        { q: "What is the area between y = x and y = x² from x = 0 to x = 1?", choices: ["1/2", "1/3", "1/6", "5/6"], answer: 2, explain: "x is on top on [0, 1]. ∫(x − x²) dx = 1/2 − 1/3 = 1/6." },
        { q: "The region under y = √x on [0, 4] is rotated about the x-axis. What is the volume?", choices: ["4π", "8π", "16π", "8"], answer: 1, explain: "π∫(0 to 4) (√x)² dx = π∫x dx = π·16/2 = 8π." },
      ],
      frq: {
        prompt: "Let R be the region bounded by y = 4 − x² and the x-axis.\n(a) Find the area of R.\n(b) Find the volume of the solid formed when R is rotated about the x-axis.\n(c) R is the base of a solid whose cross sections perpendicular to the x-axis are squares. Find its volume.",
        points: [
          "(a) The bounds are x = −2 and x = 2. ∫(4 − x²) dx = 32/3.",
          "(b) π∫(−2 to 2) (4 − x²)² dx = 512π/15.",
          "(c) Area of each square = side² = (4 − x²)², so V = ∫(−2 to 2) (4 − x²)² dx = 512/15, with no π.",
        ],
      },
    },
  ],
};
