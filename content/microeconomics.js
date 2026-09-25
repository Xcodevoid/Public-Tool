window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["microeconomics"] = {
  tips: [
    "Graphs are everything. Label the axes (Price and Quantity), the curves, and the equilibrium values (P₁, Q₁), and show shifts with arrows.",
    "Explain the chain of causation: event → which curve shifts and which way → the new price and quantity.",
    "Profit maximization is ALWAYS where MR = MC. Price then depends on the market structure.",
    "Always tell a SHIFT of a curve (caused by a determinant) apart from a MOVEMENT along it (caused by the good's own price).",
    "No calculator is allowed, so practice quick arithmetic: elasticity, marginal values, and areas of triangles (½ × base × height).",
    "College Board has released a revised CED effective fall 2026. Check the official CED for any topic changes.",
  ],
  units: [
    {
      title: "Basic Economic Concepts",
      weight: "12–15%",
      tldr: "Resources are scarce, so every choice has an opportunity cost. The production possibilities curve shows the trade-offs, comparative advantage explains why trade benefits both sides, and people decide by comparing marginal benefits with marginal costs.",
      concepts: [
        {
          title: "Scarcity and opportunity cost",
          simple: "You can't have everything. The real cost of a choice is the best thing you gave up to make it.",
          detail: "Opportunity cost is the value of the next-best alternative you didn't choose. Economic systems (market, command, mixed) answer three questions: what to produce, how to produce it, and for whom.",
        },
        {
          title: "Production possibilities curve (PPC)",
          simple: "A graph showing every combination of two goods an economy can make with its current resources.",
          detail: "Points on the curve are efficient. Points inside are inefficient (unemployed resources). Points outside can't be reached right now. A bowed-out curve shows increasing opportunity cost. The curve shifts outward with more resources or better technology.",
        },
        {
          title: "Comparative advantage and trade",
          simple: "Specialize in what you give up the least to make, then trade. Both sides come out ahead.",
          detail: "Absolute advantage: can produce more. Comparative advantage: a lower opportunity cost. Terms of trade that benefit both sides must fall between the two producers' opportunity costs.",
          example: "A makes 10 wheat or 5 cloth, so 1 cloth costs A 2 wheat. B makes 6 wheat or 6 cloth, so 1 cloth costs B 1 wheat. B has the comparative advantage in cloth.",
        },
        {
          title: "Marginal analysis and consumer choice",
          simple: "Decide \"one more or not?\" Keep going while the extra benefit is bigger than the extra cost.",
          detail: "Optimal quantity: MB = MC. Diminishing marginal utility: each extra unit satisfies less. Utility-maximizing rule: MU_x/P_x = MU_y/P_y. If one good gives more MU per dollar, buy more of it.",
        },
      ],
      terms: [
        ["Scarcity", "Limited resources relative to unlimited wants."],
        ["Opportunity cost", "The value of the next-best alternative forgone."],
        ["PPC", "The production possibilities curve, showing maximum output combinations."],
        ["Comparative advantage", "Producing a good at a lower opportunity cost than others."],
        ["Marginal utility", "The extra satisfaction from one more unit."],
        ["Terms of trade", "The rate at which one good is exchanged for another."],
      ],
      mistakes: [
        "Basing trade on absolute advantage. Comparative advantage is what drives gains from trade.",
        "Adding up ALL the alternatives you gave up. Opportunity cost is only the next-best one.",
      ],
      questions: [
        { q: "Sam skips a work shift that pays $45 to attend a free concert. The shift was his next-best option. What is the opportunity cost of the concert?", choices: ["$0, because the concert is free", "The $45 in wages he gave up", "The shift plus every other activity he could have done", "The price of a ticket"], answer: 1, explain: "Opportunity cost is the value of the single next-best alternative, here the $45 he could have earned. A \"free\" activity still has an opportunity cost." },
        { q: "Country A can make 10 wheat or 5 cloth. Country B can make 6 wheat or 6 cloth. Who has the comparative advantage in cloth?", choices: ["A", "B", "Both", "Neither"], answer: 1, explain: "One cloth costs A 2 wheat but costs B only 1 wheat. B's opportunity cost is lower." },
        { q: "A point inside the PPC represents:", choices: ["Efficient production", "Unemployed or underused resources", "Economic growth", "An unattainable combination"], answer: 1, explain: "The economy could produce more of both goods with the same resources." },
        { q: "MU per dollar is 5 for pizza and 3 for burgers. To maximize utility, the consumer should:", choices: ["Buy more burgers", "Buy more pizza, fewer burgers", "Keep the current mix", "Buy less of both"], answer: 1, explain: "Pizza gives more satisfaction per dollar. Shift spending toward it until MU/P is equal for both." },
      ],
      frq: {
        prompt: "In one day, Maya can bake 12 cakes or 6 pies. Leo can bake 8 cakes or 8 pies.\n(a) Who has the absolute advantage in cakes?\n(b) Calculate each person's opportunity cost of 1 pie. Who has the comparative advantage in pies?\n(c) Would a trade of 1 pie for 1.5 cakes benefit both? Explain.",
        points: [
          "(a) Maya (12 > 8 cakes).",
          "(b) Maya: 1 pie = 2 cakes. Leo: 1 pie = 1 cake. Leo has the comparative advantage in pies.",
          "(c) Yes: 1.5 cakes is between 1 and 2. Leo gets more than 1 cake per pie, and Maya pays less than 2 cakes per pie.",
        ],
      },
    },
    {
      title: "Supply and Demand",
      weight: "20–25%",
      tldr: "Markets settle where the quantity demanded equals the quantity supplied. Shifts in demand or supply change the price and quantity. Elasticity measures how strongly buyers and sellers respond to price, and government interventions (price controls, taxes) create shortages, surpluses and deadweight loss.",
      concepts: [
        {
          title: "Demand and supply, shifts vs. movements",
          simple: "A change in a good's own price moves you ALONG the curve. Anything else that changes shifts the WHOLE curve.",
          detail: "Demand shifters: income (normal vs. inferior goods), prices of substitutes and complements, tastes, expectations, number of buyers. Supply shifters: input costs, technology, taxes and subsidies, number of sellers, expectations.",
          hook: "Demand shifters: \"TRIBE\": Tastes, Related goods, Income, Buyers, Expectations.",
        },
        {
          title: "Equilibrium and changes",
          simple: "When demand rises, both price and quantity go up. When supply rises, price goes down and quantity goes up.",
          detail: "If both curves shift at once, one variable is indeterminate. For example, if both demand and supply increase, Q rises but the change in P is ambiguous.",
        },
        {
          title: "Elasticity",
          simple: "Elasticity measures how much buyers react to a price change. Necessities barely react (inelastic); luxuries react a lot (elastic).",
          detail: "PED = %ΔQd / %ΔP. It's elastic when |PED| > 1. Total revenue test: if price rises and TR falls, demand is elastic. If price rises and TR rises, demand is inelastic. Other elasticities: income elasticity (negative for inferior goods), cross-price elasticity (positive for substitutes), and supply elasticity.",
        },
        {
          title: "Surplus and government intervention",
          simple: "Price ceilings cause shortages, price floors cause surpluses, and taxes shrink the market. Each wastes some value, called deadweight loss.",
          detail: "Consumer surplus is the area below demand and above price. Producer surplus is above supply and below price. A binding ceiling sits BELOW equilibrium, and a binding floor sits ABOVE it. With a tax, the side that is more inelastic bears more of the burden. Tariffs raise the domestic price and create deadweight loss.",
        },
      ],
      terms: [
        ["Law of demand", "Price up, quantity demanded down, holding other things constant."],
        ["Normal good", "Demand rises when income rises."],
        ["Complements", "Goods used together. If one's price rises, demand for the other falls."],
        ["Price elasticity of demand", "The responsiveness of quantity demanded to price."],
        ["Price ceiling", "A legal maximum price. It causes a shortage if set below equilibrium."],
        ["Deadweight loss", "Lost total surplus from producing less (or more) than the efficient quantity."],
      ],
      mistakes: [
        "Saying \"demand increased\" when price fell. That's an increase in QUANTITY DEMANDED, a movement along the curve.",
        "Placing a binding price ceiling above equilibrium. To bind, it must be below.",
      ],
      questions: [
        { q: "Incomes rise and pizza is a normal good. In the pizza market:", choices: ["Demand shifts left; P↓, Q↓", "Demand shifts right; P↑, Q↑", "Supply shifts right; P↓, Q↑", "Quantity demanded rises along the curve"], answer: 1, explain: "Higher income increases demand for normal goods, raising both price and quantity." },
        { q: "The government sets a price ceiling below equilibrium. The result is:", choices: ["A surplus", "A shortage", "No effect", "Higher prices"], answer: 1, explain: "The low price increases Qd and decreases Qs, so there's a shortage." },
        { q: "A theater raises ticket prices and its total revenue falls. Demand is:", choices: ["Inelastic", "Unit elastic", "Elastic", "Perfectly inelastic"], answer: 2, explain: "When price rises and TR falls, the percentage drop in quantity was larger than the percentage rise in price." },
        { q: "Demand and supply both increase. What is definitely true?", choices: ["Price rises", "Price falls", "Quantity rises", "Quantity falls"], answer: 2, explain: "Both shifts raise Q. Their effects on P work in opposite directions, so P is indeterminate." },
        { q: "A per-unit tax is placed on a good with very inelastic demand. Who bears most of the tax?", choices: ["Buyers", "Sellers", "It's split evenly", "The government"], answer: 0, explain: "The more inelastic side can't easily change its behavior, so it absorbs more of the tax." },
      ],
      frq: {
        prompt: "An unexpected frost destroys much of Brazil's coffee crop.\n(a) Using a correctly labeled graph, show the effect on the market for coffee and label the new price and quantity.\n(b) If demand for coffee is inelastic, what happens to coffee sellers' total revenue? Explain.\n(c) What happens in the market for tea (a substitute)?",
        points: [
          "(a) Supply shifts left: equilibrium price rises (P₂ > P₁) and quantity falls (Q₂ < Q₁). Axes labeled P and Q.",
          "(b) Total revenue rises: with inelastic demand, the percentage increase in price is larger than the percentage decrease in quantity.",
          "(c) Demand for tea increases (shifts right), so tea's price and quantity both rise.",
        ],
      },
    },
    {
      title: "Production, Cost, and the Perfect Competition Model",
      weight: "22–25%",
      tldr: "Firms choose output to maximize profit where MR = MC. Cost curves come from diminishing returns. In perfect competition, firms are price takers: they can earn short-run profits, but in the long run entry and exit push economic profit to zero.",
      concepts: [
        {
          title: "Production and diminishing returns",
          simple: "Adding more workers to a fixed kitchen helps at first, but eventually each extra cook adds less.",
          detail: "Marginal product (MP) = ΔTP/ΔL. Diminishing marginal returns occur in the short run because at least one input is fixed. This is why MC eventually rises.",
        },
        {
          title: "Cost curves",
          simple: "Costs are fixed (rent) or variable (ingredients). The cost of one more unit is marginal cost.",
          detail: "TC = FC + VC. ATC = TC/Q. AVC = VC/Q. MC = ΔTC/ΔQ. MC crosses ATC and AVC at their minimum points. In the long run, economies of scale make long-run ATC fall and diseconomies make it rise.",
          hook: "MC is the \"grade on your next test\": if it's below your average, it pulls the average down.",
        },
        {
          title: "Profit maximization",
          simple: "Keep producing while the next unit brings in more than it costs.",
          detail: "Produce where MR = MC. Economic profit = TR − (explicit + implicit costs). Shutdown rule: in the short run, shut down if P < minimum AVC.",
        },
        {
          title: "Perfect competition",
          simple: "Many small firms sell identical products, so no single firm can change the price.",
          detail: "P = MR = D (a horizontal demand curve for each firm). Short run: profit or loss is possible. Long run: entry and exit bring P = min ATC and zero economic profit. The result is allocatively efficient (P = MC) and productively efficient (P = min ATC).",
        },
      ],
      terms: [
        ["Marginal product", "The extra output from one more unit of input."],
        ["Marginal cost", "The extra cost of producing one more unit."],
        ["Average total cost", "TC/Q"],
        ["Economic profit", "Revenue minus explicit AND implicit costs."],
        ["Shutdown point", "Minimum AVC. Below it, the firm produces nothing in the short run."],
        ["Allocative efficiency", "P = MC: resources go to the goods society values most."],
      ],
      mistakes: [
        "Maximizing profit where profit per unit (P − ATC) is highest. The rule is always MR = MC.",
        "Mixing up the shutdown point (min AVC) with the break-even point (min ATC).",
      ],
      questions: [
        { q: "A firm maximizes profit by producing where:", choices: ["TR is highest", "ATC is lowest", "MR = MC", "P = AVC"], answer: 2, explain: "At MR = MC, one more unit would add more to cost than to revenue." },
        { q: "A perfectly competitive firm should shut down in the short run when:", choices: ["P < ATC", "P < minimum AVC", "MR = MC", "Economic profit is zero"], answer: 1, explain: "If price can't cover variable costs, producing loses more than the fixed cost." },
        { q: "In long-run equilibrium, a perfectly competitive firm earns:", choices: ["Positive economic profit", "Zero economic profit", "Losses", "Monopoly profit"], answer: 1, explain: "Entry and exit push the price to minimum ATC." },
        { q: "The MC curve crosses the ATC curve:", choices: ["At ATC's maximum", "At ATC's minimum", "Never", "At the shutdown price"], answer: 1, explain: "When MC is below the average, it pulls the average down. When above, it pulls it up. So they cross at ATC's minimum." },
      ],
      frq: {
        prompt: "A perfectly competitive firm faces a market price of $10. At its profit-maximizing output of 100 units, ATC = $8.\n(a) Calculate the firm's economic profit.\n(b) Explain what happens in this industry in the long run.\n(c) State the firm's long-run price and economic profit.",
        points: [
          "(a) (P − ATC) × Q = (10 − 8) × 100 = $200.",
          "(b) Profits attract new firms. Market supply shifts right and the price falls.",
          "(c) The price falls to minimum ATC, and economic profit becomes zero.",
        ],
      },
    },
    {
      title: "Imperfect Competition",
      weight: "15–22%",
      tldr: "Monopolies, oligopolies and monopolistically competitive firms have some control over price. They restrict output and charge a price above marginal cost, which creates deadweight loss. Game theory models how oligopolists react to each other's strategies.",
      concepts: [
        {
          title: "Monopoly",
          simple: "A single seller with no close substitutes can raise its price, but only by selling fewer units.",
          detail: "The demand curve slopes down and MR lies below demand. Produce where MR = MC, then charge the price read off the demand curve. The result is P > MC, so it's allocatively inefficient and creates deadweight loss. Barriers to entry keep profits positive in the long run.",
        },
        {
          title: "Price discrimination and regulation",
          simple: "Charging different customers different prices lets a monopolist capture more of the surplus.",
          detail: "Perfect price discrimination: MR = D, output is efficient, consumer surplus = 0, and there's no DWL. Regulation: the socially optimal price is P = MC, and the fair-return price is P = ATC.",
        },
        {
          title: "Monopolistic competition",
          simple: "Many firms sell similar but not identical products, like restaurants or clothing brands.",
          detail: "The demand curve slopes down because products are differentiated. Easy entry means zero economic profit in the long run (P = ATC, where demand is tangent to ATC). Firms have excess capacity, and P > MC.",
        },
        {
          title: "Oligopoly and game theory",
          simple: "A few big firms each have to guess what the others will do.",
          detail: "Payoff matrix. Dominant strategy: best no matter what the other player does. Nash equilibrium: neither player wants to change strategy given the other's choice. Collusion (cartels) is unstable because each member has an incentive to cheat.",
        },
      ],
      terms: [
        ["Barrier to entry", "Something that prevents new firms from entering, like patents or economies of scale."],
        ["Marginal revenue", "The extra revenue from selling one more unit."],
        ["Price discrimination", "Charging different prices to different buyers for the same good."],
        ["Product differentiation", "Making a product distinct from competitors' products."],
        ["Dominant strategy", "The best choice regardless of what the rival does."],
        ["Nash equilibrium", "No player can improve by changing strategy alone."],
      ],
      mistakes: [
        "Reading the monopoly price off the MR curve. Find Q where MR = MC, then go UP to the demand curve for the price.",
        "Saying monopolistically competitive firms earn long-run profit. They earn zero economic profit.",
      ],
      questions: [
        { q: "For a single-price monopolist, marginal revenue is:", choices: ["Equal to price", "Greater than price", "Less than price", "Always zero"], answer: 2, explain: "To sell one more unit, it must lower the price on ALL units, so MR < P." },
        { q: "Payoffs (A, B): both High = (10, 10); A High/B Low = (2, 15); A Low/B High = (15, 2); both Low = (5, 5). What is A's dominant strategy?", choices: ["High", "Low", "No dominant strategy", "Alternate"], answer: 1, explain: "If B plays High, A gets 15 from Low vs 10 from High. If B plays Low, A gets 5 from Low vs 2 from High. Low is always better." },
        { q: "In long-run equilibrium, a monopolistically competitive firm:", choices: ["Earns positive economic profit", "Earns zero economic profit with excess capacity", "Produces at minimum ATC", "Sets P = MC"], answer: 1, explain: "Entry brings profits to zero, but P = ATC occurs to the left of minimum ATC." },
        { q: "A perfectly price-discriminating monopolist produces:", choices: ["Less than a single-price monopolist and has more DWL", "The allocatively efficient quantity with no consumer surplus", "Zero output", "Where P = ATC"], answer: 1, explain: "It sells every unit where the buyer values it at or above MC, capturing all the surplus." },
      ],
      frq: {
        prompt: "An unregulated monopoly maximizes profit.\n(a) Using a correctly labeled graph, show the monopoly's price and quantity.\n(b) Shade the deadweight loss.\n(c) If the government sets the price where P = MC, what happens to output and deadweight loss?",
        points: [
          "(a) Draw D, MR (below D), MC and ATC. Q_m is where MR = MC, and P_m is read off the demand curve above Q_m.",
          "(b) DWL: the triangle between D and MC, from Q_m to the quantity where D = MC.",
          "(c) Output increases to the socially optimal quantity and deadweight loss is eliminated.",
        ],
      },
    },
    {
      title: "Factor Markets",
      weight: "10–13%",
      tldr: "Firms hire workers and other inputs because those inputs help make products people want. Firms hire until the marginal revenue product equals the marginal resource cost. A single dominant employer (monopsony) hires fewer workers at lower wages.",
      concepts: [
        {
          title: "Derived demand and MRP",
          simple: "Firms want workers only because customers want what the workers make.",
          detail: "The demand for labor is derived demand. MRP = MP × MR (= MP × P in perfect competition). The MRP curve is the firm's labor demand curve. Labor demand shifts with product price and worker productivity.",
          example: "The 3rd worker adds 5 units, and each sells for $4, so MRP = $20.",
        },
        {
          title: "Hiring rule",
          simple: "Hire another worker if they bring in at least as much as they cost.",
          detail: "Hire until MRP = MRC. In a perfectly competitive labor market the firm is a wage taker, so MRC = wage.",
        },
        {
          title: "Monopsony",
          simple: "If you're the only big employer in town, hiring one more worker means raising everyone's wage.",
          detail: "MRC lies above the labor supply curve. The monopsonist hires where MRP = MRC, then pays the wage read off the supply curve. The result is fewer workers and a lower wage than in a competitive market.",
        },
        {
          title: "Least-cost combination",
          simple: "Spend each dollar on the input that gives the most output per dollar.",
          detail: "MP_L/P_L = MP_K/P_K. If labor's ratio is lower, use less labor and more capital.",
        },
      ],
      terms: [
        ["Derived demand", "Demand for an input that comes from demand for the product it makes."],
        ["Marginal revenue product (MRP)", "The extra revenue from hiring one more unit of input."],
        ["Marginal resource cost (MRC)", "The extra cost of hiring one more unit of input."],
        ["Monopsony", "A market with a single buyer of labor or another input."],
        ["Least-cost rule", "MP per dollar is equal across all inputs."],
      ],
      mistakes: [
        "Using MP alone instead of MRP. You have to multiply by the product's price.",
        "Thinking a monopsony pays the wage at MRC. The wage comes from the SUPPLY curve.",
      ],
      questions: [
        { q: "The demand for bakers depends on the demand for bread. This is called:", choices: ["Derived demand", "Elastic demand", "Monopsony", "Marginal utility"], answer: 0, explain: "Firms demand inputs because consumers demand the output." },
        { q: "A competitive firm sells output at $4. The 3rd worker's marginal product is 5 units. Should it hire that worker at a wage of $18?", choices: ["Yes, MRP = $20 > $18", "No, MRP = $9 < $18", "Yes, MP = 5", "No, the MP is falling"], answer: 0, explain: "MRP = 5 × $4 = $20, which is greater than the $18 wage, so hiring adds to profit." },
        { q: "Compared to a competitive labor market, a monopsony:", choices: ["Hires more and pays more", "Hires fewer and pays less", "Hires more and pays less", "Is the same"], answer: 1, explain: "Because MRC > wage, it restricts hiring, and the lower quantity means a lower wage from the supply curve." },
        { q: "MP of labor = 10 with a wage of $20. MP of capital = 30 with a rental cost of $30. To minimize cost, the firm should:", choices: ["Use more labor, less capital", "Use more capital, less labor", "Keep the current mix", "Stop producing"], answer: 1, explain: "Capital gives 1 unit per dollar vs labor's 0.5, so shift toward capital." },
      ],
      frq: {
        prompt: "A perfectly competitive firm sells its output for $5 and hires in a competitive labor market at a $40 wage.\n Workers: 1, 2, 3, 4, 5\n Total product: 12, 22, 30, 36, 40\n(a) Calculate the MRP of the 3rd worker.\n(b) How many workers will the firm hire? Explain.\n(c) If the product price rises, what happens to labor demand?",
        points: [
          "(a) MP of the 3rd worker = 30 − 22 = 8, so MRP = 8 × $5 = $40.",
          "(b) 3 workers: hire while MRP ≥ wage. The 4th worker's MRP = 6 × 5 = $30 < $40.",
          "(c) Labor demand (MRP) shifts right, so the firm hires more workers.",
        ],
      },
    },
    {
      title: "Market Failure and the Role of Government",
      weight: "8–13%",
      tldr: "Markets can fail when some costs or benefits fall on third parties (externalities), when goods are nonexcludable (public goods), or when outcomes are very unequal. Taxes, subsidies and public provision can correct these problems.",
      concepts: [
        {
          title: "Negative externalities",
          simple: "When a factory pollutes, people nearby pay part of the cost, so the market produces too much.",
          detail: "MSC = MPC + marginal external cost. Market Q > socially optimal Q, which creates deadweight loss. A Pigouvian (per-unit) tax equal to the external cost fixes it.",
        },
        {
          title: "Positive externalities",
          simple: "When your vaccine also protects others, the market produces too little.",
          detail: "MSB = MPB + marginal external benefit. Market Q < socially optimal Q. A per-unit subsidy equal to the external benefit fixes it. Education and vaccines are classic examples.",
        },
        {
          title: "Public goods",
          simple: "Some things, like national defense, benefit everyone and can't be withheld from anyone. So people wait for others to pay.",
          detail: "Public goods are nonrival and nonexcludable. The free-rider problem means private markets under-provide them, so government often provides them. A common resource (rival but nonexcludable) leads to the tragedy of the commons.",
        },
        {
          title: "Income inequality and taxes",
          simple: "Economists measure how unequal incomes are and use taxes and transfers to change it.",
          detail: "The farther the Lorenz curve is from the equality line, the more inequality. Gini coefficient: 0 = perfect equality, 1 = maximum inequality. Taxes can be progressive (higher earners pay a higher %), regressive (lower earners pay a higher %), or proportional.",
        },
      ],
      terms: [
        ["Externality", "A cost or benefit that falls on third parties."],
        ["Marginal social cost", "Private cost plus external cost."],
        ["Pigouvian tax", "A tax equal to the external cost that corrects overproduction."],
        ["Public good", "Nonrival and nonexcludable."],
        ["Free-rider problem", "Benefiting without paying, which leads to under-provision."],
        ["Gini coefficient", "A 0–1 measure of income inequality."],
      ],
      mistakes: [
        "Mixing up which curve shifts. Negative externalities are about COSTS (MSC above MPC). Positive externalities are about BENEFITS (MSB above MPB).",
        "Calling something a public good just because the government provides it. Check both properties: nonrival and nonexcludable.",
      ],
      questions: [
        { q: "A steel plant pollutes a river. Without intervention, the market quantity of steel is:", choices: ["Less than socially optimal", "Greater than socially optimal", "Socially optimal", "Zero"], answer: 1, explain: "Producers ignore the external cost, so they overproduce." },
        { q: "Which is the best example of a public good?", choices: ["A slice of pizza", "National defense", "A movie ticket", "A private gym membership"], answer: 1, explain: "One person's protection doesn't reduce another's (nonrival), and no one can be excluded." },
        { q: "A tax takes a larger percentage of income from low earners than from high earners. It is:", choices: ["Progressive", "Regressive", "Proportional", "Pigouvian"], answer: 1, explain: "Regressive taxes take a higher share of income from people with lower incomes." },
        { q: "Flu vaccines create positive externalities. The best policy to reach the efficient quantity is a:", choices: ["Per-unit tax", "Per-unit subsidy", "Price ceiling", "Quota"], answer: 1, explain: "A subsidy raises private benefit to match social benefit, which increases the quantity." },
      ],
      frq: {
        prompt: "A chemical plant's production creates air pollution.\n(a) Draw a graph showing MPC, MSC and demand (MSB = MPB). Label the market quantity (Q_m) and the socially optimal quantity (Q_s).\n(b) Shade the deadweight loss.\n(c) Identify a government policy that would achieve Q_s and explain how it works.",
        points: [
          "(a) MSC lies above MPC. Q_m is where MPC meets D, and Q_s is where MSC meets D. Q_s < Q_m.",
          "(b) DWL is the triangle between MSC and D, from Q_s to Q_m.",
          "(c) A per-unit (Pigouvian) tax equal to the marginal external cost. It shifts MPC up to MSC, so output falls to Q_s.",
        ],
      },
    },
  ],
};
