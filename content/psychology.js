window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["psychology"] = {
  tips: [
    "Many multiple-choice questions describe a scenario and ask which concept it shows. Practice turning everyday situations into psych terms.",
    "Article Analysis Question (AAQ): be ready to identify the research method, the variables, operational definitions, ethics, statistics and how well the results generalize.",
    "Evidence-Based Question (EBQ): make a claim, support it with specific evidence from the sources you're given, and explain how the evidence connects to a psychological concept.",
    "Always apply the concept to the specific scenario. A definition on its own rarely earns the point.",
    "Know research methods cold: they appear in every unit, not just one.",
  ],
  units: [
    {
      title: "Biological Bases of Behavior",
      weight: "15–25%",
      tldr: "Behavior comes from biology: neurons firing, chemical messengers, brain regions working together, sleep cycles, and your senses turning the outside world into neural signals.",
      concepts: [
        {
          title: "Neurons and neural firing",
          simple: "Neurons are messengers. They pass signals along like a row of dominoes, then release chemicals to hand the message to the next neuron.",
          detail: "Dendrites receive, the axon conducts, and terminal buttons release neurotransmitters into the synapse. The action potential is all-or-none: stimulus strength changes how often a neuron fires, not how strongly. Reuptake recycles neurotransmitters. Agonists mimic or boost a neurotransmitter, and antagonists block it.",
        },
        {
          title: "Neurotransmitters and hormones",
          simple: "Different chemicals carry different messages: movement, mood, calming down, pain relief.",
          detail: "Dopamine: reward and movement (linked to Parkinson's and schizophrenia). Serotonin: mood (depression). GABA: the main inhibitory neurotransmitter (calming). Glutamate: the main excitatory one (memory). Acetylcholine: muscles and memory. Endorphins: pain relief. Hormones such as adrenaline, cortisol and oxytocin travel through the blood and act more slowly.",
        },
        {
          title: "The nervous system and brain",
          simple: "The brain and spinal cord are the headquarters. Nerves reach out to the rest of the body. Different brain areas specialize in different jobs.",
          detail: "CNS vs. PNS. The PNS splits into somatic (voluntary) and autonomic, which splits into sympathetic (fight or flight) and parasympathetic (rest and digest). Frontal lobe: planning and movement, including Broca's area for speech production. Temporal: hearing, including Wernicke's area for comprehension. Parietal: touch. Occipital: vision. The cerebellum handles coordination, the hippocampus memory, the amygdala fear, and the hypothalamus drives and hormones. Plasticity is the brain's ability to rewire itself.",
          hook: "Broca = broken speech production. Wernicke = words don't make sense.",
        },
        {
          title: "Sleep and sensation",
          simple: "Sleep runs in 90-minute cycles, and dreaming happens in REM. Your senses convert light, sound and touch into neural signals.",
          detail: "Sleep stages are NREM 1–3 and REM, where REM brings a paralyzed body with an active brain (\"paradoxical sleep\"). Circadian rhythm is the 24-hour cycle. Sensation: transduction converts energy into neural signals. Absolute threshold is the minimum energy detected 50% of the time. Weber's law: the just-noticeable difference is a constant proportion of the original stimulus. Sensory adaptation means reduced sensitivity to a constant stimulus.",
        },
      ],
      terms: [
        ["Action potential", "An all-or-none electrical signal that travels down the axon."],
        ["Agonist", "A drug that mimics or increases a neurotransmitter's effect."],
        ["Antagonist", "A drug that blocks a neurotransmitter's effect."],
        ["Sympathetic nervous system", "Arouses the body for fight or flight."],
        ["Neuroplasticity", "The brain's ability to change and reorganize itself."],
        ["Transduction", "Converting stimulus energy into neural signals."],
        ["Weber's law", "Noticing a change requires a constant PERCENTAGE difference, not a constant amount."],
      ],
      mistakes: [
        "Thinking a stronger stimulus makes a bigger action potential. It makes MORE FREQUENT firing.",
        "Mixing up sympathetic (arousing) and parasympathetic (calming).",
        "Confusing sensation (detecting a stimulus) with perception (interpreting it).",
      ],
      questions: [
        { q: "A drug mimics endorphins and binds to their receptors. The drug is a(n):", choices: ["Antagonist", "Agonist", "Reuptake inhibitor", "Hormone"], answer: 1, explain: "Agonists mimic a neurotransmitter and activate its receptors." },
        { q: "After a stroke, Sam understands speech but struggles to produce fluent sentences. The damage is most likely in:", choices: ["Wernicke's area", "Broca's area", "The occipital lobe", "The cerebellum"], answer: 1, explain: "Broca's area in the frontal lobe controls speech production." },
        { q: "A hiker sees a bear. Her heart races and her digestion slows. This is caused by the:", choices: ["Parasympathetic nervous system", "Sympathetic nervous system", "Somatic nervous system", "Cerebellum"], answer: 1, explain: "The sympathetic system triggers fight or flight: a higher heart rate and paused digestion." },
        { q: "You can notice 1 extra pound added to a 10-pound bag, but you need 5 extra pounds to notice a change in a 50-pound bag. This illustrates:", choices: ["Absolute threshold", "Weber's law", "Sensory adaptation", "Signal detection theory"], answer: 1, explain: "The just-noticeable difference is a constant proportion, 10%, of the original weight." },
        { q: "During which sleep stage does vivid dreaming most often occur while the muscles are relaxed?", choices: ["NREM-1", "NREM-2", "NREM-3", "REM"], answer: 3, explain: "REM sleep has an active brain with body paralysis, which is why it's called paradoxical sleep." },
      ],
      frq: {
        prompt: "Researchers randomly assigned 60 students to sleep either 4 or 8 hours, then gave everyone the same memory test the next morning. The 8-hour group scored significantly higher.\n(a) Identify the independent and dependent variables.\n(b) Explain why random assignment matters in this study.\n(c) Explain one reason the results may not generalize to all people.",
        points: [
          "(a) IV: hours of sleep (4 vs 8). DV: score on the memory test.",
          "(b) Random assignment spreads out participant differences (like prior memory skill), so the difference can be attributed to sleep. That's what allows a cause-and-effect conclusion.",
          "(c) The sample was only students. Results may differ for older adults or other groups.",
        ],
      },
    },
    {
      title: "Cognition",
      weight: "15–25%",
      tldr: "How we perceive, think, remember and solve problems, and the predictable shortcuts and biases that lead us astray. The unit also covers how intelligence is defined and measured.",
      concepts: [
        {
          title: "Perception",
          simple: "Your brain doesn't just record the world like a camera. It interprets what you see based on what you expect.",
          detail: "Bottom-up processing starts from sensory input. Top-down processing is guided by expectations, schemas and perceptual set. Gestalt principles include figure-ground, proximity, similarity and closure. Depth cues can be binocular (retinal disparity, convergence) or monocular (relative size, interposition, linear perspective). Attention limits: inattentional blindness and change blindness.",
        },
        {
          title: "Thinking and problem solving",
          simple: "We use mental shortcuts to decide fast. They usually work, but they can fool us.",
          detail: "Algorithms are step-by-step and guaranteed but slow. Heuristics are shortcuts. The availability heuristic judges likelihood by how easily examples come to mind. The representativeness heuristic judges by how well something matches a prototype. Common biases: confirmation bias, framing, anchoring, overconfidence and hindsight bias. Barriers to solving problems: functional fixedness and mental set.",
        },
        {
          title: "Memory",
          simple: "Memory has three steps: get information in (encoding), keep it (storage), and get it back out (retrieval). Your memories are rebuilt every time you recall them, so they can change.",
          detail: "Memory runs from sensory memory to short-term/working memory to long-term memory. Long-term memory can be explicit (episodic, semantic) or implicit (procedural, primed). Serial position effect: you remember the first items (primacy) and last items (recency) best. Proactive interference: old information disrupts new learning. Retroactive interference: new information disrupts old memories. The misinformation effect shows that memory is reconstructive.",
          hook: "PRO = old blocks new (goes forward). RETRO = new blocks old (goes backward).",
        },
        {
          title: "Intelligence and testing",
          simple: "A good test gives consistent results (reliable) and measures what it claims to measure (valid).",
          detail: "Spearman's g is a general intelligence factor. Gardner proposed multiple intelligences. Tests are standardized against a norming group, and scores follow a normal curve. Reliability means consistency (test-retest). Validity means the test measures what it should (predictive validity forecasts future performance). Stereotype threat can lower scores. The Flynn effect is the rise in average scores over generations.",
        },
      ],
      terms: [
        ["Top-down processing", "Interpreting input using expectations and prior knowledge."],
        ["Availability heuristic", "Judging likelihood by how easily examples come to mind."],
        ["Confirmation bias", "Seeking information that supports what you already believe."],
        ["Functional fixedness", "Seeing objects only in their usual use."],
        ["Retroactive interference", "New learning disrupts recall of older information."],
        ["Reliability", "A test's consistency."],
        ["Validity", "Whether a test measures what it claims to measure."],
      ],
      mistakes: [
        "Mixing up proactive and retroactive interference.",
        "Thinking a reliable test must be valid. It can consistently measure the wrong thing.",
        "Confusing the availability and representativeness heuristics.",
      ],
      questions: [
        { q: "After watching news about plane crashes, Jordan thinks flying is more dangerous than driving. This reflects the:", choices: ["Representativeness heuristic", "Availability heuristic", "Framing effect", "Mental set"], answer: 1, explain: "Vivid, easily recalled examples make an event seem more likely than it really is." },
        { q: "After learning her new phone number, Maya can't remember her old one. This is:", choices: ["Proactive interference", "Retroactive interference", "Encoding failure", "The primacy effect"], answer: 1, explain: "New information (the new number) interferes with old information going backward, so it's retroactive." },
        { q: "A test gives the same scores when taken twice, but those scores don't predict school performance. The test is:", choices: ["Valid but not reliable", "Reliable but not valid", "Both reliable and valid", "Neither"], answer: 1, explain: "Consistent scores mean it's reliable. Failing to predict what it should means it's not valid." },
        { q: "Participants counting basketball passes fail to notice a person in a gorilla suit. This is:", choices: ["Change blindness", "Inattentional blindness", "Perceptual constancy", "Sensory adaptation"], answer: 1, explain: "Focusing on one task makes people miss a clearly visible, unexpected object." },
        { q: "Asked to recall a grocery list, people best remember the first few items. This is the:", choices: ["Recency effect", "Primacy effect", "Spacing effect", "Next-in-line effect"], answer: 1, explain: "Early items get more rehearsal and move into long-term memory." },
      ],
      frq: {
        prompt: "A student is studying for a history exam.\nExplain how each of the following could affect the student's performance:\n(a) Spacing effect\n(b) Retroactive interference\n(c) Confirmation bias",
        points: [
          "(a) Spreading study sessions over several days (instead of cramming) improves long-term retention, so the student scores higher.",
          "(b) Studying a similar subject (like a different history period) afterward may interfere with recalling the earlier material.",
          "(c) The student may look only for evidence that supports an essay thesis they already hold and miss counterevidence, weakening the argument.",
        ],
      },
    },
    {
      title: "Development and Learning",
      weight: "15–25%",
      tldr: "How people change across their lives, physically, cognitively and socially, and how we learn through association (classical conditioning), consequences (operant conditioning) and watching others.",
      concepts: [
        {
          title: "Cognitive development",
          simple: "Kids don't just know less than adults. They think in fundamentally different ways at different ages.",
          detail: "Piaget's stages: sensorimotor (object permanence develops), preoperational (egocentrism, no conservation yet), concrete operational (conservation, logical thinking about concrete things) and formal operational (abstract reasoning). Vygotsky: the zone of proximal development, where learning is supported by scaffolding.",
          hook: "Some People Can Fly: Sensorimotor, Preoperational, Concrete, Formal.",
        },
        {
          title: "Social development",
          simple: "Early relationships with caregivers shape how we connect with others later on.",
          detail: "Harlow's monkeys showed contact comfort matters more than food. Ainsworth's Strange Situation identified secure, anxious-ambivalent, avoidant and disorganized attachment. Baumrind's parenting styles: authoritative (warm with firm rules, usually the best outcomes), authoritarian, permissive and neglectful. Erikson proposed a psychosocial conflict at each life stage, such as identity vs. role confusion in adolescence.",
        },
        {
          title: "Classical conditioning",
          simple: "Learning that one thing predicts another. The dog hears the bell and expects food.",
          detail: "A neutral stimulus is paired with an unconditioned stimulus (UCS) that triggers an unconditioned response (UCR). The neutral stimulus becomes a conditioned stimulus (CS) that triggers a conditioned response (CR). Related terms: acquisition, extinction, spontaneous recovery, generalization and discrimination.",
        },
        {
          title: "Operant and observational learning",
          simple: "Behavior followed by good outcomes is repeated, and behavior followed by bad outcomes decreases. We also learn by watching others.",
          detail: "Positive reinforcement adds something good. Negative reinforcement removes something bad. Both INCREASE behavior. Punishment decreases behavior. Schedules: fixed-ratio, variable-ratio (most resistant to extinction), fixed-interval and variable-interval. Bandura's Bobo doll study shows modeling.",
          hook: "Reinforcement always increases behavior. Positive = add, negative = remove.",
        },
      ],
      terms: [
        ["Object permanence", "Knowing that objects exist even when they can't be seen."],
        ["Conservation", "Understanding that quantity stays the same when shape changes."],
        ["Secure attachment", "Using the caregiver as a safe base to explore from, and being comforted when they return."],
        ["Conditioned stimulus", "A formerly neutral stimulus that now triggers a learned response."],
        ["Negative reinforcement", "Removing something unpleasant to increase a behavior."],
        ["Variable-ratio schedule", "Reinforcement after an unpredictable number of responses."],
      ],
      mistakes: [
        "Thinking negative reinforcement is punishment. Negative reinforcement INCREASES behavior.",
        "Mislabeling the UCS and the CS. The UCS triggers the response naturally, with no learning needed.",
        "Mixing up the order or key feature of Piaget's stages.",
      ],
      questions: [
        { q: "A car beeps until you fasten your seatbelt, so you buckle up faster over time. This is:", choices: ["Positive reinforcement", "Negative reinforcement", "Positive punishment", "Negative punishment"], answer: 1, explain: "Buckling removes an unpleasant stimulus (the beeping), which increases the behavior." },
        { q: "Slot machines pay out after an unpredictable number of plays. This is a:", choices: ["Fixed-ratio schedule", "Variable-ratio schedule", "Fixed-interval schedule", "Variable-interval schedule"], answer: 1, explain: "The number of responses varies unpredictably. It produces high, steady responding that is hard to extinguish." },
        { q: "A child understands that water poured into a taller glass is the same amount. According to Piaget, the child is in the:", choices: ["Sensorimotor stage", "Preoperational stage", "Concrete operational stage", "Formal operational stage"], answer: 2, explain: "Conservation develops in the concrete operational stage." },
        { q: "Every time Lee's dentist turns on the drill, Lee's jaw tenses. Now Lee tenses at just the SOUND of the drill. The sound is the:", choices: ["UCS", "UCR", "CS", "CR"], answer: 2, explain: "The sound was neutral and became a conditioned stimulus through its association with the painful drilling." },
      ],
      frq: {
        prompt: "A teacher wants students to turn in homework on time.\nExplain how the teacher could use each of the following:\n(a) Positive reinforcement\n(b) Negative reinforcement\n(c) A variable-ratio schedule",
        points: [
          "(a) Add something pleasant after on-time homework, like praise or a sticker, to increase the behavior.",
          "(b) Remove something unpleasant after on-time homework, like dropping a quiz, to increase the behavior.",
          "(c) Reward on-time homework after an unpredictable number of submissions, which makes the behavior resistant to extinction.",
        ],
      },
    },
    {
      title: "Social Psychology and Personality",
      weight: "15–25%",
      tldr: "How other people influence what we think and do: attributions, conformity, obedience and group behavior. The unit also covers theories of personality, motivation and emotion.",
      concepts: [
        {
          title: "Attribution and attitudes",
          simple: "We constantly explain why people do things, and we're biased about it, especially in our own favor.",
          detail: "Fundamental attribution error: blaming others' behavior on their personality and ignoring the situation. Self-serving bias: taking credit for successes and blaming the situation for failures. Cognitive dissonance: discomfort when your actions and beliefs conflict, which leads you to change one of them. Persuasion can take a central route (arguments) or a peripheral route (cues). Foot-in-the-door: a small request first, then a big one.",
        },
        {
          title: "Conformity and obedience",
          simple: "People go along with groups and authority figures far more than they expect to.",
          detail: "Asch's line study: people conformed to a clearly wrong group answer. Milgram: about 65% obeyed orders to give what they thought were maximum shocks. Obedience increases with close, legitimate authority and decreases when the victim is close or others defy the authority.",
        },
        {
          title: "Group behavior",
          simple: "Groups can make us try harder, slack off, or lose ourselves.",
          detail: "Social facilitation: better performance on easy or well-learned tasks when others watch. Social loafing: less effort in groups. Deindividuation: loss of self-restraint when anonymous. Group polarization: discussion strengthens a group's views. Groupthink: harmony overrides good decisions. Bystander effect: less helping when others are present (diffusion of responsibility).",
        },
        {
          title: "Personality, motivation and emotion",
          simple: "There are several ways to explain who you are, and several theories about what drives you and how feelings arise.",
          detail: "Psychodynamic: the unconscious and defense mechanisms. Humanistic: Maslow's self-actualization and Rogers' unconditional positive regard. Social-cognitive: reciprocal determinism and self-efficacy. Trait theory: the Big Five (OCEAN). Motivation: drive reduction, and arousal theory with the Yerkes-Dodson law (moderate arousal is best). Emotion theories: James-Lange (body first), Cannon-Bard (at the same time) and Schachter-Singer (arousal plus a cognitive label).",
          hook: "Big Five = OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
        },
      ],
      terms: [
        ["Fundamental attribution error", "Overestimating personality and underestimating the situation when explaining others' behavior."],
        ["Cognitive dissonance", "Tension from inconsistent beliefs and actions."],
        ["Social loafing", "Putting in less effort when working in a group."],
        ["Bystander effect", "Being less likely to help when other people are present."],
        ["Self-efficacy", "Belief in your ability to succeed."],
        ["Yerkes-Dodson law", "Performance peaks at a moderate level of arousal."],
      ],
      mistakes: [
        "Confusing conformity (going along with peers) with obedience (following orders from an authority).",
        "Confusing social facilitation with social loafing.",
        "Mixing up the order of events in the James-Lange and Cannon-Bard theories.",
      ],
      questions: [
        { q: "Jess assumes a classmate who trips is clumsy, not that the floor was wet. This is:", choices: ["Self-serving bias", "Fundamental attribution error", "Just-world phenomenon", "Group polarization"], answer: 1, explain: "Jess blames personality (clumsiness) and ignores the situation (a wet floor)." },
        { q: "In group projects, some members put in less effort than they would alone. This is:", choices: ["Social facilitation", "Social loafing", "Deindividuation", "Groupthink"], answer: 1, explain: "Individual effort drops when contributions are pooled." },
        { q: "Maya hates running but signs up for a marathon. She starts telling people running is \"actually fun.\" This shows:", choices: ["Cognitive dissonance", "Foot-in-the-door", "Conformity", "Mere exposure"], answer: 0, explain: "She changes her attitude to match her action and reduce the discomfort of the inconsistency." },
        { q: "Which Big Five trait describes someone who is organized, careful and dependable?", choices: ["Openness", "Conscientiousness", "Agreeableness", "Neuroticism"], answer: 1, explain: "Conscientiousness means being disciplined, organized and reliable." },
        { q: "Many people witness an accident, yet no one calls for help. The best explanation is:", choices: ["Diffusion of responsibility", "Social facilitation", "Obedience", "Self-serving bias"], answer: 0, explain: "The bystander effect: each person assumes someone else will act." },
      ],
      frq: {
        prompt: "Several students work together on a group project to prepare for a class presentation.\nExplain how each of the following might affect the group:\n(a) Social loafing\n(b) Groupthink\n(c) Self-serving bias",
        points: [
          "(a) Some members contribute less effort because their work is pooled with others', so the project's quality suffers.",
          "(b) Members avoid disagreeing to keep harmony, so they may miss better ideas or overlook flaws.",
          "(c) If the presentation goes well, each member credits their own skill. If it goes poorly, they blame the others or the circumstances.",
        ],
      },
    },
    {
      title: "Mental and Physical Health",
      weight: "15–25%",
      tldr: "How stress affects health, how psychological disorders are defined and explained, and how they're treated with therapy and medication.",
      concepts: [
        {
          title: "Stress and health",
          simple: "Your body reacts to stress in a predictable pattern. Short bursts help, but long-term stress wears you down.",
          detail: "Selye's General Adaptation Syndrome: alarm → resistance → exhaustion. Problem-focused coping tackles the cause. Emotion-focused coping manages feelings. Positive psychology studies strengths and well-being.",
        },
        {
          title: "Understanding disorders",
          simple: "Disorders are diagnosed by patterns of distress and dysfunction, and they usually have biological, psychological and social causes combined.",
          detail: "The DSM-5-TR is used to diagnose. The biopsychosocial approach looks at all three kinds of factors. Diathesis-stress model: a predisposition (diathesis) combined with environmental stress triggers a disorder.",
        },
        {
          title: "Major categories of disorders",
          simple: "Different disorders affect mood, anxiety, thinking, or how you relate to reality.",
          detail: "Depressive and bipolar disorders (mania). Anxiety disorders: generalized anxiety, panic, phobias. OCD. PTSD. Schizophrenia: positive symptoms add something (hallucinations, delusions) and negative symptoms take something away (flat affect, withdrawal). Also dissociative, eating, neurodevelopmental (ADHD, autism spectrum) and personality disorders.",
          hook: "Positive symptoms are ADDED, not good.",
        },
        {
          title: "Treatment",
          simple: "Some treatments change thinking, some change behavior, and some change brain chemistry. Many people use a combination.",
          detail: "Psychodynamic: insight into unconscious conflicts. Humanistic/client-centered: empathy and unconditional positive regard. Behavioral: exposure therapy, systematic desensitization (for phobias) and aversive conditioning. Cognitive/CBT: challenging distorted thoughts. Biomedical: SSRIs (block serotonin reuptake), antipsychotics (block dopamine), lithium (bipolar) and ECT (severe depression).",
        },
      ],
      terms: [
        ["General Adaptation Syndrome", "The stress response: alarm → resistance → exhaustion."],
        ["Diathesis-stress model", "A predisposition plus stress leads to a disorder."],
        ["Positive symptoms", "Added experiences such as hallucinations or delusions."],
        ["Systematic desensitization", "Pairing relaxation with gradually increasing exposure to a feared object."],
        ["CBT", "Cognitive-behavioral therapy: change distorted thoughts and behaviors."],
        ["SSRI", "An antidepressant that blocks serotonin reuptake."],
      ],
      mistakes: [
        "Thinking \"positive symptoms\" means good symptoms.",
        "Confusing schizophrenia with dissociative identity disorder. They are different.",
        "Saying SSRIs \"add serotonin\". They block reuptake so more serotonin stays in the synapse.",
      ],
      questions: [
        { q: "After weeks of finals stress, Ava gets sick easily and feels drained. According to Selye, she is in the:", choices: ["Alarm stage", "Resistance stage", "Exhaustion stage", "Recovery stage"], answer: 2, explain: "Long-term stress depletes the body's resources, which increases vulnerability to illness." },
        { q: "Hearing voices that aren't there is a:", choices: ["Negative symptom of schizophrenia", "Positive symptom of schizophrenia", "Symptom of dissociative disorder", "Symptom of bipolar disorder only"], answer: 1, explain: "Hallucinations ADD an experience, so they're a positive symptom." },
        { q: "A therapist teaches a client relaxation, then gradually exposes them to pictures of spiders and later real spiders. This is:", choices: ["Aversive conditioning", "Systematic desensitization", "Psychoanalysis", "Client-centered therapy"], answer: 1, explain: "Relaxation is paired with a gradually increasing hierarchy of feared stimuli." },
        { q: "SSRIs treat depression by:", choices: ["Blocking dopamine receptors", "Blocking the reuptake of serotonin", "Increasing GABA production", "Stimulating acetylcholine release"], answer: 1, explain: "Blocking reuptake leaves more serotonin available in the synapse." },
      ],
      frq: {
        prompt: "Riley has an intense fear of public speaking and avoids giving presentations.\nExplain how each approach might treat Riley:\n(a) Cognitive therapy\n(b) Exposure therapy\n(c) Describe how the diathesis-stress model might explain the fear's development.",
        points: [
          "(a) Challenges Riley's irrational thoughts (e.g. \"everyone will laugh at me\") and replaces them with realistic ones.",
          "(b) Gradually and repeatedly exposes Riley to speaking situations until the fear response decreases.",
          "(c) A genetic or temperamental predisposition to anxiety, combined with a stressful event (like a humiliating presentation), triggered the phobia.",
        ],
      },
    },
  ],
};
