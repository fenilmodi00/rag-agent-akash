import { createOpenAI } from '@ai-sdk/openai';
import dotenv from 'dotenv';
dotenv.config();

async function testApiConnection() {
  try {
    const client = createOpenAI({
      apiKey: process.env.AKASH_CHAT_API_KEY!,
      baseURL: 'https://chatapi.akash.network/api/v1',
    });

    // Test the models endpoint
    const response = await fetch('https://chatapi.akash.network/api/v1/models', {
      headers: {
        Authorization: `Bearer ${process.env.AKASH_CHAT_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('API Connection Test Results:');
    console.log('Status:', response.status);
    console.log('Available Models:', data.data?.length || 0);
    console.log('First Model:', data.data?.[0]?.id);

    // Test embeddings endpoint
    const embeddingResponse = await fetch('https://chatapi.akash.network/api/v1/embeddings', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AKASH_CHAT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.AKASHCHAT_EMBEDDING_MODEL || 'BAAI-bge-large-en-v1-5',
        input: 'Test embedding generation',
      }),
    });

    if (!embeddingResponse.ok) {
      throw new Error(`Embedding request failed with status ${embeddingResponse.status}`);
    }

    const embeddingData = await embeddingResponse.json();
    console.log('\nEmbedding Test Results:');
    console.log('Status:', embeddingResponse.status);
    console.log('Embedding Length:', embeddingData.data?.[0]?.embedding?.length || 0);

  } catch (error) {
    console.error('API Test Error:', error);
    if (error instanceof Error) {
      console.error('Error Details:', {
        message: error.message,
        stack: error.stack,
      });
    }
  }
}

testApiConnection(); 