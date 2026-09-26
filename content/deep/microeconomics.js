// More key concepts for content/microeconomics.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["microeconomics"] = {
  0: [
    {
      title: "Economic systems and property rights",
      simple: "Societies answer what, how and for whom to produce through markets, government command, or a mix.",
      detail: "Market economies rely on prices and private property; command economies rely on central planning; most real economies are mixed. Clear property rights give people incentives to use and invest in resources. The circular flow model shows households and firms trading in product and factor markets.",
      trap: "In the circular flow, households SELL factors (labor) and BUY products; firms do the reverse. Direction questions are common.",
      terms: [
        ["Command economy", "An economy where government makes production decisions."],
        ["Circular flow model", "Diagram of how money, goods and factors move between households and firms."],
      ],
    },
    {
      title: "Shifts of the PPC and efficiency",
      simple: "Points on the PPC are efficient, points inside waste resources, and growth shifts the curve outward.",
      detail: "Productive efficiency: any point ON the PPC. Allocative efficiency: the point society values most. Inside the curve: unemployment or inefficiency. Outward shifts come from more resources, better technology or more capital. A bowed-out PPC shows increasing opportunity costs (resources not equally suited).",
      trap: "Reducing unemployment moves the economy from inside the curve TO it, but doesn't SHIFT the curve.",
      terms: [
        ["Productive efficiency", "Producing at the lowest cost; any point on the PPC."],
        ["Increasing opportunity cost", "Giving up more of one good for each additional unit of another; a bowed-out PPC."],
      ],
    },
    {
      title: "The utility-maximizing rule",
      simple: "Spend so the last dollar on each good gives the same extra satisfaction.",
      detail: "Maximize utility when MUₐ/Pₐ = MU_b/P_b and all income is spent. If MUₐ/Pₐ > MU_b/P_b, buy more A and less B. Diminishing marginal utility means each extra unit gives less satisfaction, which explains the downward-sloping demand curve.",
      trap: "Compare marginal utility PER DOLLAR, not total utility or marginal utility alone.",
      terms: [
        ["Utility-maximizing rule", "MUₐ/Pₐ = MU_b/P_b with all income spent."],
        ["Diminishing marginal utility", "Each additional unit gives less added satisfaction."],
      ],
    },
  ],
  1: [
    {
      title: "Determinants of demand and supply",
      simple: "Changes in price move along a curve; changes in anything else shift it.",
      detail: "Demand shifters (TRIBE): Tastes, Related goods' prices (substitutes, complements), Income (normal vs. inferior), number of Buyers, Expectations. Supply shifters: input prices, technology, number of sellers, taxes/subsidies, expectations, prices of other goods the firm could make.",
      trap: "A change in the good's OWN price never shifts its curve. It's a movement along it (change in quantity demanded or supplied).",
      terms: [
        ["Inferior good", "A good whose demand falls as income rises."],
        ["Substitutes", "Goods used in place of each other; a price rise in one raises demand for the other."],
        ["Change in quantity demanded", "A movement along the demand curve caused by the good's own price."],
      ],
    },
    {
      title: "Consumer and producer surplus",
      simple: "Consumer surplus is what buyers save; producer surplus is what sellers gain beyond their minimum.",
      detail: "Consumer surplus: area below demand and above price. Producer surplus: area above supply and below price. Total surplus is maximized at the competitive equilibrium (allocative efficiency). Interventions that move quantity away from equilibrium create deadweight loss.",
      trap: "Surplus areas are TRIANGLES (and trapezoids with interventions). Use ½ × base × height with the correct axis values.",
      terms: [
        ["Consumer surplus", "Difference between what buyers are willing to pay and what they pay."],
        ["Producer surplus", "Difference between the price received and the minimum sellers would accept."],
      ],
    },
    {
      title: "Taxes and tax incidence",
      simple: "A tax raises the price buyers pay and lowers what sellers keep; the more inelastic side pays more.",
      detail: "An excise tax shifts supply up by the tax amount (or creates a wedge). Quantity falls, government collects revenue (tax × new quantity), and deadweight loss appears. Incidence: the more inelastic side bears more of the tax burden. Subsidies do the opposite, lowering the buyers' price and raising the sellers' price.",
      trap: "Who PAYS the tax to the government doesn't matter for incidence. Elasticity decides who bears the burden.",
      terms: [
        ["Tax incidence", "How the burden of a tax is divided between buyers and sellers."],
        ["Excise tax", "A per-unit tax on a specific good."],
      ],
    },
    {
      title: "Income and cross-price elasticity",
      simple: "Other elasticities show how demand responds to income and other goods' prices.",
      detail: "Income elasticity = %ΔQd / %ΔIncome: positive for normal goods (>1 for luxuries), negative for inferior goods. Cross-price elasticity = %ΔQd of A / %ΔP of B: positive for substitutes, negative for complements. Price elasticity of supply grows with time.",
      trap: "The SIGN is what matters for classifying goods: negative cross-price elasticity means complements.",
      terms: [
        ["Income elasticity of demand", "%ΔQd divided by %ΔIncome."],
        ["Cross-price elasticity", "%ΔQd of one good divided by %ΔP of another."],
      ],
    },
    {
      title: "International trade, tariffs and quotas",
      simple: "Free trade lowers prices for consumers, while tariffs and quotas protect domestic producers at a cost.",
      detail: "With imports at the world price, domestic consumers gain and producers lose, with a net gain. A tariff raises the domestic price, increases domestic production, reduces imports, raises revenue, and creates deadweight loss. A quota has similar effects but the extra revenue goes to license holders instead of the government.",
      trap: "A tariff and a quota can have the same price effect, but only the TARIFF generates government revenue.",
      terms: [
        ["Tariff", "A tax on imported goods."],
        ["Import quota", "A limit on the quantity of a good that can be imported."],
        ["World price", "The price at which a good trades internationally."],
      ],
    },
  ],
  2: [
    {
      title: "Accounting vs. economic profit",
      simple: "Economic profit subtracts opportunity costs as well as out-of-pocket costs.",
      detail: "Accounting profit = revenue − explicit costs. Economic profit = revenue − explicit − implicit costs (like forgone salary). Zero economic profit (normal profit) means the firm is doing as well as its next-best alternative, so it stays in the industry.",
      trap: "Zero economic profit is NOT bad. It means the owner earns exactly what they'd get elsewhere.",
      terms: [
        ["Implicit cost", "The opportunity cost of using resources the firm already owns."],
        ["Normal profit", "Zero economic profit; the firm covers all opportunity costs."],
      ],
    },
    {
      title: "Fixed vs. variable costs and the short run",
      simple: "Fixed costs don't change with output; variable costs do.",
      detail: "Short run: at least one input is fixed. TC = FC + VC. AFC falls continuously as output rises. MC intersects AVC and ATC at their minimums. A change in fixed cost shifts ATC and AFC but NOT MC or AVC, so it doesn't change the profit-maximizing quantity.",
      trap: "A lump-sum tax or license fee (a fixed cost) doesn't change output or price in the short run. Only MC changes do.",
      terms: [
        ["Fixed cost", "A cost that doesn't change with the quantity produced."],
        ["Average variable cost", "Variable cost divided by quantity."],
      ],
    },
    {
      title: "Long-run adjustment in perfect competition",
      simple: "Profits attract new firms and losses drive firms out until economic profit is zero.",
      detail: "If firms earn positive economic profit, entry shifts market supply right, lowering price until P = minimum ATC. Losses cause exit, shifting supply left and raising price. In long-run equilibrium, P = MC = minimum ATC: both productively and allocatively efficient.",
      trap: "Adjustment happens through MARKET supply shifting, which changes the price the individual firm faces.",
      terms: [
        ["Long-run equilibrium (perfect competition)", "P = MC = minimum ATC and zero economic profit."],
        ["Entry and exit", "Firms joining or leaving an industry in response to profits or losses."],
      ],
    },
    {
      title: "Economies of scale",
      simple: "In the long run, growing bigger can lower, keep constant, or raise average cost.",
      detail: "The long-run average total cost curve shows economies of scale (falling LRATC), constant returns, and diseconomies of scale (rising LRATC). Economies of scale can come from specialization and bulk buying; diseconomies from management difficulties. Large economies of scale can create natural monopolies.",
      trap: "Economies of scale are a LONG-RUN idea. Diminishing marginal returns are a SHORT-RUN idea. Don't mix them up.",
      terms: [
        ["Economies of scale", "Falling long-run average cost as output rises."],
        ["Diseconomies of scale", "Rising long-run average cost as a firm grows too large."],
      ],
    },
  ],
  3: [
    {
      title: "Why monopoly is inefficient",
      simple: "A monopoly produces less and charges more than a competitive market, causing deadweight loss.",
      detail: "The monopolist produces where MR = MC and charges the price on the demand curve above that quantity. Because P > MC, it's allocatively inefficient; because it doesn't produce at minimum ATC, it's productively inefficient. A monopolist always produces in the ELASTIC range of demand, since MR > 0 there.",
      trap: "Read the price from the DEMAND curve, not from the MR = MC intersection.",
      terms: [
        ["Monopoly deadweight loss", "Lost surplus from a monopoly producing less than the efficient quantity."],
        ["Elastic range", "The part of the demand curve where MR is positive."],
      ],
    },
    {
      title: "Regulating natural monopolies",
      simple: "Governments can set a monopoly's price to improve efficiency.",
      detail: "Socially optimal (allocatively efficient) price: P = MC, which may cause losses needing a subsidy. Fair-return price: P = ATC, giving zero economic profit. Unregulated: MR = MC. Natural monopolies have falling ATC over the market's range of output.",
      trap: "Setting P = MC for a natural monopoly often means P < ATC, so the firm needs a SUBSIDY to stay open.",
      terms: [
        ["Socially optimal price", "Price where P = MC (allocative efficiency)."],
        ["Fair-return price", "Price where P = ATC, so the firm earns zero economic profit."],
      ],
    },
    {
      title: "Long-run monopolistic competition",
      simple: "Easy entry wipes out profits, but firms still don't produce at the lowest possible cost.",
      detail: "In the long run, entry shifts each firm's demand left until it's tangent to ATC: P = ATC, zero economic profit. But P > MC (allocative inefficiency) and the firm produces left of minimum ATC, called excess capacity. Firms compete through product differentiation and advertising.",
      trap: "Monopolistic competition earns zero long-run profit like perfect competition, but it's NOT efficient.",
      terms: [
        ["Excess capacity", "Producing less than the output at minimum ATC."],
        ["Tangency solution", "Long-run equilibrium where demand is tangent to ATC."],
      ],
    },
    {
      title: "Reading payoff matrices",
      simple: "Find each player's best response to each choice by the other to spot dominant strategies and equilibria.",
      detail: "For each of the opponent's options, underline your best payoff. A dominant strategy is best regardless of the other player's choice. A Nash equilibrium is where both players are playing best responses. The prisoner's dilemma shows how individual incentives lead to a worse joint outcome, explaining why cartels are unstable.",
      trap: "Compare only the payoffs of the player you're analyzing. Read the correct number in each cell (usually the first number is the row player).",
      terms: [
        ["Prisoner's dilemma", "A game where individually rational choices produce a worse joint outcome."],
        ["Cartel", "A group of firms colluding to set prices or output."],
      ],
    },
  ],
  4: [
    {
      title: "Perfectly competitive labor markets",
      simple: "In a competitive labor market, each firm takes the market wage and hires until MRP equals the wage.",
      detail: "The market wage is set by labor supply and demand. Each firm faces a horizontal (perfectly elastic) labor supply at that wage, so MRC = wage. Hire where MRP = MRC. MRP = MP × P (in a perfectly competitive product market).",
      trap: "The FIRM's labor supply is horizontal, but the MARKET's is upward sloping. Side-by-side graphs test this.",
      terms: [
        ["Wage taker", "A firm that must pay the market wage."],
        ["MRP = MRC rule", "Hire workers until the added revenue equals the added cost."],
      ],
    },
    {
      title: "Shifts in labor demand and supply",
      simple: "Labor demand shifts when product price or productivity changes; supply shifts with population and preferences.",
      detail: "Labor demand (MRP) shifts with the product's price, worker productivity (training, technology), and prices of other inputs (substitutes and complements). Labor supply shifts with population, immigration, preferences, and alternative job opportunities.",
      trap: "Because labor demand is DERIVED, a rise in the price of the product a worker makes increases demand for that worker.",
      terms: [
        ["Human capital", "Skills and knowledge that raise a worker's productivity."],
        ["Labor supply shifters", "Population, preferences, and alternative wages."],
      ],
    },
    {
      title: "Minimum wage in labor markets",
      simple: "A binding minimum wage can cause unemployment in a competitive market but may raise employment under monopsony.",
      detail: "In a competitive labor market, a minimum wage above equilibrium creates a surplus of labor (unemployment). In a monopsony, a minimum wage set between the monopsony wage and the competitive wage can raise BOTH the wage and employment, since it makes MRC flat.",
      trap: "The effect of a minimum wage depends on the market structure. The monopsony case is a favorite twist.",
      terms: [
        ["Binding minimum wage", "A minimum wage set above the equilibrium wage."],
        ["Labor surplus", "More workers seeking jobs than firms want to hire."],
      ],
    },
  ],
  5: [
    {
      title: "Finding the socially optimal quantity",
      simple: "Society is best off where marginal social benefit equals marginal social cost.",
      detail: "With a negative externality, MSC > MPC, so the market overproduces. With a positive externality, MSB > MPB, so the market underproduces. The deadweight loss triangle sits between the market quantity and the socially optimal quantity. Corrective taxes or subsidies equal to the external cost or benefit move the market to MSB = MSC.",
      trap: "Point the deadweight loss triangle toward the SOCIALLY OPTIMAL quantity, between MSB and MSC.",
      terms: [
        ["Marginal social benefit", "Private benefit plus external benefit of one more unit."],
        ["Socially optimal quantity", "Where MSB = MSC."],
      ],
    },
    {
      title: "The Lorenz curve",
      simple: "The Lorenz curve shows how unequally income is distributed.",
      detail: "It plots the cumulative share of income against the cumulative share of households. The 45° line is perfect equality. The farther the curve bows away from it, the more unequal the distribution; the Gini coefficient measures that gap (0 = equal, 1 = completely unequal).",
      trap: "A Lorenz curve CLOSER to the diagonal means MORE equality and a smaller Gini coefficient.",
      terms: [
        ["Lorenz curve", "Graph showing the cumulative distribution of income."],
        ["Line of perfect equality", "The 45° line on a Lorenz curve graph."],
      ],
    },
    {
      title: "Types of taxes",
      simple: "Taxes differ by how the tax rate changes as income rises.",
      detail: "Progressive: the average tax rate rises with income (U.S. federal income tax). Regressive: the average rate falls as income rises (sales taxes take a larger share of low incomes). Proportional (flat): the same rate for everyone. Transfer payments and progressive taxes reduce inequality.",
      trap: "A sales tax has the same RATE for everyone but is REGRESSIVE, because it takes a larger share of low incomes.",
      terms: [
        ["Progressive tax", "A tax whose average rate rises as income rises."],
        ["Regressive tax", "A tax that takes a larger share of income from lower-income people."],
      ],
    },
    {
      title: "Antitrust policy",
      simple: "Governments use antitrust laws to promote competition and limit market power.",
      detail: "Antitrust policy can block mergers, break up monopolies, and punish collusion (price fixing). The goal is to move markets closer to competitive outcomes: lower prices, more output, and less deadweight loss.",
      trap: "Antitrust aims at MARKET POWER and competition, not at large size itself.",
      terms: [
        ["Antitrust laws", "Laws that promote competition and limit monopoly power."],
        ["Price fixing", "Illegal agreement among firms to set prices."],
      ],
    },
  ],
};
