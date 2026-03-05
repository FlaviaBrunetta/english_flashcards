const flashcards = [
            {
                category: "Introductions",
                phrase: "Nice to meet you!",
                situation: "When meeting someone for the first time",
                translation: "A polite greeting when you meet someone new (Uma forma educada de cumprimentar alguém pela primeira vez)",
                example: "Hi, I'm Sarah from the design team. Nice to meet you!"
            },
            {
                category: "Introductions",
                phrase: "What brings you here?",
                situation: "Starting a conversation",
                translation: "Asking why someone came to the event (Perguntando por que alguém veio ao evento)",
                example: "I'm really interested in AI development. What brings you here?"
            },
            {
                category: "Introductions",
                phrase: "What do you do?",
                situation: "Asking about someone's job",
                translation: "Asking about their profession or work (Perguntando sobre sua profissão ou trabalho)",
                example: "What do you do? — I'm a software engineer at a startup."
            },
            {
                category: "Small Talk",
                phrase: "How's it going?",
                situation: "Casual greeting",
                translation: "Informal way to ask how someone is doing (Forma informal de perguntar como alguém está)",
                example: "Hey! How's it going? — Pretty good, thanks! You?"
            },
            {
                category: "Small Talk",
                phrase: "That's interesting!",
                situation: "Showing engagement",
                translation: "Expressing genuine interest in what they said (Expressando interesse genuíno no que eles disseram)",
                example: "I work on machine learning for healthcare. — That's interesting! Tell me more."
            },
            {
                category: "Small Talk",
                phrase: "I see what you mean",
                situation: "Understanding someone's point",
                translation: "Showing you understand their perspective (Mostrando que você entende a perspectiva deles)",
                example: "Remote work has its challenges. — I see what you mean, communication can be tough."
            },
            {
                category: "Networking",
                phrase: "Let's stay in touch",
                situation: "Ending a conversation positively",
                translation: "Suggesting you continue contact in the future (Sugerindo que você continue o contato no futuro)",
                example: "This was great! Let's stay in touch. Here's my LinkedIn."
            },
            {
                category: "Networking",
                phrase: "Can I get your contact?",
                situation: "Exchanging information",
                translation: "Asking for their email, LinkedIn, or phone number (Perguntando por seu email, LinkedIn ou número de telefone)",
                example: "I'd love to continue this conversation. Can I get your contact?"
            },
            {
                category: "Networking",
                phrase: "Feel free to reach out",
                situation: "Offering to help or connect later",
                translation: "Inviting them to contact you anytime (Convidando-os a contatar você a qualquer momento)",
                example: "If you have any questions about our platform, feel free to reach out!"
            },
            {
                category: "Discussion",
                phrase: "I'd love to hear your thoughts",
                situation: "Inviting someone's opinion",
                translation: "Asking for their perspective or ideas (Perguntando por sua perspectiva ou ideias)",
                example: "We're thinking about this approach. I'd love to hear your thoughts."
            },
            {
                category: "Discussion",
                phrase: "That makes sense",
                situation: "Agreeing or understanding",
                translation: "Showing that you understand and agree with something (Mostrando que você entende e concorda com algo)",
                example: "We prioritize user experience first. — That makes sense for a B2C product."
            },
            {
                category: "Discussion",
                phrase: "Could you elaborate?",
                situation: "Asking for more details",
                translation: "Requesting more information or explanation (Solicitando mais informações ou explicação)",
                example: "We use a hybrid model. — Interesting! Could you elaborate on that?"
            },
            {
                category: "Polite Phrases",
                phrase: "Excuse me",
                situation: "Getting someone's attention politely",
                translation: "Polite way to interrupt or get attention (Forma educada de interromper ou chamar atenção)",
                example: "Excuse me, is this seat taken?"
            },
            {
                category: "Polite Phrases",
                phrase: "I appreciate it",
                situation: "Thanking someone",
                translation: "Expressing gratitude (more formal than 'thanks') (Expressando gratidão (mais formal que 'thanks'))",
                example: "Thanks for the introduction! I really appreciate it."
            },
            {
                category: "Polite Phrases",
                phrase: "No worries",
                situation: "Responding to an apology",
                translation: "Informal way to say 'it's okay' or 'don't worry about it' (Forma informal de dizer 'tudo bem' ou 'não se preocupe com isso')",
                example: "Sorry I'm late! — No worries, we just started."
            },
            {
                category: "Clarification",
                phrase: "Sorry, I didn't catch that",
                situation: "When you didn't hear clearly",
                translation: "Asking someone to repeat what they said (Perguntando para alguém repetir o que eles disseram)",
                example: "Sorry, I didn't catch that. Could you say it again?"
            },
            {
                category: "Clarification",
                phrase: "What do you mean by...?",
                situation: "Asking for clarification",
                translation: "Requesting explanation of a specific term or concept (Solicitando explicação de um termo ou conceito específico)",
                example: "What do you mean by 'edge computing'? I'm not familiar with that."
            },
            {
                category: "Clarification",
                phrase: "Just to clarify...",
                situation: "Making sure you understood correctly",
                translation: "Confirming your understanding of something (Confirmando sua compreensão de algo)",
                example: "Just to clarify, you're saying the launch is next month?"
            },
            {
                category: "Opinions",
                phrase: "In my opinion...",
                situation: "Sharing your view",
                translation: "Introducing your personal perspective or belief (Introduzindo sua perspectiva ou crença pessoal)",
                example: "In my opinion, cloud security is the biggest challenge right now."
            },
            {
                category: "Opinions",
                phrase: "I'm not sure about that",
                situation: "Politely disagreeing",
                translation: "Expressing doubt or disagreement diplomatically (Expressando dúvida ou discordância de forma diplomática)",
                example: "I'm not sure about that approach. Have you considered the cost?"
            },
            {
                category: "Conversation Flow",
                phrase: "By the way...",
                situation: "Changing topics smoothly",
                translation: "Introducing a new or related topic (Introduzindo um novo ou tópico relacionado)",
                example: "That's a great point. By the way, are you attending the workshop tomorrow?"
            },
            {
                category: "Conversation Flow",
                phrase: "Speaking of which...",
                situation: "Connecting to something just mentioned",
                translation: "Referring back to a related topic (Referindo-se a um tópico relacionado)",
                example: "The AI panel was great. Speaking of which, did you catch the keynote?"
            },
            {
                category: "Ending Conversations",
                phrase: "It was great talking to you",
                situation: "Polite way to end a conversation",
                translation: "Expressing enjoyment before leaving (Expressando prazer antes de sair)",
                example: "I should get going, but it was great talking to you!"
            },
            {
                category: "Ending Conversations",
                phrase: "I'll let you go",
                situation: "Acknowledging it's time to end the chat",
                translation: "Politely suggesting the conversation should end (Sugerindo educadamente que a conversa deve terminar)",
                example: "I know you're busy, so I'll let you go. Thanks for chatting!"
            },
            {
                category: "Common Responses",
                phrase: "Sounds good!",
                situation: "Agreeing enthusiastically",
                translation: "Expressing agreement or approval (Expressando concordância ou aprovação)",
                example: "Should we grab coffee after this session? — Sounds good!"
            },
            {
                category: "Common Responses",
                phrase: "Absolutely!",
                situation: "Strong agreement",
                translation: "Emphatic yes or strong agreement (Sim enfático ou concordância forte)",
                example: "Is cybersecurity important for startups? — Absolutely!"
            },
            {
                category: "Common Responses",
                phrase: "Fair enough",
                situation: "Accepting someone's point",
                translation: "Acknowledging their perspective is reasonable (Reconhecendo que sua perspectiva é razoável)",
                example: "I prefer Python for data science. — Fair enough, it's popular for a reason."
            },
            {
                category: "Professional",
                phrase: "I work in...",
                situation: "Describing your field",
                translation: "Explaining your industry or sector (Explicando sua indústria ou setor)",
                example: "I work in fintech, specifically payment processing."
            },
            {
                category: "Professional",
                phrase: "I'm currently working on...",
                situation: "Describing your current project",
                translation: "Talking about your present work or focus (Falando sobre seu trabalho ou foco atual)",
                example: "I'm currently working on a mobile app for language learning."
            },
            {
                category: "Professional",
                phrase: "We specialize in...",
                situation: "Describing company focus",
                translation: "Explaining what your company does best (Explicando o que sua empresa faz melhor)",
                example: "We specialize in cloud infrastructure for healthcare companies."
            }
];
    