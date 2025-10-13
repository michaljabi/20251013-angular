import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji';


export const remarkProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm )
  .use(remarkGemoji);
