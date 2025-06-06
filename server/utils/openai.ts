import OpenAI from 'openai';

const config = useRuntimeConfig();

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const assistant = 'asst_A5iy1FwUN1B84JuIQ7DqZG0z';
