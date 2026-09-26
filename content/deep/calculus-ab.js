// More key concepts for content/calculus-ab.js, appended to each unit after the original concepts.
// Calculus BC inherits these too (they appear after BC's own additions in each shared unit).
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["calculus-ab"] = {
  0: [
    {
      title: "Estimating limits from graphs and tables",
      simple: "Read a limit by looking at where the y-values head as x gets close, not at the point itself.",
      detail: "From a graph, follow the curve from each side toward x = a; the limit exists only if both one-sided limits agree. A hole, a jump, or a different point value doesn't change what the curve approaches. From a table, check values on both sides getting closer to a and see if they settle toward one number.",
      example: "If f(1.9) = 3.98, f(1.99) = 3.998, f(2.01) = 4.002, then lim(x→2) f(x) appears to be 4.",
      trap: "A filled dot at a different height is f(a), not the limit. The limit only cares about nearby values.",
      terms: [
        ["Two-sided limit", "Exists only when the left-hand and right-hand limits are equal."],
        ["Jump discontinuity", "The one-sided limits exist but are different."],
      ],
    },
    {
      title: "The Squeeze Theorem and special trig limits",
      simple: "If a function is trapped between two others that approach the same value, it approaches that value too.",
      detail: "If g(x) ≤ f(x) ≤ h(x) near a and lim g = lim h = L, then lim f = L. It proves lim(x→0) sin x / x = 1 and lim(x→0) (1 − cos x)/x = 0. For example, x² sin(1/x) → 0 because −x² ≤ x² sin(1/x) ≤ x².",
      trap: "You must state BOTH bounding functions and show they have the same limit. Naming the theorem without the inequality earns no credit.",
      terms: [
        ["Squeeze Theorem", "If g ≤ f ≤ h and g, h have the same limit L at a, then f also approaches L."],
        ["lim(x→0) sin x / x", "Equals 1 (x in radians)."],
      ],
    },
    {
      title: "Types of discontinuities",
      simple: "A graph can break in three ways: a hole, a jump, or a blow-up to infinity.",
      detail: "Removable: the limit exists but f(a) is missing or different; redefine f(a) to fix it. Jump: one-sided limits exist but differ (common in piecewise functions). Infinite: the function grows without bound near a vertical asymptote. To make a piecewise function continuous, set the pieces equal at the break point and solve for the constant.",
      trap: "A rational function can have a hole instead of an asymptote if a factor cancels. Always factor before deciding.",
      terms: [
        ["Infinite discontinuity", "A break where the function grows without bound (vertical asymptote)."],
        ["Piecewise function", "A function defined by different formulas on different intervals."],
      ],
    },
    {
      title: "Limits at infinity and end behavior",
      simple: "As x gets huge, the highest-power terms take over and decide where the function goes.",
      detail: "For rational functions: if the top degree < bottom degree, the limit is 0; if equal, it's the ratio of leading coefficients; if the top is bigger, the limit is ±∞. Exponentials beat polynomials, which beat logarithms. Horizontal asymptotes come from limits at ±∞.",
      example: "lim(x→∞) (3x² + 1)/(5x² − x) = 3/5.",
      trap: "Check BOTH directions: some functions (with √(x²) or eˣ) have different limits at +∞ and −∞.",
      terms: [
        ["End behavior", "What a function does as x → ∞ or x → −∞."],
        ["Dominant term", "The term that grows fastest and controls a limit at infinity."],
      ],
    },
  ],
  1: [
    {
      title: "Estimating derivatives from tables and graphs",
      simple: "Estimate a derivative at a point with the slope between two nearby data points.",
      detail: "From a table, use the difference quotient [f(b) − f(a)]/(b − a) with values on either side of the point (a symmetric difference is best). From a graph, estimate the slope of the tangent line. Include units: (units of f) per (unit of x).",
      example: "T(4) = 60 °C and T(6) = 52 °C gives T′(5) ≈ (52 − 60)/(6 − 4) = −4 °C per minute.",
      trap: "Use the values that BRACKET the point. Using points far away or on one side only loses accuracy and sometimes the point.",
      terms: [
        ["Difference quotient", "[f(x + h) − f(x)]/h, the slope of a secant line."],
        ["Symmetric difference quotient", "[f(a + h) − f(a − h)]/(2h), an estimate of f′(a)."],
      ],
    },
    {
      title: "Derivatives of trig, exponential and log functions",
      simple: "Each basic function has a derivative you should know by heart.",
      detail: "d/dx sin x = cos x; d/dx cos x = −sin x; d/dx tan x = sec² x; d/dx sec x = sec x tan x; d/dx csc x = −csc x cot x; d/dx cot x = −csc² x. d/dx eˣ = eˣ; d/dx aˣ = aˣ ln a; d/dx ln x = 1/x; d/dx logₐ x = 1/(x ln a).",
      hook: "Derivatives of the \"co\" functions (cos, csc, cot) all have a negative sign.",
      trap: "Trig derivatives assume RADIANS. And d/dx 2ˣ is 2ˣ ln 2, not x·2ˣ⁻¹ (that's the power rule, which needs a variable base).",
      terms: [
        ["d/dx tan x", "sec² x"],
        ["d/dx ln x", "1/x, for x > 0"],
        ["d/dx aˣ", "aˣ ln a"],
      ],
    },
    {
      title: "The quotient rule",
      simple: "To differentiate a fraction of two functions, use low d-high minus high d-low, over low squared.",
      detail: "(f/g)′ = (g f′ − f g′)/g². Order matters in the numerator because of the subtraction. Sometimes it's easier to rewrite (e.g., 5/x³ = 5x⁻³) and use the power rule instead.",
      hook: "\"Low d-high minus high d-low, over the square of what's below.\"",
      trap: "The derivative of a quotient is NOT the quotient of the derivatives. f′/g′ is wrong.",
      terms: [
        ["Quotient rule", "(f/g)′ = (g f′ − f g′)/g²"],
        ["Power rule", "d/dx xⁿ = n xⁿ⁻¹"],
      ],
    },
    {
      title: "The derivative as a function",
      simple: "The derivative is itself a function whose graph shows the slope of f at every point.",
      detail: "Where f increases, f′ > 0; where f decreases, f′ < 0; where f has a horizontal tangent, f′ = 0. Corners, cusps, vertical tangents and discontinuities make f′ undefined. You can sketch f′ from f by tracking slopes, and read facts about f from a graph of f′.",
      trap: "On a graph of f′, the y-VALUES are slopes of f. A maximum of f′ is where f is steepest, not where f has a maximum.",
      terms: [
        ["Derivative function", "f′(x), giving the slope of f at each x."],
        ["Cusp", "A sharp point where the tangent line becomes vertical; f is not differentiable there."],
      ],
    },
  ],
  2: [
    {
      title: "Derivatives of inverse trig functions",
      simple: "Inverse trig functions have algebraic derivatives you should memorize.",
      detail: "d/dx arcsin x = 1/√(1 − x²); d/dx arccos x = −1/√(1 − x²); d/dx arctan x = 1/(1 + x²). With the chain rule: d/dx arctan(u) = u′/(1 + u²). These can be derived by implicit differentiation of sin y = x.",
      trap: "Remember the chain rule inside: d/dx arcsin(3x) = 3/√(1 − 9x²), not 1/√(1 − 9x²).",
      terms: [
        ["d/dx arctan x", "1/(1 + x²)"],
        ["d/dx arcsin x", "1/√(1 − x²)"],
      ],
    },
    {
      title: "The chain rule with tables and graphs",
      simple: "You can apply the chain rule even when the functions are given only as data.",
      detail: "If h(x) = f(g(x)), then h′(a) = f′(g(a))·g′(a). Find g(a) first, then look up f′ at THAT value. Similar problems combine product, quotient and chain rules using values from a table.",
      example: "g(2) = 5, g′(2) = 3, f′(5) = −1: h′(2) = f′(5)·g′(2) = −3.",
      trap: "Evaluate the outer derivative at g(a), not at a. f′(2) instead of f′(5) is the most common error.",
      terms: [
        ["Outer function", "In f(g(x)), the function f applied last."],
        ["Inner function", "In f(g(x)), the function g applied first."],
      ],
    },
    {
      title: "Choosing a differentiation strategy",
      simple: "Look at a function's structure to decide which rules to apply and in what order.",
      detail: "Identify the last operation: a product → product rule; a quotient → quotient rule (or rewrite); a composition → chain rule. Simplify first when possible (rewrite roots as powers, split fractions, use log properties). Implicit differentiation handles equations not solved for y.",
      trap: "Rewriting first saves errors: d/dx ln(x³√x) is easiest as d/dx [3.5 ln x] = 3.5/x.",
      terms: [
        ["Rewriting before differentiating", "Simplifying roots, logs or fractions to make differentiation easier."],
        ["Logarithmic differentiation", "Taking ln of both sides before differentiating, useful for complicated products or powers."],
      ],
    },
  ],
  3: [
    {
      title: "Interpreting the derivative in context",
      simple: "A derivative's value tells how fast a quantity changes, with units of output per input.",
      detail: "Write interpretations as: \"At t = 3 hours, the amount of water in the tank is decreasing at a rate of 4 gallons per hour.\" Include the time, what changes, the direction (increasing or decreasing), the rate, and units. The second derivative describes how the rate is changing.",
      trap: "Say the QUANTITY is increasing at the rate, not that the rate is increasing. Mixing these up loses the point.",
      terms: [
        ["Rate of change", "How fast one quantity changes relative to another."],
        ["Units of a derivative", "Units of the output divided by units of the input."],
      ],
    },
    {
      title: "Speeding up and slowing down",
      simple: "A particle speeds up when velocity and acceleration have the same sign.",
      detail: "Speed = |v(t)|. If v and a have the same sign, speed increases; opposite signs, speed decreases. A particle changes direction where v changes sign (not just where v = 0). Justify with the signs of both v and a.",
      trap: "Negative acceleration doesn't always mean slowing down. If velocity is also negative, the particle is speeding up.",
      terms: [
        ["Speeding up", "Happens when velocity and acceleration have the same sign."],
        ["Change of direction", "Occurs where velocity changes sign."],
      ],
    },
    {
      title: "Rates of change in applied contexts",
      simple: "Derivatives describe rates in any setting: population, cost, temperature or volume.",
      detail: "Marginal cost C′(x) approximates the cost of the next item. A population's P′(t) is its growth rate. Density, flow rate and reaction rate are all derivatives. Combine with related rates when several quantities change together over time.",
      trap: "Match the independent variable: dV/dt (per time) and dV/dr (per unit radius) mean different things.",
      terms: [
        ["Marginal cost", "C′(x), approximately the cost of producing one more unit."],
        ["Instantaneous rate", "The derivative at a single moment."],
      ],
    },
  ],
  4: [
    {
      title: "The Extreme Value Theorem and the Candidates Test",
      simple: "A continuous function on a closed interval always has a highest and lowest value, found at critical points or endpoints.",
      detail: "EVT: if f is continuous on [a, b], it has an absolute max and min there. Candidates Test: evaluate f at every critical point in (a, b) and at both endpoints; the largest value is the absolute max, the smallest is the absolute min.",
      trap: "Forgetting to test the ENDPOINTS is the most common error. The answer is the y-value; say where it occurs if asked.",
      terms: [
        ["Candidates Test", "Compare f at critical points and endpoints to find absolute extrema."],
        ["Closed interval", "An interval including its endpoints, [a, b]."],
      ],
    },
    {
      title: "Connecting the graphs of f, f′ and f″",
      simple: "The sign and slope of f′ tell you where f rises, falls and bends.",
      detail: "f′ > 0 → f increasing; f′ < 0 → f decreasing; f′ changes sign → f has a relative extremum. f′ increasing (f″ > 0) → f concave up; f′ decreasing → f concave down. Extrema of f′ are inflection points of f.",
      trap: "In justifications, name the graph you're using: \"because f′ changes from positive to negative\" earns credit; \"because the graph goes down\" doesn't.",
      terms: [
        ["Inflection point", "Point where a function's concavity changes."],
        ["Relative maximum", "Occurs where f′ changes from positive to negative."],
      ],
    },
    {
      title: "Solving optimization problems",
      simple: "To optimize, write the quantity as a function of one variable, then find its extreme on the allowed domain.",
      detail: "Steps: draw and label, write the objective function, use a constraint to eliminate a variable, set the derivative to zero, check endpoints or use a derivative test, answer the question asked with units. The domain comes from the physical setup.",
      trap: "Justify that the critical point is a max or min (a sign chart, second derivative test, or Candidates Test). A critical point alone isn't proof.",
      terms: [
        ["Objective function", "The quantity being maximized or minimized."],
        ["Constraint", "An equation relating the variables that limits the possibilities."],
      ],
    },
    {
      title: "Behavior of implicit relations",
      simple: "Use dy/dx from implicit differentiation to find horizontal and vertical tangents on curves.",
      detail: "Horizontal tangent: dy/dx = 0 (numerator zero, denominator nonzero). Vertical tangent: denominator zero, numerator nonzero. Plug the conditions back into the original equation to find the actual points. Second derivatives can be found implicitly too.",
      trap: "A point where dy/dx = 0 must ALSO be on the curve. Check it satisfies the original equation.",
      terms: [
        ["Horizontal tangent", "Occurs where dy/dx = 0."],
        ["Vertical tangent", "Occurs where dy/dx is undefined because the denominator is 0."],
      ],
    },
  ],
  5: [
    {
      title: "Trapezoidal sums and over/underestimates",
      simple: "Trapezoids average the left and right heights, and the curve's shape tells if an estimate is too high or low.",
      detail: "Trapezoid area = ½(b₁ + b₂)·Δx; intervals can be unequal in table problems. If f is increasing, left sums underestimate and right sums overestimate. If f is concave up, the trapezoidal rule overestimates and midpoint underestimates.",
      trap: "Use the actual width of EACH subinterval from the table. Unequal widths are common on the exam.",
      terms: [
        ["Trapezoidal sum", "An estimate of area averaging left and right heights on each subinterval."],
        ["Midpoint sum", "A Riemann sum using the height at the middle of each subinterval."],
      ],
    },
    {
      title: "Properties of definite integrals",
      simple: "Integrals can be split, flipped and combined using a few basic rules.",
      detail: "∫ₐᵃ f = 0; ∫ₐᵇ f = −∫ᵇₐ f; ∫ₐᵇ f + ∫ᵇᶜ f = ∫ₐᶜ f; ∫ₐᵇ [f ± g] = ∫f ± ∫g; ∫ₐᵇ k f = k∫f. Integrals over regions below the x-axis are negative. Geometry (areas of triangles, semicircles) can evaluate integrals from graphs.",
      trap: "The integral counts area below the axis as NEGATIVE. Total area needs absolute values.",
      terms: [
        ["Additivity", "∫ₐᵇ f + ∫ᵇᶜ f = ∫ₐᶜ f"],
        ["Reversing limits", "∫ₐᵇ f = −∫ᵇₐ f"],
      ],
    },
    {
      title: "Analyzing accumulation functions",
      simple: "A function defined as an integral grows when its integrand is positive and shrinks when it's negative.",
      detail: "If g(x) = ∫ₐˣ f(t) dt, then g′(x) = f(x) and g″(x) = f′(x). So g increases where f > 0, has extrema where f changes sign, and is concave up where f increases. With a variable upper limit, apply the chain rule: d/dx ∫ₐ^(u(x)) f(t) dt = f(u(x))·u′(x).",
      trap: "Values of g come from AREAS under f, but slopes of g come from VALUES of f. Keep them straight on graph problems.",
      terms: [
        ["g′(x) for g(x) = ∫ₐˣ f(t) dt", "f(x): the rate of accumulation equals the integrand."],
        ["FTC with chain rule", "d/dx ∫ₐ^(u(x)) f(t) dt = f(u(x))·u′(x)"],
      ],
    },
    {
      title: "Basic antiderivative rules",
      simple: "Antidifferentiation reverses each derivative rule you know.",
      detail: "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫1/x dx = ln|x| + C; ∫eˣ dx = eˣ + C; ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C; ∫sec² x dx = tan x + C; ∫1/(1 + x²) dx = arctan x + C. Split sums and pull out constants.",
      trap: "Always include + C on indefinite integrals, and remember ∫1/x dx is ln|x| (the power rule fails at n = −1).",
      terms: [
        ["Indefinite integral", "The family of all antiderivatives, written with + C."],
        ["∫1/x dx", "ln|x| + C"],
      ],
    },
  ],
  6: [
    {
      title: "Modeling with differential equations",
      simple: "A differential equation describes how a quantity changes, often from a sentence about proportionality.",
      detail: "\"The rate of change of y is proportional to y\" → dy/dt = ky. \"Proportional to the difference between T and 70\" → dT/dt = k(T − 70) (Newton's law of cooling). Logistic growth appears in BC. Translate each phrase carefully, including the sign.",
      trap: "\"Proportional to\" means multiply by a constant k. \"Inversely proportional\" means divide: dy/dt = k/y.",
      terms: [
        ["Proportional", "Equal to a constant times the quantity."],
        ["Newton's law of cooling", "dT/dt = k(T − Tₐ), the rate of cooling proportional to the temperature difference."],
      ],
    },
    {
      title: "Verifying solutions to differential equations",
      simple: "To check a solution, differentiate it and substitute into the equation.",
      detail: "If y = f(x) is proposed, compute y′ (and y″ if needed), substitute everything, and confirm both sides are equal for all x. An initial condition picks out one particular solution from the family.",
      trap: "Verifying means substituting into the DIFFERENTIAL EQUATION, not just checking the initial condition.",
      terms: [
        ["Verify a solution", "Substitute the function and its derivatives into the equation to confirm it holds."],
        ["Family of solutions", "All solutions of a differential equation, differing by a constant."],
      ],
    },
    {
      title: "Reasoning from a differential equation",
      simple: "You can learn a lot about a solution's behavior without solving the equation.",
      detail: "Where dy/dx > 0 the solution rises; where dy/dx = 0 it's level (equilibrium solutions if constant). Find d²y/dx² by differentiating dy/dx implicitly (substituting dy/dx) to decide concavity. Tangent lines from the equation approximate nearby values.",
      trap: "When finding d²y/dx², differentiate implicitly and substitute dy/dx back in. Treating y as a constant is a common mistake.",
      terms: [
        ["Equilibrium solution", "A constant solution where dy/dx = 0 for all x."],
        ["Tangent line approximation", "Using y₁ ≈ y₀ + (dy/dx)Δx near a known point."],
      ],
    },
  ],
  7: [
    {
      title: "Accumulation in applied contexts",
      simple: "Integrate a rate to find how much has accumulated; combine rates in and out for net change.",
      detail: "Amount at time t = initial amount + ∫₀ᵗ (rate in − rate out) dt. The amount is at a max or min when rate in = rate out (or at an endpoint). Interpret an integral with units: the integral of gallons/hour over hours gives gallons.",
      trap: "Don't forget the INITIAL AMOUNT. The integral gives only the change, not the total.",
      terms: [
        ["Net change theorem", "∫ₐᵇ R(t) dt gives the net change in the quantity from a to b."],
        ["Rate in − rate out", "The net rate of change of an amount."],
      ],
    },
    {
      title: "Area with respect to y and intersecting curves",
      simple: "Sometimes it's easier to slice horizontally, and curves that cross need separate integrals.",
      detail: "With respect to y: A = ∫ (right curve − left curve) dy, with y-limits. When curves cross within the interval, split at the intersection or integrate |f − g|. Find intersection points by solving f = g (a calculator is allowed on calculator sections).",
      trap: "In dy integrals, subtract RIGHT minus LEFT, not top minus bottom, and use y-values as limits.",
      terms: [
        ["Horizontal slices", "Integrating with respect to y using right minus left."],
        ["Points of intersection", "Where two curves meet, found by setting them equal."],
      ],
    },
    {
      title: "Revolving around other axes",
      simple: "When the axis isn't the x- or y-axis, measure each radius from that line.",
      detail: "Around y = k with dx slices: R = |outer curve − k|, r = |inner curve − k|, V = π∫(R² − r²) dx. Around x = h use dy slices and horizontal distances. Always sketch the region and the axis first.",
      trap: "The radius is a DISTANCE to the axis of rotation. Revolving around y = −2 means adding 2 to the function value, not subtracting.",
      terms: [
        ["Radius of revolution", "Distance from the axis of rotation to the curve."],
        ["Washer", "A disc with a hole, area π(R² − r²)."],
      ],
    },
    {
      title: "Position from velocity with an initial condition",
      simple: "Add the integral of velocity to a starting position to find where a particle is later.",
      detail: "x(b) = x(a) + ∫ₐᵇ v(t) dt. Total distance traveled = ∫ₐᵇ |v(t)| dt. To find a particle's farthest position, check where v changes sign and the endpoints (Candidates Test on position).",
      trap: "Displacement (∫v dt) and position are different. Position needs the starting point added.",
      terms: [
        ["Position function", "x(t) = x(0) + ∫₀ᵗ v(s) ds"],
        ["Farthest position", "Found by checking where velocity changes sign and the endpoints."],
      ],
    },
  ],
};
