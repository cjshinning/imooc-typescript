// ts -> .d.ts 翻译文件 @types/superagent -> js

import superagent from 'superagent';

class Crawller {
  private secret = 'x3b174jsx';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = '';

  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.rawHtml = result.text;
  }

  constructor() {
    this.getRawHtml();
  }
}

const crawller = new Crawller();
