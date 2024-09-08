import { Hono } from 'hono';
import { helloWorld } from './util';

const app = new Hono()

app.get('/', (c) => {
  const text = helloWorld()
  return c.text(text)
})

export default app
