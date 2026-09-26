// Concept tags and wrong-answer diagnoses for content/precalculus.js.
window.AP_DIAG = window.AP_DIAG || {};
window.AP_DIAG["precalculus"] = {
  "0.0": [0, { 0: "2 is the change in x. Divide the change in OUTPUT by the change in input: (9 − 1)/2.", 2: "8 is the change in output. Divide it by the change in input, 2.", 3: "9 is f(3), a single value, not a rate of change." }],
  "0.1": [1, { 0: "The leading coefficient is NEGATIVE, so large x makes f very negative.", 2: "Polynomials of positive degree don't level off at 0. The leading term grows without bound.", 3: "−2 is the leading coefficient, not a limit value." }],
  "0.2": [1, { 0: "Multiplicity 1 would make the graph CROSS the axis.", 2: "An odd multiplicity (1, 3, 5…) still crosses, just flatter.", 3: "Multiplicity directly controls whether the graph crosses or bounces." }],
  "0.3": [2, { 0: "The (x − 2) factor CANCELS, so x = 2 is a hole, not an asymptote.", 2: "Swapped: x = 2 cancels (hole) and x = 3 remains (asymptote).", 3: "x − 3 remains in the denominator, so there IS a vertical asymptote." }],
  "0.4": [3, { 0: "f(x − 3) shifts RIGHT. Inside the parentheses works opposite to intuition.", 2: "+2 outside the function shifts UP, not down.", 3: "Both directions are flipped: x − 3 means right, +2 means up." }],
  "1.0": [0, { 0: "3n is arithmetic (it adds 3). This sequence DOUBLES each time.", 1: "That's arithmetic with difference 3, but the differences here grow (3, 6, 12).", 3: "The first term is 3 and the ratio is 2. This swaps them." }],
  "1.1": [1, { 0: "0.2 is the part LOST. The value kept each year is 80%, so the factor is 0.8.", 2: "1.2 would mean GROWING by 20%.", 3: "Growth factors are positive multipliers, not negative rates." }],
  "1.2": [2, { 1: "2⁴ = 16, not 8. The exponent that gives 8 is 3.", 2: "16 is 2⁴ (or 2 × 8). The log asks for an exponent.", 3: "The answer is exactly 3. There's no need to approximate." }],
  "1.3": [2, { 0: "There's no rule for log(x + y). The product rule is log(xy) = log x + log y.", 2: "Logs turn MULTIPLICATION into ADDITION, not addition into multiplication.", 3: "log(x/y) = log x − log y (subtraction), not addition." }],
  "1.4": [3, { 0: "Linear data is straight on a regular plot. A log scale would CURVE it.", 1: "Quadratic data doesn't become linear when you take log(y).", 3: "Logarithmic data is straight when x (not y) is on a log scale." }],
  "2.0": [1, { 0: "The period isn't b. It's 2π/b.", 1: "3π multiplies by 3. The period is 2π DIVIDED by 3.", 3: "6π multiplies 2π by 3. Divide instead." }],
  "2.1": [1, { 1: "Amplitude is the coefficient in front (4). The added constant (−1) is the midline.", 2: "The −1 shifts the midline down to y = −1.", 3: "Amplitude is |a| = 4. Don't combine it with the shift." }],
  "2.2": [0, { 0: "√3/2 is sin(π/3), which is 60°, not 30°.", 2: "√2/2 is sin(π/4), which is 45°.", 3: "1 is sin(π/2), which is 90°." }],
  "2.3": [3, { 0: "That swaps sine and cosine: x = r cos θ = 0.", 2: "cos(π/2) = 0, so x = 0.", 3: "sin(π/2) = +1, so y = +2." }],
  "2.4": [2, { 0: "tan 0 = 0, which is defined.", 1: "tan π = 0, which is defined.", 3: "tan(π/4) = 1, which is defined. It's undefined where cos x = 0." }],
  "3.0": [1, { 1: "7 adds the components. Magnitude is √(3² + 4²).", 2: "12 multiplies them. Use the Pythagorean theorem.", 3: "25 is the SQUARED magnitude. Take the square root." }],
  "3.1": [0, { 0: "y = t², not t. Substitute t = x.", 2: "That swaps x and y.", 3: "Nothing doubles here. y = t² = x²." }],
  "3.2": [2, { 1: "8 is only ad. Subtract bc = 3.", 2: "11 ADDS bc. The determinant is ad − bc.", 3: "The sign is flipped: it's ad − bc = 8 − 3." }],
};
