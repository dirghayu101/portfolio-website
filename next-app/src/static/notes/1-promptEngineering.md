# Prompt Engineering

## Different models specializes in different stuff, where do you keep track of them all?

- lmarena.ai
- scale.com/leaderboard

## Understanding Pre-training and post training

- To put it simply pre-training is the phase where you have a set of data upon which the model is trained. This phase is the most expensive part.
- Let's say the pre-training dataset had data before March 2025 then the model doesn't have knowledge about events after March 2025.
- Post-training is where we give models persona, here we train them on how to respond to user query, how to format their responses to be helpful.
- The response is generated based on probability and statistics and in pre training we fine tune the model to have better parameters.
- The dataset used in pre-training is collected from the internet. Why does it matter? Because if something has more frequent occurrence in the dataset the LLM's response are likely to be more precise if your queries are related to that. On the other hand if something is more obscure or recent the dataset likely wouldn't have any training against that.

## Understanding tokens, Context Window and Hallucination

- Hallucination is when a tool provides outputs that are inconsistent, incorrect or even nonsensical. 

## Mental model to understand this in context to prompt engineering

- When you are writing a prompt think of it as entering your prompt in a context window, which is like a parameter in a function call. More on function call later.
- The context window stores what you requested and what LLM responded previously to you as well.
- This function call will cause LLM to processing this context window against the pre training dataset and generate the response.
- LLM predict probabilities for what the next token could be. Temperature, top-K and top-P are some configuration options that you can provide to determine how predicted token probabilities are processed.
- This is crucial to consider to understand the pitfalls of LLMs.

## LLM configuration options

- Temperature: Controls the degree of randomness in token selection. Lower temperature are good for prompts with a deterministic response. Higher temperatures creates more random responses.
- Top-K and Top-P: Restrict the predicted next token to come from tokens with the top predicted probabilities.
- If you want creative result, start with the temperature of .9, top-P of .99 and top-K of 40. If you want more deterministic result, start with the temperature of .1, top-P of of .9 and top-K of 40.

## Pointers

- If you are interacting with a model in a chat, you are gonna have a token window with context of that entire chat. When you start a new chat, this wipes the token window and you start writing in a new token window.
- When we are interacting with a model, we are putting our query in a context window and the model processes this window against the pre-trained dataset it has. Based on this always start a new context window when you are switching topics, this means starting a new chat if you are in the mobile or web application.
- A lot of recent data won't be available to LLM because it is not part of their pre training data set, to solve this issue models have search functionality which makes them search the internet to get recent data and put it in the context window.
- Thinking functionality: This functionality was first introduced by deep seek in their research paper. You probably don't need it if you are doing something where you don't need critical thinking like coding, debugging or similar stuff.
- Deep Research: 
- Artifacts: You can use them to generate custom application for your use case. Like maybe you wants an application that tests you on flashcards, or visual diagram of some concepts. Claude can create custom artifacts to meet your requirement.

## Tips and considerations for writing effective prompts

- Clear Instructions: Your prompts shouldn't be ambiguous. Be specific, if you are asking LLM to build a website try to make your prompt deterministic like use this tool, this version of it, etc.
- Adopting a persona: Consider adding a persona to your prompt. Example:

``` text
You are a professional editor with years of experience. Your task is to improve writing while preserving the writer’s authentic voice and tone. Follow these steps when editing:

1. Clarity & Flow – Remove awkward phrasing, redundancies, or clunky sentences so the text reads smoothly.

2. Grammar & Mechanics – Correct grammar, spelling, and punctuation without over-formalizing.

3. Tone Preservation – Keep the natural rhythm and personality of the writer’s voice intact.

4. Word Choice – Replace weak or repetitive words with stronger, more precise alternatives where it enhances readability.

5. Conciseness – Eliminate unnecessary filler while keeping nuance and meaning.

Now, proofread and edit the following text using these principles.
```

- **Meta Prompting**  Use LLMs to make your prompts better. Ask LLMs which all details they require from you to do the task well. Example:

```text
I want you to write me a cover letter. Before you do, give me a full list of the information you’ll need from me to make it strong.
```

- Use few-shot learning. Give examples of the desired input-output pairs before along with the actual prompt.

- 5 components of a prompt: Task, Context, References, Evaluate and Iterate.
- Separate the prompt into shorter sentences. Add constraints to get better results.

- **Prompt Chaining** 

- Chain of thought prompting

- Tree of thought prompting

- Zero Shot prompting: No example. 
- One Shot and few shot prompting
- System Contextual and role prompting: System prompting sets the overall context and purpose for the language model. Contextual prompting provides context to the current conversation. Role prompting assigns an identity or a specific character for the language model to adopt.
- Step back prompting
- 

## References

- [Andrej Karpathy's How I use LLMs?](https://youtu.be/EWvNQjAaOHw?si=4qQJVT2JP1fv7p86)
- [A web resource with collection of prompts - gptbot](https://gptbot.io/)
- [A github repository with prompts that work](https://github.com/f/awesome-chatgpt-prompts/blob/main/prompts.csv)
- [Another web resource with prompts - allprompts](https://allprompts.com/chatgpt-prompts/)
- [Over 2500 ChatGPT prompt template](https://ignacio-velasquez.notion.site/2-500-ChatGPT-Prompt-Templates-d9541e901b2b4e8f800e819bdc0256da)
- [Prompt engineering ebook by Lee Bonstra](https://gptaiflow.com/assets/files/2025-01-18-pdf-1-TechAI-Goolge-whitepaper_Prompt%20Engineering_v4-af36dcc7a49bb7269a58b1c9b89a8ae1.pdf)
- [Open AI's guide on prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
