export async function handler(event, context) {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    try {
      const formData = JSON.parse(event.body);
      console.log('Form data:', formData);
  
      // Here, you can integrate with a database, send an email, etc.
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submission successful' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  }
  