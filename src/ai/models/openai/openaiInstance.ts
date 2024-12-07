import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  // custom settings, e.g.
  baseURL: process.env.OPENAI_API_BASE_URL || "https://api.openai.com/v1",
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
});

export {openai}