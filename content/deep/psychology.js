// More key concepts for content/psychology.js, appended to each unit after the original concepts.
// Each concept carries its own AP trap and flashcards (terms), which feed practice questions.
window.AP_DEEP = window.AP_DEEP || {};
window.AP_DEEP["psychology"] = {
  0: [
    {
      title: "Research methods and ethics",
      simple: "Psychologists use experiments to find causes and other methods to describe and relate behaviors.",
      detail: "Experiments randomly assign participants to conditions and manipulate the independent variable to measure its effect on the dependent variable. Correlational studies show relationships (r from −1 to +1) but not causation. Case studies, surveys and naturalistic observation describe behavior. Ethics requires informed consent, protection from harm, confidentiality, and debriefing (especially after deception), approved by an IRB.",
      example: "To test whether caffeine improves memory, randomly assign people to caffeine or placebo (IV) and compare recall scores (DV).",
      trap: "Random ASSIGNMENT (which group you're in) supports causal claims. Random SAMPLING (who is in the study) supports generalizing. The exam tests this difference constantly.",
      terms: [
        ["Random assignment", "Placing participants in groups by chance so the groups are equivalent at the start."],
        ["Confounding variable", "A factor other than the IV that could explain differences in the DV."],
        ["Informed consent", "Participants agree to take part after learning enough about the study to decide."],
      ],
    },
    {
      title: "Statistics in psychology",
      simple: "Statistics describe data and tell us whether results are likely due to chance.",
      detail: "Measures of central tendency: mean (sensitive to outliers), median, mode. Variability: range and standard deviation. In a normal curve, about 68% of scores fall within 1 SD of the mean and 95% within 2. A statistically significant result (usually p < .05) is unlikely to be due to chance. Skewed distributions pull the mean toward the tail.",
      trap: "In a positively skewed distribution (a long tail to the right), the mean is HIGHER than the median. Picture the tail pulling the mean.",
      terms: [
        ["Standard deviation", "How spread out scores are around the mean."],
        ["Statistical significance", "A result unlikely to have occurred by chance (typically p < .05)."],
        ["Positive skew", "A distribution with a long tail on the high end; the mean exceeds the median."],
      ],
    },
    {
      title: "Heredity, environment and evolutionary psychology",
      simple: "Behavior comes from both genes and experience, and psychologists study how they interact.",
      detail: "Twin studies (identical vs. fraternal) and adoption studies estimate heritability, the share of VARIATION in a trait within a group that's due to genes. Epigenetics describes how experience switches genes on or off. Evolutionary psychology explains behaviors as adaptations that helped ancestors survive and reproduce.",
      trap: "Heritability describes differences within a GROUP, not how much of one person's trait is genetic. A heritability of 0.5 doesn't mean half of your intelligence came from genes.",
      terms: [
        ["Heritability", "Proportion of variation in a trait among individuals that's attributable to genes."],
        ["Epigenetics", "Study of environmental influences on gene expression without changing DNA."],
        ["Twin studies", "Comparing identical and fraternal twins to estimate genetic influence."],
      ],
    },
    {
      title: "Brain regions and their functions",
      simple: "Different brain regions handle different jobs, from breathing to planning.",
      detail: "Brainstem: medulla (heartbeat, breathing), pons (sleep), reticular activating system (arousal). Cerebellum: balance and coordination. Limbic system: amygdala (fear, emotion), hippocampus (forming new explicit memories), hypothalamus (hunger, thirst, body temperature, controls the pituitary), thalamus (sensory relay except smell). Cortex lobes: frontal (planning, motor cortex, Broca's area), parietal (touch, somatosensory cortex), temporal (hearing, Wernicke's area), occipital (vision).",
      hook: "Broca's = Broken speech (production). Wernicke's = Words make no sense (comprehension).",
      trap: "The thalamus relays every sense EXCEPT smell. The hypothalamus is the one that regulates hunger, thirst and hormones.",
      terms: [
        ["Hippocampus", "Limbic structure essential for forming new explicit memories."],
        ["Broca's area", "Frontal lobe region controlling speech production."],
        ["Corpus callosum", "Band of fibers connecting the two hemispheres."],
      ],
    },
    {
      title: "Consciousness and psychoactive drugs",
      simple: "Consciousness shifts across sleep stages and can be altered by drugs.",
      detail: "Sleep cycles run about 90 minutes: NREM stages (N3 = deep, slow-wave sleep with delta waves) and REM (vivid dreams, paralyzed muscles, active brain). Circadian rhythms run on about 24 hours. Disorders: insomnia, narcolepsy, sleep apnea. Drugs: depressants (alcohol, barbiturates) slow the nervous system; stimulants (caffeine, cocaine, amphetamines) speed it up; hallucinogens (LSD) distort perception; opioids relieve pain. Tolerance and withdrawal signal dependence.",
      trap: "REM is called PARADOXICAL sleep: the brain is highly active while the body is essentially paralyzed.",
      terms: [
        ["REM sleep", "Sleep stage with rapid eye movements, vivid dreams and muscle paralysis."],
        ["Circadian rhythm", "The body's roughly 24-hour biological clock."],
        ["Tolerance", "Needing more of a drug to get the same effect."],
      ],
    },
    {
      title: "Vision, hearing and the other senses",
      simple: "Each sense turns a kind of energy into neural signals the brain can read.",
      detail: "Vision: light passes through the cornea, pupil, and lens to the retina, where rods (dim light, black and white) and cones (color, detail, concentrated in the fovea) transduce it. Trichromatic theory explains color at the receptors; opponent-process theory explains afterimages. Hearing: sound waves vibrate the eardrum and ossicles, then the cochlea's hair cells transduce them. Pitch is explained by place theory (high pitches) and frequency theory (low pitches). Other senses: smell (goes straight to the limbic system), taste, touch, pain (gate-control theory), vestibular and kinesthetic senses.",
      trap: "Opponent-process theory explains AFTERIMAGES (stare at green, see red). Trichromatic theory can't.",
      terms: [
        ["Cones", "Retinal receptors for color and fine detail, concentrated in the fovea."],
        ["Cochlea", "Fluid-filled inner-ear structure where sound is transduced."],
        ["Gate-control theory", "The spinal cord has a neural \"gate\" that can block or allow pain signals."],
      ],
    },
  ],
  1: [
    {
      title: "Perceptual organization and depth perception",
      simple: "The brain organizes raw sensations into objects and judges distance from clues.",
      detail: "Gestalt principles: figure-ground, proximity, similarity, continuity, closure. Binocular depth cues need two eyes: retinal disparity and convergence. Monocular cues work with one eye: relative size, interposition (overlap), linear perspective, texture gradient, relative height, light and shadow. Perceptual constancy keeps size, shape and color stable as conditions change.",
      trap: "Retinal disparity and convergence are the ONLY binocular cues. Anything a painter can show on a flat canvas is monocular.",
      terms: [
        ["Retinal disparity", "Binocular cue: the difference between the images on the two retinas."],
        ["Linear perspective", "Monocular cue: parallel lines appear to converge in the distance."],
        ["Perceptual set", "A mental predisposition to perceive one thing and not another."],
      ],
    },
    {
      title: "Encoding and storing memories",
      simple: "Memories are encoded, stored across stages, and strengthened by meaning and practice.",
      detail: "The multi-store model: sensory memory → short-term/working memory (about 7 ± 2 items, around 20 seconds) → long-term memory. Working memory has a central executive, phonological loop and visuospatial sketchpad. Deep (semantic) processing beats shallow processing. Chunking, mnemonics, and spaced practice (the spacing effect) improve storage. Long-term potentiation strengthens synapses.",
      trap: "The spacing effect says distributed practice beats cramming for LONG-TERM retention, even if cramming feels effective the night before.",
      terms: [
        ["Chunking", "Organizing items into familiar, manageable units."],
        ["Spacing effect", "Distributed study produces better long-term retention than massed study."],
        ["Long-term potentiation", "Strengthening of synapses with repeated stimulation; a basis of learning."],
      ],
    },
    {
      title: "Retrieval, forgetting and memory errors",
      simple: "We forget because memories fade, are blocked, or get rebuilt with errors.",
      detail: "Retrieval cues: recall vs. recognition, context-dependent and state-dependent memory, the serial position effect (primacy and recency). Forgetting: Ebbinghaus's forgetting curve, encoding failure, and interference (proactive: old blocks new; retroactive: new blocks old). Memories are reconstructed: the misinformation effect (Loftus) and source amnesia create false memories. Amnesia: anterograde (can't form new) vs. retrograde (lose old).",
      hook: "PROactive = PRior learning interferes. RETROactive = REcent learning interferes backward.",
      trap: "Anterograde amnesia (can't form NEW memories) is the kind linked to hippocampus damage, as in patient H.M.",
      terms: [
        ["Serial position effect", "Better recall of the first and last items in a list."],
        ["Misinformation effect", "Misleading information after an event distorts memory of it."],
        ["Anterograde amnesia", "Inability to form new memories."],
      ],
    },
    {
      title: "Language",
      simple: "Language uses rules to combine sounds into meaning, and children learn it remarkably fast.",
      detail: "Building blocks: phonemes (sounds), morphemes (smallest units of meaning), grammar (syntax and semantics). Development: babbling (about 4 months), one-word stage (about 1 year), two-word telegraphic speech (about 2 years). Chomsky proposed an inborn language acquisition device; Skinner emphasized learning. The linguistic relativity hypothesis (Whorf) says language shapes thought.",
      trap: "Phonemes are SOUNDS, morphemes carry MEANING. \"Cats\" has two morphemes (cat + s) but four phonemes.",
      terms: [
        ["Morpheme", "The smallest unit of language that carries meaning."],
        ["Telegraphic speech", "Early speech of mostly nouns and verbs (\"want milk\")."],
        ["Linguistic relativity", "Whorf's idea that language influences how we think."],
      ],
    },
    {
      title: "Theories of intelligence",
      simple: "Psychologists debate whether intelligence is one general ability or several.",
      detail: "Spearman: a general intelligence factor (g). Gardner: multiple intelligences (linguistic, spatial, interpersonal, and more). Sternberg's triarchic theory: analytical, creative, practical. Fluid intelligence (reasoning speed) declines with age; crystallized intelligence (knowledge) grows. IQ was originally mental age ÷ chronological age × 100. The Flynn effect describes rising scores over generations.",
      trap: "A test can be RELIABLE (consistent) without being VALID (measuring what it claims). Validity requires reliability, but not the reverse.",
      terms: [
        ["General intelligence (g)", "Spearman's single underlying factor measured by all mental ability tests."],
        ["Crystallized intelligence", "Accumulated knowledge and verbal skills, which increase with age."],
        ["Flynn effect", "The rise in average intelligence test scores over generations."],
      ],
    },
  ],
  2: [
    {
      title: "Physical development across the lifespan",
      simple: "The body and brain change in predictable ways from before birth to old age.",
      detail: "Prenatal: germinal, embryonic, fetal stages; teratogens (alcohol causes fetal alcohol syndrome). Newborn reflexes: rooting, sucking, grasping. Maturation follows a biological timetable. Adolescence brings puberty; the frontal lobes keep developing into the mid-20s. Adulthood: menopause; later, slower reaction time and some memory decline, though crystallized knowledge holds.",
      trap: "The limbic system matures before the frontal lobe in adolescence. That's the exam's explanation for teen risk-taking.",
      terms: [
        ["Teratogen", "Harmful agent (like alcohol or a virus) that can damage a developing fetus."],
        ["Rooting reflex", "A baby turns toward a touch on the cheek, looking for a nipple."],
        ["Maturation", "Biological growth processes that unfold regardless of experience."],
      ],
    },
    {
      title: "Adolescent and adult development",
      simple: "Identity, moral reasoning and life stages keep developing after childhood.",
      detail: "Erikson's eight psychosocial stages, each with a crisis: trust vs. mistrust (infancy), identity vs. role confusion (adolescence), intimacy vs. isolation (young adulthood), generativity vs. stagnation (middle age), integrity vs. despair (old age). Kohlberg's moral reasoning: preconventional (punishment and reward), conventional (rules and approval), postconventional (universal principles). Emerging adulthood (18–25) is a modern stage.",
      trap: "Kohlberg measures moral REASONING, not behavior. Two people can make the same choice at different levels depending on why.",
      terms: [
        ["Identity vs. role confusion", "Erikson's adolescent stage of forming a sense of self."],
        ["Postconventional morality", "Kohlberg's level based on self-chosen ethical principles."],
        ["Emerging adulthood", "The period from about 18 to 25 between adolescence and full adulthood."],
      ],
    },
    {
      title: "Parenting styles and social development",
      simple: "How parents raise children is linked to children's confidence and self-control.",
      detail: "Baumrind's styles: authoritative (warm, clear rules, explains reasons; linked to the best outcomes), authoritarian (strict, obedience-focused), permissive (few demands), and neglectful. Harlow's monkeys showed contact comfort matters more than food. Ainsworth's Strange Situation identified secure, insecure-avoidant, and insecure-anxious attachment. Temperament is present from birth.",
      hook: "AuthoriTATIVE = TALKS it through. AuthoriTARIAN = \"because I said so.\"",
      trap: "The research on parenting styles is CORRELATIONAL. It can't prove the parenting style caused the outcome.",
      terms: [
        ["Authoritative parenting", "Warm but firm parenting that explains rules; linked to competence."],
        ["Contact comfort", "Harlow's finding that physical comfort drives infant attachment."],
        ["Temperament", "A person's characteristic emotional reactivity, present from birth."],
      ],
    },
    {
      title: "Principles of classical conditioning",
      simple: "Learned associations can be strengthened, weakened, and spread to similar stimuli.",
      detail: "Acquisition: the NS becomes a CS by pairing with the UCS (best when the NS comes just before). Extinction: the CR fades when the CS repeatedly appears without the UCS. Spontaneous recovery: the extinguished CR reappears after a pause. Generalization: similar stimuli trigger the CR (Little Albert feared white furry objects). Discrimination: telling the CS apart from similar stimuli. Garcia showed taste aversions form after one pairing, even with long delays: biological preparedness.",
      trap: "Extinction doesn't erase the association. Spontaneous recovery proves the learning was suppressed, not deleted.",
      terms: [
        ["Spontaneous recovery", "Reappearance of an extinguished conditioned response after a pause."],
        ["Stimulus generalization", "Responding to stimuli similar to the conditioned stimulus."],
        ["Taste aversion", "Learned avoidance of a food after one pairing with illness."],
      ],
    },
    {
      title: "Reinforcement schedules and shaping",
      simple: "When and how often a behavior is rewarded changes how fast it's learned and how long it lasts.",
      detail: "Continuous reinforcement: fast learning, fast extinction. Partial schedules resist extinction: fixed-ratio (every nth response), variable-ratio (unpredictable number, highest and most persistent response, like slot machines), fixed-interval (after set time, scalloped pattern), variable-interval (unpredictable time, steady responding, like checking email). Shaping rewards successive approximations. Primary reinforcers are unlearned (food); secondary are learned (money).",
      trap: "Positive and negative refer to ADDING or REMOVING a stimulus, not good or bad. Negative reinforcement still increases a behavior.",
      terms: [
        ["Shaping", "Reinforcing successive approximations of a target behavior."],
        ["Fixed-interval schedule", "Reinforcement for the first response after a set time."],
        ["Secondary reinforcer", "A stimulus that gains reinforcing power through association, like money."],
      ],
    },
    {
      title: "Cognitive and social learning",
      simple: "Learning also happens through thinking and watching others, not just rewards.",
      detail: "Tolman's rats formed cognitive maps and showed latent learning (learning that appears only when there's a reason to show it). Köhler's chimps showed insight learning. Bandura's Bobo doll study showed observational learning; modeling needs attention, retention, reproduction and motivation. Learned helplessness (Seligman) develops when outcomes seem uncontrollable.",
      trap: "Latent learning shows that reinforcement affects PERFORMANCE, not whether learning happened.",
      terms: [
        ["Latent learning", "Learning that isn't shown until there's an incentive to demonstrate it."],
        ["Cognitive map", "A mental representation of the layout of one's environment."],
        ["Learned helplessness", "Passive resignation after repeated uncontrollable bad events."],
      ],
    },
  ],
  3: [
    {
      title: "Persuasion, prejudice and discrimination",
      simple: "Attitudes can be changed through arguments or cues, and group biases lead to prejudice.",
      detail: "Elaboration likelihood model: the central route (strong arguments, lasting change) vs. peripheral route (attractiveness, credibility). Foot-in-the-door (small request first) and door-in-the-face (big request first) increase compliance. Prejudice is an attitude; discrimination is a behavior. Ingroup bias, out-group homogeneity, scapegoating, and the just-world phenomenon sustain prejudice. Stereotype threat can lower performance.",
      trap: "Prejudice (attitude) vs. discrimination (action) vs. stereotype (belief). Match the word to the component on the exam.",
      terms: [
        ["Central route persuasion", "Change driven by thoughtful consideration of arguments."],
        ["Foot-in-the-door", "Agreeing to a small request makes agreeing to a larger one more likely."],
        ["Just-world phenomenon", "Believing people get what they deserve."],
      ],
    },
    {
      title: "Relationships, attraction and helping",
      simple: "Proximity, similarity and familiarity draw people together, and situations shape whether we help.",
      detail: "The mere exposure effect makes familiar things more liked. Proximity, similarity and physical attractiveness predict attraction. Sternberg: passionate vs. companionate love. Altruism is explained by social exchange theory, reciprocity norms and social responsibility norms. The bystander effect: diffusion of responsibility lowers help as the crowd grows. Superordinate goals reduce conflict (Sherif's Robbers Cave).",
      trap: "Bystander effect: a victim is LESS likely to get help when more people are present, because everyone assumes someone else will act.",
      terms: [
        ["Mere exposure effect", "Repeated exposure increases liking."],
        ["Superordinate goals", "Shared goals that require groups to cooperate."],
        ["Diffusion of responsibility", "Feeling less personal responsibility when others are present."],
      ],
    },
    {
      title: "Psychodynamic and humanistic personality theories",
      simple: "Freud focused on unconscious conflicts; humanists focused on growth and self-concept.",
      detail: "Freud: id (pleasure), ego (reality), superego (morality). Defense mechanisms reduce anxiety: repression, denial, projection, displacement, reaction formation, rationalization, sublimation, regression. Projective tests (Rorschach, TAT) try to reveal the unconscious. Humanists: Maslow's self-actualization and Rogers' unconditional positive regard, genuineness and empathy.",
      hook: "Displacement = kick the dog. Projection = \"YOU'RE the one who's angry.\"",
      trap: "Projective tests have low reliability and validity. Expect them as the example of weak measurement.",
      terms: [
        ["Defense mechanism", "Unconscious strategy the ego uses to reduce anxiety."],
        ["Reaction formation", "Expressing the opposite of one's true unacceptable feelings."],
        ["Unconditional positive regard", "Rogers' attitude of total acceptance toward another person."],
      ],
    },
    {
      title: "Trait and social-cognitive personality theories",
      simple: "Trait theories describe stable characteristics; social-cognitive theories stress how people and situations interact.",
      detail: "The Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism (emotional stability), measured by personality inventories like the MMPI (empirically derived). Bandura's reciprocal determinism: behavior, internal factors and environment influence each other. Locus of control: internal vs. external (Rotter).",
      trap: "Traits predict AVERAGE behavior across many situations well, but single situations poorly. The situation matters too.",
      terms: [
        ["Big Five", "Openness, conscientiousness, extraversion, agreeableness, neuroticism."],
        ["Reciprocal determinism", "Behavior, personal factors and environment all influence each other."],
        ["Locus of control", "Belief that outcomes are controlled internally or by outside forces."],
      ],
    },
    {
      title: "Theories of motivation",
      simple: "People are driven by biological needs, arousal levels, incentives and higher-level goals.",
      detail: "Drive-reduction theory: needs create drives that push us to restore homeostasis. Arousal theory: we seek an optimal arousal level (Yerkes-Dodson: moderate arousal is best, lower for hard tasks). Incentive theory: external rewards pull us. Maslow's hierarchy: physiological needs first, self-actualization last. Intrinsic vs. extrinsic motivation; the overjustification effect. Hunger involves ghrelin (hunger), leptin (fullness) and the hypothalamus.",
      trap: "The overjustification effect: rewarding something a person already enjoys can REDUCE their intrinsic motivation.",
      terms: [
        ["Drive-reduction theory", "Physiological needs create drives that motivate us to meet them."],
        ["Overjustification effect", "Extrinsic rewards undermine intrinsic motivation."],
        ["Ghrelin", "Hormone secreted by an empty stomach that triggers hunger."],
      ],
    },
    {
      title: "Theories of emotion",
      simple: "Theories disagree about whether body changes come before, with, or after the feeling.",
      detail: "James-Lange: body arousal comes first, then the emotion. Cannon-Bard: arousal and emotion happen at the same time. Schachter-Singer two-factor: arousal plus a cognitive label. Zajonc and LeDoux: some emotions happen before thought (a fast amygdala pathway); Lazarus: appraisal comes first. Facial expressions of basic emotions are largely universal (Ekman); display rules vary by culture. The facial feedback effect: expressions can influence feelings.",
      hook: "James-Lange: \"I'm trembling, so I'm afraid.\" Two-factor: \"I'm aroused, and the situation says it's fear.\"",
      trap: "Two-factor theory requires BOTH arousal and a label. The same arousal can become fear or excitement depending on the label.",
      terms: [
        ["James-Lange theory", "Emotion is our awareness of physiological responses to a stimulus."],
        ["Two-factor theory", "Emotion requires physical arousal and a cognitive label."],
        ["Display rules", "Cultural norms about when and how to show emotions."],
      ],
    },
  ],
  4: [
    {
      title: "Positive psychology and coping",
      simple: "Psychologists also study what helps people thrive and handle stress.",
      detail: "Positive psychology studies well-being, strengths and flow. Problem-focused coping tackles the stressor directly; emotion-focused coping manages the reaction. Social support, exercise, optimism, and a sense of control buffer stress. Type A personalities (competitive, hostile) have higher heart-disease risk, driven mainly by hostility. Posttraumatic growth can follow adversity.",
      trap: "Problem-focused coping is best when you CAN change the situation; emotion-focused coping helps when you can't.",
      terms: [
        ["Problem-focused coping", "Reducing stress by changing the stressor or how we interact with it."],
        ["Flow", "Complete, focused involvement in an activity."],
        ["Type A personality", "Competitive, hard-driving, impatient; hostility raises heart-disease risk."],
      ],
    },
    {
      title: "Anxiety, obsessive-compulsive and trauma disorders",
      simple: "These disorders involve persistent fear, intrusive thoughts, or lasting reactions to trauma.",
      detail: "Generalized anxiety disorder: persistent, unfocused worry. Panic disorder: sudden panic attacks and fear of the next one. Specific phobias and social anxiety disorder: intense, irrational fears. OCD: unwanted obsessions and repetitive compulsions. PTSD: flashbacks, avoidance, and hyperarousal after trauma. Learning (conditioning, observational learning) and biology (an overactive amygdala) both contribute.",
      trap: "OCD is classified separately from anxiety disorders in the DSM-5. The obsession is the THOUGHT; the compulsion is the ACTION.",
      terms: [
        ["Panic disorder", "Recurrent, unexpected panic attacks and worry about future attacks."],
        ["Obsessive-compulsive disorder", "Unwanted repetitive thoughts and/or actions."],
        ["PTSD", "Lasting flashbacks, avoidance and hyperarousal after trauma."],
      ],
    },
    {
      title: "Mood, dissociative, personality and eating disorders",
      simple: "Other categories involve extreme moods, splits in awareness, rigid traits, or disordered eating.",
      detail: "Major depressive disorder: two or more weeks of depressed mood or loss of pleasure. Bipolar disorder: alternating depression and mania. Dissociative identity disorder: two or more distinct identities (controversial). Personality disorders: enduring maladaptive patterns, e.g. antisocial (no conscience) and borderline. Eating disorders: anorexia nervosa (restriction, significantly low weight) and bulimia nervosa (binge-purge cycles, often normal weight).",
      trap: "Dissociative identity disorder is NOT schizophrenia. Schizophrenia means a split from reality, not a split personality.",
      terms: [
        ["Bipolar disorder", "Mood disorder alternating between depression and mania."],
        ["Antisocial personality disorder", "Pattern of disregard for others and lack of conscience."],
        ["Anorexia nervosa", "Eating disorder of severe restriction and significantly low body weight."],
      ],
    },
    {
      title: "Psychotherapy approaches",
      simple: "Different therapies target the unconscious, thoughts, behaviors, or the whole person.",
      detail: "Psychodynamic: insight into unconscious conflicts (free association, dream analysis, interpreting resistance and transference). Humanistic: client-centered therapy with active listening and unconditional positive regard. Behavioral: exposure therapy, systematic desensitization, aversive conditioning, token economies. Cognitive: Beck's therapy for depression and Ellis' REBT challenge irrational thoughts. Group and family therapy treat people in context. The therapeutic alliance predicts success across approaches.",
      trap: "Insight therapies (psychodynamic, humanistic) aim to understand; behavior therapies change the behavior directly without needing insight.",
      terms: [
        ["Exposure therapy", "Treating anxiety by gradually or intensely confronting the feared thing."],
        ["Token economy", "Rewarding desired behavior with tokens exchangeable for privileges."],
        ["Active listening", "Echoing, restating and clarifying, as in client-centered therapy."],
      ],
    },
    {
      title: "Biomedical therapies",
      simple: "Medications and brain-based treatments change the biology behind disorders.",
      detail: "Antipsychotics block dopamine receptors (long-term use can cause tardive dyskinesia). Antianxiety drugs (benzodiazepines) enhance GABA. Antidepressants (SSRIs) increase available serotonin. Lithium stabilizes bipolar mood swings. Electroconvulsive therapy (ECT) helps severe, treatment-resistant depression. Transcranial magnetic stimulation (TMS) and, rarely, psychosurgery are other options.",
      trap: "Match the drug to the neurotransmitter: antipsychotics ↔ dopamine, SSRIs ↔ serotonin, benzodiazepines ↔ GABA.",
      terms: [
        ["Antipsychotic drugs", "Medications that block dopamine to reduce psychotic symptoms."],
        ["Lithium", "Mood stabilizer used for bipolar disorder."],
        ["Electroconvulsive therapy", "Brief electric current through the brain to treat severe depression."],
      ],
    },
  ],
};
